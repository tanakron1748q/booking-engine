<template>
  <div id="booking">
    <div class="booking-bar">
      <div class="bk-field">
        <label>checkin</label>
        <input type="date" v-model="form.checkin" />
      </div>
      <div class="bk-field">
        <label>checkout</label>
        <input type="date" v-model="form.checkout" />
      </div>
      <div class="bk-field">
        <label>Number of Guests</label>
        <select v-model="form.guests">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
      <div class="bk-field">
        <label>Room Type</label>
        <select v-model="form.room">
          <option>Superior King</option>
          <option>Superior Twin</option>
          <option>Deluxe Ocean View King</option>
          <option>Superior Ocean View King</option>
          <option>Deluxe Ocean View King</option>
          <option>Executive Family Suite</option>
          <option>Ocean View Suite</option>
        </select>
      </div>
      <button class="bk-submit" @click="handleSearch">ค้นหา</button>
    </div>
  </div>

  <!-- Modal -->
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
        <div class="modal">
          <button class="modal-close" @click="closeModal">✕</button>

          <!-- Success screen -->
          <div class="success-screen" v-if="isSuccess">
            <div class="success-line" />
            <h3>จองสำเร็จแล้ว</h3>
            <p>ขอบคุณสำหรับการจองห้องพัก<br />เราจะส่งรายละเอียดไปยังอีเมลของคุณโดยเร็ว</p>
            <div class="booking-ref">REF: {{ bookingRef }}</div>
            <button class="modal-confirm" @click="closeModal">ปิดหน้าต่าง</button>
          </div>

          <!-- Booking form -->
          <div v-else>
            <div class="modal-header">
              <div class="modal-tag">Booking Request</div>
              <h2 class="modal-title">{{ form.room }}</h2>
            </div>

            <div class="modal-body">
              <div class="mf-row">
                <div class="mf-group">
                  <label>ชื่อ</label>
                  <input type="text" v-model="guest.firstName" placeholder="ชื่อ" />
                </div>
                <div class="mf-group">
                  <label>นามสกุล</label>
                  <input type="text" v-model="guest.lastName" placeholder="นามสกุล" />
                </div>
              </div>
              <div class="mf-group">
                <label>อีเมล</label>
                <input type="email" v-model="guest.email" placeholder="email@example.com" />
              </div>
              <div class="mf-group">
                <label>เบอร์โทรศัพท์</label>
                <input 
                type="tel" 
                v-model="guest.phone" 
                placeholder="0xx-xxx-xxxx" 
                inputmode="numeric"
                pattern="[0-9]*"
                 
                 @input = "formatPhone"
                  maxlength="12"
                />
              </div>
              <div class="mf-row">
                <div class="mf-group">
                  <label>เช็คอิน</label>
                  <input type="date" v-model="form.checkin" />
                </div>
                <div class="mf-group">
                  <label>เช็คเอาท์</label>
                  <input type="date" v-model="form.checkout" />
                </div>
              </div>
              <div class="mf-group">
                <label>ความต้องการพิเศษ (ถ้ามี)</label>
                <textarea v-model="guest.requests" class="mf-textarea" placeholder="เช่น เตียงเสริม, วิวทะเล..." />
              </div>

              <!-- Summary -->
              <div class="mf-summary" v-if="nights > 0">
                <div class="mf-summary-row">
                  <span>ห้องพัก</span>
                  <span>{{ form.room }}</span>
                </div>
                <div class="mf-summary-row">
                  <span>จำนวนคืน</span>
                  <span>{{ nights}}&nbsp;&nbsp;คืน</span>
                </div>
                <div class="mf-summary-row">
                  <span>ผู้เข้าพัก</span>
                  <span>{{ form.guests }}</span>
                </div>
              </div>

              <button class="modal-confirm" @click="confirm" :disabled="!canSubmit">
                {{ canSubmit ? 'ยืนยันการจอง' : 'กรุณากรอกข้อมูลให้ครบถ้วน' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
  
</template>

<script setup>
import { useBookingModal } from '../../composables/useBookingModal.js'

const { showModal, isSuccess, bookingRef, form, guest, nights, canSubmit, openModal, closeModal, confirm } = useBookingModal()

const handleSearch = () => openModal()

const formatPhone = (e) => {
  let value = e.target.value.replace(/\D/g, "") // เอาเฉพาะตัวเลข

  if (value.length > 3 && value.length <= 6) {
    value = value.replace(/(\d{3})(\d+)/, "$1-$2")
  } else if (value.length > 6) {
    value = value.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3")
  }

  guest.phone = value
}
</script>



<style scoped>
/* ── Booking bar (ของเดิม ไม่แตะ) ── */
#booking {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  scroll-margin-top: 90px;
}
.booking-bar {
  background: var(--deep) ;
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
  color: #E6B31E;
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
  background: #E6B31E;
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

/* ── Modal transition ── */
.modal-enter-active,
.modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-active .modal,
.modal-leave-active .modal { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-from .modal { transform: translateY(24px); }
.modal-leave-to   .modal { transform: translateY(12px); }

/* ── Modal overlay ── */
.modal-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(4, 13, 26, 0.7);
  backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
}

/* ── Modal box ── */
.modal {
  background: var(--cream, #faf8f4);
  border: 0.5px solid rgba(26, 24, 20, 0.15);
  max-width: 520px; width: 100%;
  max-height: 90vh; overflow-y: auto;
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

/* ── Modal header ── */
.modal-header {
  padding: 2rem 2rem 1.2rem;
  border-bottom: 0.5px solid rgba(26, 24, 20, 0.1);
}
.modal-tag {
  font-size: 0.52rem; font-weight: 300; letter-spacing: 0.32em;
  text-transform: uppercase; color: var(--gold, #b8986a);
  margin-bottom: 0.3rem;
}
.modal-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem; font-weight: 300; color: #1a1814;
}

/* ── Modal body ── */
.modal-body {
  padding: 1.5rem 2rem 2rem;
  display: flex; flex-direction: column;
}

.mf-row { display: grid; grid-template-columns: 1fr 1fr; }

.mf-group {
  padding: 0.8rem 0;
  border-bottom: 0.5px solid rgba(26, 24, 20, 0.1);
  /* font-weight: 600; */
}
.mf-row .mf-group:first-child {
  padding-right: 1rem;
  border-right: 0.5px solid rgba(26, 24, 20, 0.1);
}

.mf-row .mf-group:last-child { padding-left: 1rem; }

.mf-group label {
  display: block; font-size: 0.75rem; font-weight: 300;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: #E6B31E; margin-bottom: 0.35rem;

}
.mf-group input {
  width: 100%; background: transparent; border: none; outline: none;
  font-family: 'Sarabun', sans-serif; font-size: 0.85rem;
  font-weight: 300; color: #1a1814;
}
.mf-group input::placeholder { color: rgba(154, 145, 134, 0.6); }
.mf-group input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.3; }

.mf-textarea {
  width: 100%; background: transparent; border: none; outline: none;
  font-family: 'Sarabun', sans-serif; font-size: 0.85rem;
  font-weight: 300; color: #1a1814; resize: none; height: 56px; line-height: 1.7;
}
.mf-textarea::placeholder { color: rgba(154, 145, 134, 0.6); }

/* ── Summary ── */
.mf-summary {
  margin-top: 1.2rem;
  border: 0.5px solid rgba(26, 24, 20, 0.1);
}
.mf-summary-row {
  display: flex; justify-content: space-between;
  padding: 0.65rem 1rem;
  font-size: 0.72rem; font-weight: 300; color: #9a9186;
  border-bottom: 0.5px solid rgba(26, 24, 20, 0.08);
  font-family: 'Sarabun', sans-serif; 
}



.mf-summary-row:last-child { border-bottom: none; }

/* ── Confirm button ── */
.modal-confirm {
  width: 100%; margin-top: 1.2rem;
  font-family: 'Sarabun', sans-serif; font-size: 0.6rem; font-weight: 400;
  letter-spacing: 0.28em; text-transform: uppercase;
  color: #FCFAF1; 
  background: #1a1814;
  border: none; padding: 1rem; cursor: pointer; transition: background 0.3s;
}
.modal-confirm:hover:not(:disabled) {   
  background: #E6B31E; 
  color: #343434; 
}
.modal-confirm:disabled { opacity: 0.4; cursor: not-allowed; }

/* ── Success screen ── */
.success-screen {
  padding: 3rem 2rem; text-align: center;
}
.success-line {
  width: 0.5px; height: 48px;
  background: var(--gold, #b8986a);
  margin: 0 auto 1.8rem;
}
.success-screen h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem; font-weight: 300; color: #1a1814;
  margin-bottom: 0.5rem;
}
.success-screen p {
  font-size: 0.75rem; font-weight: 300; color: #9a9186;
  line-height: 1.8; margin-bottom: 1.5rem;
}
.booking-ref {
  font-size: 0.7rem; letter-spacing: 0.25em;
  border: 0.5px solid rgba(26, 24, 20, 0.12);
  padding: 1rem; color: var(--gold, #b8986a);
  margin-bottom: 1.5rem;
}

@media (max-width: 600px) {
  .mf-row { grid-template-columns: 1fr; }
  .mf-row .mf-group:first-child { padding-right: 0; border-right: none; }
  .mf-row .mf-group:last-child  { padding-left: 0; }
}
</style>