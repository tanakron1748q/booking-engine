<template>
  <nav :class="{ scrolled }">
    <div class="nav-logo">mercure <span>.</span></div>
    <ul class="nav-links">
      <li><a href="#about">about us</a></li>
      <li><a href="#rooms">rooms</a></li>
      <li><a href="#experiences">experiences</a></li>
      <li><a href="#gallery">gallery</a></li>
      <!-- <li><a href="#testimonials">testimonials</a></li> -->
    </ul>
    
    <button class="nav-cta" @click="scrollTo('#booking')">Booking</button>

  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)

const handleScroll = () => { scrolled.value = window.scrollY > 50 }
const scrollTo = (sel) => document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>


<style scoped>

nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 4rem;
  transition: background 0.4s, backdrop-filter 0.4s;
  /* background-color: var(--ocean); */
}
nav.scrolled {
  background: rgba(3, 19, 31, 0.82);
  backdrop-filter: blur(18px);
}


.nav-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
  cursor: pointer;
}

.nav-logo span {
  color: #FCFAF1;
  transition: color 0.3s;
}



.nav-links {
  display: flex;
  gap: 2.4rem;
  list-style: none;
}
.nav-links a {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--gold-lt); }


.nav-cta {
  font-family: 'Sarabun', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  /* border: 1px solid var(--gold); */
  border: 1px solid #E6B31E;
  color: #E6B31E;
  /* color: #999999; */
  background: transparent;
  padding: 0.55rem 1.6rem;
  cursor: pointer;
  transition: all 0.3s;
  /* background: red; */
}
.nav-cta:hover {
  /* background: red; */
  background: #E6B31E;
  color: #FCFAF1;
  /* color: red; */
}

@media (max-width: 900px) {
  nav { padding: 1.2rem 2rem; }
  .nav-links { display: none; }
}
</style>