<template>
  <section id="hero">
    <div class="hero-bg"></div>

    <!-- Floating bubbles -->
    <div
      v-for="b in bubbles"
      :key="b.id"
      class="bubble"
      :style="`--x:${b.x}%;--s:${b.s}px;--dur:${b.d}s;animation-delay:${b.delay}s`"
    />

    <!-- Fish SVGs -->
    <svg class="fish fish-1" viewBox="0 0 80 40">
      <path d="M70,20 Q50,5 20,20 Q50,35 70,20Z" fill="#aee8f5"/>
      <circle cx="65" cy="19" r="2" fill="#fff"/>
      <path d="M0,20 L18,10 L18,30Z" fill="#aee8f5"/>
    </svg>
    <svg class="fish fish-2" viewBox="0 0 80 40">
      <path d="M70,20 Q50,5 20,20 Q50,35 70,20Z" fill="#3ab4d4"/>
      <circle cx="65" cy="19" r="2" fill="#fff"/>
      <path d="M0,20 L18,10 L18,30Z" fill="#3ab4d4"/>
    </svg>

    <!-- Hero Content -->
    <div class="hero-content">
      <p class="hero-tag">✦ Luxury Beachfront Resort & Spa ✦</p>


      <!-- Slideshow กลางหน้า -->
      <div class="hero-slideshow">
        <img
          v-for="(img, i) in slides"
          :key="i"
          :src="img"
          :class="{ active: i === slideIndex }"
          class="hero-slide"
          alt="hero"
        />
        <div class="slide-dots">
        <span
            v-for="i in dotWindow"
            :key="i"
            class="slide-dot"
            :class="{ active: i === slideIndex }"
            @click="goTo(i)"
        />
        </div>
      </div>

      <div class="hero-btns">
        <button class="btn-primary" @click="scrollTo('#booking')">จองห้องพัก</button>
        <button class="btn-outline" @click="scrollTo('#rooms')">สำรวจห้องพัก</button>
      </div>
    </div>

    <!-- Scroll hint -->
    

    <!-- Waves -->
    <div class="waves-wrap">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed} from 'vue'

const bubbles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  s: 8 + Math.random() * 28,
  d: 8 + Math.random() * 16,
  delay: Math.random() * 10,
}))

const scrollTo = (sel) => document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })

const slides = [
  '/booking-engine/src/router/assets/image/hero/1.jpg',
  '/booking-engine/src/router/assets/image/hero/2.jpg',
  '/booking-engine/src/router/assets/image/hero/3.jpg',
  '/booking-engine/src/router/assets/image/hero/4.jpg',
  '/booking-engine/src/router/assets/image/hero/5.jpg',
  '/booking-engine/src/router/assets/image/hero/6.jpg',
  '/booking-engine/src/router/assets/image/hero/7.jpg',
  '/booking-engine/src/router/assets/image/hero/8.jpg',
  '/booking-engine/src/router/assets/image/hero/9.jpg',
  '/booking-engine/src/router/assets/image/hero/10.jpg',
  '/booking-engine/src/router/assets/image/hero/11.jpg',
  '/booking-engine/src/router/assets/image/hero/12.jpg',
  '/booking-engine/src/router/assets/image/hero/13.jpg',
  '/booking-engine/src/router/assets/image/hero/14.jpg',
  '/booking-engine/src/router/assets/image/hero/15.jpg',
  '/booking-engine/src/router/assets/image/hero/16.jpg',
  '/booking-engine/src/router/assets/image/hero/17.jpg',
  '/booking-engine/src/router/assets/image/hero/18.jpg',
  '/booking-engine/src/router/assets/image/hero/19.jpg',
  '/booking-engine/src/router/assets/image/hero/20.jpg',
  '/booking-engine/src/router/assets/image/hero/21.jpg',
  '/booking-engine/src/router/assets/image/hero/22.jpg',
  '/booking-engine/src/router/assets/image/hero/23.jpg',
  '/booking-engine/src/router/assets/image/hero/24.jpg',
  '/booking-engine/src/router/assets/image/hero/25.jpg',
  '/booking-engine/src/router/assets/image/hero/26.jpg',
  '/booking-engine/src/router/assets/image/hero/27.jpg',
  '/booking-engine/src/router/assets/image/hero/28.jpg',
  '/booking-engine/src/router/assets/image/hero/29.jpg',
  '/booking-engine/src/router/assets/image/hero/30.jpg',
  '/booking-engine/src/router/assets/image/hero/31.jpg',
  '/booking-engine/src/router/assets/image/hero/32.jpg',
]

const slideIndex = ref(0)
let timer

const next = () => {
  slideIndex.value = (slideIndex.value + 1) % slides.length
}

const goTo = (i) => {
  slideIndex.value = i
  clearInterval(timer)
  timer = setInterval(next, 3500)
}

const dotWindow = computed(() => {
  const total = slides.length
  const half = 2  // แสดง 5 = 2 ซ้าย + ตัวเอง + 2 ขวา
  let start = Math.max(0, slideIndex.value - half)
  let end   = start + 5
  if (end > total) {
    end   = total
    start = Math.max(0, end - 5)
  }
  return Array.from({ length: end - start }, (_, i) => start + i)
})

onMounted(() => { timer = setInterval(next, 3500) })
onUnmounted(() => { clearInterval(timer) })


</script>

<style scoped>
#hero {
  position: relative;
  /* height: 100vh; */
  /* margin-bottom: 50px; */
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    #021624 0%,
    #03305a 35%,
    #066190 60%,
    #0a8ab8 80%,
    #1fb6d8 100%
  );
}

/* ── Waves ── */
.waves-wrap {
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; overflow: hidden; line-height: 0;
}
.wave { position: absolute; bottom: 0; width: 200%; }
.wave1 {
  height: 160px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 160'%3E%3Cpath fill='%230a7ea0' fill-opacity='0.6' d='M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,160 L0,160 Z'/%3E%3C/svg%3E") repeat-x bottom;
  background-size: 50% 100%;
  animation: wave-move 9s linear infinite;
}
.wave2 {
  height: 120px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%23aee8f5' fill-opacity='0.35' d='M0,60 C300,110 600,10 900,60 C1100,95 1280,30 1440,60 L1440,120 L0,120 Z'/%3E%3C/svg%3E") repeat-x bottom;
  background-size: 50% 100%;
  animation: wave-move 14s linear infinite reverse;
}
.wave3 {
  height: 70px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 70'%3E%3Cpath fill='%23faf7f2' fill-opacity='1' d='M0,35 C360,65 720,5 1080,35 C1260,50 1380,15 1440,35 L1440,70 L0,70 Z'/%3E%3C/svg%3E") repeat-x bottom;
  background-size: 50% 100%;
  animation: wave-move 7s linear infinite;
}

/* ── Bubbles ── */
.bubble {
  position: absolute;
  border-radius: 50%;
  background: rgba(174, 232, 245, 0.12);
  animation: float-up var(--dur) ease-in infinite;
  bottom: -40px;
  left: var(--x);
  width: var(--s);
  height: var(--s);
}

/* ── Fish ── */
.fish { position: absolute; opacity: 0.22; animation: float-fish 12s ease-in-out infinite; }
.fish-1 { width: 80px; bottom: 80px; left: 10%; }
.fish-2 { width: 60px; bottom: 140px; right: 14%; animation-duration: 18s; animation-direction: reverse; }

/* ── Hero Content ── */
.hero-content {
  margin-top: 100px;
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: auto;
}

.hero-tag {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold-lt);
  margin-bottom: 1.2rem;
  opacity: 0;
  animation: fade-up 0.8s 0.3s forwards;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.4rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.05;
  color: #fff;
  margin-bottom: 1.6rem;
  opacity: 0;
  animation: fade-up 0.9s 0.6s forwards;
}
.hero-title em { font-style: italic; color: var(--foam); }

/* ── Slideshow กลางหน้า ── */
.hero-slideshow {
  position: relative;          /* ไม่ absolute ไม่เต็มหน้าจอ */
  width: 80vw;
  height: 80vh;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fade-up 0.9s 0.9s forwards;
  flex-shrink: 0;
}

.hero-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.hero-slide.active { opacity: 1; }

/* Dots */
.slide-dots {
  margin-top: 5px;
  margin-bottom: 5px;
  position: absolute;
  bottom: -1.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.45rem;
  z-index: 2;
}
.slide-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}
.slide-dot.active {
  background: var(--gold-lt, #f0c866);
  transform: scale(1.4);
}

/* ── Buttons ── */
.hero-btns {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fade-up 0.9s 1.1s forwards;
}

/* ── Scroll hint ── */

</style>