<template>
  <section id="testimonials">
    <span class="section-tag">✦ เสียงจากผู้เข้าพัก</span>
    <h2 class="section-title">ความประทับใจที่ไม่รู้ลืม</h2>

    <div class="testi-wrap">
      <Transition name="fade" mode="out-in">
        <div class="testi-card" :key="current">
          <div class="stars">★★★★★</div>
          <p class="testi-text">"{{ testimonials[current].text }}"</p>
          <p class="testi-author">— {{ testimonials[current].author }}</p>
        </div>
      </Transition>

      <div class="dots">
        <button
          v-for="(_, i) in testimonials"
          :key="i"
          class="dot"
          :class="{ active: i === current }"
          @click="current = i"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const current = ref(0)

const testimonials = [
  {
    text: 'ทุกเช้าตื่นมาพบกับวิวทะเลสีครามสดใส เสียงคลื่น กลิ่นทะเล ชีวิตนี้ขอแค่นี้ก็พอแล้ว ประทับใจมากครับ',
    author: 'คุณธนวัฒน์ — กรุงเทพฯ',
  },
  {
    text: 'Overwater Villa คือประสบการณ์ที่ไม่เคยลืม ตื่นมาแล้วเดินลงทะเลได้เลย สตาฟทุกคนน่ารักและใส่ใจมากค่ะ',
    author: 'คุณปริยา & คุณนาวิน — เชียงใหม่',
  },
  {
    text: 'Ocean Spa ที่นี่เป็นสปาที่ดีที่สุดที่เคยลองมา บรรยากาศริมทะเลตอนกลางคืนทำให้ผ่อนคลายอย่างแท้จริง',
    author: 'คุณสุภาวดี — ขอนแก่น',
  },
]

let timer
onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % testimonials.length
  }, 4500)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
#testimonials {
  padding: 7rem 4rem;
  background: linear-gradient(160deg, var(--ocean), var(--deep));
  text-align: center;
}
#testimonials .section-tag { color: var(--foam); }
#testimonials .section-title { color: #fff; }

.testi-wrap {
  max-width: 680px;
  margin: 3rem auto 0;
}
.testi-card {
  padding: 3rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
}
.stars {
  color: var(--gold-lt);
  font-size: 1.1rem;
  margin-bottom: 1.4rem;
}
.testi-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-style: italic;
  color: rgba(255,255,255,0.88);
  line-height: 1.7;
  margin-bottom: 1.6rem;
}
.testi-author {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}
.dots {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.8rem;
}
.dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  padding: 0;
}
.dot.active { background: var(--gold); }

/* Transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  #testimonials { padding: 5rem 2rem; }
}
</style>