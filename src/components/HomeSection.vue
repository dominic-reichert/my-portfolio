<template>
  <section class="home" id="home">
    <p class="home-text">
      Hello there, I am Dominic and
      <span class="welcome gradient-text">welcome to my</span
      ><span class="outlined">website</span>
    </p>
    <img
      src="../assets/images/developer.png"
      alt="developer"
      class="home-img"
    />
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;

  height: calc(100vh - 100px);

  text-align: center;
  font-size: var(--fs-500);
}

.home span {
  display: block;
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

.outlined {
  text-transform: uppercase;
}

.welcome {
  font-size: calc(var(--fs-400) * 4);
  font-weight: var(--fw-bold);
  line-height: 80%;
  font-family: var(--ff-accent);
  font-style: normal;
}

.outlined {
  color: var(--primary-bg-color);
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: var(--text-color);

  font-family: var(--ff-accent-bold);
  font-size: calc(var(--fs-700) * 4);
  line-height: 80%;
}

@media screen and (max-width: 650px) {
  .gradient-text {
    font-size: calc(var(--fs-400) * 1.5);
  }

  .outlined {
    font-size: calc(var(--fs-700) * 2);
    -webkit-text-stroke-width: 2px;
  }

  .home-img {
    width: 20rem;
  }
}
</style>
