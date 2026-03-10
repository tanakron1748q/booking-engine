<template>
  <div id="booking">
    <div class="booking-bar">
      <div class="bk-field">
        <label>เช็คอิน</label>
        <input type="date" v-model="form.checkin" />
      </div>
      <div class="bk-field">
        <label>เช็คเอาท์</label>
        <input type="date" v-model="form.checkout" />
      </div>
      <div class="bk-field">
        <label>ผู้เข้าพัก</label>
        <select v-model="form.guests">
          <option>1 ท่าน</option>
          <option>2 ท่าน</option>
          <option>3 ท่าน</option>
          <option>4 ท่าน</option>
        </select>
      </div>
      <div class="bk-field">
        <label>ประเภทห้อง</label>
        <select v-model="form.room">
          <option>ห้องพักทุกประเภท</option>
          <option>Deluxe Ocean View</option>
          <option>Premier Suite</option>
          <option>Overwater Villa</option>
        </select>
      </div>
      <button class="bk-submit" @click="handleSearch">ค้นหา</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  checkin: '',
  checkout: '',
  guests: '2 ท่าน',
  room: 'ห้องพักทุกประเภท',
})

const handleSearch = () => {
  alert(`🌊 ค้นหาห้องพัก\n\nเช็คอิน: ${form.checkin || '-'}\nเช็คเอาท์: ${form.checkout || '-'}\nผู้เข้าพัก: ${form.guests}\nประเภทห้อง: ${form.room}`)
}
</script>

<style scoped>
#booking {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
}
.booking-bar {
  background: var(--deep);
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 960px;
  box-shadow: 0 24px 60px rgba(3, 19, 31, 0.25);
}
.bk-field {
  flex: 1;
  min-width: 160px;
  padding: 1.4rem 1.8rem;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.bk-field label {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}
.bk-field input,
.bk-field select {
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
}
.bk-field select option {
  background: var(--deep);
}
.bk-submit {
  background: var(--gold);
  border: none;
  padding: 0 2.4rem;
  cursor: pointer;
  font-family: 'Sarabun', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--deep);
  transition: background 0.3s;
  min-width: 140px;
}
.bk-submit:hover {
  background: var(--gold-lt);
}

@media (max-width: 900px) {
  .booking-bar { flex-direction: column; }
  .bk-field {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }
  .bk-submit { padding: 1.2rem; }
}
</style>