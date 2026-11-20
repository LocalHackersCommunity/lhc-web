<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <main class="page-shell">
    <header class="topbar">
      <a class="brand" href="./" aria-label="LHC Web home">
        <span class="brand-mark">LHC</span>
        <span>Local Hackers Community</span>
      </a>
      <span class="topbar-note">Love and Peace</span>
    </header>

    <section class="hero" aria-labelledby="hero-title">
      <p class="eyebrow"><span class="status-dot"></span> YOUR NEXT PROJECT STARTS HERE</p>
      <h1 id="hero-title">Turn ideas<br /><span>into reality.</span></h1>
      <p class="intro">
        Your new website, built with Vite and Vue 3.<br class="desktop-break" />
        Edit <code>src/App.vue</code> and make it your own.
      </p>
      <button class="count-button" type="button" @click="count++">
        Try Vue <span class="count">{{ count }}</span>
      </button>
    </section>

    <footer class="footer">
      <span>Built with care by Local Hackers Community</span>
      <span class="footer-dot" aria-hidden="true">✳</span>
    </footer>
  </main>
</template>
