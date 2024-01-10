<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      landing: { name: "Home", path: "/" },
      navPages: [
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
      ],
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand" id="nav-main">
    <div class="container-fluid">
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav_Header"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="nav_Header">
        <ul class="navbar-nav">
          <li class="nav-item" id="home-link">
            <router-link
              :to="landing.path"
              class="nav-link"
              style="color: white"
            >
              <p class="router-link">{{ landing.name }}</p>
            </router-link>
          </li>
          <li class="nav-item" v-for="page in navPages" :key="page.name">
            <router-link :to="page.path" class="nav-link" style="color: white"
              ><p class="router-link">
                {{ page.name }}
              </p></router-link
            >
          </li>
        </ul>
      </div>
      <div class="sticky top-0 right-8">
        <a class="icon-nav" href="https://github.com/Aecef">
          <font-awesome-icon
            :icon="['fab', 'github']"
            size="2xl"
            style="transform: scale(1.5)"
          />
        </a>
        <a class="icon-nav" href="">
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            size="2xl"
            style="transform: scale(1.5)"
          />
        </a>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
nav {
  z-index: 5;
  box-shadow: 0px -10px 35px #343159;
}

.icon-nav {
  padding-left: 3rem;
  padding-right: 3rem;
  color: #ffffff;
  display: inline-grid;
  width: 15px;
}

.icon-nav:hover,
.router-link:hover {
  color: orange;
  transform: scale(1.2);

  transition: transform 0.2s ease-in-out;
}

#app {
  margin-left: 0px;
  margin-right: 0px;
}
#app-body {
  place-items: flex-start;
}
#nav_Header {
  height: 10vh;
  padding-left: 25px;
}

#nav-main {
  background-color: black;
  padding-top: 0%;
  width: inherit;
}

.nav-item {
  font-family: "Jomhuria", Helvetica;
  font-size: 3rem;
  font-weight: 400;
}

#home-link {
  font-size: 3rem;
}
</style>
