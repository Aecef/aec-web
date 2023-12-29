
<script lang="ts">

import HitboxCarousel from "@components/carousels/HitboxCarousel.vue";


    export default {
      name: 'Projects',
      components: {
        HitboxCarousel
      },
      data() {

        const items = [
            { text: 'Summary', disabled: false, href: '/#' },
            { text: 'Purpose', disabled: false, href: '/#' },
            { text: 'Skills', disabled: false, href: '/#' },
          ]
        return {      
            valorant: './src/assets/img/Valorant.PNG',
            hitbox: './src/assets/img/box_paint.jpg',
            iowa: './src/assets/img/UoI.jpg',
            items
        }
      }
    }

</script>


<template>
    <div id="Projects" class="place-content-center w-screen">
      
      <div class="container project-container">
        <div class="row">
          <v-card class="col-md-4" style="display: grid; place-items: center;">
            <img :src="hitbox" alt="Image of Hitbox">
          </v-card>
          <!-- <img :src="hitbox" class="col-sm-4" alt="Image of Valorant Stats"> -->
          <v-card class="col-md-8 d-flex place-content-center" min-height="450px">
            <HitboxCarousel />
          </v-card>
        </div>
      </div>

      <div class="container project-container">
          <div class="row">
            <v-card class="col-md-8 d-flex place-content-center" min-height="450px">
              <HitboxCarousel />
            </v-card>
            <v-card class="col-md-4" style="display: grid; place-items: center;">
              <img :src="valorant" alt="Image of Valorant Stats">
            </v-card>
          </div>
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