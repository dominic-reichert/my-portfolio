<template>
  <section class="about" id="about">
    <div class="about-header">
      <div class="sticky-container">
        <h2 class="gradient-text">Dominic Reichert</h2>
        <h3>Frontend Developer</h3>
        <p>
          I'm Dominic, a frontend developer with end-to-end experience in building modern web applications.
          I focus on delivering reliable, user-focused solutions with clean, maintainable code.
        </p>
      </div>
    </div>
    <div class="about-container">
      <article class="about-content">
        <h2>About Me</h2>
        <p>
          I’m a frontend developer with a strong foundation in HTML, CSS, and TypeScript, and hands-on experience
          delivering robust applications in real-world, agile environments. I've worked extensively with modern frontend
          frameworks, built and tested applications using tools like Vitest, Cypress, and Playwright, and deployed
          scalable solutions via Docker, Azure DevOps, and Terraform. My experience also includes developing RESTful
          backends with ASP.NET, allowing me to contribute effectively across the full stack.
        </p>
        <p>
          I thrive in Scrum-based teams where collaboration and clear communication drive innovation. I’m always eager
          to learn, explore new technologies, and improve both technically and creatively.
        </p>
        <p>
          Outside of tech, I play classical music in an orchestra, care for a growing collection of plants, enjoy
          gaming, and experiment in the kitchen. I believe that a well-balanced life fosters fresh perspectives and
          creative problem-solving.
        </p>
        <p>
          If you're looking for a dedicated developer who brings both technical skill and a collaborative mindset, feel
          free to explore my work on GitHub or get in touch for exciting opportunities.
        </p>
      </article>
      <article class="experience">
        <div class="experience-flex-container">
          <h3 class="date">Oct 2023 - now</h3>
          <div class="description">
            <h2 class="title">Frontend Developer</h2>
            <h3 class="company">Explicatis GmbH</h3>
            <p>
              Development of modern web applications in agile teams using Vue 3. Contribution to
              diverse projects across frontend and backend, including automated testing.
            </p>
            <ul class="work-skills">
              <li>Vue3</li>
              <li>Flutter</li>
              <li>ASP.NET</li>
              <li>Docker</li>
              <li>Automated Testing</li>
              <li>DevOps</li>
              <li>Terraform</li>
              <li>Agile</li>
              <li>Scrum</li>
            </ul>
          </div>
        </div>
        <div class="experience-flex-container">
          <h3 class="date">Jan 2023 - May 2023</h3>
          <div class="description">
            <h2 class="title">Data Scientist</h2>
            <h3 class="company">AEins Digital Innovation GmbH</h3>
            <p>
              Creation of data analysis scripts in python and visualisations in
              Tableau dashboards. Development machine learning algorithms for
              sales enablement. Further development of existing products and
              analyses.
            </p>
            <ul class="work-skills">
              <li>Python</li>
              <li>SQL</li>
              <li>Tableau</li>
              <li>Jira</li>
              <li>Confluence</li>
            </ul>
          </div>
        </div>
        <div class="experience-flex-container">
          <h3 class="date">Feb 2022 - Dec 2022</h3>
          <div class="description">
            <h2 class="title">Data Specialist</h2>
            <h3 class="company">moccamedia GmbH</h3>
            <p>
              Development of internal reporting tools to display various key
              KPIs and develop in-house benchmarks. Collaboration with external
              developers to build own solutions for data storage and data
              processing. Creation of individual solutions for clients, for
              example in the area of TV tracking.
            </p>
            <ul class="work-skills">
              <li>SQL</li>
              <li>BigQuery</li>
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>PowerBI</li>
            </ul>
          </div>
        </div>
        <div class="experience-flex-container">
          <h3 class="date">Aug 2021 - Jan 2022</h3>
          <div class="description">
            <h2 class="title">HR-Controller</h2>
            <h3 class="company">Klinikum Mutterhaus Trier</h3>
            <p>
              Creation and development of weekly and monthly reports of various
              personnel key figures to different addressees within the
              organisation. Calculation of personnel requirements and budget
              planning as well as processing of both internal and external
              ad-hoc requests.
            </p>
            <ul class="work-skills">
              <li>SAP</li>
              <li>Excel</li>
              <li>PowerBI</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  gap: 5rem;
  position: relative;
}

.about-content p+p {
  margin-top: 1rem;
}

.about p {
  font-size: var(--fs-300);
}

.about-header {
  width: 50%;
  position: relative;
}

.about-container {
  width: 50%;
}

.sticky-container {
  position: sticky;
  top: 5rem;
}

.gradient-text {
  background-image: linear-gradient(var(--main-color1),
      var(--main-color2),
      var(--main-color3));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.experience {
  display: flex;
  flex-direction: column;
}

.experience-flex-container {
  display: flex;
  gap: 2rem;
}

.experience-flex-container+.experience-flex-container {
  margin-top: 3rem;
}

.date {
  width: 15%;
}

.description {
  width: 85%;
}

.company:before {
  content: "@";
}

.work-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  list-style-type: none;
  padding: 0;
}

.work-skills li {
  background-color: var(--main-color2-transp);
  color: var(--text-color3);
  border-radius: 90px;
  padding: 5px 20px;
  text-align: center;
  font-weight: var(--fw-bold);
}

@media screen and (max-width: 1250px) {
  .about {
    flex-direction: column;
  }

  .about-header,
  .about-container {
    width: 100%;
  }
}
</style>
