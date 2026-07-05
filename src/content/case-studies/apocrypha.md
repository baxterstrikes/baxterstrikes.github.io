---
title: "Apocrypha"
description: "A loud household and one overloaded nervous system, run on a small fleet of AI agents I built to guard continuity — not to optimize me into a task machine"
slug: apocrypha
category: live
order: 2
---

### Problem space

My brain is a nonlinear, associative, gorgeously overloaded mess, and it runs a loud household. Every productivity app I've ever tried made that worse — each one a tidy little machine for turning a passing thought into a standing debt.

### Solution to explore

An assistant that hands me what matters now, quietly keeps what matters later, and refuses — on principle — to make every stray thought a chore. One that lives in my pocket, not in a tab I'll forget I opened.

### Project details

- I designed it and built it by aiming AI tools at the problem. Not a credentialed engineer — but I drew the architecture, made every call, and I'm the one who keeps it breathing
- A small fleet of agents on a rented cloud box, each walled off in its own profile, running at near-zero marginal cost — a flat monthly subscription does the thinking instead of a metered API bleeding me by the token
- Status: two of the four agents are live and load-bearing; the rest is half-built — some by neglect, some on purpose, and I'll tell you which is which

## Before the AI: a vault and a thousand tags

Long before a single bot, the system was just me and Obsidian. I'd built a whole personal operating system out of plain text — a PARA-shaped vault, a tagging vocabulary baroque enough to make a librarian flinch (stake, clock, energy, time, desire, context, domain), and a thicket of queries that pulled all of it into one daily surface. Tag a thought with the right symbols and the right query would conjure it back onto the right day. It was, genuinely, a beautiful machine.

It was also a machine I had to feed by hand, forever. A query is only ever as smart as your tagging discipline on your worst day — and my worst days are precisely when the system most needs to hold. It could surface what I'd remembered to tag; it could not notice what I'd forgotten, that a loop had gone quietly stale, or that I was about to walk straight past a transition I'd sworn mattered. The queries answered questions. They couldn't ask one.

So the load I was trying to put down just changed shape: instead of holding the tasks in my head, I was holding the entire *taxonomy* in my head. That's the wall that finally pulled AI into it — I wanted something that could read the whole vault the way I would, catch the thing I didn't tag, and hand it back without making me pre-sort my entire life into the right boxes first.

## I built the wrong thing first

My first answer was to give the vault a voice. So I hand-rolled the whole contraption myself — a couple thousand lines running one household bot, vault-aware, with a permission system I was unreasonably proud of. Then I tripped over an open-source agent framework — four months old, already the fastest-growing of its breed — that did my entire clever weekend better, and kept doing it, maintained by people who weren't me.

That stung for about a day. Then it was just obvious.

*My bespoke darling was a hand-whittled version of a wheel an entire workshop was already turning out.*

So I did the grown-up thing and put the baby down: archived the code in place — never deleted, I'm not a monster — and rebuilt on the framework. The first real architectural decision was admitting the first one had been my ego in a trench coat.

## What I actually wanted: continuity, not productivity

Most personal software is a guilt engine wearing a productivity costume. It optimizes for output, launders every thought into a task, and hands you one more inbox to feel bad about. I wanted the opposite — something that *guards* continuity instead of extracting it: the body's actual needs, the household's rhythm, the quiet covenant that what mattered to me yesterday still gets to matter tomorrow.

So the whole thing answers to one test — *does this make the day more livable?* — and every nudge has to earn its keep against a single question: what does this protect? A feature that can't answer gets composted.

I wrote the assistant's own marching orders to read like a sharp friend who'd actually done the reading, not a service desk in a lanyard: no performed cheer, no sanded corners, name the contradiction out loud before redesigning around it. The hardest part of building an assistant for one specific person, it turns out, is writing down without flinching exactly how that person wants to be spoken to.

![Apocrypha on a phone — a morning exchange: it surfaces only the two things with a clock on them today, holds a captured thought without turning it into a task, and answers in a dry, plain voice](/assets/apocrypha-chat.png)

## The architecture — and the three things I over-built and killed

The bones are a multi-profile rig: separate agents for the family, the household, and the individual adults, each one a sealed box with its own voice, its own credentials, its own memory, its own process. The wall between the kid-facing agent and the adults-only one isn't a pinky-promise — one literally cannot read the other's mind. That part I'd defend in front of anyone.

![The sealed-profile architecture — four agents (Family, Me, Couple, Partner), each with its own voice, memory, and process, reachable from any phone; two are live and two are configured but not wired, and no profile can read another's memory](/assets/apocrypha-arch.png)

The less flattering part is the heap of things I built around it that the system flatly did not need:

- **A git-synced shared vault.** I stood up an entire second source of truth so the agents could pass notes through shared files — then noticed the humans never touch those files. They talk to the agents. The agents' own memory *was* the substrate. I'd dragged the file-shuffling habit over from my old bot without once asking whether the new thing needed it. Killed it.
- **Custom permission code.** I started hand-writing logic for who-sees-what, then found the framework already did it natively — allowlists, scoped sessions, done. I'd been busily reinventing a thing that shipped in the box. Killed it.
- **A canonical routing rulebook.** I wrote a tidy little doctrine for which AI runtime should handle which kind of task and promoted it to gospel — then recanted the same week, because I'd carved a one-day-old hunch into stone before checking whether it was even true.

*Every one of my mistakes rhymes: I kept deciding where the data should live before asking how the human actually does the thing.* That sentence does load-bearing work for everything I build now.

## What's real, and what's half-built on purpose

I'd rather be precise than impressive. Of the four agents I drew up, two are live and hauling real freight; the other two are configured profiles with no body wired to them — designed, named, and inert. The household-logistics layer — a dependency graph that treats the house as gates and cascades instead of a polite calendar, so everyone can see which of their small tasks are quietly holding up someone else's — is built, proven against the single ugliest cascade, and then parked on purpose. I'm not finishing it until a real failure earns it the wiring.

The honest risk sits right there in the open: this is a bespoke contraption held together by exactly one person's understanding of it, perched on a framework younger than some of my own leftovers. It runs, it's cheap, and it genuinely holds my week together — and if I got hit by a bus, nobody could keep it breathing without serious archaeology. I know. I took that trade with my eyes open; I didn't sleepwalk into it.

## What I learned

- **The over-engineering reflex hides inside diligence.** Every single thing I killed felt responsible while I was building it. The tell never changed: I was answering *where does the data live?* before *how does the human actually do this?*
- **Privacy is strongest as architecture, not etiquette.** Separate processes and separate memory beat a promise every time. A wall you have to trust isn't a wall; it's a vibe.
- **Build for one real person, all the way down.** This thing is good precisely because it refuses to be general. I knew exactly whose overloaded brain it had to fit, because the brain was mine — and I've been taking field notes on it for years.
- **Knowing when to stop is part of the design.** The half-built parts aren't unfinished by accident. An unfinished thing you can name and defend beats a finished thing nobody needed — and I've got the deleted repos to tell the two apart.

## What "done" looks like — and what it fixes

Half-built is a fine place to stand for a while; it isn't the destination. Here's the finished machine, and the specific thing each piece is there to fix.

**Every scope gets its own sealed agent.** The two inert profiles wake up — one for the two of us as a couple, one for each of us alone — and joint decisions stop leaking across walls, because there's finally a room built to hold them instead of me hand-carrying context between two personal bots. Right now *I'm* the routing layer. Done, the architecture is.

**The household stops failing in silence.** The dependency graph I designed and parked gets wired to the part of the system that actually talks to the house. Instead of a bot that nags about a dirty zone, it calls the next *gate* — the kitchen has to be cooking-ready by eight tonight or tomorrow's cooking simply doesn't happen; here's who owns that, here's what breaks downstream if it slips. The cascades that used to collapse quietly start announcing themselves before they go.

**The machine runs when I'm not standing in the middle of it.** This is the one that actually matters. Today the house works because I'm in it, holding the whole dependency graph in my head and telling people what to do next. Soon enough my days change shape and I won't be there to play dispatcher — at which point "Lynn runs it by hand" stops being an architecture and becomes a single point of failure with a pulse. Done means the gates fire, the owners get told, and continuity holds whether or not I'm in the room.

And the part "done" doesn't fix, because I'd be lying if I dressed it up: it's still mine. The finished version is thinner and better-documented than what's running today, but it's a bespoke machine cut to the shape of one specific life — and that's the trade I keep choosing on purpose. Something genuinely load-bearing and a little fragile beats something generic, safe, and useless to me.
