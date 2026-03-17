<template>
  <section id="rooms">
    <span class="section-tag">✦ ห้องพักและวิลล่า</span>
    <h2 class="section-title">เลือกห้องพักที่ใช่สำหรับคุณ</h2>
    <p class="section-desc">ห้องพักทุกประเภทออกแบบมาเพื่อให้คุณได้สัมผัสกับวิวทะเลอันสวยงาม</p>

    <div class="carousel-wrapper">
      <button class="carousel-btn prev" @click="prev" :disabled="currentIndex === 0">&#8249;</button>

      <div class="carousel-track-container">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * cardStep}%)` }"
        >
          <div
            v-for="room in rooms"
            :key="room.id"
            class="room-card"
            @click="selected = room"
          >
          <!-- hoo -->
            <div class="room-img">
              <!-- Superior King -->
              <img
                src="@/router/assets/image/superiorKing.jpg"
                v-if="room.type === 'Superior King'"
                class="room-image"
                alt="Superior King"
              />
              <!-- Deluxe -->
              <img 
                src = "@/router/assets/image/superiorTwin.jpg"
                v-if="room.type === 'Superior Twin'"
                class="room-image"
                alt="Superior Twin"
              />
              <!-- Suite -->
              <img 
                src = "@/router/assets/image/SuperiorOceanViewKing.jpg"  
                v-if="room.type === 'Superior Ocean View King'"
                class="room-image"
                alt="Superior Ocean View King"
              >
              <!-- Villa -->
              <img 
                src = "@/router/assets/image/deluxeOceanViewKing.jpg"
                v-if="room.type === 'Deluxe Ocean View King'"
                class="room-image"
                alt="Deluxe Ocean View King"
              >
              <!-- Grand Suite -->
              <img 
                src = "@/router/assets/image/deluxeOceanViewTwin.jpg"
                v-if="room.type === 'Deluxe Ocean View Twin'"
                class="room-image"
                alt="Deluxe Ocean View Twin"
              >
              <!-- Pool Villa -->
              <img 
                src = "@/router/assets/image/executiveFamilySuite.jpg"
                v-if="room.type === 'Executive Family Suite'"
                class="room-image"
                alt="Executive Family Suite"
              >
              <!-- Family Room -->
              <img 
                src = "@/router/assets/image/oceanViewSuite.jpg"
                v-if="room.type === 'Ocean View Suite'"
                class="room-image"
                alt="Ocean View Suite" 
              >
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
      </div>

      <button class="carousel-btn next" @click="next" :disabled="currentIndex >= maxIndex">&#8250;</button>

      <!-- Dots -->
      <div class="carousel-dots">
        <span
          v-for="(_, i) in totalDots"
          :key="i"
          class="dot"
          :class="{ active: i === currentIndex }"
          @click="currentIndex = i"
        />
      </div>
    </div>
      

    <!-- asdasd -->
    <!-- Modal -->
    <Transition name="modal">
      <div v-if="selected" class="modal-overlay" @click.self="selected = null">
        <div class="modal-box">
          <button class="modal-close" @click="selected = null">✕</button>
          <p class="modal-badge">{{ selected.badge }} </p> 
          <h2 class="modal-title">{{ selected.name }} Room</h2>
          <p class="modal-desc">{{ selected.fullDesc }}</p>
          <div class="amenities">
            <span v-for="a in selected.amenities" :key="a" class="amenity-tag">{{ a }}</span>
          </div>
          <button
            class="btn-primary"
            style="width:100%;text-align:center;background-color: #E6B31E; color: #343434;"
            @click="openModal(selected.name); selected = null"
          >
          Booking now
          </button>
          
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useBookingModal } from '../../composables/useBookingModal.js'
const { openModal } = useBookingModal()

const selected = ref(null)
const currentIndex = ref(0)
const visibleCount = ref(3)

const updateVisible = () => {
  if (window.innerWidth < 768) visibleCount.value = 1
  else if (window.innerWidth < 1100) visibleCount.value = 2
  else visibleCount.value = 3
}

onMounted(() => {
  updateVisible()
  window.addEventListener('resize', updateVisible)
})
onUnmounted(() => window.removeEventListener('resize', updateVisible))
// here
const rooms = [
  {
    id: 1, type: 'Superior King',
    badge: 'Superior',
    name: 'Superior King',
    desc: '26 m² Superior King room with king bed, private balcony, bathroom, 39" TV, free Wi-Fi, safe, refrigerator, and tea & coffee facilities.',
    price: '2,700',
    fullDesc: 'Light and spacious, our 26 m² Superior King rooms feature contemporary décor, king size bed, large bathroom with shower and toiletries, private balcony, workstation, 39" LCD TV, free WiFi access, in-room safe, refrigerator, tea & coffee-making facilities.',
    amenities: ['King size bed', 'Food And Beverage', 'Bathroom', 'Media And Technology', 'Service And Equipment'],
  },
  {
    id: 2, type: 'Superior Twin',
    badge: 'Superior',
    name: 'Superior Twin',
    desc: '26 m² Superior Twin room with two twin beds, private balcony, bathroom, 39" TV, free Wi-Fi, safe, refrigerator, and tea & coffee facilities.',
    price: '2,795',
    fullDesc: 'Light and spacious, our 26 m² Superior Twin rooms feature contemporary décor, 2 single beds, large bathroom with shower and toiletries, private balcony, workstation, 39" LCD TV, free WiFi access, in-room safe, refrigerator, tea & coffee-making facilities.',
    amenities: ['King size bed', 'Private Balcony', 'Bathroom', 'Media And Technology', 'Service And Equipment'],
  },
  {
    id: 3, type: 'Superior Ocean View King',
    badge: 'Superior',
    name: 'Superior Ocean View King',
    desc: '26 m² Superior Ocean View room with a king-size bed, private balcony, modern bathroom, 39" TV, free Wi-Fi, safe, refrigerator, and tea & coffee facilities.',
    price: '3,745',
    fullDesc: 'Our 26 m² Superior Ocean View rooms feature contemporary décor, a king-size bed and large bathroom with shower and toiletries, private balcony, workstation, 39" LCD TV, free WiFi access, in-room safe, refrigerator, tea and coffee-making facilities.',
    amenities: ['King size bed', 'Food And Beverage', 'Bathroom', 'Media And Technology', 'Service And Equipment', 'Early Check-in'],
  },
  {
    id: 4, type: 'Deluxe Ocean View King',
    badge: 'Deluxe ',
    name: 'Deluxe Ocean View King',
    desc: '26 m² ocean-view room with contemporary décor, king-size bed, private balcony, modern bathroom, 39" TV, Bose speaker, espresso machine, free Wi-Fi, and in-room amenities.',
    price: '4,080',
    fullDesc: 'Fabulous ocean view in 26 sq.m featuring contemporary décor, king-size bed, large bathroom with shower and deluxe toiletries, private balcony, workstation, 39" LCD TV, Bose Bluetooth speaker, espresso machine, a safe, free in-room refreshments and WIFI.',
    amenities: ['Ocean View', 'King Bed', 'Private Balcony', 'Free Wi-Fi', '39" TV', 'Modern Bathroom'],
  },
  {
    id: 5, type: 'Deluxe Ocean View Twin',
    badge: 'Deluxe',
    name: 'Deluxe Ocean View Twin',
    desc: '26 m² Deluxe Ocean View room with twin beds, private balcony, modern bathroom, 39" TV, Bose speaker, espresso machine, free Wi-Fi, and in-room refreshments.',
    price: '4,080',
    fullDesc: 'Fabulous 26 m² Deluxe Ocean View rooms feature contemporary décor, twin size bed,bathroom with shower and deluxe toiletries, private balcony, workstation, 39" LCD TV, Bose Bluetooth speaker, espresso machine, a safe, free in-room refreshments and WiFi',
    amenities: ['Ocean View', 'Twin Beds', 'Private Balcony', 'Free Wi-Fi', '39" TV', 'Modern Bathroom'],
  },
  {
    id: 6, type: 'Executive Family Suite',
    badge: 'Executive ',
    name: 'Executive Family Suite',
    desc: '66 m² Executive Family Suite with 2 bedrooms, living room, and private balcony. Spacious and comfortable with 2 TVs, iPod dock, and coffee machine—ideal for families or groups.',
    price: '6,000',
    fullDesc: 'Our 66 m² Executive Family Suites are ideal for families or groups, featuring two separate bedrooms, a spacious living room, and a private balcony with stunning views. Each bedroom is equipped with a comfortable bed and a 39" LCD TV, while the living room offers additional seating and an iPod docking station. The suite also includes a coffee machine, free Wi-Fi, and deluxe bathroom amenities for a luxurious stay.',
    amenities: ['Family Suite', '2 Bedrooms', 'Living Room', 'Balcony', '2 TVs', 'Coffee Machine'],
  },
  {
    id: 7, type: 'Ocean View Suite',
    badge: 'Ocean View',
    name: 'Ocean View Suite',
    desc: '40 m² Ocean View Suite with king bed, separate living room, and private balconies. Features 39" TVs, Bose speaker, free Wi-Fi, and in-room refreshments.',
    price: '7,000',
    fullDesc: 'Our 40 m² Ocean View Suites offer panoramic views, a master bedroom with a king-size bed and a separate living room, each with a private balcony, 39" LCD TVs, Bose Bluetooth speaker, safe, free in-room refreshments, and WiFi access.',
    amenities: ['Ocean View', 'King Bed', 'Separate Living Room', 'Private Balconies', '39" TVs', 'Bose Speaker'],
  },
]

const maxIndex = computed(() => Math.max(0, rooms.length - visibleCount.value))
const totalDots = computed(() => maxIndex.value + 1)
const cardStep = computed(() => 100 / visibleCount.value)

const prev = () => { if (currentIndex.value > 0) currentIndex.value-- }
const next = () => { if (currentIndex.value < maxIndex.value) currentIndex.value++ }
</script>

<style scoped>

:root {
  --deep:    #03131f;
  --ocean:   #054a70;
  --teal:    #0a7ea0;
  --sky:     #3ab4d4;
  --foam:    #aee8f5;
  --sand:    #f5e9d3;
  --pearl:   #faf7f2;
  --gold:    #c6a04f;
  --gold-lt: #e4c97e;
}

#rooms {
  padding: 5rem 4rem;
  background: var(--deep);
}
#rooms .section-tag { color: var(--sky);}
#rooms .section-title { color: #FCFAF1; }
#rooms .section-desc { color: #CACACA; }

/* ── Carousel ── */
.carousel-wrapper {
  position: relative;
  margin-top: 3rem;
}

.carousel-track-container {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 1.2rem;
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ── Room Card ── */
.room-card {
  flex: 0 0 calc((100% - 2 * 1.2rem) / 3);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}
.room-card:hover { transform: translateY(-4px); }

.room-img {
  width: 100%;
  height: 350px;
  overflow: hidden;
  display: block;
  flex-shrink: 0;
}
.room-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.room-img svg {
  width: 100%;
  height: 100%;
  display: block;
}

.room-info {
  padding: 1.2rem 1.4rem;
  background: rgba(255,255,255,0.02);
  flex: 1;
  display: flex;
  flex-direction: column;
}
.room-badge {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #E6B31E;
  margin-bottom: 0.4rem;
}
.room-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.4rem;
}
.room-desc {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}
.room-price { display: flex; align-items: baseline; gap: 0.4rem; margin-top: auto; }
.price-from {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
}
.price-num {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: var(--gold-lt);
}
.price-unit { font-size: 0.8rem; color: rgba(255,255,255,0.35); }

/* ── Carousel Buttons ── */
.carousel-btn {
  position: absolute;
  top: calc(280px / 2);
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
.carousel-btn:hover:not(:disabled) { background: rgba(255,255,255,0.18); }
.carousel-btn:disabled { opacity: 0.2; cursor: default; }
.carousel-btn.prev { left: -23px; }
.carousel-btn.next { right: -23px; }

/* ── Dots ── */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.8rem;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  cursor: pointer;
  transition: background 0.25s, transform 0.25s;
}
.dot.active {
  background: var(--gold-lt);
  transform: scale(1.3);
}

/* ── Modal ── */
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
  background: #FCFAF1;
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
  color: #E6B31E;
  margin-bottom: 0.6rem;
  font-weight: 600;
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
  /* background: var(--foam); */
  background: var(--foam);
  color: var(--ocean);
}

.btn-primary {
  width: 100%;
  text-align: center;
  background-color: #E6B31E;
  color: #343434;
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .room-card { flex: 0 0 calc((100% - 1.2rem) / 2); }
}
@media (max-width: 768px) {
  #rooms { padding: 5rem 2rem; }
  .room-card { flex: 0 0 100%; }
  .carousel-btn.prev { left: -10px; }
  .carousel-btn.next { right: -10px; }
}

/* ── Modal Transition ── */
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
</style>