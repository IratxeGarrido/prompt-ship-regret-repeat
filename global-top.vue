<template>
  <footer
    v-if="currentPage !== 1"
    class="absolute bottom-0 left-0 right-0 grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t px-8 py-2 text-xs font-semibold uppercase tracking-wider pointer-events-none"
    :class="isWhiteSection ? 'border-fuchsia-200 text-fuchsia-700' : (isDarkSection || currentSlideRoute.meta?.layout === 'new-section') ? 'border-white/25 text-white' : 'border-fuchsia-200 text-fuchsia-700 dark:border-white/20 dark:text-white'"
  >
    <span>{{ configs.title }}</span>
    <div class="relative h-9 w-full">
      <img
        :src="isLastSlide ? '/duck-dating-apps-icon.png' : '/duck-right.png'"
        alt=""
        class="absolute right-0 top-1/2 h-9 w-auto -translate-y-1/2"
      />
      <div v-if="!isLastSlide" class="absolute inset-y-0 left-0" style="right: 0">
        <img
          src="/duck-left.png"
          alt=""
          class="absolute top-1/2 h-9 w-auto transition-all duration-500 ease-out"
          :style="{
            left: `${progress}%`,
            transform: `translate(-${progress}%, -50%)`,
          }"
        />
      </div>
    </div>
    <span class="text-right">&#64;IratxeGarrido</span>
  </footer>
</template>

<script setup lang="ts">
import configs from "#slidev/configs";
import { useNav } from "@slidev/client";
import { computed } from "vue";

const { currentPage, total, currentSlideRoute, clicks, clicksStart, clicksTotal } = useNav();

const clickProgress = computed(() => {
  const totalSlideClicks = clicksTotal.value - clicksStart.value;
  if (totalSlideClicks <= 0) return 0;

  const currentSlideClicks = clicks.value - clicksStart.value;
  return Math.min(1, Math.max(0, currentSlideClicks / (totalSlideClicks + 1)));
});

const progress = computed(() => {
  if (total.value <= 1) return 0;
  return ((currentPage.value - 1 + clickProgress.value) / (total.value - 1)) * 100;
});

const isWhiteSection = computed(() => {
  const slideClass = currentSlideRoute.value?.meta?.class;
  return Array.isArray(slideClass)
    ? slideClass.includes("dda-section-white")
    : `${slideClass ?? ""}`.includes("dda-section-white");
});

const isDarkSection = computed(() => {
  const slideClass = currentSlideRoute.value?.meta?.class;
  return Array.isArray(slideClass)
    ? slideClass.includes("beat-divider")
    : `${slideClass ?? ""}`.includes("beat-divider");
});

const isLastSlide = computed(() => currentPage.value === total.value);
</script>

<style>
.slidev-layout.new-section.dda-section-white {
  background: white !important;
}

.slidev-layout.new-section.dda-section-white h1 {
  color: #86198f;
  -webkit-text-fill-color: #86198f;
}

.slidev-layout.new-section.dda-section-white p {
  color: #581c87 !important;
}

.slidev-layout.new-section.dda-section-white > p:first-of-type {
  color: #c026d3 !important;
}

.slidev-layout.new-section.dda-section-white span {
  color: #86198f !important;
}

.slidev-layout.new-section.dda-section-phone figure {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 4rem;
}

.slidev-layout.new-section.dda-section-phone figure::before {
  content: "";
  position: absolute;
  top: 1.55rem;
  right: 8.25rem;
  z-index: 1;
  width: 3.2rem;
  height: 0.38rem;
  border-radius: 999px;
  background: #111827;
}

.slidev-layout.new-section.dda-section-phone figure img {
  width: 12rem;
  height: 26.15rem;
  max-height: 26.15rem;
  border: 0.55rem solid #111827;
  border-radius: 2rem;
  background: #111827;
  object-fit: cover;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.24);
}
</style>
