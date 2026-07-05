// Post-build: defer case-study screenshots. Markdown images render as plain
// <img> tags inside .prose; Astro 7's default Sätteri pipeline has no hook for
// adding attributes there without replacing the whole processor, so patch the
// built HTML instead. Template images (nav, hero, portrait) stay eager.
import { readFileSync, writeFileSync, globSync } from 'node:fs';

let files = 0;
let images = 0;
for (const file of globSync('dist/**/index.html')) {
  const html = readFileSync(file, 'utf8');
  const proseStart = html.indexOf('<div class="prose');
  if (proseStart === -1) continue;
  const patched =
    html.slice(0, proseStart) +
    html.slice(proseStart).replace(/<img (?![^>]*loading=)/g, () => {
      images++;
      return '<img loading="lazy" decoding="async" ';
    });
  if (patched !== html) {
    writeFileSync(file, patched);
    files++;
  }
}
console.log(`[lazy-images] deferred ${images} images across ${files} pages`);
