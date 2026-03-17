<template>
<section class="booking-section" id="booking">
  <div class="booking-card">

    <div style="margin-bottom:2rem;">
      <div class="label">ระบบจองออนไลน์</div>
      <h2 class="title">ค้นหาห้องพักของคุณ</h2>
    </div>

    <!-- Tabs -->
    <div class="booking-tabs">
      <button class="tab-btn" :class="{active: activeTab==='room'}" @click="activeTab='room'">
        🛏 ห้องพัก
      </button>

      <button class="tab-btn" :class="{active: activeTab==='package'}" @click="activeTab='package'">
        🌊 แพ็กเกจ
      </button>

      <button class="tab-btn" :class="{active: activeTab==='spa'}" @click="activeTab='spa'">
        💆 สปา
      </button>
    </div>

    <!-- Form -->
    <div class="booking-grid">

      <div class="field-group">
        <label>วันเช็คอิน</label>
        <input type="date" v-model="booking.checkIn" :min="today"/>
      </div>

      <div class="field-group">
        <label>วันเช็คเอาต์</label>
        <input type="date" v-model="booking.checkOut" :min="booking.checkIn || today"/>
      </div>

      <div class="field-group">
        <label>ประเภทห้อง</label>
        <select v-model="booking.roomType">
          <option value="">-- เลือกประเภท --</option>
          <option value="deluxe">Deluxe Ocean View</option>
          <option value="suite">Ocean Suite</option>
          <option value="villa">Private Beach Villa</option>
          <option value="overwater">Overwater Bungalow</option>
        </select>
      </div>

      <!-- Adults -->
      <div class="field-group">
        <label>จำนวนผู้ใหญ่</label>
        <div class="guest-counter">

          <button class="counter-btn"
          @click="booking.adults = Math.max(1, booking.adults-1)">
          −
          </button>

          <span class="counter-val">{{ booking.adults }}</span>

          <button class="counter-btn"
          @click="booking.adults = Math.min(6, booking.adults+1)">
          +
          </button>

          <span class="unit">คน</span>

        </div>
      </div>

      <!-- Children -->
      <div class="field-group">
        <label>เด็ก (ต่ำกว่า 12 ปี)</label>

        <div class="guest-counter">

          <button class="counter-btn"
          @click="booking.children = Math.max(0, booking.children-1)">
          −
          </button>

          <span class="counter-val">{{ booking.children }}</span>

          <button class="counter-btn"
          @click="booking.children = Math.min(4, booking.children+1)">
          +
          </button>

          <span class="unit">คน</span>

        </div>
      </div>

      <!-- Package -->
      <div class="field-group" v-if="activeTab==='package'">
        <label>แพ็กเกจ</label>
        <select v-model="booking.package">
          <option value="">-- เลือกแพ็กเกจ --</option>
          <option value="romantic">Romantic Escape</option>
          <option value="family">Family Fun</option>
          <option value="dive">Dive & Discover</option>
        </select>
      </div>

      <!-- Spa -->
      <div class="field-group" v-if="activeTab==='spa'">
        <label>ประเภทสปา</label>
        <select v-model="booking.spa">
          <option value="">-- เลือกสปา --</option>
          <option value="ocean">Ocean Ritual</option>
          <option value="coral">Coral Glow Facial</option>
          <option value="couples">Couples Journey</option>
        </select>
      </div>

      <!-- Search -->
      <button class="search-btn" @click="searchRooms">
        🔍 ค้นหา
      </button>

    </div>

    <!-- Nights info -->
    <div v-if="nights > 0" class="booking-summary">

      <div>🌙 จำนวนคืน:
        <strong>{{ nights }} คืน</strong>
      </div>

      <div>
        👥 ผู้เข้าพัก:
        <strong>{{ booking.adults + booking.children }} คน</strong>
      </div>

      <div v-if="booking.roomType">
        🏨 ห้อง:
        <strong>{{ roomTypeLabel }}</strong>
      </div>

    </div>

  </div>
</section>
</template>


<script setup>
import { ref, computed } from 'vue'

const today = new Date().toISOString().split('T')[0]

const activeTab = ref('room')

const booking = ref({
  checkIn:'',
  checkOut:'',
  roomType:'',
  adults:2,
  children:0,
  package:'',
  spa:''
})

const nights = computed(()=>{
  if(!booking.value.checkIn || !booking.value.checkOut) return 0
  const diff = (new Date(booking.value.checkOut) - new Date(booking.value.checkIn)) / 86400000
  return Math.max(0,diff)
})

const roomTypeLabel = computed(()=>{
  const map = {
    deluxe:'Deluxe Ocean View',
    suite:'Ocean Suite',
    villa:'Private Beach Villa',
    overwater:'Overwater Bungalow'
  }
  return map[booking.value.roomType] || ''
})

function searchRooms(){
  const el = document.getElementById('rooms')
  if(el){
    el.scrollIntoView({behavior:'smooth'})
  }
}
</script>


<style scoped>

.booking-section{
  scroll-margin-top: 100px;
  padding:2rem 2rem 5rem;
  max-width:1100px;
  margin:auto;
}

.booking-card{
  background:rgba(7,22,40,0.9);
  border-radius:20px;
  padding:3rem;
}

.label{
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:2px;
  color:#8ad8ff;
}

.title{
  font-size:28px;
}

.booking-tabs{
  display:flex;
  gap:10px;
  margin:2rem 0;
}

.tab-btn{
  padding:10px 18px;
  border:none;
  border-radius:10px;
  cursor:pointer;
  background:#0c1f35;
  color:white;
}

.tab-btn.active{
  background:#4fc8e8;
  color:#00131d;
}

.booking-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:1rem;
}

.field-group{
  display:flex;
  flex-direction:column;
  gap:5px;
}

.field-group input,
.field-group select{
  padding:10px;
  border-radius:10px;
  border:1px solid #345;
}

.guest-counter{
  display:flex;
  align-items:center;
  gap:10px;
}

.counter-btn{
  width:30px;
  height:30px;
}

.counter-val{
  font-weight:bold;
}

.unit{
  margin-left:auto;
  font-size:12px;
}

.search-btn{
  background:#d4a843;
  border:none;
  padding:12px;
  border-radius:10px;
  font-weight:bold;
  cursor:pointer;
}

.booking-summary{
  margin-top:20px;
  display:flex;
  gap:20px;
}

</style>