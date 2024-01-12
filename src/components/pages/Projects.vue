<script lang="ts">
import CarouselCard from "../carousels/CarouselCard.vue";
import Carousels from "../carousels/Carousels";

import { ref } from "vue";

export default {
  name: "Projects",
  components: {
    CarouselCard,
  },
  data() {
    let imgSideRef = 0;
    const switchSides = () => {
      imgSideRef++;
      return imgSideRef % 2;
    };

    return {
      Carousels,
      imgSideRef,
      switchSides, //Controls the side of the image, alternating between right and left every time it is called.
    };
  },
  mounted() {
    document.title = "Alec Cleofe | Projects";
  },
  methods: {
    scrollTo(refName: string) {
      document.getElementById(refName)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
  },
};
</script>

<template>
  <div id="Projects" class="place-content-center w-screen">
    <div class="row">
      <div id="alec-cover">
        <v-card
          class="col-md-8 d-flex place-content-center w-full grid place-items-center"
          min-height="450px"
        >
          <h1>Alec Cleofe</h1>
          <!-- Project Table of Contents -->
          <v-card class="mx-auto" max-width="300">
            <v-list density="compact">
              <v-list-subheader>PROJECTS</v-list-subheader>

              <v-list-item
                v-for="(carousel, i) in Carousels"
                :key="i"
                :value="carousel"
                @click="scrollTo(carousel.id)"
                color="primary"
              >
                <v-list-item-title v-text="carousel.title"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
          <!-- END -->
        </v-card>
      </div>
    </div>
    <div
      class="container project-container w-[1300px]"
      v-for="carousel in Carousels"
      :id="carousel.id"
    >
      <CarouselCard
        :title="carousel.title"
        :summary="carousel.summary"
        :purpose="carousel.purpose"
        :url="carousel.url"
        :skills="carousel.skills"
        :id="carousel.id"
        :side="switchSides()"
      />
    </div>
  </div>
</template>

<style scoped>
#Projects {
  background-color: #f9f9f9;
}
.project-container {
  margin-top: 11vh;
}
</style>
