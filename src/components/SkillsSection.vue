<template>
  <section class="skills" id="skills">
    <h2><span>My</span><span class="gradient-text">Skills</span></h2>
    <div class="skills-grid">
      <div class="skills-flex">
        <HtmlIcon class="skills-icon"></HtmlIcon>
        <div class="skill-description">
          <p>HTML</p>
          <div class="skill-bar" style="width: 80%"></div>
        </div>
      </div>
      <div class="skills-flex">
        <CssIcon class="skills-icon"></CssIcon>
        <div class="skill-description">
          <p>CSS</p>
          <div class="skill-bar" :style="{ width: skills.CSS }"></div>
        </div>
      </div>
      <div class="skills-flex">
        <JsIcon class="skills-icon"></JsIcon>
        <div class="skill-description">
          <p>JavaScript</p>
          <div class="skill-bar" :style="{ width: skills.JavaScript }"></div>
        </div>
      </div>
      <div class="skills-flex">
        <VueIcon class="skills-icon"></VueIcon>
        <div class="skill-description">
          <p>Vue</p>
          <div class="skill-bar" :style="{ width: skills.Vue }"></div>
        </div>
      </div>
      <div class="skills-flex">
        <ReactIcon class="skills-icon"></ReactIcon>
        <div class="skill-description">
          <p>React</p>
          <div class="skill-bar" :style="{ width: skills.React }"></div>
        </div>
      </div>
      <div class="skills-flex">
        <TsIcon class="skills-icon"></TsIcon>
        <div class="skill-description">
          <p>TypeScript</p>
          <div class="skill-bar" :style="{ width: skills.TypeScript }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CssIcon from '../components/icons/CssIcon.vue';
import HtmlIcon from '../components/icons/HtmlIcon.vue';
import JsIcon from '../components/icons/JsIcon.vue';
import ReactIcon from '../components/icons/ReactIcon.vue';
import TsIcon from '../components/icons/TsIcon.vue';
import VueIcon from '../components/icons/VueIcon.vue';

const skills = {
  HTML: "95%",
  CSS: "85%",
  JavaScript: "80%",
  Vue: "95%",
  React: "20%",
  TypeScript: "75%",
}
</script>

<style scoped>
.skills h2 {
  text-align: center;
}

.skills h2 span {
  font-size: var(--fs-700);
  font-style: italic;
}

.skills h2 span:nth-of-type(1) {
  color: var(--primary-bg-color);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--text-color);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: 2rem;
}

.skills-flex {
  display: flex;
  gap: 1rem;
}

.skills-icon,
.skills-icon g {
  width: 3rem;
  height: 3rem;
  fill: var(--text-color);
}

.skill-description {
  width: 100%;
}

.skill-bar {
  background-image: linear-gradient(90deg,
      var(--main-color1),
      var(--main-color2),
      var(--main-color3));
  border-radius: 16px;
  height: 1rem;
}

@media screen and (max-width: 1250px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 950px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
