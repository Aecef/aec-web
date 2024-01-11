<script>
export default {
  name: "CarouselCard",
  props: {
    title: String,
    summary: String,
    purpose: String,
    skills: Object,
    url: String,
    side: Number,
  },
  mounted() {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.isIntersecting) {
          target.classList.add("show");
        } else {
          target.classList.remove("show");
        }
      });
    });
    const targets = document.querySelectorAll(".target-card");
    targets.forEach((target) => {
      cardObserver.observe(target);
    });
  },
  methods: {
    carouselNav(selection) {
      const summary = document.getElementById(this.title + "-summary");
      const purpose = document.getElementById(this.title + "-purpose");
      const skills = document.getElementById(this.title + "-skills");
      if (selection === "summary") {
        summary?.classList.add("active");
        purpose?.classList.remove("active");
        skills?.classList.remove("active");
      } else if (selection === "purpose") {
        summary?.classList.remove("active");
        purpose?.classList.add("active");
        skills?.classList.remove("active");
      } else if (selection === "skills") {
        summary?.classList.remove("active");
        purpose?.classList.remove("active");
        skills?.classList.add("active");
      }
    },
  },
};
</script>

<template>
  <div id="CarouselCard" class="row">
    <v-card
      class="col-md-4 target-card"
      style="display: grid; place-items: center"
      v-if="this.side == 1"
    >
      <v-card class="flex row-2 w-[100%]"
        ><h1 class="pr-name">{{ this.title }}</h1></v-card
      >
      <img
        class="flex row-8"
        :src="this.url"
        :alt="'Image for the project with the title: ' + this.title"
      />
    </v-card>
    <v-card class="col-md-8 d-flex place-content-center" min-height="500px">
      <div :id="this.title" class="carousel slide" data-bs-ride="true">
        <v-breadcrumbs
          style="padding-top: 30px; width: 100%; place-content: center"
        >
          <v-breadcrumbs-item>
            <button class="carousel-nav" @click="carouselNav('summary')">
              Summary
            </button>
          </v-breadcrumbs-item>
          <v-breadcrumbs-divider />
          <v-breadcrumbs-item>
            <button class="carousel-nav" @click="carouselNav('purpose')">
              Purpose
            </button>
          </v-breadcrumbs-item>
          <v-breadcrumbs-divider />
          <v-breadcrumbs-item>
            <button class="carousel-nav" @click="carouselNav('skills')">
              Tools
            </button>
          </v-breadcrumbs-item>
        </v-breadcrumbs>
        <div class="carousel-inner d-flex grid place-items-center">
          <div :id="this.title + '-summary'" class="carousel-item active">
            <h1>Summary</h1>
            <p>{{ summary }}</p>
          </div>
          <div :id="this.title + '-purpose'" class="carousel-item">
            <h1>Purpose</h1>
            <p>{{ purpose }}</p>
          </div>
          <div :id="this.title + '-skills'" class="carousel-item">
            <h1>Tools</h1>
            <div class="row pt-10">
              <div class="col icon-col" v-for="tool in this.skills">
                <font-awesome-icon
                  :icon="tool"
                  size="2xl"
                  style="transform: scale(2)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
    <v-card
      class="col-md-4 target-card"
      style="display: grid; place-items: center"
      v-if="this.side == 0"
    >
      <v-card class="flex row-2 w-[100%]"
        ><h1 class="pr-name">{{ this.title }}</h1></v-card
      >

      <img
        class="flex row-8"
        :src="this.url"
        :alt="'Image for the project with the title: ' + this.title"
      />
    </v-card>
  </div>
</template>

<style scoped>
h1 {
  font-weight: bolder;
}

p {
  font-size: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 2rem;
}
.icon-col {
  height: 80px;
}
.target-card {
  opacity: 0;
  transform: scale(0.2);
  transition: all 1s;
}
.show {
  opacity: 1;
  transform: scale(1);
  transition: all 1s;
}
.pr-name {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

button.carousel-nav {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

button.carousel-nav:hover {
  background: rgba(168, 168, 168, 0.582);
  transition: 0.5s;
}

img {
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
}
</style>
