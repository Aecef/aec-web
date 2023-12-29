<script lang="ts">


export default {
  name: 'HomeTimeline',
  data() {
    const timelineData = [
        {
            title: "New Chapter",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
        },
        {
            title: "Certified Associate in Project Management (CAPM)",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
        },
        {
            title: "Client Home Healthcare Inc.",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
        },
        {
            title: "BSE in Computer Science Engineering",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
        },
        {
            title: "Sentinel Technologies",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
        },
        {
            title: "OASIS",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
        },
        { 
            title: "Covid",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
        },
        {
            title: "EPX Studio",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
        },
        {
            title: "Univeristy of Iowa",
            text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
        },

    ]
    return {      
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