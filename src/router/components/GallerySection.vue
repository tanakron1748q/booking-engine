<template>
  <section id="gallery">
    <span class="section-tag">✦ แกลเลอรี</span>
    <h2 class="section-title">ความงามของ Azura</h2>
    <div class="gallery-grid">
      <!-- Large feature -->
      <div class="g-item g-large">
        <svg viewBox="0 0 500 460" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a4060"/><stop offset="60%" stop-color="#3ab4d4"/><stop offset="100%" stop-color="#f5e9d3"/></linearGradient></defs>
          <rect width="500" height="460" fill="url(#g1)"/>
          <circle cx="80" cy="80" r="45" fill="#f5d78e" opacity="0.75"/>
          <ellipse cx="160" cy="55" rx="55" ry="18" fill="white" opacity="0.3"/>
          <path d="M0,220 Q125,200 250,220 Q375,240 500,220 L500,460 L0,460Z" fill="#054a70" opacity="0.9"/>
          <rect x="60" y="340" width="60" height="6" rx="3" fill="#e4c97e"/>
          <rect x="80" y="310" width="30" height="35" rx="2" fill="#e4c97e" opacity="0.8"/>
          <rect x="160" y="340" width="60" height="6" rx="3" fill="#e4c97e"/>
          <rect x="178" y="310" width="30" height="35" rx="2" fill="#e4c97e" opacity="0.8"/>
          <line x1="118" y1="280" x2="118" y2="350" stroke="#8B6914" stroke-width="3"/>
          <path d="M68,280 Q118,255 168,280Z" fill="#c6a04f" opacity="0.9"/>
          <line x1="400" y1="380" x2="390" y2="250" stroke="#8B6914" stroke-width="7"/>
          <ellipse cx="390" cy="245" rx="40" ry="15" fill="#2d8b3a" opacity="0.85" transform="rotate(-18,390,245)"/>
          <ellipse cx="390" cy="245" rx="38" ry="14" fill="#2d8b3a" opacity="0.7" transform="rotate(22,390,245)"/>
        </svg>
      </div>

      <!-- Hotel -->
      <div class="g-item">
        <svg viewBox="0 0 250 220" xmlns="http://www.w3.org/2000/svg">
          <rect width="250" height="220" fill="#054a70"/>
          <rect x="0" y="100" width="250" height="120" fill="#3ab4d4" opacity="0.8"/>
          <rect x="40" y="50" width="170" height="110" rx="5" fill="white" opacity="0.9"/>
          <rect x="60" y="70" width="50" height="50" rx="2" fill="#3ab4d4" opacity="0.55"/>
          <rect x="130" y="70" width="50" height="50" rx="2" fill="#3ab4d4" opacity="0.55"/>
          <rect x="75" y="130" width="100" height="30" rx="2" fill="#c6a04f" opacity="0.8"/>
          <path d="M0,130 Q62,118 125,130 Q188,142 250,130" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
        </svg>
      </div>

      <!-- Spa -->
      <div class="g-item">
        <svg viewBox="0 0 250 220" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="spa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#021624"/><stop offset="100%" stop-color="#0a7ea0"/></linearGradient></defs>
          <rect width="250" height="220" fill="url(#spa)"/>
          <circle cx="125" cy="110" r="70" fill="none" stroke="rgba(174,232,245,0.2)" stroke-width="30"/>
          <circle cx="125" cy="110" r="50" fill="#3ab4d4" opacity="0.3"/>
          <ellipse cx="125" cy="108" rx="16" ry="8" fill="#f5d78e" opacity="0.9"/>
          <ellipse cx="125" cy="108" rx="12" ry="6" fill="#f5e9d3" opacity="0.8" transform="rotate(45,125,108)"/>
          <ellipse cx="125" cy="108" rx="12" ry="6" fill="#f5e9d3" opacity="0.8" transform="rotate(90,125,108)"/>
          <circle cx="125" cy="107" r="4" fill="#c6a04f"/>
          <rect x="70" y="145" width="6" height="20" rx="2" fill="white" opacity="0.7"/>
          <circle cx="73" cy="143" r="4" fill="#f5d78e" opacity="0.8"/>
          <rect x="170" y="140" width="6" height="20" rx="2" fill="white" opacity="0.7"/>
          <circle cx="173" cy="138" r="4" fill="#f5d78e" opacity="0.8"/>
          <text x="125" y="190" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="10" font-family="serif">Ocean Spa</text>
        </svg>
      </div>

      <!-- Restaurant -->
      <div class="g-item">
        <svg viewBox="0 0 250 220" xmlns="http://www.w3.org/2000/svg">
          <rect width="250" height="220" fill="#f5e9d3"/>
          <rect x="0" y="130" width="250" height="90" fill="#3ab4d4" opacity="0.6"/>
          <rect x="55" y="80" width="140" height="80" rx="4" fill="white" opacity="0.95"/>
          <rect x="55" y="80" width="140" height="8" rx="4" fill="#e4c97e"/>
          <circle cx="90" cy="118" r="18" fill="#f5e9d3"/>
          <circle cx="90" cy="118" r="14" fill="white"/>
          <circle cx="160" cy="118" r="18" fill="#f5e9d3"/>
          <circle cx="160" cy="118" r="14" fill="white"/>
          <rect x="120" y="96" width="8" height="24" rx="2" fill="rgba(255,255,255,0.7)"/>
          <circle cx="124" cy="94" r="5" fill="#f5d78e"/>
          <path d="M0,135 Q62,128 125,135 Q188,142 250,135" fill="none" stroke="white" stroke-width="2" opacity="0.5"/>
          <text x="125" y="190" text-anchor="middle" fill="rgba(5,74,112,0.7)" font-size="10" font-family="serif">Sea View Restaurant</text>
        </svg>
      </div>

      <!-- Night cruise -->
      <div class="g-item">
        <svg viewBox="0 0 250 220" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="night" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#010c14"/><stop offset="100%" stop-color="#021e36"/></linearGradient></defs>
          <rect width="250" height="220" fill="url(#night)"/>
          <circle cx="30" cy="25" r="1.5" fill="white" opacity="0.8"/>
          <circle cx="80" cy="15" r="1" fill="white" opacity="0.6"/>
          <circle cx="150" cy="30" r="1.5" fill="white" opacity="0.7"/>
          <circle cx="210" cy="20" r="1" fill="white" opacity="0.5"/>
          <circle cx="195" cy="60" r="1.5" fill="white" opacity="0.6"/>
          <circle cx="180" cy="45" r="20" fill="#f5d78e" opacity="0.75"/>
          <path d="M0,100 Q62,88 125,100 Q188,112 250,100 L250,220 L0,220Z" fill="#054a70" opacity="0.9"/>
          <path d="M0,120 Q62,112 125,120 Q188,128 250,120" stroke="rgba(198,160,79,0.4)" stroke-width="2" fill="none"/>
          <path d="M80,98 Q125,85 170,98 L165,108 L85,108 Z" fill="rgba(255,255,255,0.08)"/>
          <line x1="125" y1="80" x2="125" y2="98" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
          <text x="125" y="185" text-anchor="middle" fill="rgba(198,160,79,0.6)" font-size="10" font-family="serif">Night Cruise</text>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
#gallery {
  padding: 7rem 4rem;
  background: var(--pearl);
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 220px);
  gap: 1rem;
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
.g-item svg {
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
}
.g-item:hover svg {
  transform: scale(1.06);
}

@media (max-width: 900px) {
  #gallery { padding: 5rem 2rem; }
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  .g-item.g-large { grid-column: span 2; }
}
</style>