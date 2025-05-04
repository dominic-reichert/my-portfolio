<template>
  <SiteHeader />
  <main>
    <HomeSection />
    <AboutSection />
    <SkillsSection />
    <ProjectSection />
  </main>
  <SiteFooter />
</template>

<script setup lang="ts">
import AboutSection from '../components/AboutSection.vue'
import HomeSection from '../components/HomeSection.vue'
import ProjectSection from '../components/ProjectSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'
import SkillsSection from '../components/SkillsSection.vue'

</script>
