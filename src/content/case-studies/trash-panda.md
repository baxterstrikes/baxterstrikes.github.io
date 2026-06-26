---
title: "Trash Panda"
description: "Helping people create better recycling habits, one bit of trash at a time"
slug: trash-panda
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
- The team included 2 designers, 4 data science partners,  4 developers, and 1 PM
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

![tp-01-01](/assets/tp-01-01.png)

![tp-01-02](/assets/tp-01-02.png)

![tp-01-03](/assets/tp-01-03.png)

## What could we build that promotes recycling?

We knew that we needed to make sure we utilized current technology to help solve this problem and keep younger users engaged with the product. What would happen if we enabled users to take a photo of an item in order to streamline the process of locating the item details within our database?

### Key insights from user interviews

Any amount of inaccuracy in the image recognition causes a significant amount of distrust.

*5 of the 6 people we spoke to reported they would not use the product if the image recognition accuracy was below 80%.*

Motivation to recycle is present, yet people are gard-pressed to change their habits.

*People are motivated to recycle in a myriad of ways - but not motivated enough to put a lot of energy into helping themselves learn or create better habits.*

### Users will need reliable fallbacks in lieu of perfect image recognition

This model ensured that our users were never more than 3 taps away from the information they were looking for.

![tp-02-01](/assets/user_flow_graphic_3.png)

## Continuously asking what works

A note about partnership in design: This was an incredible first experience in teamwork and collaboration with a design partner. We would frequently come to a point where we were not agreeing with the direction the design was going and we didn’t have time to get stuck.

### We both learned some important lessons during our collaboration

- If you get stuck when pair-designing, take an hour or two to design on your own. Then come back and see where each of you went. Taking the best parts of each design and seeing how they can work together can create incredible results.
- Always make sure there is a user-experience based reason for all your decisions. Keep the user in the forefront of your mind!
- Be kind and take breaks. If you really can’t see the reasoning behind something, ask questions and seek out other resources that support the other person’s idea.

### Home page progression

We started not knowing whether we should showcase the image recognition over category search. Right away we knew we wanted to create a simplistic design, so we progressed into giving the user all 3 options on the landing page. You can see that more clearly in the final designs section below.

![tp-03-01](/assets/tp-03-01.png)

![tp-03-02](/assets/tp-03-02.png)

![tp-03-03](/assets/tp-03-03.png)

![tp-04-01](/assets/tp-04-01.png)

![tp-04-02](/assets/tp-04-02.png)

![tp-04-03](/assets/tp-04-03.png)

### Changes to the category search flow

For category search, we wanted to remove any friction the user might encounter. We considered whether the user would prefer actual photos or icons to describe an item or material. From user testing, we learned that users more easily recognize photos of items over icons. 

![tp-05-01](/assets/tp-05-01.png)

![tp-05-02](/assets/tp-05-02.png)

![tp-05-03](/assets/tp-05-03.png)

### Progression of camera & results 

We wanted to make this flow as simple as possible: take a picture, get a result. This was where we had to collaborate closely with the data science team. We could not guarantee their image recognition model would be able to take information from users to improve results, or if the user took another picture that the results would be any different.

![tp-06-01](/assets/tp-06-01.png)

![tp-06-02](/assets/tp-06-02.png)

![tp-06-03](/assets/tp-06-03.png)

![tp-07-01](/assets/tp-07-01.png)

![tp-07-02](/assets/tp-07-02.png)

![tp-07-03](/assets/tp-07-03.png)

### Navigating through navigation styles

We went through several iterations trying to find a workable solution for navigation. The app was really simple with only 3 areas to navigate to, but still needed some flexibility.

![tp-08-01](/assets/tp-08-01.png)

![tp-08-02](/assets/tp-08-02.png)

![tp-08-03](/assets/tp-08-03.png)

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

![tp-09-01](/assets/tp-09-01.png)

![tp-09-02](/assets/tp-09-02.png)

![tp-09-03](/assets/tp-09-03.png)

### A camera feature that helps users identify recyclables

We decided to show a result card sliding up after the image had been processed. This minimal design was pleasant to use and it was clear enough that you could click the card for more info.

![tp-10-01](/assets/tp-10-01.png)

![tp-10-02](/assets/tp-10-02.png)

![tp-10-03](/assets/tp-10-03.png)

### Category search helps engage more users

We loved the user response to the realistic photos of each item. They let us know that the pictures made it very easy to identify the item they were trying to find.

![tp-11-01](/assets/tp-11-01.png)

![tp-11-02](/assets/tp-11-02.png)

![tp-11-03](/assets/tp-11-03.png)

### Item information pages with proper visual hierarchy

The graphics make it super simple to understand what to do with an item at a glance. The CTA is the button to locate a recycling center in your area, which is the main function of the app.

![tp-12-01](/assets/tp-12-01.png)

![tp-12-02](/assets/tp-12-02.png)

![tp-12-03](/assets/tp-12-03.png)

## What I learned...

I was extraordinarily lucky to have had a team of people that were great collaborators. Between the data science team, the frontend and backend developers, and my design partner, progression through the iterations was seamless.

### Collaboration between disciplines

I am still amazed at the amount of work that we all put in to create something we’re proud of. The experience of collaborating with different skill sets helped me to contextualize my own developing UX skills. I became well-adapted to not only explaining the reasoning behind my design decisions, but also interpreting the explanations I was receiving from the others.

### Understanding limitations

I learned early on how important it is to understand the limitations of data and web development. At times, it can seem like the components we are designing work like magic. We, as designers, had to listen to the team to figure out what was possible and then use that information to mold our designs. 

### The importance of the user

The major lesson I learned throughout this experience was how important it is to make decisions based on data. Testing each iteration and each idea with users was absolutely essential. Everybody has an opinion but the one that matters most comes from the person who will be using the service.
