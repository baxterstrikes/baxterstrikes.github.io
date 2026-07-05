---
title: "Kiddex"
description: "Helping parents keep one true picture of their kid — and share exactly the right slice of it"
slug: kiddex
category: live
order: 1
---

### Problem space

A child's information is scattered across everyone who cares for them, and the parent is the only thing holding it together.

### Solution to explore

One parent-controlled source of truth that can hand any caregiver — or any form — exactly the right slice, and nothing more.

### Project details

- A solo project — I framed it, designed it, and built the working app myself with AI tooling (Claude Code)
- Three names across three years: Pocketlore → Kiddex → Kiddoo. Same problem, reframed each time
- Status: a working alpha (now cold), one shipped AI feature, and a rebuild underway

## Why I started building this

We found out my son had several allergies and allergic responses.

Suddenly a dozen adults needed to know exactly the right things about one small person — the sitter, the grandparents, the school office, the camp nurse, the coach doing pickup. So I became the switchboard. The same facts, retyped into every form, texted to every new caregiver, screenshotted and going stale the second I hit send.

Nobody had the whole picture. I was the integration layer, and integration layers fail quietly.

*If everyone caring for my kid needs a different slice of the same facts, why am I rebuilding those facts by hand every single time?*

## Treating sharing like distance

The first version was called Pocketlore. Its bet was that permission isn't a list — it's a distance. A sitter for one night and a co-guardian for life aren't two rows in a table. They're two different distances from the child.

So I designed sharing as a small set of pieces:

- **Who** — a tier, by closeness: Core, Kin, Extended, Friends, On-Call, Public Edge.
- **What** — a slice: a named bundle like *Allergies & Emergency* or *Weekend Routine*.
- **How long** — a window: 24 hours, a weekend, a season. A share is a loan, not a transfer.
- **How** — a pass: the link itself, revocable in one tap.

Every change gets logged in plain language, so the most important sentence a parent ever writes — *Allergy: none → peanut* — is captured once, dated, and pushed to everyone currently allowed to see it.

![Sharing modeled as distance — concentric tiers from Core out to Public Edge around the child, with a share defined as who, what, how long, and how](/assets/kiddex-distance.png)

### The risk I designed against

The tiers were elegant, and elegance turned out to be expensive.

*Would a stressed parent actually learn six tiers — or freeze at "which ring is the babysitter?" I leaned on presets and a recommended tier so the structure could run underneath instead of in your face.*

## Building the real thing

Then I built it — not a prototype of it, the actual app. The spine is a data model I think of as constitutional: eight structured buckets that everything else plugs into.

- Identity, Contacts, Health, Care Plan, Measurements, School, and Child Channels — parent-maintained, always current.
- Credentials — SSN, birth certificate — never shared. Not "shared carefully." Never.

![Kiddex child profile — eight data buckets at a glance, with the Credentials bucket locked and labeled never shared](/assets/kiddex-profile.png)

### One bucket says more than the other seven

The credentials wall is enforced in three separate places in the code, so no future feature can leak it by accident. The eight buckets are fixed: never add, remove, or merge.

*The one bucket I refused to make shareable did more to define the product than the seven I did.*

On top of the spine, the alpha runs multi-guardian access with per-bucket permissions, a suggest-and-approve flow so a co-parent proposes changes instead of overwriting them, time-boxed revocable shares, and a full audit log of who touched what.

![A generated handoff for tonight's sitter — only the allergy, bedtime, and emergency contacts show; home address, school, and IDs are hidden](/assets/kiddex-share.png)

## Making the data do the work

A perfect, current profile that just sits there still leaves the parent typing. So the next question:

*What if you entered the thirty facts once, and the app filled every differently-shaped box after that?*

That became the form filler. You upload a PDF — a camp physical, an enrollment packet — and the AI reads it, maps each field to the child's buckets, fills what it can, and flags the gaps for you to check before anything leaves. Credentials are stripped before the AI ever sees the data.

![AI form filler results — each field marked filled, double-check, or gap, and the Social Security number row marked never auto-filled](/assets/kiddex-formfiller.png)

## Testing my most ambitious idea

By spring I had a grander story in my head: not "sharing plus a form filler" but a self-updating family dossier that knows each kid well enough to generate anything — packing lists, briefings, prep checklists.

I wanted it to be true. That's exactly when I don't trust myself.

So instead of quietly rewriting the vision, I opened a bounded exploration with rules I had to follow: one focused session to make the case, a two-week deadline, and a default of *archive* if I never logged a decision. It had one test to pass.

*Is the recurring pain really not knowing what your family needs each week — or is it just filling the forms already in front of you?*

The concrete version kept winning. The dossier didn't earn its promotion, so it didn't get one. The grand framing was seductive and vague; the small one was specific and true, and I had to be willing to kill the first to find the second.

## The reframe that made it simple

Killing the big idea left a gap, and the right one walked into it almost immediately.

For two years I'd carried Kiddex as two products wearing one logo — a sharing vault and a form filler — and kept trying to decide which was the real one. The answer was that the question was wrong.

A babysitter note is just another form. So is an emergency card. So is a share link: a form whose reader is one trusted person and whose fields are filtered to what they're allowed to see.

*Sharing isn't a separate product. It's an output.*

So everything collapsed into one move: take the source of truth, render it into the shape someone's asking for, show only the right fields. The six-tier system I'd been so proud of stopped being something the parent learns and became the quiet filter logic underneath. The whole product fits on one line now — enter it once, and Kiddex does the paperwork.

![One source of truth — the eight buckets, with Credentials walled off — flowing through a tier-and-slice filter into three outputs: a form, a share, and a briefing](/assets/kiddex-output.png)

## Checking my own story against the code

Before building anything new on top of this, I made myself write an honest inventory: what's actually built, read straight from the code instead of from my own pitch deck.

It was not flattering.

*The deck promised SMS delivery. The code had never sent a single text — every share was just a link.*

The "constitutional" privacy guarantees were real in the code but had zero automated tests behind them, and nothing in the whole thing had ever met a stranger. It ran on one demo child.

Writing that down was the most useful hour I spent on the project. It's why I trust the rebuild: it stands on a foundation I've actually inspected, not one I've been telling myself a story about.

## What I learned...

### Give people structure, then hide it.

The tier system was the right way to think and the wrong first screen. The best version of it is the one the parent never has to see. Elegance the user has to study isn't elegance.

### The simplest framing is usually the truest one.

"Family knower" sounded ambitious. "Output" sounded boring. The boring one was right. I've stopped trusting the version of an idea that flatters me most.

### Audit your own claims before you build on them.

A feature you can't find in the code isn't built, and a guarantee with no test behind it is a hope. Writing down the unflattering truth early saved me from pouring real work onto a story.

### The overlap is the advantage.

This isn't a product an engineer guessed at from the outside. I got tired of being my family's integration layer, and I could build the fix, audit it honestly, and explain why it matters. Being the user, the builder, and the writer at once is the most useful thing about me.

## What "done" looks like — and what it fixes

The output primitive is the whole bet, and most of it is still a promissory note. Here's the finished thing, and the specific gap each piece closes.

**Every output is just another adapter.** Today the form-filler is real and the share is real; the briefing, the emergency card, and the conversational onboarding are drawings with no body yet. Done, they're all the same move on one engine — enter the thirty facts once, and whatever shape the world hands you renders itself from the single source of truth: a camp PDF, a sitter's handoff, a lock-screen emergency card, take your pick. "Any output" stops being a slogan and becomes a fact.

**The wall gets tested, not just sworn to.** The constitutional guarantee — credentials never leave — is enforced in three places in the code and verified by exactly zero automated tests. Done means a test suite whose entire job is to try to smuggle a Social Security number out of every exit and fail, every time. A guarantee you can't prove is a hope; done turns the hope into a receipt. (My other builds keep teaching me the same thing: a wall you have to trust isn't a wall.)

**It finally meets a stranger.** Right now Kiddex runs on one demo child and has never survived contact with a parent who isn't me. Done is a small, honest beta with the people it was actually built for — multi-kid families where at least one kid's medical file is thick enough that the structured spine reads as a mercy instead of overkill. That's the room where the design either holds or gets humbled, and either answer is worth more than my own conviction.

And the part "done" doesn't have to fix, because the collapse already did it: the parent never learns the tier system. The six rings and seven slices I once thought *were* the product are plumbing now — the quiet filter logic under "show only the right fields," invisible on purpose. The best version of that machinery is the one nobody using it ever has to see.
