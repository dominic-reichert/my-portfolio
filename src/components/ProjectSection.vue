<template>
  <section class="projects" id="projects">
    <h2><span>My</span><span class="gradient-text">Projects</span></h2>
    <div class="grid-container">
      <div v-for="{ title, image, link, github } in projects" :key="title" class="project-card">
        <img :src="image" :alt="title" />
        <div class="project-card-body">
          <h2>{{ title }}</h2>
          <div class="btn-container">
            <DynamicButton class="project-btn" as="a" label="Visit Page" :href="link" target="_blank" />
            <DynamicButton class="project-btn" as="a" label="See on GitHub" :href="github" target="_blank" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DynamicButton from './button/dynamic-button.vue';

const projects = [
  {
    title: "Grab a Beer Game",
    image: "./assets/GrabABeerPreview.png",
    link: "https://dominic-reichert.github.io/grab-a-beer-game/",
    github: "https://github.com/dominic-reichert/grab-a-beer-game",
  },
  {
    title: "Classical Music Library",
    image: "./assets/MusicLibraryPreview.png",
    link: "https://dominic-reichert.github.io/music-library/",
    github: "https://github.com/dominic-reichert/music-library",
  },
  {
    title: "Hangman",
    image: "./assets/HangmanPreview.png",
    link: "https://dominic-reichert.github.io/hangman/",
    github: "https://github.com/dominic-reichert/hangman",
  },
]
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  gap: 2rem;

  justify-content: center;
  align-items: center;

  margin-top: 2rem;
}

.project-card {
  display: grid;
  grid-template-rows: 1fr auto;

  border-radius: 10px;
  background: var(--main-color1);
  box-shadow: 0px 0px 15px 3px var(--main-color3);

  height: 100%;
  transition: transform 0.2s ease-in-out;
}

.project-card:hover {
  transform: scale(1.03);
}

.projects h2 {
  text-align: center;
}

.projects h2 span {
  font-size: var(--fs-700);
  font-style: italic;
}

.projects h2 span:nth-of-type(1) {
  color: var(--primary-bg-color);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--text-color);
}

.project-card>img {
  width: 100%;
  object-fit: contain;

  border-radius: 5%;

  padding: 0.5rem;
}

.project-card h2 {
  font-size: 1rem;
}

.project-card-body {
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 0.5rem;
}

.btn-container {
  display: flex;
  gap: 1rem;

  width: 100%;
}

.project-btn {
  text-decoration: none;
  text-align: center;

  width: 50%;

  margin-top: 0.5rem;
  padding-block: 0.3rem;

  background: snow;
  border-radius: 5px;

  font-size: var(--fs-200);
  font-family: var(--ff-base);

  box-shadow: 3px 3px 0px var(--main-color3);

  cursor: pointer;
}

.project-btn:active {
  box-shadow: none;
  transition: box-shadow 0.05s ease-in-out;
}

@media screen and (max-width: 950px) {}

@media screen and (max-width: 650px) {
  .project-btn {
    font-weight: 600;
    box-shadow: 2px 2px 0px var(--main-color3);
  }
}
</style>
