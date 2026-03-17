<template>
  <section id="hero">
    <!-- Vertical rule -->
    <div class="rule-v" />

    <!-- Horizontal rule above content -->
    <div class="content-rule" />

    <!-- Main content -->
    <div class="hero-content">
      <div class="hero-left">
        <div class="eyebrow">
          <div class="eyebrow-line" />
          <span class="eyebrow-text">Luxury Beachfront Collection</span>
        </div>

        <h1>
          ความเงียบ<br />
          <p>ที่งดงาม</p>
          เหนือกาลเวลา
        </h1>

        <p class="hero-desc">
          สัมผัสประสบการณ์ที่พักระดับ Private Villa ริมหาดส่วนตัว<br />
          ออกแบบด้วยปรัชญา Less is More ทุกรายละเอียดมีความหมาย
        </p>

        <div class="hero-actions">
          <button class="btn-book" @click="scrollTo('#booking')">จองห้องพัก</button>
          <button class="btn-link" @click="scrollTo('#rooms')">
            <span class="btn-link-arrow" />
            สำรวจห้องพัก
          </button>
        </div>
      </div>

      <div class="hero-right">
        <div v-for="stat in stats" :key="stat.label" class="stat-row">
          <div class="stat-num">{{ stat.num }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="bottom-bar">
      <span class="scroll-word">Scroll</span>
      <div class="scroll-line" />
    </div>
  </section>
</template>

<script setup>


const scrollTo = (sel) =>
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Sarabun:wght@300;400&display=swap');

:root {
  --cream: #faf8f4;
  --ink:   #1a1814;
  --gold:  #b8986a;
  --muted: #9a9186;
  --border: rgba(26, 24, 20, 0.1);
}

/* ─── Section ─────────────────────────────────── */
#hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background: var(--cream);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  
}

/* Paper grain texture */
#hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
  opacity: 0.6;
  pointer-events: none;
  z-index: 1;
  /* background-color: red; */
}

/* ─── Structural elements ─────────────────────── */
.rule-v {
  position: absolute;
  left: 13%;
  top: 0;
  width: 0.5px;
  height: 100%;
  background: var(--border);
  z-index: 2;
}

.content-rule {
  position: absolute;
  bottom: 5.5rem;
  left: 3rem;
  right: 3rem;
  height: 0.5px;
  background: var(--border);
  z-index: 4;
  transform-origin: left;
  opacity: 0;
  animation: rule-expand 1.2s 0.3s forwards;
}



/* ─── Logo ────────────────────────────────────── */
.logo {
  position: absolute;
  top: 2.5rem;
  left: 3rem;
  z-index: 10;
  opacity: 0;
  animation: fade-in 0.8s 0.2s forwards;
}
.logo-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--ink);
}
.logo-sub {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.55rem;
  font-weight: 300;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 3px;
}



/* ─── Established badge ───────────────────────── */
.badge-tr {
  position: absolute;
  top: 2.5rem;
  right: 3rem;
  z-index: 10;
  text-align: right;
  opacity: 0;
  animation: fade-in 1s 1.6s forwards;
}
.badge-tr .label {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--muted);
  display: block;
  margin-bottom: 4px;
}
.badge-tr .value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 300;
  color: var(--ink);
  line-height: 1;
  opacity: 0.08;
}

/* ─── Main grid ───────────────────────────────── */
.hero-content {
  position: relative;
  z-index: 5;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
  gap: 2rem;
  margin-left: 50px;
  margin-bottom: 150px;
  /* background-color: red; */
  font-family: sarabun;
}

/* ─── Left column ─────────────────────────────── */
.eyebrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.8rem;
  opacity: 0;
  animation: fade-up 0.8s 0.5s forwards;
  /* background-color: red; */
}
.eyebrow-line {
  width: 32px;
  height: 0.5px;
  background: var(--gold);
  /* background-color: red; */
}
.eyebrow-text {
  font-family: 'Sarabun';
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold);
}

h1 {
  font-family: 'Sarabun';
  font-size: clamp(3.2rem, 7vw, 6rem);
  font-weight: 300;
  line-height: 1.0;
  color: var(--ink);
  opacity: 0;
  animation: fade-up 1s 0.7s forwards;
}
h1 em {
  /* font-style: italic; */
font-family: 'Sarabun', serif;
  color: var(--muted);
}

.hero-desc {
  margin-top: 1.6rem;
  font-family: 'Sarabun', sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.9;
  color: var(--muted);
  max-width: 340px;
  opacity: 0;
  animation: fade-up 0.9s 1s forwards;
  /* background-color: red; */
}

.hero-actions {
  margin-top: 2.8rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  opacity: 0;
  animation: fade-up 0.9s 1.2s forwards;
}

.btn-book {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--cream);
  background: var(--ink);
  border: none;
  padding: 0.9rem 2.2rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.btn-book:hover {
  background: var(--gold);
  transform: translateY(-1px);
}

.btn-link {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: color 0.3s;
}
.btn-link:hover { color: var(--ink); }
.btn-link-arrow {
  width: 24px;
  height: 0.5px;
  background: currentColor;
  transition: width 0.3s;
}
.btn-link:hover .btn-link-arrow { width: 36px; }

/* ─── Right column — stats ────────────────────── */
.hero-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  opacity: 0;
  animation: fade-up 1s 1.3s forwards;
}
.stat-row {
  text-align: right;
  border-right: 0.5px solid var(--border);
  padding-right: 1.5rem;
}
.stat-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem;
  font-weight: 300;
  color: var(--ink);
  line-height: 1;
}
.stat-label {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.55rem;
  font-weight: 300;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 4px;
}

/* ─── Scroll indicator ────────────────────────── */
.bottom-bar {
  position: absolute;
  bottom: 2.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  opacity: 0;
  animation: fade-in 1s 2s forwards;
}
.scroll-word {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.55rem;
  font-weight: 300;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--muted);
}
.scroll-line {
  width: 0.5px;
  height: 36px;
  background: var(--border);
  position: relative;
  overflow: hidden;
}
.scroll-line::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gold);
  animation: scroll-drop 1.8s ease-in-out infinite 2s;
}

/* ─── Keyframes ───────────────────────────────── */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0);    }
}
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes rule-expand {
  from { opacity: 0; transform: scaleX(0); }
  to   { opacity: 1; transform: scaleX(1); }
}
@keyframes scroll-drop {
  0%   { top: -100%; }
  100% { top:  100%; }
}
</style>