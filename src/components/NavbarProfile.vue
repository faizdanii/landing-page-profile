<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    isMobileOpen.value = false
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container">
      <!-- Brand / Identity -->
      <div class="navbar__brand" @click="scrollToSection('hero')">
        <div class="navbar__avatar">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="url(#avatarGrad)" />
            <text
              x="50%"
              y="55%"
              dominant-baseline="middle"
              text-anchor="middle"
              font-family="Outfit, sans-serif"
              font-size="14"
              font-weight="700"
              fill="white"
            >
              FSD
            </text>
            <defs>
              <linearGradient
                id="avatarGrad"
                x1="0"
                y1="0"
                x2="40"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3b82f6" />
                <stop offset="1" stop-color="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="navbar__identity">
          <span class="navbar__name">Faiz Sukma Danii</span>
          <span class="navbar__title">
            Front End Developer
            <span class="navbar__at">@ PLN ICON PLUS</span>
          </span>
        </div>
      </div>

      <!-- Desktop Nav Links -->
      <ul class="navbar__links">
        <li><button class="nav-link" @click="scrollToSection('about')">About</button></li>
        <li><button class="nav-link" @click="scrollToSection('experience')">Experience</button></li>
        <li><button class="nav-link" @click="scrollToSection('skills')">Skills</button></li>
        <li><button class="nav-link" @click="scrollToSection('education')">Education</button></li>
        <li>
          <button class="nav-cta" @click="scrollToSection('contact')">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact
          </button>
        </li>
      </ul>

      <!-- Hamburger -->
      <button
        class="navbar__hamburger"
        :class="{ open: isMobileOpen }"
        @click="isMobileOpen = !isMobileOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': isMobileOpen }">
      <button class="mobile-link" @click="scrollToSection('about')">About</button>
      <button class="mobile-link" @click="scrollToSection('experience')">Experience</button>
      <button class="mobile-link" @click="scrollToSection('skills')">Skills</button>
      <button class="mobile-link" @click="scrollToSection('education')">Education</button>
      <button class="mobile-link mobile-link--cta" @click="scrollToSection('contact')">
        Contact Me
      </button>
    </div>
  </nav>
</template>

<style scoped>
/* ===== NAVBAR ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  z-index: 1000;
  transition: all 0.35s ease;
  padding: 0.6rem 0;
}

.navbar--scrolled {
  background: rgba(4, 7, 26, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  padding: 0.4rem 0;
}

.navbar__container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* Brand */
.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  flex-shrink: 0;
}

.navbar__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
  transition: box-shadow 0.3s ease;
}

.navbar__brand:hover .navbar__avatar {
  box-shadow:
    0 0 0 3px rgba(59, 130, 246, 0.7),
    0 0 20px rgba(59, 130, 246, 0.3);
}

.navbar__identity {
  display: flex;
  flex-direction: column;
  gap: 0.05rem;
}

.navbar__name {
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #f1f5f9;
  line-height: 1.2;
  white-space: nowrap;
}

.navbar__title {
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  color: #94a3b8;
  white-space: nowrap;
  line-height: 1;
}

.navbar__at {
  color: #06b6d4;
  font-weight: 600;
}

/* Nav Links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
}

.nav-link {
  background: transparent;
  border: none;
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.06);
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  border: none;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
  margin-left: 0.25rem;
}

.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.navbar__hamburger:hover {
  background: rgba(255, 255, 255, 0.06);
}

.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #94a3b8;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.navbar__hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background: #3b82f6;
}

.navbar__hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.navbar__hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background: #3b82f6;
}

/* Mobile Menu */
.navbar__mobile {
  display: none;
  flex-direction: column;
  padding: 0 1.5rem 1rem;
  gap: 0.25rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.navbar__mobile--open {
  max-height: 400px;
}

.mobile-link {
  background: transparent;
  border: none;
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}

.mobile-link:hover {
  background: rgba(59, 130, 246, 0.08);
  color: #f1f5f9;
}

.mobile-link--cta {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  color: #fff;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 600;
}

.mobile-link--cta:hover {
  background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%);
  color: #fff;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar__links {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__mobile {
    display: flex;
  }

  .navbar__name {
    font-size: 0.9rem;
  }

  .navbar__title {
    font-size: 0.65rem;
  }
}

@media (max-width: 480px) {
  .navbar__at {
    display: none;
  }
}
</style>
