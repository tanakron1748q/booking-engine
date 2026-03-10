<template>
  <div>
    <NavBar />
    <HeroSection />
    <BookingBar />
    <AboutSection />
    <RoomsSection />
    <ExperiencesSection />
    <GallerySection />
    <Testimonials />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './router/components/NavBar.vue'
import HeroSection from './router/components/HeroSection.vue'
import BookingBar from './router/components/BookingBar.vue'
import AboutSection from './router/components/AboutSection.vue'
import RoomsSection from './router/components/RoomsSection.vue'
import ExperiencesSection from './router/components/ExperiencesSection.vue'
import GallerySection from './router/components/GallerySection.vue'
import Testimonials from './router/components/Testimonials.vue'
import FooterSection from './router/components/FooterSection.vue'
</script>
