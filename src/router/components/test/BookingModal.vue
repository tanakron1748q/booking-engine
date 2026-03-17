<template>
  <Teleport to="body">
    <div class="modal-overlay" v-if="modalOpen" @click.self="closeModal">
      <div class="modal">
        <button class="modal-close" @click="closeModal">✕</button>

        <!-- Success screen -->
        <div class="success-screen" v-if="bookingSuccess">
          <div class="success-line" />
          <h3>จองสำเร็จแล้ว</h3>
          <p>ขอบคุณสำหรับการจองห้องพัก<br />เราจะส่งรายละเอียดไปยังอีเมลของคุณโดยเร็ว</p>
          <div class="booking-ref">REF: {{ bookingRef }}</div>
          <button class="confirm-btn" @click="closeModal">ปิดหน้าต่าง</button>
        </div>

        <!-- Booking form -->
        <div v-else>
          <div class="modal-header">
            <div class="modal-room-tag">Booking Request</div>
            <h2 class="modal-title">{{ modalRoom.name }}</h2>
          </div>

          <div class="modal-body">
            <div class="modal-form">
              <!-- Name row -->
              <div class="mf-row">
                <div class="mf-group">
                  <label>ชื่อ</label>
                  <input type="text" v-model="guestForm.firstName" placeholder="ชื่อ" />
                </div>
                <div class="mf-group">
                  <label>นามสกุล</label>
                  <input type="text" v-model="guestForm.lastName" placeholder="นามสกุล" />
                </div>
              </div>

              <div class="mf-group full">
                <label>อีเมล</label>
                <input type="email" v-model="guestForm.email" placeholder="email@example.com" />
              </div>

              <div class="mf-group full">
                <label>เบอร์โทรศัพท์</label>
                <input type="tel" v-model="guestForm.phone" placeholder="0xx-xxx-xxxx" />
              </div>

              <!-- Dates row -->
              <div class="mf-row">
                <div class="mf-group">
                  <label>เช็คอิน</label>
                  <input type="date" v-model="guestForm.checkIn" :min="today" />
                </div>
                <div class="mf-group">
                  <label>เช็คเอาท์</label>
                  <input type="date" v-model="guestForm.checkOut" :min="guestForm.checkIn" />
                </div>
              </div>

              <!-- Guests row -->
              <div class="mf-row">
                <div class="mf-group">
                  <label>ผู้ใหญ่</label>
                  <div class="counter-row">
                    <button class="c-btn" @click="guestForm.adults = Math.max(1, guestForm.adults - 1)">−</button>
                    <span class="val">{{ guestForm.adults }}</span>
                    <button class="c-btn" @click="guestForm.adults = Math.min(6, guestForm.adults + 1)">+</button>
                  </div>
                </div>
                <div class="mf-group">
                  <label>เด็ก</label>
                  <div class="counter-row">
                    <button class="c-btn" @click="guestForm.children = Math.max(0, guestForm.children - 1)">−</button>
                    <span class="val">{{ guestForm.children }}</span>
                    <button class="c-btn" @click="guestForm.children = Math.min(4, guestForm.children + 1)">+</button>
                  </div>
                </div>
              </div>

              <div class="mf-group full">
                <label>ความต้องการพิเศษ (ถ้ามี)</label>
                <textarea
                  v-model="guestForm.requests"
                  class="mf-requests"
                  placeholder="เช่น เตียงเสริม, วิวทะเล..."
                />
              </div>
            </div>

            <!-- Price summary -->
            <div class="price-summary" v-if="modalNights > 0">
              <div class="price-row">
                <span>ราคาห้อง</span>
                <span>฿{{ modalRoom.price?.toLocaleString() }} × {{ modalNights }} คืน</span>
              </div>
              <div class="price-row">
                <span>ภาษีและค่าบริการ (17%)</span>
                <span>฿{{ modalTax.toLocaleString() }}</span>
              </div>
              <div class="price-row total">
                <span>รวมทั้งหมด</span>
                <span class="val">฿{{ modalTotal.toLocaleString() }}</span>
              </div>
            </div>

            <button class="confirm-btn" @click="confirmBooking" :disabled="!canSubmit">
              {{ canSubmit ? 'ยืนยันการจอง' : 'กรุณากรอกข้อมูลให้ครบถ้วน' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { today, useModal } from '@/composables/useBookingModal.js'

const {
  modalOpen, modalRoom, bookingSuccess, bookingRef,
  guestForm, modalNights, modalTax, modalTotal, canSubmit,
  closeModal, confirmBooking,
} = useModal()

// Expose openModal so App.vue can call it
defineExpose({ openModal: useModal().openModal })
</script>

<style scoped>
.modal-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(26, 24, 20, 0.5);
  backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center; padding: 1rem;
  animation: fade-in 0.25s ease;
}
.modal {
  background: var(--cream); border: 0.5px solid var(--border-md);
  max-width: 540px; width: 100%; max-height: 90vh; overflow-y: auto;
  position: relative; animation: slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-close {
  position: absolute; top: 1.4rem; right: 1.4rem;
  background: none; border: 0.5px solid var(--border); color: var(--muted);
  width: 32px; height: 32px; cursor: pointer; font-size: 0.8rem;
  display: flex; align-items: center; justify-content: center; transition: all 0.2s;
}
.modal-close:hover { border-color: var(--ink); color: var(--ink); }

/* Modal header */
.modal-header {
  padding: 2.5rem 2.5rem 1.5rem;
  border-bottom: 0.5px solid var(--border);
}
.modal-room-tag {
  font-size: 0.55rem; font-weight: 300; letter-spacing: 0.32em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 0.4rem;
}
.modal-title {
  font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 300;
}

/* Form */
.modal-body  { padding: 2rem 2.5rem 2.5rem; }
.modal-form  { display: flex; flex-direction: column; gap: 0; }
.mf-row      { display: grid; grid-template-columns: 1fr 1fr; }

.mf-group {
  padding: 1rem 0; border-bottom: 0.5px solid var(--border); position: relative;
}
.mf-group.full { }
.mf-row .mf-group:first-child { padding-right: 1.5rem; border-right: 0.5px solid var(--border); }
.mf-row .mf-group:last-child  { padding-left:  1.5rem; }

.mf-group label {
  display: block; font-size: 0.54rem; font-weight: 300; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--gold); margin-bottom: 0.4rem;
}
.mf-group input {
  width: 100%; background: transparent; border: none; outline: none;
  font-family: 'Sarabun', sans-serif; font-size: 0.85rem; font-weight: 300; color: var(--ink);
}
.mf-group input::placeholder { color: var(--muted-lt); }
.mf-group input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.3; }

.mf-requests {
  width: 100%; background: transparent; border: none; outline: none;
  font-family: 'Sarabun', sans-serif; font-size: 0.85rem; font-weight: 300;
  color: var(--ink); resize: none; height: 60px; line-height: 1.7;
}
.mf-requests::placeholder { color: var(--muted-lt); }

/* Price summary */
.price-summary { margin-top: 1.8rem; border: 0.5px solid var(--border); }
.price-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 0.8rem 1.2rem; border-bottom: 0.5px solid var(--border);
  font-size: 0.72rem; font-weight: 300; color: var(--muted);
}
.price-row:last-child { border-bottom: none; }
.price-row.total {
  font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--ink);
  background: var(--cream-dark);
}
.price-row.total .val { font-size: 1.3rem; }

/* Confirm */
.confirm-btn {
  width: 100%; margin-top: 1.5rem;
  font-family: 'Sarabun', sans-serif; font-size: 0.6rem; font-weight: 400;
  letter-spacing: 0.28em; text-transform: uppercase;
  color: var(--cream); background: var(--ink); border: none;
  padding: 1.1rem; cursor: pointer; transition: background 0.3s;
}
.confirm-btn:hover:not(:disabled) { background: var(--gold); }
.confirm-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* Success */
.success-screen { padding: 3rem 2.5rem; text-align: center; }
.success-line   { width: 0.5px; height: 48px; background: var(--gold); margin: 0 auto 1.8rem; }
.success-screen h3 {
  font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 300; margin-bottom: 0.5rem;
}
.success-screen p {
  font-size: 0.75rem; font-weight: 300; color: var(--muted); line-height: 1.8; margin-bottom: 1.5rem;
}
.booking-ref {
  font-size: 0.7rem; letter-spacing: 0.25em;
  border: 0.5px solid var(--border); padding: 1rem; color: var(--gold); margin-bottom: 1.5rem;
}

@media (max-width: 600px) {
  .mf-row { grid-template-columns: 1fr; }
  .mf-row .mf-group:first-child { padding-right: 0; border-right: none; }
  .mf-row .mf-group:last-child  { padding-left:  0; }
}
</style>
