<script lang="ts">
import CarouselCard from "../carousels/CarouselCard.vue";
import Carousels from "../carousels/Carousels";

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
        </v-card>
      </div>
    </div>
    <div class="container project-container" v-for="carousel in Carousels">
      <CarouselCard
        :title="carousel.title"
        :summary="carousel.summary"
        :purpose="carousel.purpose"
        :url="carousel.url"
        :skills="carousel.skills"
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
