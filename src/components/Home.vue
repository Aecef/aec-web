<script lang="ts">
import HomeTimeline from "./sub-pages/home/HomeTimeline.vue";

export default {
  name: "Home",
  components: {
    HomeTimeline,
  },
  data() {
    return {
      visitedHome: false,
    };
  },
  mounted() {
    document.title = "Alec Cleofe | Home";

    this.visitedHome = document.cookie.indexOf("visitedHome") >= 0;

    if (document.cookie.indexOf("visitedHome") >= 0) {
      // If the cookie exists, do nothing
    } else {
      document.cookie = "visitedHome=true; max-age=86400;";
      alert("This website is still under construction!");
    }

    console.log(this.visitedHome);
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
