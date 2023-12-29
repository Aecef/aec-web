<script lang="ts">


export default {
  name: 'HomeTimeline',
  data() {
    const timelineData = [
        {
            title: "New Chapter",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.",
        },
        {
            title: "Title 2",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.",
        },
        {
            title: "Title 3",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.",
        },        
    ]
    return {      
        valorant: './src/assets/img/Valorant.PNG',
        hitbox: './src/assets/img/box_paint.jpg',
        iowa: './src/assets/img/UoI.jpg',
        timelineData,
    }

  },
}


</script>


<template>
    <v-timeline>
      <v-timeline-item
        v-for="item in this.timelineData"
        :key="item"
        dot-color="purple-lighten-2"
        fill-dot
      >
        <v-card>
          <v-card-title class="bg-purple-lighten-2">
            <v-icon
              size="large"
              class="me-4"
              icon="mdi-magnify"
            ></v-icon>
            <h2 class="font-weight-light">
                {{ item.title }}
            </h2>
          </v-card-title>
          <v-card-text>
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </template>