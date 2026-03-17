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
  padding: 5rem 4rem;
  background: linear-gradient(160deg, var(--ocean), var(--deep));
  text-align: center;
}
#testimonials .section-tag { color: var(--foam); }
#testimonials .section-title { color: #fff; }

.testi-wrap {
  max-width: 680px;
  margin: 2.5rem auto 0;
}
.testi-card {
  padding: 2rem 0;
  background: transparent;
  border: none;
}
.stars {
  color: var(--gold-lt);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  letter-spacing: 0.2em;
}
.testi-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: rgba(255,255,255,0.85);
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-weight: 300;
}
.testi-author {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(198,160,79,0.7);
}
.dots {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1.2rem;
}
.dot {
  width: 4px; height: 4px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  padding: 0;
}
.dot.active { background: rgba(198,160,79,0.6); }

/* Transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  #testimonials { padding: 4rem 2rem; }
}
</style>