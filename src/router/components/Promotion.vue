<template>
  <section id="promotions">
    <div class="promo-inner">
      <div class="promo-header">
        <span class="section-tag">✦ โปรโมชั่นพิเศษ</span>
        <h2 class="section-title">ข้อเสนอ<em>สุดคุ้ม</em>เพื่อคุณ</h2>
      </div>

      <div class="promos-grid">
        <!-- Featured large card -->
        <div class="promo-card large" @click="openModal(featured)">
          <div class="promo-thumb large-thumb">
          <img :src="promo1" class="thumb-img" alt="" />
          <div class="thumb-overlay" />
        </div>
          <div class="promo-badge">{{ featured.badge }}</div>
          <div class="promo-content">
            <div class="promo-tag">{{ featured.tag }}</div>
            <h3 class="promo-title">{{ featured.title }}</h3>
            <p class="promo-desc">{{ featured.desc }}</p>
            <div class="promo-footer">
              <div class="promo-price">
                <div class="from">เริ่มต้นเพียง</div>
                <div class="amount">฿{{ featured.price.toLocaleString() }}</div>
                <div class="per">/ คืน</div>
              </div>
              <button class="promo-link" @click.stop="openModal(featured)">
                <span class="link-line" />จองเลย
              </button>
            </div>
          </div>
        </div>

        <!-- Small cards -->
        <div
          v-for="promo in promotions"
          :key="promo.id"
          class="promo-card"
          @click="openModal(promo)"
        >
          <div class="promo-thumb small-thumb">
            <img :src="promo.image" class="thumb-img" alt="" />
            <div class="thumb-overlay" />
          </div>

          <div class="promo-content">
            <div class="promo-tag">{{ promo.tag }}</div>
            <h3 class="promo-title small">{{ promo.title }}</h3>
            <p class="promo-desc small">{{ promo.desc }}</p>
            <div class="promo-footer">
              <div class="promo-price">
                <div class="amount small">฿{{ promo.price.toLocaleString() }}</div>
                <div class="per">/ คืน</div>
              </div>
              <button class="promo-link" @click.stop="openModal(promo)">
                <span class="link-line" />จอง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
          <div class="modal">
            <button class="modal-close" @click="closeModal">✕</button>
            <div class="modal-header">
              <div class="modal-tag">{{ selectedPromo.tag }}</div>
              <h2 class="modal-title">{{ selectedPromo.title }}</h2>
            </div>
            <div class="modal-body">
              <p class="modal-desc">{{ selectedPromo.fullDesc || selectedPromo.desc }}</p>
              <div class="modal-price">
                <span class="from">เริ่มต้น</span>
                <span class="amount">฿{{ selectedPromo?.price?.toLocaleString() }}</span>
                <span class="per">/ คืน</span>
              </div>
              <div class="modal-includes" v-if="selectedPromo.includes">
                <div class="includes-title">รวมอยู่ในแพ็กเกจ</div>
                <ul>
                  <li v-for="item in selectedPromo.includes" :key="item">{{ item }}</li>
                </ul>
              </div>
              <button class="confirm-btn" @click="bookPromo">สนใจแพ็กเกจนี้</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import promo1 from '../assets/image/Promotion/1.jpg'

import { useBookingModal } from '../../composables/useBookingModal.Js'  // เพิ่ม

const { openModal: openBookingModal } = useBookingModal()  // เพิ่ม

const showModal = ref(false)
const selectedPromo = ref({})

const featured = {
  badge: '⭐ Limited Offer',
  tag: 'Stay Longer Save More',
  title: 'พัก 4 คืน จ่ายแค่ 3 คืน',
  desc: 'พักผ่อนริมทะเลนานขึ้นในราคาสุดคุ้ม จองห้อง Ocean View หรือ Suite รับฟรี 1 คืนทันที',
  fullDesc: 'โปรโมชั่น Stay Longer Save More สำหรับผู้ที่ต้องการพักผ่อนอย่างเต็มที่ จองห้อง Deluxe Ocean View หรือ Ocean View Suite เมื่อพัก 4 คืน จ่ายเพียง 3 คืน พร้อมอาหารเช้าสำหรับ 2 ท่านทุกวัน และสิทธิ์เข้า Water Park ฟรีตลอดการเข้าพัก',
  price: 2950,
  includes: ['พัก 4 คืน จ่าย 3 คืน', 'อาหารเช้า 2 ท่าน', 'ฟรี Water Park', 'Late Check-out 14.00 น.'],
  image: new URL('../assets/image/Promotion/1.jpg', import.meta.url).href
}

const promotions = [
  {
    id: 1,
    emoji: '🌅',
    tag: 'Ocean View Deal',
    title: 'Upgrade to Ocean View',
    desc: 'จองห้อง Superior รับสิทธิ์อัปเกรดเป็น Ocean View ในราคาพิเศษ',
    fullDesc: 'จองห้อง Superior รับสิทธิ์อัปเกรดเป็นห้อง Ocean View ในราคาพิเศษ พร้อมอาหารเช้าและสิทธิ์เข้า Water Park ฟรีตลอดการเข้าพัก',
    price: 2850,
    includes: [
      'Upgrade ห้อง Ocean View',
      'อาหารเช้า 2 ท่าน',
      'Free Wi-Fi',
      'ฟรี Water Park'
    ],
    image: new URL('../assets/image/Promotion/2.jpg', import.meta.url).href
  },
  {
    id: 2,
    emoji: '💑',
    tag: 'Romantic Escape',
    title: 'Romantic Beach Getaway',
    desc: 'แพ็กเกจคู่รักพร้อมดอกไม้ตกแต่งห้องและดินเนอร์ริมทะเล',
    fullDesc: 'แพ็กเกจสำหรับคู่รัก ห้อง Deluxe Ocean View พร้อมดอกไม้ตกแต่งเตียง ชุด Bubble Bath และดินเนอร์สุดโรแมนติกสำหรับ 2 ท่านริมทะเล',
    price: 3500,
    includes: [
      'ห้อง Deluxe Ocean View',
      'ดอกไม้ตกแต่งเตียง',
      'Bubble Bath',
      'Romantic Dinner 2 ท่าน'
    ],
    image: new URL('../assets/image/Promotion/3.jpg', import.meta.url).href,
  },
  {
    id: 3,
    emoji: '👨‍👩‍👧',
    tag: 'Family Vacation',
    title: 'Family Fun Package',
    desc: 'เด็กอายุต่ำกว่า 12 ปีพักฟรี พร้อมสิทธิ์เข้า Water Park',
    fullDesc: 'แพ็กเกจสำหรับครอบครัว พักห้อง Executive Family Suite เด็กอายุต่ำกว่า 12 ปีพักฟรี พร้อมอาหารเช้าและสิทธิ์เข้า Water Park และ Kids Zone ฟรี',
    price: 4800,
    includes: [
      'เด็กพักฟรี (ต่ำกว่า 12 ปี)',
      'อาหารเช้า 4 ท่าน',
      'ฟรี Water Park',
      'Kids Zone Access'
    ],
    image: new URL('../assets/image/Promotion/4.jpg', import.meta.url).href
  },
  {
    id: 4,
    emoji: '🍹',
    tag: 'Weekend Escape',
    title: 'Weekend Beach Escape',
    desc: 'พักสุดสัปดาห์พร้อม Pool Bar Credit ฿500',
    fullDesc: 'พักผ่อนช่วงสุดสัปดาห์ในห้อง Ocean View พร้อมรับ Pool Bar Credit มูลค่า ฿500 และ Late Check-out ถึง 14.00 น.',
    price: 2750,
    includes: [
      'Pool Bar Credit ฿500',
      'Late Check-out',
      'อาหารเช้า 2 ท่าน',
      'ฟรี Water Park'
    ],
    // image: '/booking-engine/src/router/assets/image/Promotion/5.jpg',
    image: new URL('../assets/image/Promotion/5.jpg', import.meta.url).href
  },
]

function openModal(promo) {
  selectedPromo.value = promo
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  showModal.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
#promotions {
  padding: 7rem 4rem;
  background: var(--pearl);
}

.promo-inner { max-width: 1200px; margin: 0 auto; }
.promo-header { margin-bottom: 3rem; }

.section-tag {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--teal);
}
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--deep);
  line-height: 1.15;
  margin-top: 0.6rem;
}
.section-title em { font-style: italic; color: var(--teal); }

/* ── Grid ── */
.promos-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1px;
  background: rgba(3, 19, 31, 0.1);
  border: 1px solid rgba(3, 19, 31, 0.1);
}

.promo-card {
  background: var(--pearl);
  cursor: pointer;
  transition: background 0.25s;
  position: relative;
  overflow: hidden;
}
.promo-card:hover { background: var(--sand); }
.promo-card.large { grid-row: span 2; }

.promo-thumb {
  width: 100%; display: flex; align-items: center; justify-content: center;
  font-size: 3rem; position: relative; overflow: hidden;
  background: var(--sand);
  border-bottom: 1px solid rgba(3, 19, 31, 0.08);
}
.large-thumb { height: 300px; }
.small-thumb { height: 140px; font-size: 2.2rem; }
.thumb-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(245, 233, 211, 0.6) 0%, transparent 60%);
}

.thumb-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.promo-badge {
  position: absolute; top: 1rem; left: 1rem;
  font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em;
  background: var(--gold); color: var(--pearl);
  padding: 0.28rem 0.8rem;
}

.promo-content { padding: 1.5rem; }
.promo-card.large .promo-content { padding: 2rem; }

.promo-tag {
  font-size: 0.58rem; font-weight: 500; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--teal);
  margin-bottom: 0.4rem;
}
.promo-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem; font-weight: 700; color: var(--deep);
  line-height: 1.3; margin-bottom: 0.5rem;
}
.promo-title.small { font-size: 1rem; }
.promo-desc {
  font-size: 0.8rem; color: var(--ocean);
  line-height: 1.7; margin-bottom: 1.2rem;
}
.promo-desc.small { font-size: 0.74rem; margin-bottom: 0.8rem; }

.promo-footer { display: flex; align-items: flex-end; justify-content: space-between; }
.promo-price .from { font-size: 0.58rem; color: var(--sky); }
.promo-price .amount {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem; font-weight: 700; color: var(--deep);
}
.promo-price .amount.small { font-size: 1.2rem; }
.promo-price .per { font-size: 0.58rem; color: var(--sky); }

.promo-link {
  font-size: 0.58rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--sky); background: none; border: none; cursor: pointer;
  display: flex; align-items: center; gap: 0.5rem; transition: color 0.25s;
}
.promo-link:hover { color: var(--deep); }
.link-line { width: 16px; height: 0.5px; background: currentColor; transition: width 0.25s; }
.promo-link:hover .link-line { width: 26px; }

/* ── Modal transition ── */
.modal-enter-active, .modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-active .modal, .modal-leave-active .modal { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal { transform: translateY(24px); }
.modal-leave-to   .modal { transform: translateY(12px); }

/* ── Modal ── */
.modal-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(3, 19, 31, 0.6);
  backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center; padding: 1rem;
}
.modal {
  background: var(--pearl);
  border: 1px solid rgba(3, 19, 31, 0.12);
  max-width: 500px; width: 100%; max-height: 90vh; overflow-y: auto;
  position: relative;
}
.modal-close {
  position: absolute; top: 1.2rem; right: 1.2rem;
  background: none; border: 0.5px solid rgba(26, 24, 20, 0.15);
  color: #9a9186; width: 30px; height: 30px;
  cursor: pointer; font-size: 0.75rem;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.modal-close:hover { border-color: #1a1814; color: #1a1814; }

.modal-header {
  padding: 2rem 2rem 1.2rem;
  border-bottom: 1px solid rgba(3, 19, 31, 0.08);
}
.modal-tag {
  font-size: 0.55rem; font-weight: 500; letter-spacing: 0.25em;
  text-transform: uppercase; color: var(--teal); margin-bottom: 0.4rem;
}
.modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem; font-weight: 700; color: var(--deep);
}

.modal-body { padding: 1.5rem 2rem 2rem; }
.modal-desc { font-size: 0.88rem; color: var(--ocean); line-height: 1.7; margin-bottom: 1.5rem; }

.modal-price {
  display: flex; align-items: baseline; gap: 0.4rem; margin-bottom: 1.5rem;
  padding-bottom: 1.5rem; border-bottom: 1px solid rgba(3, 19, 31, 0.08);
}
.modal-price .from { font-size: 0.7rem; color: var(--sky); }
.modal-price .amount {
  font-family: 'Playfair Display', serif;
  font-size: 2rem; font-weight: 700; color: var(--deep);
}
.modal-price .per { font-size: 0.7rem; color: var(--sky); }

.modal-includes { margin-bottom: 1.8rem; }
.includes-title {
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--teal); margin-bottom: 0.8rem;
}
.modal-includes ul {
  list-style: none; display: flex; flex-direction: column; gap: 0.5rem;
}
.modal-includes ul li {
  font-size: 0.85rem; color: var(--ocean);
  display: flex; align-items: center; gap: 0.6rem;
}
.modal-includes ul li::before {
  content: '✓'; color: var(--teal); font-size: 0.75rem; flex-shrink: 0;
}

.confirm-btn {
  width: 100%;
  background: #343434;
  border: none; cursor: pointer;
  padding: 1rem;
  font-family: 'Sarabun', sans-serif;
  font-size: 0.85rem; font-weight: 700; letter-spacing: 0.1em;
  color: var(--pearl); transition: background 0.25s;

}
.confirm-btn:hover { 
  background: #E6B31E; 
  color: #343434;
}

@media (max-width: 960px) {
  #promotions { padding: 5rem 2rem; }
  .promos-grid { grid-template-columns: 1fr; }
  .promo-card.large { grid-row: auto; }
}
</style>
