<template>
  <section id="rooms">
    <span class="section-tag">✦ ห้องพักและวิลล่า</span>
    <h2 class="section-title">เลือกห้องพักที่ใช่สำหรับคุณ</h2>
    <p class="section-desc">ห้องพักทุกประเภทออกแบบมาเพื่อให้คุณได้สัมผัสกับวิวทะเลอันสวยงาม</p>

    <div class="rooms-grid">
      <div
        v-for="room in rooms"
        :key="room.id"
        class="room-card"
        @click="selected = room"
      >
        <div class="room-img">
          <!-- Deluxe -->
          <svg v-if="room.type === 'deluxe'" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="rm1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a4060"/><stop offset="100%" stop-color="#3ab4d4"/></linearGradient></defs>
            <rect width="400" height="280" fill="url(#rm1)"/>
            <rect x="0" y="170" width="400" height="110" fill="#f5e9d3"/>
            <rect x="60" y="130" width="180" height="90" rx="4" fill="white" opacity="0.9"/>
            <rect x="60" y="130" width="180" height="28" rx="4" fill="#c6a04f" opacity="0.8"/>
            <rect x="70" y="142" width="50" height="18" rx="2" fill="white"/>
            <rect x="130" y="142" width="50" height="18" rx="2" fill="white"/>
            <rect x="270" y="90" width="100" height="90" rx="3" fill="#3ab4d4" opacity="0.6"/>
            <path d="M270,145 Q320,135 370,145" stroke="white" stroke-width="1.5" fill="none" opacity="0.7"/>
            <circle cx="340" cy="105" r="14" fill="#f5d78e" opacity="0.7"/>
          </svg>
          <!-- Suite -->
          <svg v-if="room.type === 'suite'" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="rm2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#021624"/><stop offset="100%" stop-color="#054a70"/></linearGradient></defs>
            <rect width="400" height="280" fill="url(#rm2)"/>
            <rect x="0" y="190" width="400" height="90" fill="#1a1208"/>
            <rect x="20" y="40" width="360" height="160" rx="4" fill="#0a7ea0" opacity="0.5"/>
            <rect x="20" y="40" width="360" height="80" fill="#021624" opacity="0.7"/>
            <circle cx="60" cy="65" r="1.5" fill="white" opacity="0.8"/>
            <circle cx="130" cy="55" r="1" fill="white" opacity="0.6"/>
            <circle cx="250" cy="70" r="1.5" fill="white" opacity="0.7"/>
            <circle cx="330" cy="58" r="1" fill="white" opacity="0.6"/>
            <circle cx="190" cy="50" r="2" fill="#f5d78e" opacity="0.9"/>
            <path d="M20,120 Q200,110 380,120" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
            <rect x="50" y="195" width="130" height="60" rx="3" fill="#c6a04f" opacity="0.6"/>
            <rect x="220" y="200" width="140" height="50" rx="3" fill="#054a70" opacity="0.4"/>
          </svg>
          <!-- Villa -->
          <svg v-if="room.type === 'villa'" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="rm3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#56c9e8"/><stop offset="100%" stop-color="#3ab4d4"/></linearGradient></defs>
            <rect width="400" height="280" fill="url(#rm3)"/>
            <path d="M0,140 Q100,125 200,140 Q300,155 400,140 L400,280 L0,280Z" fill="#054a70" opacity="0.8"/>
            <rect x="100" y="80" width="200" height="120" rx="4" fill="white" opacity="0.92"/>
            <rect x="100" y="80" width="200" height="16" rx="4" fill="#8B6914"/>
            <line x1="120" y1="200" x2="120" y2="240" stroke="#8B6914" stroke-width="5"/>
            <line x1="200" y1="200" x2="200" y2="245" stroke="#8B6914" stroke-width="5"/>
            <line x1="280" y1="200" x2="280" y2="240" stroke="#8B6914" stroke-width="5"/>
            <rect x="80" y="190" width="240" height="16" rx="3" fill="#c4a35a"/>
            <ellipse cx="200" cy="230" rx="50" ry="16" fill="#3ab4d4" opacity="0.7"/>
            <rect x="125" y="105" width="60" height="50" rx="2" fill="#3ab4d4" opacity="0.6"/>
            <rect x="215" y="105" width="60" height="50" rx="2" fill="#3ab4d4" opacity="0.6"/>
            <circle cx="340" cy="30" r="22" fill="#f5d78e" opacity="0.8"/>
          </svg>
        </div>
        <div class="room-info">
          <p class="room-badge">{{ room.badge }}</p>
          <h3 class="room-name">{{ room.name }}</h3>
          <p class="room-desc">{{ room.desc }}</p>
          <div class="room-price">
            <span class="price-from">เริ่มต้น</span>
            <span class="price-num">{{ room.price }}</span>
            <span class="price-unit">บาท/คืน</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Transition name="modal">
      <div v-if="selected" class="modal-overlay" @click.self="selected = null">
        <div class="modal-box">
          <button class="modal-close" @click="selected = null">✕</button>
          <p class="modal-badge">{{ selected.badge }}</p>
          <h2 class="modal-title">{{ selected.name }}</h2>
          <p class="modal-desc">{{ selected.fullDesc }}</p>
          <div class="amenities">
            <span v-for="a in selected.amenities" :key="a" class="amenity-tag">{{ a }}</span>
          </div>
          <button class="btn-primary" style="width:100%;text-align:center;">จองห้องนี้</button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(null)

const rooms = [
  {
    id: 1, type: 'deluxe',
    badge: 'ห้องพักมาตรฐาน',
    name: 'Deluxe Ocean View',
    desc: 'ห้องพักสุดสบายพร้อมวิวทะเลแบบพาโนรามา เริ่มต้นประสบการณ์ Azura อย่างลงตัว',
    price: '4,500',
    fullDesc: 'Deluxe Ocean View มอบประสบการณ์การพักผ่อนที่ผสมผสานความสะดวกสบายและความงามของทะเลเข้าด้วยกัน ห้องพักพื้นที่ 45 ตร.ม. พร้อมระเบียงชมวิวทะเลส่วนตัว',
    amenities: ['ระเบียงวิวทะเล', 'เตียง King Size', 'อ่างอาบน้ำ', 'Wi-Fi ฟรี', 'มินิบาร์', 'Safe Box'],
  },
  {
    id: 2, type: 'suite',
    badge: 'ห้องสวีท',
    name: 'Premier Ocean Suite',
    desc: 'ห้องสวีทหรูหราพร้อมเลานจ์ส่วนตัว วิวทะเล 180 องศา สำหรับคู่รักและครอบครัว',
    price: '9,800',
    fullDesc: 'Premier Ocean Suite ขนาด 80 ตร.ม. พร้อมห้องนั่งเล่นแยก ระเบียงวิวทะเล 180 องศา และบริการ Butler ส่วนตัวตลอด 24 ชั่วโมง',
    amenities: ['วิว 180°', 'Butler Service', 'ห้องนั่งเล่นแยก', 'Jacuzzi', 'ชุดต้อนรับ', 'Early Check-in'],
  },
  {
    id: 3, type: 'villa',
    badge: 'วิลล่าพิเศษ',
    name: 'Overwater Villa',
    desc: 'วิลล่ากลางทะเลบนเสาไม้ สระว่ายน้ำส่วนตัว และบันไดลงทะเลโดยตรง',
    price: '22,000',
    fullDesc: 'Overwater Villa คือสุดยอดประสบการณ์ที่หายาก วิลล่า 120 ตร.ม. ตั้งอยู่กลางทะเลพร้อมสระว่ายน้ำกึ่งอินฟินิตี บันไดลงทะเลส่วนตัว และพระอาทิตย์ตกดินที่งดงาม',
    amenities: ['สระว่ายน้ำส่วนตัว', 'บันไดลงทะเล', 'วิวทะเล 360°', 'Dining บนน้ำ', 'Kayak ฟรี', 'Snorkel Set'],
  },
]
</script>

<style scoped>
#rooms {
  padding: 7rem 4rem;
  background: var(--deep);
}
#rooms .section-tag { color: var(--foam); }
#rooms .section-title { color: #fff; }
#rooms .section-desc { color: rgba(255,255,255,0.6); }

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3.5rem;
}

.room-card {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s;
}
.room-card:hover { transform: translateY(-6px); }

.room-img {
  width: 100%;
  height: 280px;
  overflow: hidden;
}
.room-img svg { width: 100%; height: 100%; }

.room-info {
  padding: 1.6rem 1.8rem 2rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-top: none;
}
.room-badge {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.5rem;
}
.room-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 0.5rem;
}
.room-desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.7;
  margin-bottom: 1.2rem;
}
.room-price { display: flex; align-items: baseline; gap: 0.4rem; }
.price-from {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}
.price-num {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--gold-lt);
}
.price-unit { font-size: 0.85rem; color: rgba(255,255,255,0.4); }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.modal-box {
  background: var(--pearl);
  max-width: 520px;
  width: 100%;
  padding: 3rem;
  position: relative;
}
.modal-close {
  position: absolute;
  top: 1.2rem; right: 1.4rem;
  background: none; border: none;
  font-size: 1.4rem; cursor: pointer; color: #666;
}
.modal-badge {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 0.6rem;
}
.modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.modal-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3a4a52;
  margin-bottom: 1.5rem;
}
.amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
}
.amenity-tag {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.7rem;
  padding: 0.3rem 0.8rem;
  background: var(--foam);
  color: var(--ocean);
}

/* Modal transition */
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

@media (max-width: 900px) {
  #rooms { padding: 5rem 2rem; }
  .rooms-grid { grid-template-columns: 1fr; }
}
</style>