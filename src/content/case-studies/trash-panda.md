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

Initially, we knew we wanted to work with Earth911. Their API would give us the data we needed to create an informational base to build from.

### Data we could expect from Earth911

- Specific item descriptions. Items included plastic bottles, engine parts, household cleaners, etc.
- Location-based information on how each item is disposed of or recycled in that area.
- Location-based information on specific disposal facilities that accept the item in question.

### Analyzing the current competition

The UX/UI was outdated, clunky, and cluttered. They failed to explain the what and the why of what they were trying to accomplish. Many of these companies were not utilizing current technology to create a better experience.

![Competitor search screen listing plastic recycling results in a plain text list](/assets/tp-01-01.png)

![Competitor item page for compostable plastic cutlery advising users to put it in the garbage](/assets/tp-01-02.png)

![Competitor cork disposal page crowded with stacked orange banners and dense text](/assets/tp-01-03.png)

## What could we build that promotes recycling?

We knew that we needed to make sure we utilized current technology to help solve this problem and keep younger users engaged with the product. What would happen if we enabled users to take a photo of an item in order to streamline the process of locating the item details within our database?

### Key insights from user interviews

Any amount of inaccuracy in the image recognition causes a significant amount of distrust.

*5 of the 6 people we spoke to reported they would not use the product if the image recognition accuracy was below 80%.*

Motivation to recycle is present, yet people are hard-pressed to change their habits.

*People are motivated to recycle in a myriad of ways - but not motivated enough to put a lot of energy into helping themselves learn or create better habits.*

### Users will need reliable fallbacks in lieu of perfect image recognition

This model ensured that our users were never more than 3 taps away from the information they were looking for.

![User flow from taking a photo to the item information page, with keyword and category search fallbacks](/assets/user_flow_graphic_3.png)

## Continuously asking what works

A note about partnership in design: This was an incredible first experience in teamwork and collaboration with a design partner. We would frequently come to a point where we were not agreeing with the direction the design was going and we didn’t have time to get stuck.

### We both learned some important lessons during our collaboration

- If you get stuck when pair-designing, take an hour or two to design on your own. Then come back and see where each of you went. Taking the best parts of each design and seeing how they can work together can create incredible results.
- Always make sure there is a user-experience based reason for all your decisions. Keep the user in the forefront of your mind!
- Be kind and take breaks. If you really can’t see the reasoning behind something, ask questions and seek out other resources that support the other person’s idea.

### Home page progression

We started not knowing whether we should showcase the image recognition over category search. Right away we knew we wanted to create a simplistic design, so we progressed into giving the user all 3 options on the landing page. You can see that more clearly in the final designs section below.

![Early home page wireframe stacking a camera option above two search-by-term blocks](/assets/tp-03-01.png)

![Grayscale home wireframe with keyword search bar and a camera button in the bottom nav](/assets/tp-03-02.png)

![High-fidelity green home screen combining keyword search, a photo category grid, and a camera button](/assets/tp-03-03.png)

![Home page iteration pairing keyword search with a line-icon category grid under an illustrated header](/assets/tp-04-01.png)

![Home page iteration with a dismissible Trash Panda welcome message above photo categories](/assets/tp-04-02.png)

![Later home page design with raccoon logo, search bar, and twelve photo category tiles](/assets/tp-04-03.png)

### Changes to the category search flow

For category search, we wanted to remove any friction the user might encounter. We considered whether the user would prefer actual photos or icons to describe an item or material. From user testing, we learned that users more easily recognize photos of items over icons. 

![Category search wireframe with placeholder tiles under a select-the-material prompt](/assets/tp-05-01.png)

![Category search iteration using photo thumbnails for materials like batteries, plastic, and paint](/assets/tp-05-02.png)

![Alkaline battery detail iteration highlighting recycle over landfill and compost options](/assets/tp-05-03.png)

### Progression of camera & results 

We wanted to make this flow as simple as possible: take a picture, get a result. This was where we had to collaborate closely with the data science team. We could not guarantee their image recognition model would be able to take information from users to improve results, or if the user took another picture that the results would be any different.

![Camera wireframe telling users to center the item and clear the area before capture](/assets/tp-06-01.png)

![Result confirmation wireframe asking "Is this a crayon?" with approve and try again buttons](/assets/tp-06-02.png)

![Camera iteration with a framing guide over AA batteries held in a hand](/assets/tp-06-03.png)

![Results iteration asking "Is this a crayon?" beneath a captured photo of batteries](/assets/tp-07-01.png)

![Refined camera view with a centering tip overlaid on the live photo of batteries](/assets/tp-07-02.png)

![Result card sliding up to ask whether the photographed item is an alkaline battery](/assets/tp-07-03.png)

### Navigating through navigation styles

We went through several iterations trying to find a workable solution for navigation. The app was really simple with only 3 areas to navigate to, but still needed some flexibility.

![Navigation wireframe with search, camera, and menu icons in a bottom bar](/assets/tp-08-01.png)

![Batteries category screen testing back arrow and home icons as top navigation](/assets/tp-08-02.png)

![Battery type grid with a camera capture button docked in the bottom navigation bar](/assets/tp-08-03.png)

### Key insights from usability testing

Users were delighted by the image recognition feature.

*It was incredible to see users actually having fun with a recycling app. Although the average accuracy hovered at 55% for all items, users were impressed each time our model recognized an item correctly.*

Users love being able to visually identify items during category search.

*We chose photos over icons due to this discovery. While icons would have created a more cohesive design, users have an easier time identifying actual items in photos. We optimized for speed of discovery.*

Users want more information at their fingertips.

*We received a lot of positive feedback that this product would help people create better recycling habits. However, they wanted even more information regarding what the material is, why it may be hard to recycle, who is coming up with new procedures to improve the recyclability of certain items, etc.*

## Final designs (we made an app!)

We were so incredibly proud of our teamwork and creativity throughout this whole process. The app was available for download until quite recently when it stopped being supported. 

### Getting permissions without friction

We understood the importance of a quick and painless onboarding, but we still needed to get location and camera permissions.

![First onboarding screen introducing Trash Panda with an illustration of recycling bins](/assets/tp-09-01.png)

![Onboarding screen requesting location access to match local recycling regulations](/assets/tp-09-02.png)

![Onboarding screen explaining the snap-a-photo feature ahead of the camera permission](/assets/tp-09-03.png)

### A camera feature that helps users identify recyclables

We decided to show a result card sliding up after the image had been processed. This minimal design was pleasant to use and it was clear enough that you could click the card for more info.

![Final camera screen with a centering tip over batteries held in an open hand](/assets/tp-10-01.png)

![Captured photo of AA batteries while the app loads recognition results](/assets/tp-10-02.png)

![Result card sliding up to identify the photographed item as an alkaline battery](/assets/tp-10-03.png)

### Category search helps engage more users

We loved the user response to the realistic photos of each item. They let us know that the pictures made it very easy to identify the item they were trying to find.

![Final home screen with a take-a-photo card, search bar, and photo category grid](/assets/tp-11-01.png)

![Batteries category screen using realistic photos of each battery type](/assets/tp-11-02.png)

![Alkaline battery page reached from category search, with off-site recycle guidance](/assets/tp-11-03.png)

### Item information pages with proper visual hierarchy

The graphics make it super simple to understand what to do with an item at a glance. The CTA is the button to locate a recycling center in your area, which is the main function of the app.

![Alkaline battery information page with off-site recycle graphic and locate centers button](/assets/tp-12-01.png)

![Aluminum beverage can information page marked recyclable, with a locate centers button](/assets/tp-12-02.png)

![Grass clippings information page recommending compost, with a locate centers button](/assets/tp-12-03.png)

## What I learned...

I was extraordinarily lucky to have had a team of people that were great collaborators. Between the data science team, the frontend and backend developers, and my design partner, progression through the iterations was seamless.

### Collaboration between disciplines

I am still amazed at the amount of work that we all put in to create something we’re proud of. The experience of collaborating with different skill sets helped me to contextualize my own developing UX skills. I became well-adapted to not only explaining the reasoning behind my design decisions, but also interpreting the explanations I was receiving from the others.

### Understanding limitations

I learned early on how important it is to understand the limitations of data and web development. At times, it can seem like the components we are designing work like magic. We, as designers, had to listen to the team to figure out what was possible and then use that information to mold our designs. 

### The importance of the user

The major lesson I learned throughout this experience was how important it is to make decisions based on data. Testing each iteration and each idea with users was absolutely essential. Everybody has an opinion but the one that matters most comes from the person who will be using the service.
