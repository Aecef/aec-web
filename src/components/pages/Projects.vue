<script lang="ts">
import CarouselCard from "@components/carousels/CarouselCard.vue";
import Carousels from "@components/carousels/Carousels.json";

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
};
</script>

<template>
  <div id="Projects" class="place-content-center w-screen">
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
.project-container {
  margin-top: 11vh;
}
</style>
