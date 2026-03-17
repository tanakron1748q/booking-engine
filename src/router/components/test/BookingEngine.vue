<template>
  <section class="booking-section" id="booking">
    <div class="booking-header">
      <div class="section-eyebrow">
        <div class="section-eyebrow-line" />
        <span class="section-eyebrow-text">Reserve Your Stay</span>
      </div>
      <h2 class="section-title">ค้นหา<em>ห้องพัก</em>ของคุณ</h2>
    </div>

    <!-- Tabs -->
    <div class="booking-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-btn"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >{{ tab.label }}</button>
    </div>

    <!-- Grid -->
    <div class="booking-grid">
      <div class="field-group">
        <label>เช็คอิน</label>
        <input type="date" v-model="booking.checkIn" :min="today" />
      </div>
      <div class="field-group">
        <label>เช็คเอาท์</label>
        <input type="date" v-model="booking.checkOut" :min="booking.checkIn || today" />
      </div>
      <div class="field-group select-wrap">
        <label>ประเภทห้อง</label>
        <select v-model="booking.roomType">
          <option value="">ทุกประเภท</option>
          <option value="deluxe">Deluxe Ocean View</option>
          <option value="suite">Ocean Suite</option>
          <option value="villa">Private Beach Villa</option>
          <option value="overwater">Overwater Bungalow</option>
        </select>
        <div class="chevron" />
      </div>
      <div class="field-group">
        <label>ผู้ใหญ่</label>
        <div class="counter-row">
          <button class="c-btn" @click="booking.adults = Math.max(1, booking.adults - 1)">−</button>
          <span class="val">{{ booking.adults }}</span>
          <button class="c-btn" @click="booking.adults = Math.min(6, booking.adults + 1)">+</button>
        </div>
      </div>
      <div class="field-group">
        <label>เด็ก</label>
        <div class="counter-row">
          <button class="c-btn" @click="booking.children = Math.max(0, booking.children - 1)">−</button>
          <span class="val">{{ booking.children }}</span>
          <button class="c-btn" @click="booking.children = Math.min(4, booking.children + 1)">+</button>
        </div>
      </div>
      <button class="search-btn" @click="$emit('search')">ค้นหา</button>
    </div>

    <!-- Nights indicator -->
    <div class="nights-bar" v-if="nights > 0">
      <span class="nights-item">จำนวนคืน <strong>{{ nights }} คืน</strong></span>
      <span class="nights-item">ผู้เข้าพัก <strong>{{ booking.adults + booking.children }} ท่าน</strong></span>
      <span class="nights-item" v-if="booking.roomType">
        ประเภทห้อง <strong>{{ roomTypeLabel }}</strong>
      </span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { today, useBooking } from '@/composables/useBookingModal.js'

defineEmits(['search'])

const { booking, nights, roomTypeLabel } = useBooking()

const activeTab = ref('room')
const tabs = [
  { id: 'room',    label: 'ห้องพัก' },
  { id: 'package', label: 'แพ็กเกจ' },
  { id: 'spa',     label: 'สปา' },
]
</script>

<style scoped>
.booking-section {
  padding: 6rem 3rem 5rem;
  max-width: 1100px; margin: 0 auto;
}
.booking-header { margin-bottom: 2.5rem; }

/* Tabs */
.booking-tabs {
  display: flex; border-bottom: 0.5px solid var(--border); margin-bottom: 2.5rem;
}
.tab-btn {
  background: none; border: none; cursor: pointer;
  padding: 0.8rem 1.8rem;
  font-family: 'Sarabun', sans-serif; font-size: 0.62rem; font-weight: 300;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted);
  position: relative; transition: color 0.3s;
}
.tab-btn::after {
  content: ''; position: absolute; bottom: -0.5px; left: 0; right: 0;
  height: 1px; background: var(--ink); transform: scaleX(0); transition: transform 0.3s;
}
.tab-btn.active { color: var(--ink); }
.tab-btn.active::after { transform: scaleX(1); }
.tab-btn:hover { color: var(--ink-light); }

/* Grid */
.booking-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr auto;
  border: 0.5px solid var(--border);
}
.field-group {
  padding: 1.4rem 1.8rem;
  border-right: 0.5px solid var(--border);
  display: flex; flex-direction: column; gap: 0.45rem;
  position: relative;
}
.field-group::after {
  content: ''; position: absolute; bottom: 0; left: 1.8rem; right: 1.8rem;
  height: 1px; background: var(--gold); transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s;
}
.field-group:focus-within::after { transform: scaleX(1); }

label {
  font-size: 0.54rem; font-weight: 300; letter-spacing: 0.32em;
  text-transform: uppercase; color: var(--gold);
}
input, select {
  background: transparent; border: none; outline: none;
  font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 300;
  color: var(--ink); cursor: pointer; width: 100%;
  appearance: none; -webkit-appearance: none;
}
input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.3; cursor: pointer; }

.select-wrap { position: relative; }
.chevron {
  position: absolute; right: 1.8rem; bottom: 1.6rem;
  width: 6px; height: 6px;
  border-right: 0.5px solid var(--muted); border-bottom: 0.5px solid var(--muted);
  transform: rotate(45deg); pointer-events: none;
}

/* Search button */
.search-btn {
  background: var(--ink); border: none; cursor: pointer;
  padding: 0 2.2rem;
  font-family: 'Sarabun', sans-serif; font-size: 0.58rem; font-weight: 400;
  letter-spacing: 0.3em; text-transform: uppercase; color: var(--cream);
  transition: background 0.3s, transform 0.15s; white-space: nowrap;
}
.search-btn:hover { background: var(--gold); }
.search-btn:active { transform: scale(0.98); }

/* Nights bar */
.nights-bar {
  margin-top: 1.2rem; padding: 1.1rem 1.8rem;
  border: 0.5px solid var(--border); background: var(--cream-dark);
  display: flex; gap: 2.5rem; flex-wrap: wrap;
}
.nights-item { font-size: 0.7rem; font-weight: 300; color: var(--muted); }
.nights-item strong { font-weight: 400; color: var(--ink); }

@media (max-width: 960px) {
  .booking-section { padding-left: 1.5rem; padding-right: 1.5rem; }
  .booking-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .booking-grid { grid-template-columns: 1fr; }
}
</style>
