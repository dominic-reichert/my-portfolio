<template>
  <section class="about" id="about">
    <div class="about-header">
      <div class="sticky-container">
        <h2 class="gradient-text">Dominic Reichert</h2>
        <h3>Frontend Developer</h3>
        <p>
          I'm Dominic and have just started my journey as a frontend developer.
          I aim to create exceptional user experiences and strive to bring ideas
          to life through clean and efficient code.
        </p>
      </div>
    </div>
    <div class="about-container">
      <article class="about-content">
        <h2>About Me</h2>
        <p>
          I am currently building on a strong foundation in HTML, CSS,
          JavaScript and Vue.js. I'm always eager to expand my knowledge and
          explore the latest technologies and frameworks.
        </p>
        <p>
          Continuously striving for growth, I believe in the power of teamwork
          and effective communication, as I find that collaboration fuels
          innovation and leads to remarkable results.
        </p>
        <p>
          When I'm not coding, you can find me playing classical music in an
          orchestra, caring for my several plants, gaming or experimenting in
          the kitchen. I believe that a well-rounded life inspires creativity
          and keeps the mind fresh for solving complex problems.
        </p>
        <p>
          If you're looking for a frontend developer who is passionate,
          detail-oriented, and dedicated, I'd love to connect and collaborate
          with you. Feel free to explore my projects on GitHub and reach out for
          any exciting opportunities or collaborations!
        </p>
      </article>
      <article class="experience">
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

.about-content p + p {
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
  background-image: linear-gradient(
    var(--main-color1),
    var(--main-color2),
    var(--main-color3)
  );
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

.experience-flex-container + .experience-flex-container {
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
