<template>
  <header class="main-header">
    <div class="flex-header">
      <span class="initials">DR</span>
      <nav>
        <ul class="navigation-list">
          <li><a href="#home" @click="navBarToggle">Home</a></li>
          <li><a href="#about" @click="navBarToggle">About</a></li>
          <li><a href="#projects" @click="navBarToggle">Projects</a></li>
          <li><a href="#skills" @click="navBarToggle">Skills</a></li>
        </ul>
      </nav>
      <button
        id="light-mode-toggle"
        class="light-mode-toggle"
        @click="lightModeToggle"
      >
        <svg
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 496"
        >
          <path
            fill="currentColor"
            d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
            transform="translate(-8 -8)"
          />
        </svg>
      </button>
      <div
        class="mobile-nav-toggle"
        @click="
          openMenu = !openMenu;
          navBarToggle();
        "
        :class="{ active: openMenu }"
      >
        <div class="menu-bar one"></div>
        <div class="menu-bar two"></div>
        <div class="menu-bar three"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      lightmode: localStorage.getItem("lightMode"),
      openMenu: false,
    };
  },
  methods: {
    enableLightMode() {
      document.body.classList.add("lightmode");
      localStorage.setItem("lightMode", "enabled");
      this.lightmode = "enabled";
    },
    disableLightMode() {
      document.body.classList.remove("lightmode");
      localStorage.setItem("lightMode", null);
      this.lightmode = null;
    },
    lightModeToggle() {
      if (this.lightmode !== "enabled") {
        this.enableLightMode();
      } else {
        this.disableLightMode();
      }
    },
    navBarToggle() {
      document.querySelector(".navigation-list").classList.toggle("active");
    },
  },
  mounted() {
    if (this.lightmode === "enabled") {
      this.enableLightMode();
    }
  },
};
</script>

<style scoped>
.main-header {
  position: sticky;
  top: 0;

  margin-left: auto;
  margin-right: auto;

  z-index: 100;

  background-color: var(--primary-bg-color);
}

.flex-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;

  max-width: 60rem;
  width: 70%;
}

.initials {
  text-transform: uppercase;
  font-family: var(--ff-accent);
  font-style: italic;
  font-size: var(--fs-600);
}

.navigation-list {
  display: flex;
  list-style-type: none;
  gap: var(--fs-700);
  height: 100%;
}

.navigation-list a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 900;
  opacity: 0.7;
  display: block;
}

.navigation-list a:hover {
  transition: opacity 0.3s;
  opacity: 1;
}

.mobile-nav-toggle {
  position: absolute;
  top: 1rem;
  right: 0rem;
  display: none;
  width: 2.5rem;
  height: 2rem;
  stroke: var(--text-color);
}

.light-mode-toggle {
  position: absolute;
  z-index: 100;
  left: 4rem;
  color: var(--text-color);
  border: 2px solid currentColor;
  padding: 4px;
  background: transparent;
  cursor: pointer;
  border-radius: 5px;
  width: 30px;
  height: 30px;
}

.menu-bar {
  position: absolute;
  width: 80%;
  height: 3px;
  background: var(--text-color);
  left: 0;
}

.one {
  top: 0px;
  animation-delay: 0.1s;
  transition: all 0.3s;
}

.two {
  top: 6px;
  transition: all 0.3s;
}

.three {
  top: 12px;
  transition: all 0.3s;
}

@keyframes slideOut {
  0% {
    width: 100%;
    left: 0%;
    right: auto;
  }

  50% {
    width: 0%;
    left: 0%;
    right: auto;
  }
  51% {
    width: 0%;
    right: 0%;
    left: auto;
  }

  100% {
    width: 100%;
    right: 0%;
    left: auto;
  }
}

.menu-wrapper:hover .menu-bar.active {
  animation: none;
}
.active .one {
  top: 50%;
  left: 0%;
  transform: rotate(45deg);
}
.active .two {
  top: 50%;
  left: 0%;
  transform: rotate(-45deg);
}

.active .three {
  opacity: 0;
}

@media screen and (max-width: 950px) {
  .flex-header {
    flex-direction: column;
    align-items: flex-start;
  }

  nav {
    width: 100%;
  }

  .mobile-nav-toggle {
    display: flex;
  }

  .navigation-list {
    display: none;
    width: 100%;
    flex-direction: column;
    padding: 0;
  }

  .navigation-list li {
    text-align: center;
  }

  .navigation-list li a {
    padding: 0.5rem 1rem;
  }

  .active {
    display: flex;
  }

  .light-mode-toggle {
    padding: 2px;

    width: 20px;
    height: 20px;

    top: 1rem;
  }
}
</style>
