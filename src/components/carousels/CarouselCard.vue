
<script>

export default {
  name: 'Carousel',
  props: {
    title: String,
    summary: String,
    purpose: String,
    skills: String,
    url: String,
    side: Number | Function,
  },
  methods: {
    carouselNav(selection) {
        const summary = document.getElementById(this.title + '-summary');
        const purpose = document.getElementById(this.title + '-purpose');
        const skills = document.getElementById(this.title + '-skills');
        if (selection === 'summary') {
            summary?.classList.add('active');
            purpose?.classList.remove('active');
            skills?.classList.remove('active');
        } else if (selection === 'purpose') {
            summary?.classList.remove('active');
            purpose?.classList.add('active');
            skills?.classList.remove('active');
        } else if (selection === 'skills') {
            summary?.classList.remove('active');
            purpose?.classList.remove('active');
            skills?.classList.add('active');
        }
    },
  }
}
</script>

<template>
    <div class="row">
      <v-card class="col-md-4" style="display: grid; place-items: center;" v-if="this.side== 1 ">
        <img :src="this.url" :alt="'Image for the project with the title: ' + this.title ">
      </v-card>
      <v-card class="col-md-8 d-flex place-content-center" min-height="450px">
          <div :id="this.title" class="carousel slide" data-bs-ride="true">
              <v-breadcrumbs>
                  <v-breadcrumbs-item> <button  class="carousel-nav" @click="carouselNav('summary')">Summary</button> </v-breadcrumbs-item>
                    <v-breadcrumbs-divider />
                    <v-breadcrumbs-item> <button class="carousel-nav" @click="carouselNav('purpose')">Purpose</button> </v-breadcrumbs-item>
                    <v-breadcrumbs-divider />
                  <v-breadcrumbs-item> <button class="carousel-nav" @click="carouselNav('skills')">Skills</button> </v-breadcrumbs-item>
              </v-breadcrumbs>
              <div class="carousel-inner">
                <div :id="this.title + '-summary'" class="carousel-item active">
                    <h1>Summary</h1>
                    <p>{{summary}}  </p>
                </div>
                <div :id="this.title + '-purpose'" class="carousel-item">
                    <h1>Purpose</h1>
                    <p>{{purpose}}</p>
                </div>
                <div :id="this.title + '-skills'" class="carousel-item">
                    <h1>Skills</h1>
                    <p>{{skills}}</p>
                </div>
              </div>
          </div>
      </v-card>
      <v-card class="col-md-4" style="display: grid; place-items: center;" v-if="this.side == 0 ">
        <img :src="this.url" :alt="'Image for the project with the title: ' + this.title ">
      </v-card>
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