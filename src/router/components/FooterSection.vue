<template>
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="brand-name">mercure.</div>
        <p class="brand-desc">
          ที่พักระดับพรีเมียมริมชายฝั่งอ่าวไทย ที่ผสมผสานความหรูหราเข้ากับเสน่ห์ของท้องทะเลพัทยาอย่างลงตัว ให้คุณได้สัมผัสการพักผ่อนท่ามกลางบรรยากาศธรรมชาติและวิวทะเลอันงดงาม
ตัวอย่าง 2 (โทนรีสอร์ต):
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
      <span>© 2025 Mercure Pattaya Ocean Resort. All rights reserved.</span>
      <!-- <div class="social-links">
        <a href="https://www.facebook.com/MercurePattayaOceanResort" aria-label="Facebook">f</a>
        <a href="https://www.instagram.com/mercurepattaya" aria-label="Instagram">ig</a>
        <a href="https://twitter.com/mercurehotels" aria-label="Twitter">tw</a>
        <a href="https://www.youtube.com/@MercureHotels" aria-label="YouTube">yt</a>
      </div> -->
      <div class="social-links">
      <a href="https://www.facebook.com/MercurePattayaOceanResort" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
      <a href="https://www.instagram.com/mercurepattaya" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="https://twitter.com/mercurehotels" aria-label="X (Twitter)">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a href="https://www.youtube.com/@MercureHotels" aria-label="YouTube">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#000" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" style="fill:var(--deep)"/></svg>
      </a>
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
    ],
  },
  {
    title: 'บริการ',
    links: [
      { label: 'สปาและนวด', href: 'https://www.booking.com/hotel/th/mercure-pattaya-ocean-resort.html' },
      { label: 'ร้านอาหาร', href: 'https://www.traveloka.com/en-ph/hotel/thailand/mercure-pattaya-ocean-resort-1000000463392' },
      { label: 'กิจกรรมทางน้ำ', href: 'https://www.booking.com/hotel/th/mercure-pattaya-ocean-resort.html' },
      { label: 'รับส่งสนามบิน', href: 'https://www.traveloka.com/en-ph/hotel/thailand/mercure-pattaya-ocean-resort-1000000463392' },
    ],
  },
  {
    title: 'ติดต่อ',
    links: [
      { label: 'พัทยา ชลบุรี', href: '#' },
      { label: '+66 2 659 2888', href: '#' },
      { label: 'mercure.erawan@accor.com', href: '#' },
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
  transition: all 0.2s;
}

.social-links a svg {
  width: 16px;
  height: 16px;
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