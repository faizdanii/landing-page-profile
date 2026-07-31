<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 },
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

const experiences = [
  {
    title: 'Front-End Developer',
    company: 'PLN ICON PLUS',
    period: '09/2023 – Present',
    type: 'Full-time',
    color: '#3b82f6',
    icon: '⚡',
    description:
      'Building enterprise-grade web applications focused on transmission infrastructure monitoring for the energy sector.',
    tasks: [
      'Built a real-time monitoring dashboard using Vue.js to visualize transmission equipment data',
      'Developed a specialized web application for the transmission sector to facilitate equipment inspections and real-time monitoring',
      'Translated complex operational requirements into clean, functional, and responsive user interfaces',
      'Ensured seamless data flow between the front-end and internal APIs for accurate equipment reporting',
    ],
  },
  {
    title: 'Front-End Developer',
    company: 'Bullion – Pegadaian',
    period: '06/2023 – 09/2023',
    type: 'Contract',
    color: '#f59e0b',
    icon: '🏅',
    description:
      "Gold trading platform within Pegadaian's Bullion ecosystem serving millions of users with investment and financing services.",
    tasks: [
      'Developed and maintained scalable front-end systems for a leading web application catering to millions of users',
      'Designed and implemented high-performing RESTful APIs to optimize response times',
      'Collaborated with cross-functional teams to define technical requirements and devise innovative solutions',
      'Conducted thorough testing and debugging to ensure the delivery of reliable and robust software',
    ],
  },
  {
    title: 'Front-End Developer',
    company: 'New Transaction – BP TAPERA',
    period: '12/2022 – 05/2023',
    type: 'Contract',
    color: '#8b5cf6',
    icon: '🏠',
    description:
      'Financial management system for distributing Tapera Funds for housing financing among classified Tapera Participants.',
    tasks: [
      'Interacted with clients to gather requirements and understand their business processes',
      'Conducted product demonstrations to illustrate how the solution effectively addresses client needs',
      'Collaborated with the development team to customize solutions to client requirements',
      'Offered technical guidance and expertise to clients, ensuring a seamless implementation process',
    ],
  },
  {
    title: 'Software Developer',
    company: 'PT. Mitra Talenta Grup – Celerates',
    period: '08/2022 – 08/2023',
    type: 'Full-time',
    color: '#06b6d4',
    icon: '💻',
    description:
      'IT Consulting Company. Assisted in the successful execution of the Celerates Project meeting client specifications.',
    tasks: [
      'Created and managed scalable frontend systems for a prominent web application',
      'Devised and executed efficient data handling by developing RESTful APIs and gRPC',
      'Worked closely with teams from different departments to establish technical needs',
      'Conducted comprehensive testing and troubleshooting to ensure delivery of dependable software',
    ],
  },
]

const skills = [
  { name: 'Vue.js', level: 'Advanced', pct: 92, color: '#42b883' },
  { name: 'TypeScript', level: 'Advanced', pct: 88, color: '#3178c6' },
  { name: 'JavaScript', level: 'Advanced', pct: 90, color: '#f7df1e' },
  { name: 'CSS / SCSS', level: 'Advanced', pct: 90, color: '#1572b6' },
  { name: 'Vuetify', level: 'Advanced', pct: 88, color: '#1867c0' },
  { name: 'React.js', level: 'Intermediate', pct: 70, color: '#61dafb' },
  { name: 'Bootstrap', level: 'Intermediate', pct: 75, color: '#7952b3' },
  { name: 'RESTful API', level: 'Advanced', pct: 87, color: '#06b6d4' },
  { name: 'Git / GitLab', level: 'Advanced', pct: 85, color: '#fc6d26' },
  { name: 'XML', level: 'Advanced', pct: 82, color: '#f59e0b' },
]

const softSkills = ['Team Work', 'Organized', 'Communication', 'Leadership', 'Public Speaking']

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main class="portfolio">
    <!-- HERO -->
    <section id="hero" class="hero">
      <div class="hero-bg-grid"></div>
      <div class="orb orb1"></div>
      <div class="orb orb2"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <span class="hero-greeting reveal"> <span class="wave">👋</span> Hi there, I am </span>
            <h1 class="hero-name reveal">Faiz Sukma <span class="name-blue">Danii</span></h1>
            <p class="hero-role reveal">
              <span class="role-badge">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#06b6d4"
                  stroke-width="2.5"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Front-End Developer
              </span>
              <span class="role-at">@ PLN ICON PLUS</span>
            </p>
            <p class="hero-desc reveal">
              A dedicated Front-End Developer with over <strong>3+ years</strong> of experience
              delivering efficient digital solutions in the financial and transmission
              infrastructure sectors. Deep expertise in <em>Vue.js</em>, <em>TypeScript</em>, and
              <em>RESTful APIs</em> — building large-scale applications serving millions of users.
            </p>
            <div class="hero-actions reveal">
              <button class="btn-pri" @click="scrollTo('experience')">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                View My Work
              </button>
              <button class="btn-out" @click="scrollTo('contact')">
                <svg
                  width="15"
                  height="15"
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
                Get In Touch
              </button>
            </div>
            <div class="hero-meta reveal">
              <span class="meta-loc">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Tangerang, Indonesia
              </span>
              <span class="meta-sep">·</span>
              <span class="meta-avail">
                <span class="pulse-dot"></span>
                Available for opportunities
              </span>
            </div>
          </div>

          <div class="hero-visual reveal">
            <div class="avatar-ring">
              <div class="avatar-wrap">
                <svg
                  viewBox="0 0 160 160"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                >
                  <defs>
                    <linearGradient
                      id="avatarBg"
                      x1="0"
                      y1="0"
                      x2="160"
                      y2="160"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0a1035" />
                      <stop offset="1" stop-color="#1a2060" />
                    </linearGradient>
                    <linearGradient
                      id="avatarAcc"
                      x1="0"
                      y1="0"
                      x2="160"
                      y2="160"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3b82f6" />
                      <stop offset="1" stop-color="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <circle cx="80" cy="80" r="80" fill="url(#avatarBg)" />
                  <ellipse cx="80" cy="135" rx="45" ry="30" fill="#1e3a8a" />
                  <ellipse cx="80" cy="130" rx="42" ry="28" fill="#1d4ed8" />
                  <path d="M65 105 L80 120 L95 105" fill="white" opacity="0.9" />
                  <path d="M75 105 L80 115 L85 105" fill="#1e40af" />
                  <ellipse cx="80" cy="78" rx="28" ry="30" fill="#fcd9b4" />
                  <ellipse cx="80" cy="53" rx="28" ry="14" fill="#1a0a00" />
                  <ellipse cx="65" cy="57" rx="10" ry="10" fill="#1a0a00" />
                  <ellipse cx="95" cy="57" rx="10" ry="10" fill="#1a0a00" />
                  <ellipse cx="70" cy="77" rx="4" ry="4.5" fill="white" />
                  <ellipse cx="90" cy="77" rx="4" ry="4.5" fill="white" />
                  <circle cx="71" cy="78" r="2.5" fill="#1a0a00" />
                  <circle cx="91" cy="78" r="2.5" fill="#1a0a00" />
                  <circle cx="72" cy="77" r="1" fill="white" />
                  <circle cx="92" cy="77" r="1" fill="white" />
                  <path
                    d="M65 71 Q70 69 75 71"
                    stroke="#4a2a00"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linecap="round"
                  />
                  <path
                    d="M85 71 Q90 69 95 71"
                    stroke="#4a2a00"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linecap="round"
                  />
                  <path d="M80 82 Q78 87 80 89 Q82 87 80 82" fill="#e8b48a" />
                  <path
                    d="M73 93 Q80 99 87 93"
                    stroke="#c0785a"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linecap="round"
                  />
                  <ellipse cx="51" cy="79" rx="5" ry="7" fill="#fcd9b4" />
                  <ellipse cx="109" cy="79" rx="5" ry="7" fill="#fcd9b4" />
                  <text
                    x="50%"
                    y="92%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    font-family="monospace"
                    font-size="9"
                    fill="url(#avatarAcc)"
                    opacity="0.5"
                  >
                    &lt;/dev&gt;
                  </text>
                </svg>
              </div>
            </div>
            <div class="fcard fcard-tl">
              <span class="fc-num">3+</span>
              <span class="fc-lbl">Years Exp.</span>
            </div>
            <div class="fcard fcard-br">
              <span class="fc-num">4</span>
              <span class="fc-lbl">Companies</span>
            </div>
            <div class="fcard fcard-tr">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#42b883">
                <path d="M2 12C2 12 5 5 12 5s10 7 10 7-3 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" fill="white" />
              </svg>
              <span class="fc-lbl">Vue.js</span>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-hint">
        <span>Scroll</span>
        <div class="scroll-arr"></div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section about-sec">
      <div class="container">
        <div class="about-grid">
          <div class="reveal">
            <span class="sec-lbl">About Me</span>
            <h2 class="sec-ttl">
              Turning Ideas into <span class="grad-txt">Digital Reality</span>
            </h2>
            <p class="about-p">
              A dedicated Front-End Developer with over 3 years of experience delivering efficient
              digital solutions in the financial and transmission infrastructure sectors. Deep
              technical expertise in
              <strong>Vue.js</strong>, <strong>TypeScript</strong>, and
              <strong>RESTful APIs</strong> — building large-scale applications serving millions of
              users.
            </p>
            <p class="about-p">
              I place great importance on user experience (UI/UX) and data efficiency through solid
              cross-functional team collaboration. Always eager to learn and adopt new technologies
              to deliver a greater positive impact to the company.
            </p>
            <div class="chips">
              <a href="tel:081222551436" class="chip">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                  />
                </svg>
                081222551436
              </a>
              <a href="mailto:faizsukmadanii@gmail.com" class="chip">
                <svg
                  width="13"
                  height="13"
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
                faizsukmadanii@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/faizdanii/" target="_blank" class="chip">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <div class="stats-grid reveal">
            <div class="stat-c">
              <span class="stat-n grad-txt">3+</span><span class="stat-l">Years Experience</span>
            </div>
            <div class="stat-c">
              <span class="stat-n grad-txt">4</span><span class="stat-l">Companies Worked</span>
            </div>
            <div class="stat-c">
              <span class="stat-n grad-txt">10+</span><span class="stat-l">Tech Skills</span>
            </div>
            <div class="stat-c">
              <span class="stat-n grad-txt">3.22</span><span class="stat-l">GPA / 4.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="section exp-sec">
      <div class="container">
        <div class="sec-hdr reveal">
          <span class="sec-lbl">Work Experience</span>
          <h2 class="sec-ttl">My Professional <span class="grad-txt">Journey</span></h2>
          <p class="sec-sub">
            Over 3 years building impactful front-end solutions across diverse industries and
            scales.
          </p>
        </div>
        <div class="timeline">
          <div class="tl-line"></div>
          <div v-for="(exp, i) in experiences" :key="i" class="tl-item reveal">
            <div
              class="tl-dot"
              :style="{ background: `linear-gradient(135deg, ${exp.color}, #06b6d4)` }"
            >
              {{ exp.icon }}
            </div>
            <div class="tl-card">
              <div class="tl-hd">
                <div>
                  <h3 class="tl-ttl">{{ exp.title }}</h3>
                  <p class="tl-co" :style="{ color: exp.color }">{{ exp.company }}</p>
                </div>
                <div class="tl-meta">
                  <span class="tl-per">{{ exp.period }}</span>
                  <span class="tl-tp">{{ exp.type }}</span>
                </div>
              </div>
              <p class="tl-desc">{{ exp.description }}</p>
              <ul class="tl-tasks">
                <li v-for="(task, j) in exp.tasks" :key="j" class="tl-task">
                  <span class="tdot" :style="{ background: exp.color }"></span>
                  {{ task }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section sk-sec">
      <div class="container">
        <div class="sec-hdr reveal">
          <span class="sec-lbl">Tech Stack</span>
          <h2 class="sec-ttl">Skills &amp; <span class="grad-txt">Expertise</span></h2>
          <p class="sec-sub">
            Technologies I work with to build scalable, performant, and beautiful web applications.
          </p>
        </div>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="sk-card reveal">
            <div class="sk-top">
              <span class="sk-name">{{ skill.name }}</span>
              <span class="sk-lv" :class="skill.level === 'Advanced' ? 'lv-a' : 'lv-m'">{{
                skill.level
              }}</span>
            </div>
            <div class="sk-bar">
              <div
                class="sk-fill"
                :style="{
                  width: skill.pct + '%',
                  background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                }"
              ></div>
            </div>
            <span class="sk-pct">{{ skill.pct }}%</span>
          </div>
        </div>
        <div class="soft-sec reveal">
          <h3 class="soft-ttl">Soft Skills</h3>
          <div class="soft-tags">
            <span v-for="s in softSkills" :key="s" class="stag">{{ s }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education" class="section edu-sec">
      <div class="container">
        <div class="sec-hdr reveal">
          <span class="sec-lbl">Education</span>
          <h2 class="sec-ttl">Academic <span class="grad-txt">Background</span></h2>
        </div>
        <div class="edu-grid">
          <div class="edu-card reveal">
            <div class="edu-ico">🎓</div>
            <div class="edu-body">
              <span class="edu-per">08/2017 – 07/2021</span>
              <h3 class="edu-deg">Bachelor of Information Systems</h3>
              <p class="edu-sch">Telkom University</p>
              <ul class="edu-ul">
                <li>GPA: 3.22 / 4.00 — Good Predicate</li>
                <li>Majoring in Information Systems</li>
                <li>Active in computer faculty student associations</li>
                <li>Organized communal activities supporting 500+ participants</li>
              </ul>
            </div>
          </div>
          <div class="edu-card reveal">
            <div class="edu-ico">📜</div>
            <div class="edu-body">
              <span class="edu-per">05/2022 – 07/2022</span>
              <h3 class="edu-deg">Celerates Acceleration Program</h3>
              <p class="edu-sch">PT. Mitra Talenta Grup</p>
              <ul class="edu-ul">
                <li>Front-end and back-end development certification</li>
                <li>Focused on React.js and GoLang</li>
                <li>Intensive industry-ready training program</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section ct-sec">
      <div class="container">
        <div class="ct-box reveal">
          <div class="ct-glow"></div>
          <span class="sec-lbl">Let's Connect</span>
          <h2 class="ct-ttl">
            Ready to Build Something <span class="grad-txt">Amazing Together?</span>
          </h2>
          <p class="ct-desc">
            I am always open to discussing new projects, creative ideas, or opportunities. Feel free
            to reach out!
          </p>
          <div class="ct-links">
            <a href="mailto:faizsukmadanii@gmail.com" class="cl cl-pri">
              <svg
                width="17"
                height="17"
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
              faizsukmadanii@gmail.com
            </a>
            <a href="tel:081222551436" class="cl">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                />
              </svg>
              081222551436
            </a>
            <a href="https://www.linkedin.com/in/faizdanii/" target="_blank" class="cl">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
          <p class="ct-loc">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Tangerang, Indonesia
          </p>
        </div>
      </div>
    </section>

    <footer class="ftr">
      <div class="container">
        <p>
          © 2024 Faiz Sukma Danii · Built with <span style="color: #42b883">Vue.js</span> &amp; ❤️
        </p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

.portfolio {
  padding-top: 70px;
  background: #04071a;
  min-height: 100vh;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.section {
  padding: 6rem 0;
}
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.grad-txt {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.sec-lbl {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #06b6d4;
  display: block;
  margin-bottom: 0.6rem;
}
.sec-ttl {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #f1f5f9;
  line-height: 1.15;
  margin-bottom: 0.9rem;
}
.sec-sub {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #64748b;
  max-width: 540px;
  line-height: 1.85;
}
.sec-hdr {
  margin-bottom: 3rem;
}

/* HERO */
.hero {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 15% 50%, rgba(59, 130, 246, 0.09) 0%, transparent 60%),
    radial-gradient(ellipse at 85% 20%, rgba(6, 182, 212, 0.07) 0%, transparent 55%), #04071a;
}
.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.orb1 {
  width: 520px;
  height: 520px;
  background: rgba(59, 130, 246, 0.11);
  top: -120px;
  left: -100px;
  animation: floatY 9s ease-in-out infinite;
}
.orb2 {
  width: 420px;
  height: 420px;
  background: rgba(6, 182, 212, 0.07);
  bottom: -80px;
  right: -80px;
  animation: floatY 11s ease-in-out infinite reverse;
}
@keyframes floatY {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-18px);
  }
}
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 3rem 0;
}
.hero-text {
  display: flex;
  flex-direction: column;
}
.hero-greeting {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.wave {
  display: inline-block;
  animation: waveHand 2.5s ease infinite;
  transform-origin: 70% 70%;
}
@keyframes waveHand {
  0%,
  100% {
    transform: rotate(0);
  }
  20% {
    transform: rotate(-15deg);
  }
  40% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(-5deg);
  }
  80% {
    transform: rotate(5deg);
  }
}
.hero-name {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  color: #f1f5f9;
  line-height: 1.05;
  margin-bottom: 1rem;
}
.name-blue {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-role {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.role-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.22);
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 999px;
}
.role-at {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #06b6d4;
  font-weight: 600;
}
.hero-desc {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.9;
  max-width: 520px;
  margin-bottom: 2rem;
}
.hero-desc strong {
  color: #e2e8f0;
  font-weight: 600;
}
.hero-desc em {
  color: #3b82f6;
  font-style: normal;
  font-weight: 600;
}
.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.btn-pri {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  padding: 0.8rem 1.75rem;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.38);
}
.btn-pri:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(59, 130, 246, 0.55);
}
.btn-out {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.8rem 1.75rem;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-out:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.07);
  transform: translateY(-2px);
}
.hero-meta {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
}
.meta-loc {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  color: #64748b;
}
.meta-sep {
  color: #334155;
}
.meta-avail {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  color: #22c55e;
}
.pulse-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pDot 2s ease infinite;
}
@keyframes pDot {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(34, 197, 94, 0);
  }
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.avatar-ring {
  width: 270px;
  height: 270px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.35), rgba(6, 182, 212, 0.35));
  padding: 3px;
  animation: floatY 5s ease-in-out infinite;
  box-shadow:
    0 0 70px rgba(59, 130, 246, 0.18),
    0 0 140px rgba(59, 130, 246, 0.08);
}
.avatar-wrap {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #080d20;
}
.fcard {
  position: absolute;
  background: rgba(4, 7, 26, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.6rem 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}
.fcard-tl {
  top: 0;
  left: -20px;
  animation: floatY 4s ease-in-out infinite 1s;
}
.fcard-br {
  bottom: 0;
  right: -20px;
  animation: floatY 5s ease-in-out infinite 0.5s;
}
.fcard-tr {
  top: 20px;
  right: -30px;
  flex-direction: row;
  animation: floatY 6s ease-in-out infinite 1.5s;
}
.fc-num {
  font-family: 'Outfit', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.fc-lbl {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  color: #64748b;
  white-space: nowrap;
}
.scroll-hint {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  color: #334155;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeUp 1s ease 1.5s both;
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
.scroll-arr {
  width: 18px;
  height: 18px;
  border-right: 2px solid #334155;
  border-bottom: 2px solid #334155;
  transform: rotate(45deg);
  animation: bounce 2s ease infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: rotate(45deg) translateY(0);
  }
  50% {
    transform: rotate(45deg) translateY(4px);
  }
}

/* ABOUT */
.about-sec {
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(59, 130, 246, 0.025) 50%,
    transparent 100%
  );
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.about-p {
  font-family: 'Inter', sans-serif;
  font-size: 0.975rem;
  color: #94a3b8;
  line-height: 1.9;
  margin-bottom: 1.1rem;
}
.about-p strong {
  color: #e2e8f0;
  font-weight: 600;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.chip:hover {
  border-color: rgba(59, 130, 246, 0.4);
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.07);
}
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.stat-c {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.3s ease;
}
.stat-c:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.22);
  transform: translateY(-3px);
}
.stat-n {
  font-family: 'Outfit', sans-serif;
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1;
}
.stat-l {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  color: #64748b;
}

/* EXPERIENCE */
.exp-sec {
  background: #040712;
}
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.tl-line {
  position: absolute;
  left: 27px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(59, 130, 246, 0.28) 20%,
    rgba(59, 130, 246, 0.28) 80%,
    transparent
  );
}
.tl-item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1.5rem;
  align-items: start;
}
.tl-dot {
  width: 56px;
  height: 56px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.25);
}
.tl-card {
  background: rgba(255, 255, 255, 0.028);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 1.75rem;
  transition: all 0.3s ease;
}
.tl-card:hover {
  background: rgba(255, 255, 255, 0.045);
  border-color: rgba(59, 130, 246, 0.18);
}
.tl-hd {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.85rem;
}
.tl-ttl {
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.2rem;
}
.tl-co {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
}
.tl-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.35rem;
  flex-shrink: 0;
}
.tl-per {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: #64748b;
  background: rgba(255, 255, 255, 0.04);
  padding: 0.22rem 0.65rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  white-space: nowrap;
}
.tl-tp {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  color: #06b6d4;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.tl-desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.75;
  margin-bottom: 1rem;
}
.tl-tasks {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.tl-task {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.865rem;
  color: #94a3b8;
  line-height: 1.6;
}
.tdot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-top: 0.45rem;
  flex-shrink: 0;
}

/* SKILLS */
.sk-sec {
  background: linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.02) 50%, transparent);
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
}
.sk-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
  transition: all 0.3s ease;
}
.sk-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
}
.sk-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
}
.sk-name {
  font-family: 'Outfit', sans-serif;
  font-size: 0.93rem;
  font-weight: 600;
  color: #e2e8f0;
}
.sk-lv {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.18rem 0.6rem;
  border-radius: 999px;
}
.lv-a {
  background: rgba(59, 130, 246, 0.13);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.22);
}
.lv-m {
  background: rgba(245, 158, 11, 0.11);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.18);
}
.sk-bar {
  height: 5px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 0.45rem;
}
.sk-fill {
  height: 100%;
  border-radius: 999px;
}
.sk-pct {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  color: #475569;
}
.soft-sec {
  text-align: center;
}
.soft-ttl {
  font-family: 'Outfit', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #94a3b8;
  margin-bottom: 1rem;
}
.soft-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
}
.stag {
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  color: #a78bfa;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  transition: all 0.2s ease;
}
.stag:hover {
  background: rgba(139, 92, 246, 0.18);
  transform: translateY(-1px);
}

/* EDUCATION */
.edu-sec {
  background: #040712;
}
.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
.edu-card {
  display: flex;
  gap: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  padding: 2rem;
  transition: all 0.3s ease;
}
.edu-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.22);
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}
.edu-ico {
  font-size: 2.2rem;
  flex-shrink: 0;
}
.edu-per {
  font-family: 'Inter', sans-serif;
  font-size: 0.77rem;
  color: #06b6d4;
  font-weight: 600;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.35rem;
}
.edu-deg {
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.2rem;
}
.edu-sch {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 1rem;
}
.edu-ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.edu-ul li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.83rem;
  color: #64748b;
  line-height: 1.5;
}
.edu-ul li::before {
  content: '✓';
  color: #06b6d4;
  font-size: 0.75rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

/* CONTACT */
.ct-sec {
  background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03) 50%, transparent);
}
.ct-box {
  position: relative;
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(59, 130, 246, 0.14);
  border-radius: 28px;
  padding: 4rem 2rem;
  overflow: hidden;
}
.ct-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.09) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.ct-ttl {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.7rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #f1f5f9;
  margin: 0.75rem 0 1rem;
  line-height: 1.2;
}
.ct-desc {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #64748b;
  max-width: 500px;
  margin: 0 auto 2.5rem;
  line-height: 1.85;
}
.ct-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.cl {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.72rem 1.5rem;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
}
.cl:hover {
  border-color: rgba(59, 130, 246, 0.4);
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.08);
  transform: translateY(-2px);
}
.cl-pri {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border: none;
  color: white;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.35);
}
.cl-pri:hover {
  color: white;
  border: none;
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
}
.ct-loc {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  color: #475569;
}

/* FOOTER */
.ftr {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.75rem 0;
  text-align: center;
}
.ftr p {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  color: #334155;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  .hero-role {
    justify-content: center;
  }
  .hero-desc {
    margin: 0 auto 2rem;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-meta {
    justify-content: center;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .tl-line {
    display: none;
  }
  .tl-item {
    grid-template-columns: 1fr;
  }
  .tl-hd {
    flex-direction: column;
  }
  .tl-meta {
    align-items: flex-start;
  }
}
@media (max-width: 640px) {
  .section {
    padding: 4rem 0;
  }
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  .ct-box {
    padding: 2.5rem 1.25rem;
  }
  .avatar-ring {
    width: 200px;
    height: 200px;
  }
}
</style>
