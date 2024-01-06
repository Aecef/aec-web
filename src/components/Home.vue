<script lang="ts">
import HomeTimeline from "@/components/sub-pages/home/HomeTimeline.vue";

export default {
  name: "Home",
  components: {
    HomeTimeline,
  },
  data() {
    return {
      valorant: "./src/assets/img/Valorant.PNG",
      hitbox: "./src/assets/img/box_paint.jpg",
      iowa: "./src/assets/img/UoI.jpg",
    };
  },
};
</script>

<template>
  <div id="home" class="col">
    <div class="row">
      <div class="container mt-5" id="alec-cover">
        <v-card
          class="col-md-8 d-flex place-content-center w-full"
          min-height="450px"
        >
          <h1>Alec Cleofe</h1>
        </v-card>
      </div>
    </div>
    <div class="d-flex place-content-center w-screen row">
      <HomeTimeline />
    </div>
  </div>
</template>

<style scoped>
#home {
  display: grid;
}
.carousel-item img {
  height: 80vh;
  width: 80vh;
}
#alec-cover {
  width: 100%;
}
</style>
