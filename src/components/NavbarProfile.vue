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
          <img
            src="../assets/profile-photo.jpg"
            alt="Faiz Sukma Danii"
            class="navbar__avatar-img"
          />
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
  background: rgba(235, 235, 216, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(69, 82, 48, 0.14);
  box-shadow: 0 4px 24px rgba(69, 82, 48, 0.1);
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
  background: #ebebd8;
  box-shadow: 0 0 0 2px rgba(99, 117, 69, 0.55);
  transition: box-shadow 0.3s ease;
}

.navbar__avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.navbar__brand:hover .navbar__avatar {
  box-shadow:
    0 0 0 3px rgba(69, 82, 48, 0.8),
    0 0 16px rgba(99, 117, 69, 0.35);
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
  color: #455230;
  line-height: 1.2;
  white-space: nowrap;
}

.navbar__title {
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  color: #637545;
  white-space: nowrap;
  line-height: 1;
}

.navbar__at {
  color: #455230;
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
  color: #637545;
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
  color: #455230;
  background: rgba(155, 166, 133, 0.22);
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: linear-gradient(135deg, #455230 0%, #637545 100%);
  border: none;
  color: #ebebd8;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 15px rgba(69, 82, 48, 0.25);
  margin-left: 0.25rem;
}

.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(69, 82, 48, 0.38);
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
  background: rgba(155, 166, 133, 0.22);
}

.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #637545;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.navbar__hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background: #455230;
}

.navbar__hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.navbar__hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background: #455230;
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
  color: #637545;
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
  background: rgba(155, 166, 133, 0.22);
  color: #455230;
}

.mobile-link--cta {
  background: linear-gradient(135deg, #455230 0%, #637545 100%);
  color: #ebebd8;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 600;
}

.mobile-link--cta:hover {
  background: linear-gradient(135deg, #637545 0%, #455230 100%);
  color: #ebebd8;
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
