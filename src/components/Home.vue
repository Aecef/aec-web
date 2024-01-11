<script lang="ts">
import HomeTimeline from "./sub-pages/home/HomeTimeline.vue";

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
  mounted() {
    document.title = "Alec Cleofe | Home";
  },
};
</script>

<template>
  <div id="home" class="col">
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
    <div class="d-flex place-content-center w-screen row off-white">
      <!-- <div class="container grid place-items-center"> -->
      <div class="container">
        <HomeTimeline />
      </div>
    </div>
  </div>
</template>

<style scoped>
#home {
  display: grid;
}

.off-white {
  background-color: #f9f9f9;
}
.carousel-item img {
  height: 80vh;
  width: 80vh;
}
#alec-cover {
  width: 100%;
}

h1 {
  font-family: "Jomhuria", Helvetica;
  font-size: 6rem;
  font-weight: 400;
  height: 2.25rem;
}
</style>
