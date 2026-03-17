<template>
  <section id="location">
    <div class="loc-inner">

      <!-- Left: info -->
      <div class="loc-info">
        <span class="section-tag">✦ ที่ตั้ง</span>
        <h2 class="section-title">ใจกลาง<em>พัทยา</em></h2>
        <p class="loc-address">
          463 Pattaya 2 Alley, Nongprue,<br />
          Bang Lamung, Chonburi 20150
        </p>

        <div class="loc-highlights">
          <div v-for="h in highlights" :key="h.label" class="loc-highlight">
            <span class="h-icon">{{ h.icon }}</span>
            <div>
              <div class="h-label">{{ h.label }}</div>
              <div class="h-dist">{{ h.dist }}</div>
            </div>
          </div>
        </div>

        <div class="loc-contact">
          <a href="tel:+6638488888" class="loc-btn">📞 +66 2 659 2888</a>
          <a
            href="https://maps.google.com/?q=Mercure+Pattaya+Ocean+Resort"
            target="_blank"
            rel="noopener"
            class="loc-btn outline"
          >
            เปิดใน Google Maps
          </a>
        </div>
      </div>

      <!-- Right: map embed -->
      <div class="loc-map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3816487678064!2d100.88456647585696!3d12.947413115406501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31029436bdda492d%3A0x31a1aa665cfd1c92!2sMercure%20Pattaya%20Ocean%20Resort!5e0!3m2!1sen!2sth!4v1773707954071!5m2!1sen!2sth" 
       width="600"
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>

    </div>
  </section>
</template>

<script setup>
const highlights = [
  { icon: '🏖️', label: 'หาดพัทยา',           dist: 'เดิน ~2 นาที' },
  { icon: '🛍️', label: 'Terminal 21 Pattaya', dist: 'เดิน ~9 นาที' },
  { icon: '🎨', label: 'Art in Paradise',      dist: '200 เมตร' },
  { icon: '🎭', label: 'Alcazar Cabaret',       dist: '500 เมตร' },
  { icon: '🏬', label: 'Central Festival',      dist: '~10 นาที (รถ)' },
  { icon: '✈️', label: 'สนามบินสุวรรณภูมิ',    dist: '~88 นาที (รถ)' },
]
</script>

<style scoped>
#location {
  background: var(--sand);
  scroll-margin-top: 90px;
}

.loc-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 560px;
}

/* ── Left info ── */
.loc-info {
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-tag {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--teal, #1d9e75);
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--deep);
  line-height: 1.15;
  margin: 0.6rem 0 1rem;
}
.section-title em {
  font-style: italic;
  color: var(--teal, #1d9e75);
}

.loc-address {
  font-size: 0.9rem;
  line-height: 1.7;
  color: #5a6a74;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

/* Highlights */
.loc-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
.loc-highlight {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
}
.h-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }
.h-label {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--deep);
}
.h-dist {
  font-size: 0.75rem;
  color: #7a8a94;
  margin-top: 2px;
}

/* Buttons */
.loc-contact {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.loc-btn {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.75rem 1.6rem;
  text-decoration: none;
  transition: all 0.25s;
  background: var(--deep);
  color: #fff;
  border: 2px solid var(--deep);
}
.loc-btn.outline {
  background: transparent;
  color: var(--deep);
}
.loc-btn:hover { background: var(--teal, #1d9e75); border-color: var(--teal, #1d9e75); color: #fff; }

/* ── Right map ── */
.loc-map {
  position: relative;
  min-height: 460px;
}
.loc-map iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

@media (max-width: 900px) {
  .loc-inner { grid-template-columns: 1fr; }
  .loc-info { padding: 4rem 2rem 3rem; }
  .loc-map { min-height: 320px; position: relative; }
  .loc-highlights { grid-template-columns: 1fr; }
}
</style>
