---
title: "Apocrypha"
description: "A small fleet of AI agents that runs a loud household. Built to guard continuity, not extract productivity."
slug: apocrypha
category: live
order: 2
---

### Problem space

My brain is nonlinear and runs a loud household. Every productivity app I tried made that worse, by turning passing thoughts into standing debts.

### Solution to explore

An assistant that surfaces what matters now, keeps what matters later, and refuses to turn every stray thought into a chore. It lives in my pocket, not in a tab I'll forget I opened.

### Project details

- I designed and built it by aiming AI tools at the problem. Not a credentialed engineer; I drew the architecture, made every call, and I keep it running
- A small fleet of agents on a rented cloud box, each sealed in its own profile, running at a flat monthly cost instead of a metered API
- Status: two of the four agents are live and load-bearing. The rest is half-built, some by neglect, some on purpose. I'll say which is which

## Before the AI: a vault and a thousand tags

Before any of this, the system was me and Obsidian: a PARA-shaped vault, an elaborate tagging vocabulary (stake, clock, energy, time, desire, context, domain), and a set of queries that pulled everything into one daily view. Tag a thought correctly and the right query returned it on the right day. A genuinely good machine.

Also a machine I fed by hand, forever. A query is only as smart as your tagging discipline on your worst day, and the worst days are when the system most needs to hold. It surfaced what I remembered to tag. It couldn't notice what I forgot, or that a loop had gone quietly stale. The queries answered questions; they couldn't ask one.

So the load changed shape instead of dropping: I stopped holding the tasks in my head and started holding the taxonomy. That's the wall that pulled AI into it. I wanted something that could read the vault the way I would, catch what I didn't tag, and hand it back without making me pre-sort my life.

## I built the wrong thing first

My first answer was to give the vault a voice: a couple thousand hand-rolled lines running one household bot, vault-aware, with a permission system I was proud of. Then I found an open-source agent framework, four months old and already the fastest-growing of its kind, that did all of it better and was maintained by people who weren't me.

That stung for about a day. Then it was just obvious.

*I had hand-whittled a wheel the workshop was already mass-producing.*

I archived my code (never deleted) and rebuilt on the framework. The first real architectural decision was admitting the first one had been ego.

## What I actually wanted: continuity, not productivity

Most personal software optimizes for output: it converts thoughts into tasks and hands you one more inbox to feel bad about. I wanted the opposite, something that guards continuity. The body's actual needs, the household's rhythm, the promise that what mattered yesterday still gets to matter tomorrow.

Everything answers one test — *does this make the day more livable?* — and every nudge has to name what it protects. A feature that can't gets cut.

I wrote the assistant's instructions to read like a sharp friend, not a service desk: no performed cheer, no sanded corners, name the contradiction before designing around it. The hardest part of building an assistant for one person is writing down exactly how that person wants to be spoken to.

![Apocrypha on a phone — a morning exchange: it surfaces only the two things with a clock on them today, holds a captured thought without turning it into a task, and answers in a dry, plain voice](/assets/apocrypha-chat.png)

## The architecture, and the three things I over-built and killed

The bones: separate agents for the family, the household, and the individual adults, each a sealed box with its own voice, credentials, memory, and process. The wall between the kid-facing agent and the adults-only one isn't a policy. One literally cannot read the other's memory. That part I'd defend anywhere.

![The sealed-profile architecture — four agents (Family, Me, Couple, Partner), each with its own voice, memory, and process, reachable from any phone; two are live and two are configured but not wired, and no profile can read another's memory](/assets/apocrypha-arch.png)

The less flattering part is what I built around it that the system didn't need:

- **A git-synced shared vault.** A second source of truth so the agents could pass notes through files. The humans never touched the files; they talk to the agents, and the agents' own memory was already the substrate. Killed it.
- **Custom permission code.** I started hand-writing who-sees-what logic, then found the framework shipped it natively. Killed it.
- **A canonical routing rulebook.** A doctrine for which AI runtime handles which task, promoted to gospel and recanted the same week. I'd carved a one-day-old hunch in stone.

*Every one of my mistakes rhymes: I kept deciding where the data should live before asking how the human actually does the thing.* That sentence does load-bearing work in everything I build now.

## What's real, and what's half-built on purpose

I'd rather be precise than impressive. Two of the four agents are live and hauling real weight; two are configured profiles with nothing wired to them. The household-logistics layer (a dependency graph that treats the house as gates and cascades rather than a calendar) is designed, proven against the single ugliest real cascade, and parked. I'm not finishing it until a real failure earns it the wiring.

The honest risk sits in the open: this is a bespoke system held together by one person's understanding of it, on a framework younger than some of my own leftovers. It runs, it's cheap, and it holds my week together. If I disappeared, keeping it alive would take archaeology. I took that trade with my eyes open.

## What I learned

- **Over-engineering hides inside diligence.** Everything I killed felt responsible while I was building it. The tell never changed: I was answering *where does the data live?* before *how does the human do this?*
- **Privacy is architecture, not etiquette.** Separate processes and separate memory beat a promise. A wall you have to trust isn't a wall.
- **Build for one real person, all the way down.** It's good because it refuses to be general. I knew exactly whose brain it had to fit, because the brain was mine.
- **Knowing when to stop is part of the design.** The half-built parts are named and defended. That beats a finished thing nobody needed.

## What "done" looks like, and what it fixes

Half-built is a fine place to stand. It isn't the destination. The finished machine, and what each piece fixes:

**Every scope gets its own sealed agent.** The two inert profiles wake up (one for the two of us as a couple, one for each of us alone) and joint decisions get a room built to hold them instead of me carrying context between bots. Right now I'm the routing layer. Done, the architecture is.

**The household stops failing in silence.** The dependency graph gets wired to the part of the system that talks to the house. Instead of nagging about a dirty zone, it calls the next gate: the kitchen has to be cooking-ready by eight tonight or tomorrow's cooking doesn't happen. Here's who owns that, here's what breaks downstream. Cascades announce themselves before they go.

**It runs when I'm not standing in the middle of it.** Today the house works because I'm in it, holding the graph in my head and dispatching. My days are about to change shape, and "Lynn runs it by hand" is a single point of failure with a pulse. Done means the gates fire, the owners get told, and continuity holds whether or not I'm in the room.

And the part "done" doesn't fix: it's still mine. Thinner, better documented, and still a bespoke machine cut to the shape of one life. I keep choosing that trade on purpose.
