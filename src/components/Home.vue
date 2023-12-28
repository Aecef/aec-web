

<script lang="ts">

export default {
  name: 'Home',
  data() {
    return {      
        valorant: './src/assets/img/Valorant.PNG',
        hitbox: './src/assets/img/box_paint.jpg',
        iowa: './src/assets/img/UoI.jpg',
    }
  }
}

</script>

<template>
    <div id="home" class="d-flex place-content-center w-screen">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src='valorant' class="d-block w-100" alt="Image of Valorant Stats ">
            </div>
            <div class="carousel-item">
              <img :src="hitbox" class="d-block w-100" alt="Image of a 3D Modeled Hitbox">
            </div>
            <div class="carousel-item">
              <img :src="iowa" class="d-block w-100" alt="Image of an artificial recreation of UoI">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
</template>