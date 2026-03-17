<template>
  <section id="gallery">
    <!-- <span class="section-tag">✦ แกลเลอรี</span> -->
    <!-- <h2 class="section-title">ความงามของ Azura</h2> -->
    <div class="gallery-grid">
      <!-- Large feature -->
      <div class="g-item g-large">
      <!-- Large feature -->
          <img 
          src="@/router/assets/image/gallery/hero.jpg"
          alt="Hero Image"
          />
      </div>

      <!-- Hotel -->
      <div class="g-item">
        <img src="@/router/assets/image/gallery/1.jpg" alt="1">
      </div>

      <!-- Spa -->
      <div class="g-item">
       <img src="@/router/assets/image/gallery/2.jpg" alt="2">
      </div>

      <!-- Restaurant -->
      <div class="g-item">
        <img src="@/router/assets/image/gallery/3.jpg" alt="3">
      </div>

      <!-- Night cruise -->
      <div class="g-item">
        <img src="@/router/assets/image/gallery/4.jpg" alt="4">
      </div>
    </div>
  </section>
</template>

<style scoped>
#gallery {
  padding: 5rem 4rem;
  background: var(--pearl);
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 220px);
  gap: 0.8rem;
  margin-top: 3rem;
}
.g-item {
  overflow: hidden;
  cursor: pointer;
}


.g-item.g-large {
  grid-column: span 2;
  grid-row: span 2;
}
.g-item svg,.g-item img {
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
}
.g-item:hover svg {
  transform: scale(1.05);
}

@media (max-width: 900px) {
  #gallery { padding: 4rem 2rem; }
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 0.6rem;
  }
  .g-item.g-large { grid-column: span 2; }
}
</style>