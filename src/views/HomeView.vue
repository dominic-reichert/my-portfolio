<template>
  <siteHeader />
  <main>
    <homeSection />
    <aboutSection />
    <projectSection />
    <skillsSection />
  </main>
  <siteFooter />
</template>

<script>
// @ is an alias to /src
import siteHeader from "@/components/SiteHeader.vue";
import siteFooter from "@/components/SiteFooter.vue";
import homeSection from "@/components/HomeSection.vue";
import aboutSection from "@/components/AboutSection.vue";
import skillsSection from "@/components/SkillsSection.vue";
import projectSection from "@/components/ProjectSection.vue";

export default {
  name: "HomeView",
  components: {
    siteHeader,
    siteFooter,
    homeSection,
    aboutSection,
    skillsSection,
    projectSection,
  },
};
</script>
