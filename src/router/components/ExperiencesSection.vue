<template>
  <section id="experiences">
    <span class="section-tag">✦ ประสบการณ์พิเศษ</span>
    <h2 class="section-title">สิ่งที่รอให้คุณค้นพบ</h2>
    <div class="exp-grid">
      <div
        v-for="exp in experiences"
        :key="exp.id"
        class="exp-card"
      >
        <div class="exp-icon">{{ exp.icon }}</div>
        <h3 class="exp-name">{{ exp.name }}</h3>
        <p class="exp-text">{{ exp.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    id: 1,
    icon: '🤿',
    name: 'ดำน้ำสำรวจปะการัง',
    desc: 'สำรวจโลกใต้ทะเลที่อุดมสมบูรณ์ กับทีมผู้เชี่ยวชาญดำน้ำระดับมืออาชีพ',
  },
  {
    id: 2,
    icon: '🛥️',
    name: 'ล่องเรือชมพระอาทิตย์',
    desc: 'ล่องเรือยอช์ตส่วนตัวรับชมพระอาทิตย์ตกดิน พร้อมอาหารเย็นแสนโรแมนติก',
  },
  {
    id: 3,
    icon: '🧖',
    name: 'Ocean Spa & นวดแผนไทย',
    desc: 'สปาริมทะเลพร้อมกลิ่นไอเกลือทะเลและเสียงคลื่น ผ่อนคลายอย่างสมบูรณ์',
  },
  {
    id: 4,
    icon: '🍽️',
    name: 'Seafood Fine Dining',
    desc: 'อาหารทะเลสดใหม่แปรรูปโดยเชฟระดับมิชลิน บนระเบียงริมทะเล',
  },
]
</script>

<style scoped>
#experiences {
  padding: 7rem 4rem;
  background: var(--sand);
}
.exp-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
  margin-top: 3rem;
}
.exp-card {
  padding: 2.2rem 1.8rem;
  background: #fff;
  border-bottom: 3px solid transparent;
  transition: border-color 0.3s, transform 0.3s;
  cursor: pointer;
}
.exp-card:hover {
  border-color: var(--teal);
  transform: translateY(-4px);
}
.exp-icon {
  font-size: 2.4rem;
  margin-bottom: 1rem;
}
.exp-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}
.exp-text {
  font-size: 0.92rem;
  line-height: 1.7;
  color: #5a6a74;
}

@media (max-width: 900px) {
  #experiences { padding: 5rem 2rem; }
  .exp-grid { grid-template-columns: 1fr 1fr; }
}
</style>