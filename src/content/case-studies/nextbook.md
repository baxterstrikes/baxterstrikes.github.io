---
title: "NextBook"
description: "Finding readers their next book before the to-be-read pile becomes load-bearing"
slug: nextbook
category: coursework
color: cornflower_lilac
hero: /assets/nb-hero-01.png
blob: /assets/blob-nb.png
screenshots:
  - /assets/nb-hero-01.png
---

### Problem space

Readers finish a book and stall out — choosing the next one is its own small crisis.

### Solution to explore

Curated recommendations built from what a reader actually loves and has actually read.

### Project details

- I had 2 weeks to deliver 2 key features
- I was provided with some design resources from the previous team
- My team included 2 developers and 3 data science partners

## Using research to find the highest value features

I inherited a pile of research from the previous team, so my first move was to actually read it — a courtesy previous-team research doesn't always receive. It split our potential users cleanly in two: book lovers perpetually hunting the next one, and people who wish they read more than they do.

### Key insights from user interviews

Book readers want to organize their books in personally meaningful ways.

*80% of the potential users use book tracking services to organize their books for the sole purpose of finding new books to read.*

People want motivation to reach their book reading goals.

*All of the potential users I spoke to wished they could read more books, and indicated they would want to challenge themselves to reach book reading goals.*

### From the previous design to the new

The original design's primary color made the product feel busy and dated — but the deeper problem wasn't ours to fix. Every screen of a book app is wallpapered in cover art: dozens of illustrations in clashing palettes and styles, none of which we chose. The competition all struggled with the same visual din.

![Original BetterReads design with green UI and mismatched book covers](/assets/nb-01-01.png)

### Making color work for us instead of against us

I tried new palettes on the old design first. Each one just added another voice to the argument. The real answer was almost monastic: bleed nearly all the color out of the UI itself, and let the covers be the loud ones — they were going to be anyway.

![Green color exploration applied to a book details screen](/assets/nb-02-01.png)

![Purple color exploration of the same book details screen](/assets/nb-02-02.png)

![Orange color exploration of the same book details screen](/assets/nb-02-03.png)

## Helping book lovers the best way we can

The data kept pointing the same direction: recommendations are the product, everything else is furniture. Users wanted their next book fast, and they wanted it chosen for them, personally.

I stayed in low fidelity as long as I could get away with — during testing, I needed people reacting to the interactions, not to whichever cover illustration happened to be shouting nearby.

### Book recommendations right at home

My first iteration tried to show the user a snapshot of their entire account. It was busy, incoherent, and wrong. So I cut everything that didn't serve the primary problem — find the next book — and borrowed shamelessly from Netflix: horizontal shelves you scroll sideways.

![Low-fidelity home page wireframe with recommendation rows and collection grids](/assets/nb-03-01.png)

![Home page wireframe adding a reading goals progress panel](/assets/nb-03-02.png)

![Home page wireframe with horizontal scrolling recommendation carousels and goal progress](/assets/nb-03-03.png)

### Key insights from home page usability tests

Users loved the idea of book reading goals on the home page.

*Every user tested wanted their goal progress displayed on the home page. People don't just tolerate a little pressure toward their reading goals — they request it.*

Users want to know why we are recommending certain books.

*Onboarding collects preferred genres to seed each personal recommendation model — so the model always knows why it's suggesting a book. Users wanted in on that reasoning. A recommendation with no "because" reads as an ad.*

### Private collections and personal notes

I was sure users would want to write private notes on their books. They did not. What they wanted was to sort books into private collections with tags — organizing as its own quiet pleasure. I'd designed for the reader I imagined instead of the ones in front of me, and the interviews corrected me quickly.

With notes gone and the recommendations settled, there was suddenly room to blow the cover art up huge — which hands every book details page a ready-made identity. The publishers did the art direction; I just stopped crowding it.

![Book details wireframe with private notes panel and related books](/assets/nb-04-01.png)

![Book details wireframe replacing notes with collection info and a tag](/assets/nb-04-02.png)

![Book details wireframe with enlarged book cover and personal tags](/assets/nb-04-03.png)

### Key insights from book details usability tests

Users want relevant information and literally nothing else.

*People conceived of a book details page in surprisingly different ways — a few wanted everything, but most wanted a spare view focused on one act: adding the book to their collections.*

Related books and recommended books mean the same thing to users.

*This one surprised me. To me, "related" is taxonomy — same author, same series, same universe — while a recommendation model weighs those and a dozen subtler signals. To users, both just mean "books I might like." The distinction I cared about was mine, not theirs, so it didn't belong in the interface.*

### How do readers want their book collections displayed?

The moment real covers entered the high-fidelity designs, a navigation problem surfaced: the profile page was trying to be two things at once. I split it — a proper page for private collections, and a modal for the user profile (both visible in the final designs below).

![Collections page iteration showing flat side-by-side cover pairs](/assets/nb-05-01.png)

![Collections page iteration with overlapping book cover previews](/assets/nb-05-02.png)

![Collections page iteration with 3D stacked book covers](/assets/nb-05-03.png)

### Key feedback from preference testing the collections view

Users thought the stacking of the books created an attention-grabbing feature.

*Peers and advisors called the flat cards and the 3D stacks equally acceptable — which is preference-testing for "we have no strong feelings." Users did: the 3D stack looked like books, and a shelf you'd want to touch beat a grid you'd merely approve of.*

## Final designs

### Home is where recommendations are the most important

The home page does one thing with conviction: recommendations own the entire lower half. Up top, the "Up next" collection makes starting your next book a single decision instead of a browse.

![Final NextBook home page with recommendation shelves and reading goal progress](/assets/nb-06-01.png)

### Making space for more valuable features by creating a profile modal

Moving the user details into a modal cost nothing and bought the collections page its whole clean slate. Some of the best layout decisions are just evictions.

![Final profile modal with user details over a dimmed home page](/assets/nb-07-01.png)

### Making collections delightful and practical

The 3D stacks survived contact with real users: intriguing enough to draw the eye, restrained enough not to hijack the page. Delight that pays rent.

![Final collections page with 3D book stacks and genre list](/assets/nb-08-01.png)

### Book details & enabling users to add books to private collections

The book details page, where any book can be added to any collection. The tag-style controls were the users' idea — a pattern they already knew from everywhere else, doing exactly what they expected. I know better than to argue with that.

![Final book details page with large cover, rating, and collection tags](/assets/nb-09-01.png)

## What I learned...

This was my first project designed purely for desktop — and my first real lesson in what working alone actually costs.

### How to break my tendency to design myself into a box I can't get out of.

I went in excited to design solo, on the theory that more people means more delay. I could not have been more wrong. Alone, I burrowed into details too early, stalled at every fork, and watched my creativity flatten — no one to argue with, so no argument to sharpen against. Collaboration isn't overhead on the process. It is the process, and that includes other designers, not just your developers.

### Don't get spooked by a due date.

Week 3, still wireframing, delivery due at the end of week 4. The doubt arrived on schedule — about my decisions, my process, my pace. What I learned is that the wobble is part of the work, not a verdict on it: hold your pacing, finish the thinking, then sprint the ending. I pulled it together fast at the close, and the project landed whole.
