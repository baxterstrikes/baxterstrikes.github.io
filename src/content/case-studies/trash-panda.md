---
title: "Trash Panda"
description: "Point your camera at trash. Learn what to do with it."
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

We anchored on Earth911 early. Their API covers, for any item in any ZIP code, whether it gets recycled, how, and who takes it. Everything else could build on that.

### Data we could expect from Earth911

- Specific item descriptions. Items included plastic bottles, engine parts, household cleaners, etc.
- Location-based information on how each item is disposed of or recycled in that area.
- Location-based information on specific disposal facilities that accept the item in question.

### Analyzing the current competition

The existing tools had the data and buried it — cluttered, unexplained, years out of date. Good information, hard to want.

![Competitor search screen listing plastic recycling results in a plain text list](/assets/tp-01-01.png)

![Competitor item page for compostable plastic cutlery advising users to put it in the garbage](/assets/tp-01-02.png)

![Competitor cork disposal page crowded with stacked orange banners and dense text](/assets/tp-01-03.png)

## What could we build that promotes recycling?

We wanted the phone to do the work: point the camera at the thing in your hand, and let the app say what it is and where it goes.

### Key insights from user interviews

Any amount of inaccuracy in the image recognition causes a significant amount of distrust.

*5 of the 6 people we spoke to would not use the product if image recognition accuracy fell below 80%.*

Motivation to recycle is present, yet people are hard-pressed to change their habits.

*People want to recycle. They don’t want to study for it.*

### Users will need reliable fallbacks in lieu of perfect image recognition

So we designed for the miss: camera first, keyword and category search right behind it. Whatever the route, you're never more than 3 taps from an answer.

![User flow from taking a photo to the item information page, with keyword and category search fallbacks](/assets/user_flow_graphic_3.png)

## Continuously asking what works

This was my first time pair-designing. We disagreed often, and with 8 weeks on the clock we couldn't afford to stay stuck — so we made rules for disagreeing.

### We both learned some important lessons during our collaboration

- When you deadlock, split up. An hour designing alone, then reconvene and take the best of both drafts.
- Every decision needs a user-experience reason. "I like it" isn't one.
- Be kind, take breaks. If you can't see your partner's reasoning, ask before you veto.

### Home page progression

We started unsure whether to lead with image recognition or category search. The answer was neither: keep the page spare and offer all 3 paths — camera, keyword, category. The final designs below show where that landed.

![Early home page wireframe stacking a camera option above two search-by-term blocks](/assets/tp-03-01.png)

![Grayscale home wireframe with keyword search bar and a camera button in the bottom nav](/assets/tp-03-02.png)

![High-fidelity green home screen combining keyword search, a photo category grid, and a camera button](/assets/tp-03-03.png)

![Home page iteration pairing keyword search with a line-icon category grid under an illustrated header](/assets/tp-04-01.png)

![Home page iteration with a dismissible Trash Panda welcome message above photo categories](/assets/tp-04-02.png)

![Later home page design with raccoon logo, search bar, and twelve photo category tiles](/assets/tp-04-03.png)

### Changes to the category search flow

The open question was photos versus icons for items and materials. Testing settled it: people recognize a photo of a battery faster than a battery icon.

![Category search wireframe with placeholder tiles under a select-the-material prompt](/assets/tp-05-01.png)

![Category search iteration using photo thumbnails for materials like batteries, plastic, and paint](/assets/tp-05-02.png)

![Alkaline battery detail iteration highlighting recycle over landfill and compost options](/assets/tp-05-03.png)

### Progression of camera & results 

The flow stayed simple — take a picture, get a result — but it took close work with the data science team. We couldn't promise the model would learn from corrections, or that a retake would change the verdict. The design had to be honest about what the model didn't know.

![Camera wireframe telling users to center the item and clear the area before capture](/assets/tp-06-01.png)

![Result confirmation wireframe asking "Is this a crayon?" with approve and try again buttons](/assets/tp-06-02.png)

![Camera iteration with a framing guide over AA batteries held in a hand](/assets/tp-06-03.png)

![Results iteration asking "Is this a crayon?" beneath a captured photo of batteries](/assets/tp-07-01.png)

![Refined camera view with a centering tip overlaid on the live photo of batteries](/assets/tp-07-02.png)

![Result card sliding up to ask whether the photographed item is an alkaline battery](/assets/tp-07-03.png)

### Navigating through navigation styles

Three destinations, one requirement: the camera reachable from anywhere, without thought. It took several tries.

![Navigation wireframe with search, camera, and menu icons in a bottom bar](/assets/tp-08-01.png)

![Batteries category screen testing back arrow and home icons as top navigation](/assets/tp-08-02.png)

![Battery type grid with a camera capture button docked in the bottom navigation bar](/assets/tp-08-03.png)

### Key insights from usability testing

Users were delighted by the image recognition feature.

*Average accuracy was 55%, and people were still impressed every time the model got one right. Nobody expects much from their trash.*

Users love being able to visually identify items during category search.

*Icons would have been more cohesive; photos were faster. We chose speed.*

Users want more information at their fingertips.

*People asked for more — what the material is, why it resists recycling, who's working on that. One good answer creates appetite for the next.*

## Final designs

We shipped a working app. It stayed downloadable for years, until support wound down.

### Getting permissions without friction

Onboarding needed location and camera access. Each screen explains what the permission buys before asking for it.

![First onboarding screen introducing Trash Panda with an illustration of recycling bins](/assets/tp-09-01.png)

![Onboarding screen requesting location access to match local recycling regulations](/assets/tp-09-02.png)

![Onboarding screen explaining the snap-a-photo feature ahead of the camera permission](/assets/tp-09-03.png)

### A camera feature that helps users identify recyclables

After processing, the result slides up as a card — minimal, legible, tappable for the full detail.

![Final camera screen with a centering tip over batteries held in an open hand](/assets/tp-10-01.png)

![Captured photo of AA batteries while the app loads recognition results](/assets/tp-10-02.png)

![Result card sliding up to identify the photographed item as an alkaline battery](/assets/tp-10-03.png)

### Category search helps engage more users

The photos carried this flow. Users said so, unprompted.

![Final home screen with a take-a-photo card, search bar, and photo category grid](/assets/tp-11-01.png)

![Batteries category screen using realistic photos of each battery type](/assets/tp-11-02.png)

![Alkaline battery page reached from category search, with off-site recycle guidance](/assets/tp-11-03.png)

### Item information pages with proper visual hierarchy

Each item page answers two questions at a glance: what is this, and what do I do with it. The single call to action — locate a recycling center — is the point of the app, so nothing competes with it.

![Alkaline battery information page with off-site recycle graphic and locate centers button](/assets/tp-12-01.png)

![Aluminum beverage can information page marked recyclable, with a locate centers button](/assets/tp-12-02.png)

![Grass clippings information page recommending compost, with a locate centers button](/assets/tp-12-03.png)

## What I learned...

This was my first real collaboration across disciplines. Three lessons stuck.

### Collaboration between disciplines

Working alongside data science and engineering taught me to explain design reasoning in terms others can act on — and to translate their constraints back into design. Fluency in both directions is the job.

### Understanding limitations

Designs look like magic until someone has to build them. The model wasn't going to hit 80% because we wished it would. The discipline was listening to what was actually possible, then designing to that.

### The importance of the user

Decide from data. Every test moved the design somewhere instinct wouldn't have taken it. Everybody has an opinion; the person holding the trash has the one that counts.
