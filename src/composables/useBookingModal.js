// src/router/composables/useBookingModal.js
import { ref, reactive, computed } from 'vue'

// State อยู่นอก function → singleton ใช้ร่วมได้ทั้ง app
const showModal = ref(false)
const isSuccess = ref(false)
const bookingRef = ref('')

const form = reactive({
  checkin:  new Date().toISOString().split('T')[0],
  checkout: (() => { const d = new Date(); d.setDate(d.getDate() + 5); return d.toISOString().split('T')[0] })(),
  guests:   '2',
  room:     'Superior King',
  price:    null,
})

const guest = reactive({
  firstName: '', lastName: '', email: '', phone: '', requests: '',
})



const nights = computed(() => {
  if (!form.checkin || !form.checkout) return 0
  return Math.max(0, (new Date(form.checkout) - new Date(form.checkin)) / 86400000)
})

const canSubmit = computed(() =>
  guest.firstName && guest.lastName && guest.email && guest.phone
)

function openModal(room = null) {
  if (typeof room === 'string') {
    // เรียกแบบเดิม openModal('Superior King')
    form.room = room
  } else if (room && typeof room === 'object') {
    // เรียกแบบใหม่ openModal({ name: '...', price: 2850 })
    if (room.name)  form.room  = room.name
    if (room.price) form.price = room.price
  }
  isSuccess.value = false
  showModal.value = true
}

const resetForm = () => {
 guest.firstName = ''
 guest.lastName = ''
 guest.email = ''
 guest.phone = ''
 guest.requests = ''
 form.price = null
}


function closeModal() {
  showModal.value = false
  resetForm()
}

function confirm() {
  if (!canSubmit.value) return
  bookingRef.value = 'BK-' + Date.now().toString(36).toUpperCase().slice(-6)
  isSuccess.value = true
}

export function useBookingModal() {
  return { showModal, isSuccess, bookingRef, form, guest, nights, canSubmit, openModal, closeModal, confirm }
}


