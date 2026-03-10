<template>
  <section id="about">
    <div class="about-visual">
      <!-- Main illustration: hotel by the sea -->
      <svg class="img-main" viewBox="0 0 500 460" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#56c9e8"/>
            <stop offset="100%" stop-color="#0a7ea0"/>
          </linearGradient>
          <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3ab4d4"/>
            <stop offset="100%" stop-color="#054a70"/>
          </linearGradient>
        </defs>
        <rect width="500" height="460" fill="url(#sky)"/>
        <ellipse cx="380" cy="60" rx="60" ry="20" fill="rgba(255,255,255,0.3)"/>
        <ellipse cx="340" cy="55" rx="40" ry="15" fill="rgba(255,255,255,0.2)"/>
        <circle cx="80" cy="70" r="36" fill="#f5d78e" opacity="0.85"/>
        <path d="M0,220 Q125,195 250,220 Q375,245 500,220 L500,460 L0,460Z" fill="url(#sea)"/>
        <rect x="155" y="140" width="190" height="200" rx="3" fill="white" opacity="0.92"/>
        <rect x="165" y="130" width="170" height="20" rx="2" fill="#e4c97e"/>
        <rect x="175" y="160" width="28" height="22" rx="2" fill="#aee8f5" opacity="0.7"/>
        <rect x="215" y="160" width="28" height="22" rx="2" fill="#aee8f5" opacity="0.7"/>
        <rect x="255" y="160" width="28" height="22" rx="2" fill="#aee8f5" opacity="0.7"/>
        <rect x="295" y="160" width="28" height="22" rx="2" fill="#aee8f5" opacity="0.7"/>
        <rect x="175" y="196" width="28" height="22" rx="2" fill="#aee8f5" opacity="0.6"/>
        <rect x="215" y="196" width="28" height="22" rx="2" fill="#aee8f5" opacity="0.6"/>
        <rect x="255" y="196" width="28" height="22" rx="2" fill="#aee8f5" opacity="0.6"/>
        <rect x="295" y="196" width="28" height="22" rx="2" fill="#aee8f5" opacity="0.6"/>
        <rect x="220" y="290" width="60" height="55" rx="2" fill="#c6a04f"/>
        <rect x="80" y="330" width="340" height="40" rx="20" fill="#3ab4d4" opacity="0.6"/>
        <line x1="50" y1="340" x2="60" y2="220" stroke="#8B6914" stroke-width="6"/>
        <ellipse cx="60" cy="215" rx="30" ry="14" fill="#2d8b3a" opacity="0.8" transform="rotate(-20,60,215)"/>
        <ellipse cx="60" cy="215" rx="30" ry="14" fill="#2d8b3a" opacity="0.7" transform="rotate(20,60,215)"/>
        <line x1="450" y1="350" x2="440" y2="230" stroke="#8B6914" stroke-width="5"/>
        <ellipse cx="440" cy="225" rx="28" ry="12" fill="#2d8b3a" opacity="0.8" transform="rotate(15,440,225)"/>
        <path d="M0,370 Q250,355 500,370 L500,460 L0,460Z" fill="#f5e9d3"/>
        <path d="M30,350 Q80,340 130,350 Q180,360 230,350" stroke="white" stroke-width="2" fill="none" opacity="0.5"/>
      </svg>

      <!-- Accent illustration: night pool -->
      <svg class="img-accent" viewBox="0 0 300 270" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pool" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#56c9e8"/>
            <stop offset="100%" stop-color="#0a7ea0"/>
          </linearGradient>
        </defs>
        <rect width="300" height="270" fill="#054a70"/>
        <rect x="0" y="100" width="300" height="170" fill="url(#pool)"/>
        <ellipse cx="140" cy="140" rx="18" ry="6" fill="rgba(255,255,255,0.3)"/>
        <circle cx="155" cy="134" r="7" fill="rgba(255,255,255,0.4)"/>
        <circle cx="40" cy="40" r="2" fill="white" opacity="0.6"/>
        <circle cx="100" cy="25" r="1.5" fill="white" opacity="0.4"/>
        <circle cx="200" cy="50" r="2" fill="white" opacity="0.5"/>
        <circle cx="260" cy="20" r="1.5" fill="white" opacity="0.4"/>
        <circle cx="240" cy="45" r="18" fill="#f5d78e" opacity="0.7"/>
        <circle cx="250" cy="40" r="15" fill="#054a70" opacity="0.5"/>
        <line x1="20" y1="155" x2="80" y2="155" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
        <line x1="100" y1="170" x2="180" y2="170" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <line x1="200" y1="160" x2="280" y2="160" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
      </svg>
    </div>

    <div class="about-text">
      <span class="section-tag">✦ เกี่ยวกับ Azura Resort</span>
      <h2 class="section-title">ที่พักระดับ 5 ดาว<br/>บนชายฝั่งอ่าวไทย</h2>
      <p class="section-desc">
        Azura Resort & Spa ตั้งอยู่บนหาดทรายขาวที่ใสสะอาดที่สุดในประเทศไทย
        ล้อมรอบด้วยทะเลสีคราม สวนปาล์มเขียวชะอุ่ม และบรรยากาศอันเงียบสงบ
        ที่จะทำให้คุณลืมทุกความเครียดและสัมผัสความสุขที่แท้จริง
      </p>
      <div class="stat-row">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-num">{{ stat.num }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { num: '186', label: 'ห้องพัก & วิลล่า' },
  { num: '5★',  label: 'ระดับมาตรฐาน' },
  { num: '24/7', label: 'บริการตลอดวัน' },
]
</script>

<style scoped>
#about {
  padding: 7rem 4rem;
  background: var(--pearl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}
.about-visual {
  position: relative;
  height: 560px;
}
.img-main {
  position: absolute;
  top: 0; left: 0;
  width: 78%; height: 460px;
}
.img-accent {
  position: absolute;
  bottom: 0; right: 0;
  width: 54%; height: 270px;
  border: 8px solid var(--pearl);
}
.stat-row {
  display: flex;
  gap: 3rem;
  margin-top: 2.4rem;
}
.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--ocean);
  line-height: 1;
}
.stat-label {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6a8090;
}

@media (max-width: 900px) {
  #about {
    grid-template-columns: 1fr;
    padding: 5rem 2rem;
  }
  .about-visual { height: 320px; }
}
</style>