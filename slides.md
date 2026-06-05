---
theme: unicorn
title: Prompt, Ship, Regret, Repeat
author: Iratxe Garrido
class: dda-cover
---

<p class="!mb-0 text-xs font-bold uppercase tracking-[0.32em] text-white/70">Duck Dating Apps / AI-driven product development</p>

# Prompt, Ship,<br>Regret, Repeat

<p class="!mt-6 !mb-0 max-w-xl text-xl font-medium text-white/90">AI lessons from a technical co-founder</p>

<div class="mt-14 flex items-center gap-5 text-sm text-white/80">
  <span class="font-bold text-white">Iratxe Garrido</span>
  <span class="h-5 w-px bg-white/30"></span>
  <span>Technical co-founder, Duck Dating Apps</span>
</div>

<style>
.slidev-layout.dda-cover {
  position: relative;
  overflow: hidden;
  background: linear-gradient(125deg, #86198f 0%, #581c87 56%, #2e1065 100%);
  color: white;
}
.slidev-layout.dda-cover::before {
  content: "";
  position: absolute;
  right: -110px;
  top: -160px;
  width: 480px;
  height: 480px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.slidev-layout.dda-cover::after {
  content: "";
  position: absolute;
  right: 58px;
  bottom: 72px;
  width: 180px;
  height: 180px;
  border-radius: 999px;
  background: rgba(244, 114, 182, 0.16);
  filter: blur(2px);
}
.slidev-layout.dda-cover h1 {
  max-width: 760px;
  margin-top: 1.5rem;
  margin-bottom: 0;
  background: none;
  color: white;
  -webkit-text-fill-color: white;
  font-size: 4.4rem;
  line-height: 0.98;
  letter-spacing: -0.045em;
}
.slidev-layout.dda-cover p {
  color: white;
}
</style>

---
layout: intro
introImage: '/pp-github.jpeg'
---


# $ whoami

<div class="space-y-4">
  <div>
    <p class="!mb-1 text-2xl font-bold text-purple-900">Iratxe Garrido</p>
  </div>
  <div class="rounded-2xl border border-fuchsia-200 bg-white/70 p-4 shadow-sm">
    <p class="!mb-1 text-xs font-bold uppercase tracking-widest text-fuchsia-600">Building</p>
    <p class="!mb-1 text-lg font-bold text-purple-900">Duck Dating Apps</p>
    <p class="!mb-1 text-sm font-semibold text-fuchsia-700">Technical co-founder</p>
    <p class="!mb-0 text-sm text-gray-600">Security engineer turned software developer</p>
  </div>
  <p class="!mb-0 border-l-4 border-fuchsia-500 pl-3 text-sm font-semibold text-purple-900">Not senior. Not front-end. Shipping a real product anyway.</p>
  <div class="flex flex-wrap gap-2">
    <span class="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-800">WNB.rb orga</span>
    <span class="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">Neurospicy🌶️</span>
    <span class="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-800">Polyamorous🩵</span>
    <span class="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">Sports junkie🧗🏼‍♀️</span>
    <span class="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-800">Cat lover😻</span>
  </div>
</div>

---

# Who are you?

<p class="mt-4 text-lg text-fuchsia-700">Quick show of hands:</p>

<div class="mt-6 grid grid-cols-4 gap-4">
  <div v-click class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-4">
    <p class="mb-3 text-xs font-bold uppercase tracking-widest text-fuchsia-600">01 / Tech</p>
    <p class="text-base font-semibold text-fuchsia-900">Who is a technical person?</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-4">
    <p class="mb-3 text-xs font-bold uppercase tracking-widest text-fuchsia-600">02 / Use</p>
    <p class="text-base font-semibold text-fuchsia-900">Who uses AI in their day-to-day work?</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-fuchsia-400 bg-fuchsia-100 p-4">
    <p class="mb-3 text-xs font-bold uppercase tracking-widest text-fuchsia-600">03 / Ship</p>
    <p class="text-base font-semibold text-fuchsia-900">Who has shipped AI-generated code they did not fully understand?</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-4">
    <p class="mb-3 text-xs font-bold uppercase tracking-widest text-fuchsia-600">04 / Cost</p>
    <p class="text-base font-semibold text-fuchsia-900">Who has spent too much on tokens for a feature that still did not work?</p>
  </div>
</div>

---

# Why this talk

<p class="mt-2 max-w-3xl text-xl font-semibold text-purple-900">AI is still new. There is no rulebook yet. We are all experimenting.</p>

<div class="mt-6 grid grid-cols-3 gap-4">
  <div v-click class="rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-4">
    <p class="!mb-1 text-xs font-bold uppercase tracking-widest text-fuchsia-600">01 / Learnings</p>
    <p class="!mb-0 text-sm font-semibold text-purple-900">Show what I have learned while building a real product with AI.</p>
  </div>
  <div v-click class="rounded-2xl border border-fuchsia-200 bg-white/80 p-4">
    <p class="!mb-1 text-xs font-bold uppercase tracking-widest text-fuchsia-600">02 / Mistakes</p>
    <p class="!mb-0 text-sm font-semibold text-purple-900">Share the mistakes I made, what they cost and what changed after.</p>
  </div>
  <div v-click class="rounded-2xl border border-fuchsia-400 bg-fuchsia-100 p-4">
    <p class="!mb-1 text-xs font-bold uppercase tracking-widest text-fuchsia-600">03 / Workflow</p>
    <p class="!mb-0 text-sm font-semibold text-purple-900">Help you find your own workflow, prompts, habits and boundaries.</p>
  </div>
</div>

<p v-click class="mt-8 max-w-3xl text-base font-semibold italic text-fuchsia-700">AI helps you move quickly, but you still have to know if you are moving in the right direction.</p>

<!--
Analogy to the orbit. It's easier to course correct if you are going slower
-->

---

# Model, agent, skill

<p class="mt-2 text-lg text-purple-900">A quick vocabulary before we get into the cycle.</p>

<div class="mt-6 grid grid-cols-3 gap-4">
  <div v-click="1" class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-5">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">01 / Model (Hardware)</p>
    <p class="!mb-2 text-base font-bold text-purple-900">The engine that reasons and writes.</p>
    <p class="!mb-0 text-sm text-purple-900">Examples: GPT-5, Claude Sonnet</p>
  </div>
  <div v-click="2" class="rounded-2xl border-2 border-fuchsia-400 bg-fuchsia-100 p-5">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">02 / Agent (Operating System)</p>
    <p class="!mb-2 text-base font-bold text-purple-900">A model with tools, context and a goal.</p>
    <p class="!mb-0 text-sm text-purple-900">Examples: Codex, Claude Code.</p>
  </div>
  <div v-click="3" class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-5">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">03 / Skill (App)</p>
    <p class="!mb-2 text-base font-bold text-purple-900">A reusable workflow for a specific task.</p>
    <p class="!mb-0 text-sm text-purple-900">Examples: Analyze this unfamiliar codebase, feature planner.</p>
  </div>
</div>

<p v-click="4" class="mt-6 text-center text-xl font-bold text-fuchsia-700">
  MODEL <span class="mx-3 font-normal text-gray-400">powers</span> AGENT <span class="mx-3 font-normal text-gray-400">uses</span> SKILL
</p>

<!--
HW, OS, App
-->

---
class: beat-divider
---

<p class="!mb-0 text-xs font-bold uppercase tracking-[0.32em] text-white/70">Beat 01 of 04</p>

# Prompt

<p class="!mt-6 !mb-0 max-w-xl text-xl font-medium text-white/90">Get the requirements right before the model writes anything.</p>

<style>
.slidev-layout.beat-divider {
  position: relative;
  overflow: hidden;
  background: linear-gradient(125deg, #86198f 0%, #581c87 56%, #2e1065 100%);
  color: white;
}
.slidev-layout.beat-divider::before {
  content: "";
  position: absolute;
  right: -120px;
  top: -160px;
  width: 480px;
  height: 480px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.slidev-layout.beat-divider h1 {
  margin-top: 1.5rem;
  margin-bottom: 0;
  background: none;
  color: white;
  -webkit-text-fill-color: white;
  font-size: 7rem;
  line-height: 0.95;
  letter-spacing: -0.045em;
}
.slidev-layout.beat-divider p {
  color: white;
}
.slidev-layout.beat-divider footer,
.slidev-layout.beat-divider footer p {
  color: rgba(255, 255, 255, 0.85) !important;
}
</style>

---
layout: new-section
class: dda-section-phone dda-section-white
sectionImage: '/dda-login.png'
---

<p class="!mb-2 text-xs font-bold uppercase tracking-[0.28em] text-fuchsia-600">Running example</p>

# Duck Dating Apps

<p class="mt-4 ml-auto max-w-sm text-lg font-semibold leading-relaxed text-purple-900">A protest to the current Tinderisation of dating.</p>

<div class="mt-6 ml-auto flex max-w-sm flex-wrap justify-end gap-2">
  <span class="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-800">In-person dating</span>
  <span class="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">Curated matching</span>
  <span class="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-800">Small groups</span>
</div>

<p class="mt-6 ml-auto max-w-sm border-l-4 border-fuchsia-500 pl-4 text-sm font-semibold text-purple-900">A useful place to learn, because AI mistakes do not stay abstract when people are affected by the product.</p>

---

# From interests to rounds

<p class="mt-2 text-lg font-semibold text-purple-900">People tell the app who they want to meet. The algorithm turns that into a 5-round event schedule.</p>

<div class="mt-3 grid grid-cols-[0.95fr_1.05fr] items-start gap-6">
  <div class="space-y-3">
    <div class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-4">
      <p class="!mb-1 text-xs font-bold uppercase tracking-widest text-fuchsia-600">01 / Choose Interests</p>
      <p class="!mb-1 text-sm font-bold text-purple-900">Romantic > Mixed > Social</p>
      <p class="!mb-0 text-xs leading-relaxed text-purple-900">Mutual romantic interest gets highest priority, then mixed, then social, then one way interests.</p>
    </div>
    <div v-click="1" class="rounded-2xl border-2 border-fuchsia-400 bg-fuchsia-100 p-4">
      <p class="!mb-1 text-xs font-bold uppercase tracking-widest text-fuchsia-600">02 / Build Rounds</p>
      <p class="!mb-1 text-sm font-bold text-purple-900">Everyone gets 5 dates.</p>
      <p class="!mb-0 text-xs leading-relaxed text-purple-900">The algorithm creates 5 short dates per person, balancing preferences, compatibility, and fairness.</p>
    </div>
    
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <p class="!mb-2 text-center text-xs font-bold uppercase tracking-widest text-fuchsia-600">Interests</p>
      <img :src="'/dda-interests.png'" alt="Duck Dating Apps interests screen" class="mx-auto h-[18rem] rounded-[1.4rem] border-[0.35rem] border-gray-900 bg-gray-900 object-cover shadow-xl" />
    </div>
    <div v-click="1">
      <p class="!mb-2 text-center text-xs font-bold uppercase tracking-widest text-fuchsia-600">Rounds</p>
      <img :src="'/dda-rounds.png'" alt="Duck Dating Apps rounds schedule screen" class="mx-auto h-[18rem] rounded-[1.4rem] border-[0.35rem] border-gray-900 bg-gray-900 object-cover shadow-xl" />
    </div>
  </div>
</div>
---
class: beat-divider
---

<p class="!mb-0 text-xs font-bold uppercase tracking-[0.32em] text-white/70">Beat 02 of 04</p>

# Ship

<p class="!mt-6 !mb-0 max-w-xl text-xl font-medium text-white/90">Speed is not correctness. Verify before it leaves your hands.</p>

<style>
.slidev-layout.beat-divider {
  position: relative;
  overflow: hidden;
  background: linear-gradient(125deg, #86198f 0%, #581c87 56%, #2e1065 100%);
  color: white;
}
.slidev-layout.beat-divider::before {
  content: "";
  position: absolute;
  right: -120px;
  top: -160px;
  width: 480px;
  height: 480px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.slidev-layout.beat-divider h1 {
  margin-top: 1.5rem;
  margin-bottom: 0;
  background: none;
  color: white;
  -webkit-text-fill-color: white;
  font-size: 7rem;
  line-height: 0.95;
  letter-spacing: -0.045em;
}
.slidev-layout.beat-divider p {
  color: white;
}
.slidev-layout.beat-divider footer,
.slidev-layout.beat-divider footer p {
  color: rgba(255, 255, 255, 0.85) !important;
}
</style>

---

# AI hallucinates

<p class="mt-2 text-lg font-semibold text-purple-900">A confident people pleaser will hand you an answer that <em>sounds</em> right, even if it's not.</p>

<div class="mt-5 grid grid-cols-[1fr_0.9fr_1fr] items-stretch gap-4">
  <div class="rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-4">
    <p class="!mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">01 / Source file</p>
    <div class="flex h-32 items-center justify-center rounded-xl bg-white/80">
      <img :src="'/duck-dating-apps-icon.png'" alt="Original Duck Dating Apps PNG icon" class="h-28 w-28 object-contain" />
    </div>
    <p class="!mb-0 mt-2 text-xs font-semibold text-purple-900">icon.png</p>
  </div>
  <div v-click class="rounded-2xl border border-purple-200 bg-white p-4">
    <p class="!mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">02 / My prompt</p>
    <div class="rounded-xl bg-purple-950 p-4 text-sm text-white">
      <p class="!mb-2 font-mono text-xs text-fuchsia-300">&gt; prompt</p>
      <p class="!mb-0 font-mono leading-relaxed">Transform icon.png to SVG.</p>
    </div>
    <p class="!mb-0 mt-3 text-xs text-gray-500">Expected: a vector version of the same icon.</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-rose-300 bg-rose-50 p-4">
    <p class="!mb-2 text-xs font-bold uppercase tracking-widest text-rose-600">03 / What I got</p>
    <div class="flex h-32 items-center justify-center rounded-xl bg-white/80">
      <img :src="'/screen.png'" alt="Incorrect AI-created raster result" class="h-28 w-28 object-contain" />
    </div>
    <p class="!mb-0 mt-2 text-xs font-bold text-rose-700">WTF is this? - not an SVG conversion</p>
  </div>
</div>

<div v-click="3" class="mt-4 rounded-xl border-l-4 border-rose-500 bg-rose-50 px-4 py-3 text-sm font-semibold text-purple-900">
  And that was the easy one to catch.
</div>

---


# Same confidence, <bold>invisible</bold> bug

<div class="mt-6 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3">
  <div v-click="1" class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-4">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">01 / The one I caught</p>
    <p class="!mb-1 text-base font-bold text-purple-900">The SVG</p>
    <p class="!mb-0 text-sm text-purple-900">That one took half a second, easy to catch.</p>
  </div>
  <div v-click="2" class="flex items-center justify-center text-2xl font-bold text-fuchsia-400">→</div>
  <div v-click="2" class="rounded-2xl border-2 border-fuchsia-400 bg-fuchsia-100 p-4">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">02 / The one I shipped</p>
    <p class="!mb-1 text-base font-bold text-purple-900">The rounds algorithm</p>
    <p class="!mb-0 text-sm text-purple-900">Same AI, same confidence. The algorithm "looked" good, so I shipped it.</p>
  </div>
  <div v-click="3" class="flex items-center justify-center text-2xl font-bold text-rose-400">→</div>
  <div v-click="3" class="rounded-2xl border-2 border-rose-300 bg-rose-50 p-4">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-rose-600">03 / Then, mid-event</p>
    <p class="!mb-1 text-base font-bold text-purple-900">Someone walked up to me</p>
    <p class="!mb-0 text-sm text-purple-900">"Hey… something's weird with my rounds." I started panicking...</p>
  </div>
</div>

---
class: beat-divider
---

<p class="!mb-0 text-xs font-bold uppercase tracking-[0.32em] text-white/70">Beat 03 of 04</p>

# Regret

<p class="!mt-6 !mb-0 max-w-xl text-xl font-medium text-white/90">Apparently matching people is not as easy as I thought...</p>

<style>
.slidev-layout.beat-divider {
  position: relative;
  overflow: hidden;
  background: linear-gradient(125deg, #86198f 0%, #581c87 56%, #2e1065 100%);
  color: white;
}
.slidev-layout.beat-divider::before {
  content: "";
  position: absolute;
  right: -120px;
  top: -160px;
  width: 480px;
  height: 480px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.slidev-layout.beat-divider h1 {
  margin-top: 1.5rem;
  margin-bottom: 0;
  background: none;
  color: white;
  -webkit-text-fill-color: white;
  font-size: 7rem;
  line-height: 0.95;
  letter-spacing: -0.045em;
}
.slidev-layout.beat-divider p {
  color: white;
}
.slidev-layout.beat-divider footer,
.slidev-layout.beat-divider footer p {
  color: rgba(255, 255, 255, 0.85) !important;
}
</style>

---

# The rounds algorithm

<p class="mt-2 text-lg font-semibold text-purple-900">What went wrong?</p>

  <div class="rounded-xl border border-fuchsia-200 bg-white/70 px-5 py-3">
    <div class="grid grid-cols-[4rem_repeat(5,1fr)] gap-2.5 text-center text-base font-bold">
      <div></div>
      <div class="text-fuchsia-600">Round 1</div>
      <div class="text-fuchsia-600">Round 2</div>
      <div class="text-fuchsia-600">Round 3</div>
      <div class="text-fuchsia-600">Round 4</div>
      <div class="text-fuchsia-600">Round 5</div>
      <div class="flex items-center text-purple-900">Anna</div>
      <div class="rounded-md bg-rose-200 py-2 text-rose-700">Ben ↻</div>
      <div class="rounded-md bg-amber-200 py-2 text-amber-700">Cara</div>
      <div class="rounded-md bg-rose-200 py-2 text-rose-700">Ben ↻</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="flex items-center text-purple-900">Ben</div>
      <div class="rounded-md bg-rose-200 py-2 text-rose-700">Anna ↻</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="rounded-md bg-rose-200 py-2 text-rose-700">Anna ↻</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="flex items-center text-purple-900">Cara</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="rounded-md bg-amber-200 py-2 text-amber-700">⚠ ×2</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="flex items-center text-purple-900">Dan</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="rounded-md bg-amber-200 py-2 text-amber-700">Cara</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
      <div class="rounded-md bg-fuchsia-100 py-2 text-fuchsia-400">✓</div>
    </div>
  </div>
  <div class="mt-4 flex flex-wrap gap-x-10 gap-y-1 text-sm font-semibold leading-snug">
    <span class="text-rose-700">↻ Same pair matched twice — Anna &amp; Ben in R1 and again in R3.</span>
    <span class="text-amber-700">⚠ Double-booked — Anna and Dan both sent to Cara in R2.</span>
  </div>


---

# But why did this happen?

<div class="mt-6 grid grid-cols-3 gap-4">
  <div v-click class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-5">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">01 / Edge cases</p>
    <p class="!mb-2 text-base font-bold text-purple-900">I didn't check the edge cases.</p>
    <p class="!mb-0 text-sm text-purple-900">The happy path worked on my screen, so I assumed the rest did too.</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-5">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">02 / Tests</p>
    <p class="!mb-2 text-base font-bold text-purple-900">I didn't test enough.</p>
    <p class="!mb-0 text-sm text-purple-900">No test ever tried to pair the same two people twice — so nothing caught it before the room did.</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-rose-300 bg-rose-50 p-5">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-rose-600">03 / The real one</p>
    <p class="!mb-2 text-base font-bold text-purple-900">I didn't understand the algorithm 100%.</p>
    <p class="!mb-0 text-sm text-purple-900">And if you don't fully understand the code, you can't spot its edge cases or write the tests that would catch them.</p>
  </div>
</div>


---
class: beat-divider
---

<p class="!mb-0 text-xs font-bold uppercase tracking-[0.32em] text-white/70">Beat 04 of 04</p>

# Repeat

<p class="!mt-6 !mb-0 max-w-xl text-xl font-medium text-white/90">Habits that come straight from the regrets above.</p>

<style>
.slidev-layout.beat-divider {
  position: relative;
  overflow: hidden;
  background: linear-gradient(125deg, #86198f 0%, #581c87 56%, #2e1065 100%);
  color: white;
}
.slidev-layout.beat-divider::before {
  content: "";
  position: absolute;
  right: -120px;
  top: -160px;
  width: 480px;
  height: 480px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.slidev-layout.beat-divider h1 {
  margin-top: 1.5rem;
  margin-bottom: 0;
  background: none;
  color: white;
  -webkit-text-fill-color: white;
  font-size: 7rem;
  line-height: 0.95;
  letter-spacing: -0.045em;
}
.slidev-layout.beat-divider p {
  color: white;
}
.slidev-layout.beat-divider footer,
.slidev-layout.beat-divider footer p {
  color: rgba(255, 255, 255, 0.85) !important;
}
</style>



---

<p class="!mb-0 text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-600">Takeaway</p>

# Key learnings

<p class="mt-2 text-lg font-semibold text-purple-900">If you take five things home, take these.</p>

<div class="mt-8 grid grid-cols-5 gap-3">
  <div v-click class="rounded-2xl border-2 border-fuchsia-400 bg-fuchsia-100 p-3">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">01 / Understand</p>
    <p class="!mb-2 text-sm font-bold text-purple-900">If I can't explain it, I don't ship it.</p>
    <p class="!mb-0 text-xs text-purple-900">If I can't describe what I'm building, the model can't build it right either.</p>
    <p class="!mb-0 mt-2 border-t border-fuchsia-300 pt-2 text-[0.68rem] font-semibold text-fuchsia-700">I plan first, then have a second AI poke holes in the plan.</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-3">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">02 / Test</p>
    <p class="!mb-2 text-sm font-bold text-purple-900">Test, test, test, test.</p>
    <p class="!mb-0 text-xs text-purple-900">I can't realistically read every line the AI writes — tests are how I still trust it.</p>
    <p class="!mb-0 mt-2 border-t border-fuchsia-200 pt-2 text-[0.68rem] font-semibold text-fuchsia-700">This only gets more important, not less.</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-3">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">03 / Scope</p>
    <p class="!mb-2 text-sm font-bold text-purple-900">Small enough to actually read.</p>
    <p class="!mb-0 text-xs text-purple-900">Plan the big feature, then slice it into independent, testable chunks.</p>
    <p class="!mb-0 mt-2 border-t border-fuchsia-200 pt-2 text-[0.68rem] font-semibold text-fuchsia-700">I have a feature-planner skill that does the slicing.</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-3">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">04 / Verify</p>
    <p class="!mb-2 text-sm font-bold text-purple-900">I run it. I don't take its word.</p>
    <p class="!mb-0 text-xs text-purple-900">"Looks done" and "is done" aren't the same — so I check the real thing.</p>
    <p class="!mb-0 mt-2 border-t border-fuchsia-200 pt-2 text-[0.68rem] font-semibold text-fuchsia-700">Skills: review-pr and analyze-code.</p>
  </div>
  <div v-click class="rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-3">
    <p class="mb-2 text-xs font-bold uppercase tracking-widest text-fuchsia-600">05 / Document</p>
    <p class="!mb-2 text-sm font-bold text-purple-900">Future-me forgets everything.</p>
    <p class="!mb-0 text-xs text-purple-900">I write down what changed, why, and what has to stay true.</p>
    <p class="!mb-0 mt-2 border-t border-fuchsia-200 pt-2 text-[0.68rem] font-semibold text-fuchsia-700">The more context the AI has about the app, the better it gets.</p>
  </div>
</div>

---
class: code-cta
---

<p class="!mb-0 text-sm font-bold uppercase tracking-[0.32em] text-fuchsia-600">Enough slides</p>

# Let's look at some code

<style>
.slidev-layout.code-cta h1 {
  font-size: 5.5rem;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-top: 1rem;
}
</style>

---

# Info

<p class="mt-2 text-lg text-purple-900">Find me, follow the work, join the community.</p>

<div class="mt-6 grid grid-cols-2 gap-4">
  <div class="h-36 rounded-2xl border-2 border-fuchsia-300 bg-fuchsia-50 p-5">
    <div class="flex h-full items-center gap-4">
      <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/80 overflow-hidden">
        <img :src="'/opentowork.jpeg'" alt="Iratxe Garrido profile picture" class="h-16 w-16 object-cover" />
      </div>
      <div>
        <p class="!mb-1 text-xl font-bold text-purple-900">LinkedIn</p>
        <p class="!mb-0 text-base"><a href="https://www.linkedin.com/in/iratxe-garrido/" target="_blank" class="text-fuchsia-700 hover:text-fuchsia-900">linkedin.com/in/iratxe-garrido</a></p>
      </div>
    </div>
  </div>
  <div class="h-36 rounded-2xl border-2 border-fuchsia-300 bg-fuchsia-50 p-5">
    <div class="flex h-full items-center justify-between gap-4">
      <div class="flex min-w-0 items-center gap-4">
        <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/80 overflow-hidden">
          <img :src="'/pp-github.jpeg'" alt="GitHub profile picture" class="h-16 w-16 object-cover" />
        </div>
        <div>
          <p class="!mb-1 text-xl font-bold text-purple-900">Portfolio</p>
          <p class="!mb-0 text-base"><a href="https://iratxegarrido.github.io/" target="_blank" class="text-fuchsia-700 hover:text-fuchsia-900">iratxegarrido.github.io</a></p>
        </div>
      </div>
      <div class="flex h-30 w-30 shrink-0 items-center justify-center rounded-xl border border-fuchsia-200 bg-white p-1">
        <img :src="'/portfolio-qr.svg'" alt="QR code linking to iratxegarrido.github.io" class="h-full w-full object-contain" />
      </div>
    </div>
  </div>
  <div class="h-36 rounded-2xl border-2 border-fuchsia-300 bg-fuchsia-50 p-5">
    <div class="flex h-full items-center gap-4">
      <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/80">
        <img :src="'/wnb-rb-logo.svg'" alt="WNB.rb logo" class="h-12 w-12 object-contain" />
      </div>
      <div>
        <p class="!mb-1 text-xl font-bold text-purple-900">WNB.rb</p>
        <p class="!mb-0 text-base"><a href="https://www.wnb-rb.dev/" target="_blank" class="text-fuchsia-700 hover:text-fuchsia-900">wnb-rb.dev</a></p>
      </div>
    </div>
  </div>
  <div class="h-36 rounded-2xl border-2 border-fuchsia-300 bg-fuchsia-50 p-5">
    <div class="flex h-full items-center gap-4">
      <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/80">
        <img :src="'/duck-dating-apps-icon.png'" alt="Duck Dating Apps logo" class="h-12 w-12 object-contain" />
      </div>
      <div>
        <p class="!mb-1 text-xl font-bold text-purple-900">Duck Dating Apps</p>
        <p class="!mb-1 flex items-center gap-1.5 text-base">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4 shrink-0 fill-fuchsia-700">
            <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm6.93 9a8.02 8.02 0 0 0-1.74-4.11A13.22 13.22 0 0 1 14.94 8c.23.94.38 1.95.43 3h3.56Zm-5.57 0a17.32 17.32 0 0 0-.55-3.02A9.89 9.89 0 0 1 12 8.02c-.29 0-.56-.01-.81-.04A17.32 17.32 0 0 0 10.64 11h2.72Zm-4.73 0c.05-1.05.2-2.06.43-3a13.22 13.22 0 0 1-2.25-1.11A8.02 8.02 0 0 0 5.07 11h3.56Zm-3.56 2a8.02 8.02 0 0 0 1.74 4.11A13.22 13.22 0 0 1 9.06 16a17.6 17.6 0 0 1-.43-3H5.07Zm5.57 0c.05 1.1.23 2.13.55 3.02.25-.03.52-.04.81-.04s.56.01.81.04c.32-.89.5-1.92.55-3.02h-2.72Zm4.73 0a17.6 17.6 0 0 1-.43 3 13.22 13.22 0 0 1 2.25 1.11A8.02 8.02 0 0 0 18.93 13h-3.56ZM8.2 5.44c.48.24 1 .44 1.55.6.22-.54.47-1.03.75-1.46-.83.16-1.6.45-2.3.86Zm5.3-.86c.28.43.53.92.75 1.46.55-.16 1.07-.36 1.55-.6-.7-.41-1.47-.7-2.3-.86Zm2.3 13.98c-.48-.24-1-.44-1.55-.6-.22.54-.47 1.03-.75 1.46.83-.16 1.6-.45 2.3-.86Zm-5.3.86c-.28-.43-.53-.92-.75-1.46-.55.16-1.07.36-1.55.6.7.41 1.47.7 2.3.86Z" />
          </svg>
          <a href="https://app.duckdatingapps.com/" target="_blank" class="text-fuchsia-700 hover:text-fuchsia-900">app.duckdatingapps.com</a>
        </p>
        <p class="!mb-0 flex items-center gap-1.5 text-base">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4 shrink-0 fill-fuchsia-700">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5.25-3.25a1 1 0 1 1 0 2.01 1 1 0 0 1 0-2.01Z" />
          </svg>
          <a href="https://www.instagram.com/duck.dating.apps" target="_blank" class="text-fuchsia-700 hover:text-fuchsia-900">@duck.dating.apps</a>
        </p>
      </div>
    </div>
  </div>
  
</div>

<p class="mt-6 text-center text-sm font-semibold italic text-fuchsia-700">Thank you 💜 Any Questions?</p>
