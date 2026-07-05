---
title: "Plant Parenthood"
description: "Helping people keep their houseplants alive on purpose instead of by accident"
slug: plant-parenthood
category: coursework
color: illusion
hero: /assets/pp-hero-01.png
blob: /assets/blob-pp.png
screenshots:
  - /assets/pp-hero-01.png
  - /assets/pp-hero-02.png
  - /assets/pp-hero-03.png
---

### Problem space

People love plants, acquire plants, and then quietly preside over their decline.

### Solution to explore

Give plant parents a way to track each plant's happiness — so staying alive stops depending on someone's memory.

### Project details

- I was given 2 weeks for discovery & ideation
- My team and I were allowed 1 week to develop & ship the MVP
- The team included 1 UI developer, 3 React developers, and 1 backend developer

## Do people actually want their plants to thrive?

An impolite question, but the right one to start with — a plant-care app is only worth building if the answer is more complicated than "yes." So before designing anything, I went and asked.

### Questions I asked potential users

- If your plant dies, what do you do? How do you feel?
- How long do you tend to keep your plants alive?
- Do you know the specific species of your plants?
- What’s the hardest thing about owning plants?

### Key insights from user interviews

Plant owners care for their plants based on intuition rather than knowledge.

*2 of the 3 people I spoke to never looked up how to care for their plants. They watered on vibes and called it trial and error — mostly error, if you ask the plants.*

There is not a big incentive to making sure your plants stay alive.

*Every single person interviewed said that if a plant dies, they'll just buy another one. No grief, no guilt, a $12 replacement. Which meant the app couldn't run on obligation — it had to be easy enough and genuinely fun enough that people used it anyway. The plant's life depended on our UX being pleasant. No pressure.*


## Building something for people who want plants

The interviews left me with three design problems, each phrased as a question I had to answer.

### The obstacle of actual work

People would happily keep more plants if keeping them were less work. The desire to care for living things is nearly universal; the appetite for chores is not.

*What can this product do to let people fulfill the desire without drowning in the upkeep?*

### Notification overload causes avoidance

A reminder app lives and dies on whether its notifications feel like help or like nagging — and users delete naggers without remorse.

*How do we make sure a thriving plant is enough of a payoff that the pings stay welcome?*

### Poor communication causes confusion

Many users confessed their plants die by committee: two people water it Monday, no one waters it for three weeks, everyone assumed someone else had it handled.

*How do we offer a simple fix for a failure that's really about households, not horticulture?*

### Designing within the product scope

My research kept pulling me somewhere the project brief didn't go. The disciplined move was to honor the brief anyway: I trimmed the feature ideas that outgrew the scope, kept every insight in my back pocket, and let the learning shape the prototype from underneath rather than blowing up the assignment.

### Getting creative with possible layouts

Before committing to a layout, I sketched fast and wide — something resembling the crazy 8s method, pen on paper, quantity over polish. Cheap ideas first; the expensive ones can audition later.

![Ten hand-drawn sketches exploring layouts for the plant profile and home page](/assets/pp-01-01.png)

## Testing what kind of plant care people want

### The project’s requirements

- Log in & sign up flow
- A list of all the user’s plants
- The plant profile
- The user profile
- Ability to set up watering reminders

### Features the users wished for

- Smart reminders & scheduling
- A history of care for each plant
- Daily watering checklist
- Sharing tasks with roommates/family
- Assigning plants to a location

### Getting insight into the user’s comfort zone

Low-fidelity testing had 3 questions to answer. Does onboarding gather enough that you don't land on a barren home page? Does the home page lead with the features people actually came for? And can users shape their preferences and their plants the way they want — not the way I guessed they would?

![Low-fidelity onboarding screen collecting phone number and notification preferences](/assets/pp-02-01.png)

![Low-fidelity home page with a daily watering checklist grid of plants](/assets/pp-02-02.png)

![Low-fidelity plant profile with happiness faces, maintenance levels, and watering history](/assets/pp-02-03.png)

### The changes I made due to my research

- The long mandatory onboarding process was shortened to the bare minimum of username, phone number, and password.
- I changed from using a bespoke warning color system to one more conventional with green indicating good and red indicating bad.
- I added descriptive confirmations so users would know when they successfully completed a task.

## Final designs

### Showing relevant plant details in the plant profile

The profile is where the app earns its keep: each plant's happiness and maintenance levels drive the notifications, so the reminder that reaches you is about *this* plant's actual needs — not a generic Tuesday guilt-ping.

![Final plant profile showing an unhappy face selected on the happiness scale](/assets/pp-03-01.png)

![Final plant profile with a neutral happiness face selected and low maintenance set](/assets/pp-03-02.png)

![Final plant profile with a happy face selected and a mark watered button](/assets/pp-03-03.png)

### Showcasing & adding plants

Plants are beautiful, so the home page treats them that way — a photo grid, not a chore list. The sorting options (last watered, happiness, name) sneak the function in under the finery.

![Home page listing all plants as a photo grid with names and an add plant button](/assets/pp-04-01.png)

![Home page sort menu open with options like last watered, happiness, and plant name](/assets/pp-04-02.png)

![Create a new plant form with avatar picker, name, maintenance level, and species fields](/assets/pp-04-03.png)

### Editing both the plant & user profiles

Everything a user tells the app should be revisable — the plant's name, species, photo, or the plant itself, whether it was rehomed or simply didn't make it. And since onboarding lets you skip most things, the user profile has to be fully editable later; a skipped step should be a postponed decision, never a locked door.

![Edit plant screen with photo update, name and species fields, and delete option](/assets/pp-05-01.png)

![Edit plant screen asking the user to confirm deleting the plant](/assets/pp-05-02.png)

![Edit user profile screen with photo, username, phone validation error, and reminder toggle](/assets/pp-05-03.png)

### Simplifying sign-up

My first flows imagined a lavish onboarding where users pre-filled everything, so their home page would bloom fully formed. Users found this exactly as delightful as filling out intake paperwork. It was a proper lesson in how to disgruntle people with good intentions — one every designer apparently has to pay for personally. The final version asks for a username, a phone number, and a password, then gets out of the way.

![Sign-up screen asking only for username, phone number, and password](/assets/pp-06-01.png)

![Onboarding step for adding a first plant with a skip option](/assets/pp-06-02.png)

![Onboarding screen explaining SMS reminders with opt-in and opt-out buttons](/assets/pp-06-03.png)

## What I learned...

Sole designer, five developers, one week to ship. Some things you can only learn by standing in that particular weather.

### Understanding how design pairs with development.

I arrived with everything assembled nicely — and then the developers arrived with reality. Learning their constraints meant adapting fast, and it taught me that the translation layer between UX intent and shipped product is a discipline of its own. Getting everyone genuinely on the same page took time and patience, and it was worth every hour: a design the team can't build is a very pretty rumor.

### Leveraging research to make improvements.

Research didn't refine my idea; it replaced it. Nearly everything I learned about what users wanted redirected what I wanted to design. Hearing that criticism was useful and a little painful in the way useful things often are — and the thicker skin it left behind has been earning interest ever since.

### Adapting to restrictions and limitations.

Watching most of my research-fed feature ideas fall outside the scope stung. But this is the industry's default weather: new information, new constraints, new direction, arriving without notice or apology. The skill isn't avoiding the change — it's staying flexible enough that the change makes the work better instead of just smaller.
