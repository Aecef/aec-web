
<script>
export default {
  name: 'HitboxCarousel',
  }
</script>

<template>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <v-breadcrumbs>
            <v-breadcrumbs-item> <button class="carousel-nav">Summary</button> </v-breadcrumbs-item>
              <v-breadcrumbs-divider />
              <v-breadcrumbs-item> <button class="carousel-nav">Purpose</button> </v-breadcrumbs-item>
              <v-breadcrumbs-divider />
            <v-breadcrumbs-item> <button class="carousel-nav">Skills</button> </v-breadcrumbs-item>
        </v-breadcrumbs>
        <div class="carousel-inner">
          <div class="carousel-item active">
              <h1>Summary</h1>
              <p>3D model of a Hitbox controller.  </p>
          </div>
          <div class="carousel-item">
              <h1>Purpose</h1>
          </div>
          <div class="carousel-item">
              <h1>Skills</h1>
          </div>
        </div>
    </div>
</template>

<style scoped> 


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
</style>