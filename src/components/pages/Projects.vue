
<script lang="ts">

import CarouselCard from "@components/carousels/CarouselCard.vue";
import Carousels from "@components/carousels/Carousels.json";

    export default {
      name: 'Projects',
      components: {
        CarouselCard
      },
      data() {

          let imgSideRef = 0;
          const switchSides = () => { return imgSideRef++; }

        return {      
            Carousels,
            imgSideRef,
            switchSides,
        }
      },
  }

</script>


<template>
    <div id="Projects" class="place-content-center w-screen">  
      <div class="container project-container" v-for="carousel in Carousels">
            <CarouselCard :title="carousel.title" 
                      :summary="carousel.summary" 
                      :purpose="carousel.purpose"
                      :url="carousel.url" 
                      :side="switchSides()" />
      </div>
    </div>


</template>

<style scoped>

.carousel-item img {
  height: 80vh;
  width: 80vh;
}

.project-container {
  margin-top: 5vh;
}
</style>