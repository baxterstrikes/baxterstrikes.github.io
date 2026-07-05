---
title: "Trash Panda"
description: "Helping people create better recycling habits, one bit of trash at a time"
slug: trash-panda
category: coursework
color: salomie
hero: /assets/tp-hero-01.png
blob: /assets/blob-tp.png
screenshots:
  - /assets/tp-hero-01.png
  - /assets/tp-hero-02.png
  - /assets/tp-hero-03.png
---

### Project details

- We had 8 weeks to deliver a fully functional product
- The team included 2 designers, 4 data science partners, 4 developers, and 1 PM
- Provided with a Product Vision to expand

### Problem space

People don’t recycle enough to make an impact on our local and global ecology.

### Solution to explore

Make recycling accessible to everyone.

## Using research to refine how we can help

We anchored on Earth911 early. Their API could tell us, for any item in any ZIP code, whether it gets recycled, how, and who takes it — the informational spine everything else would hang from.

### Data we could expect from Earth911

- Specific item descriptions. Items included plastic bottles, engine parts, household cleaners, etc.
- Location-based information on how each item is disposed of or recycled in that area.
- Location-based information on specific disposal facilities that accept the item in question.

### Analyzing the current competition

The existing tools had done the hard data work and then buried it. Cluttered layouts, no explanation of what to do or why it mattered, interfaces years behind the people they hoped to reach. Good information, presented like a penance.

![Competitor search screen listing plastic recycling results in a plain text list](/assets/tp-01-01.png)

![Competitor item page for compostable plastic cutlery advising users to put it in the garbage](/assets/tp-01-02.png)

![Competitor cork disposal page crowded with stacked orange banners and dense text](/assets/tp-01-03.png)

## What could we build that promotes recycling?

We wanted the phone to do the work. What if you could point your camera at the thing in your hand and let the app decide what it is and where it goes — no taxonomy of plastics required?

### Key insights from user interviews

Any amount of inaccuracy in the image recognition causes a significant amount of distrust.

*5 of the 6 people we spoke to reported they would not use the product if the image recognition accuracy was below 80%.*

Motivation to recycle is present, yet people are hard-pressed to change their habits.

*People are motivated to recycle in a myriad of ways — just not motivated enough to study for it. The good intention is real; the homework never happens.*

### Users will need reliable fallbacks in lieu of perfect image recognition

So we designed for the miss, not just the hit: camera first, keyword and category search waiting right behind it. Whatever route you took, you were never more than 3 taps from the answer.

![User flow from taking a photo to the item information page, with keyword and category search fallbacks](/assets/user_flow_graphic_3.png)

## Continuously asking what works

This was my first time pair-designing, and we disagreed often — about direction, about emphasis, about whose instinct to trust. With 8 weeks on the clock, we couldn't afford to get stuck, so we built rules for disagreeing well.

### We both learned some important lessons during our collaboration

- When you deadlock, split up. An hour or two designing alone, then reconvene and compare. The best parts of two stubborn drafts usually assemble into something neither of us would have reached politely.
- Every decision needs a user-experience reason it can produce on demand. "I like it" is a mood, not a rationale.
- Be kind, and take breaks. If you truly can't see the reasoning behind your partner's idea, the next move is a question — not a veto.

### Home page progression

We started out unsure whether to lead with image recognition or category search. The answer turned out to be neither: keep the design spare and put all 3 paths — camera, keyword, category — on the landing page, and let the user pick their own door. You can see that resolve more clearly in the final designs below.

![Early home page wireframe stacking a camera option above two search-by-term blocks](/assets/tp-03-01.png)

![Grayscale home wireframe with keyword search bar and a camera button in the bottom nav](/assets/tp-03-02.png)

![High-fidelity green home screen combining keyword search, a photo category grid, and a camera button](/assets/tp-03-03.png)

![Home page iteration pairing keyword search with a line-icon category grid under an illustrated header](/assets/tp-04-01.png)

![Home page iteration with a dismissible Trash Panda welcome message above photo categories](/assets/tp-04-02.png)

![Later home page design with raccoon logo, search bar, and twelve photo category tiles](/assets/tp-04-03.png)

### Changes to the category search flow

Category search had one job: no friction. The live question was photos versus icons for representing items and materials — and testing answered it decisively in favor of photos. People recognize a battery; they decode a battery icon.

![Category search wireframe with placeholder tiles under a select-the-material prompt](/assets/tp-05-01.png)

![Category search iteration using photo thumbnails for materials like batteries, plastic, and paint](/assets/tp-05-02.png)

![Alkaline battery detail iteration highlighting recycle over landfill and compost options](/assets/tp-05-03.png)

### Progression of camera & results 

The flow had to stay this simple: take a picture, get a result. Behind that simplicity sat close work with the data science team — we couldn't promise the model would learn from user corrections, or that retaking a photo would change the verdict. So the design had to be honest about uncertainty instead of theatrical about intelligence.

![Camera wireframe telling users to center the item and clear the area before capture](/assets/tp-06-01.png)

![Result confirmation wireframe asking "Is this a crayon?" with approve and try again buttons](/assets/tp-06-02.png)

![Camera iteration with a framing guide over AA batteries held in a hand](/assets/tp-06-03.png)

![Results iteration asking "Is this a crayon?" beneath a captured photo of batteries](/assets/tp-07-01.png)

![Refined camera view with a centering tip overlaid on the live photo of batteries](/assets/tp-07-02.png)

![Result card sliding up to ask whether the photographed item is an alkaline battery](/assets/tp-07-03.png)

### Navigating through navigation styles

Navigation took several tries to earn its keep. Three destinations doesn't sound like a hard problem, but the bar was that you could always reach the camera without thinking about where you were.

![Navigation wireframe with search, camera, and menu icons in a bottom bar](/assets/tp-08-01.png)

![Batteries category screen testing back arrow and home icons as top navigation](/assets/tp-08-02.png)

![Battery type grid with a camera capture button docked in the bottom navigation bar](/assets/tp-08-03.png)

### Key insights from usability testing

Users were delighted by the image recognition feature.

*People had genuine fun with a recycling app, which I did not have on my bingo card. Average accuracy hovered at 55% across all items, and users were still impressed every time the model got one right — delight, it turns out, is calibrated to expectations, and nobody expects much from their trash.*

Users love being able to visually identify items during category search.

*Icons would have made a tidier design system; photos made a faster human. We optimized for speed of discovery and let cohesion take the loss.*

Users want more information at their fingertips.

*The feedback said this would genuinely change habits — and then asked for more: what the material actually is, why it resists recycling, who's working on making it recyclable. Give people one honest answer and they develop an appetite for the whole subject.*

## Final designs

We shipped a real, working app — not a prototype, a download. It lived in the world for years before support finally wound down, which is a longer life than most eight-week student builds get.

### Getting permissions without friction

Onboarding had to be quick and painless, and it also had to ask for location and camera access — two requests apps usually fumble. We earned each one by explaining what it bought you before asking.

![First onboarding screen introducing Trash Panda with an illustration of recycling bins](/assets/tp-09-01.png)

![Onboarding screen requesting location access to match local recycling regulations](/assets/tp-09-02.png)

![Onboarding screen explaining the snap-a-photo feature ahead of the camera permission](/assets/tp-09-03.png)

### A camera feature that helps users identify recyclables

After processing, the result arrives as a card sliding up from the bottom — minimal, legible, and obviously tappable for the full detail. The model does its guessing backstage; the user just sees an answer.

![Final camera screen with a centering tip over batteries held in an open hand](/assets/tp-10-01.png)

![Captured photo of AA batteries while the app loads recognition results](/assets/tp-10-02.png)

![Result card sliding up to identify the photographed item as an alkaline battery](/assets/tp-10-03.png)

### Category search helps engage more users

The realistic photos carried this flow. Users told us, repeatedly and without prompting, that pictures made it effortless to find the item they were holding.

![Final home screen with a take-a-photo card, search bar, and photo category grid](/assets/tp-11-01.png)

![Batteries category screen using realistic photos of each battery type](/assets/tp-11-02.png)

![Alkaline battery page reached from category search, with off-site recycle guidance](/assets/tp-11-03.png)

### Item information pages with proper visual hierarchy

Each item page answers at a glance: what is this, and what do I do with it. The one call to action — locate a recycling center near you — is the whole point of the app, so nothing on the page competes with it.

![Alkaline battery information page with off-site recycle graphic and locate centers button](/assets/tp-12-01.png)

![Aluminum beverage can information page marked recyclable, with a locate centers button](/assets/tp-12-02.png)

![Grass clippings information page recommending compost, with a locate centers button](/assets/tp-12-03.png)

## What I learned...

I got lucky in my collaborators — data scientists, developers, a design partner — and then we did the unglamorous work of deserving each other, iteration after iteration.

### Collaboration between disciplines

Working across skill sets is what put my own developing UX skills in context. I learned to explain the reasoning behind my design decisions in terms an engineer could act on — and, just as usefully, to translate their explanations back into constraints I could design with. Fluency in both directions is the actual job.

### Understanding limitations

Designs can look like magic right up until someone has to build them. The image model wasn't going to hit 80% because we wished it would, and the API only knew what it knew. Listening to the team about what was genuinely possible — then molding the design to that truth instead of resenting it — was a lesson I got to learn early, at student prices.

### The importance of the user

The biggest lesson: decide from data, not from the loudest voice in the room. We tested every iteration, and every test moved the design somewhere none of us would have taken it on instinct. Everybody has an opinion; the one that matters belongs to the person holding the trash.
