<template>
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="brand-name">Azura<span>.</span></div>
        <p class="brand-desc">
          ที่พักระดับ 5 ดาวบนชายฝั่งอ่าวไทย สัมผัสความหรูหราท่ามกลางธรรมชาติทะเลอันงดงาม
        </p>
      </div>

      <div v-for="col in columns" :key="col.title" class="footer-col">
        <h4>{{ col.title }}</h4>
        <ul>
          <li v-for="link in col.links" :key="link.label">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 Azura Resort & Spa. All rights reserved.</span>
      <div class="social-links">
        <a href="#" aria-label="Facebook">f</a>
        <a href="#" aria-label="Instagram">ig</a>
        <a href="#" aria-label="Twitter">tw</a>
        <a href="#" aria-label="YouTube">yt</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const columns = [
  {
    title: 'สำรวจ',
    links: [
      { label: 'เกี่ยวกับเรา', href: '#about' },
      { label: 'ห้องพัก', href: '#rooms' },
      { label: 'ประสบการณ์', href: '#experiences' },
      { label: 'แกลเลอรี', href: '#gallery' },
    ],
  },
  {
    title: 'บริการ',
    links: [
      { label: 'สปาและนวด', href: '#' },
      { label: 'ร้านอาหาร', href: '#' },
      { label: 'กิจกรรมทางน้ำ', href: '#' },
      { label: 'รับส่งสนามบิน', href: '#' },
    ],
  },
  {
    title: 'ติดต่อ',
    links: [
      { label: 'เกาะสมุย, สุราษฎร์ธานี', href: '#' },
      { label: '+66 77 000 000', href: '#' },
      { label: 'hello@azuraresort.th', href: '#' },
    ],
  },
]
</script>

<style scoped>
footer {
  background: var(--deep);
  color: rgba(255,255,255,0.6);
  padding: 5rem 4rem 2.5rem;
}
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.brand-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 1rem;
}
.brand-name span { color: var(--gold); }
.brand-desc {
  font-size: 0.95rem;
  line-height: 1.8;
  max-width: 280px;
}
.footer-col h4 {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.2rem;
}
.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.footer-col ul a {
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.2s;
}
.footer-col ul a:hover { color: #fff; }

.footer-bottom {
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.78rem;
}
.social-links {
  display: flex;
  gap: 1rem;
}
.social-links a {
  width: 36px; height: 36px;
  border: 1px solid rgba(255,255,255,0.15);
  display: grid;
  place-items: center;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s;
}
.social-links a:hover {
  border-color: var(--gold);
  color: var(--gold);
}

@media (max-width: 900px) {
  footer { padding: 4rem 2rem 2rem; }
  .footer-top { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .footer-bottom { flex-direction: column; gap: 1rem; }
}
</style>