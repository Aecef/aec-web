<script lang="ts">
export default {
  name: "HomeTimeline",
  data() {
    const timelineData = [
      {
        title: "New Chapter",
        timePeriod: "Present",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit. \
                Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
      },
      {
        title: "Certified Associate in Project Management (CAPM)",
        timePeriod: "August 2023",
        text: "Certified Associate in Project Management is a credential offered by the Project Management Institute. \
                \nThe CAPM is an entry-level certification for project practitioners.",
      },
      {
        title: "Client Home Healthcare Inc.",
        link: "https://www.clienthhc.com/",
        position: "Help Desk Specialist",
        timePeriod: "June 2022 - July 2023",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
      },
      {
        title: "BSE in Computer Science Engineering",
        timePeriod: "May 2022",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
      },
      {
        title: "Sentinel Technologies",
        link: "https://www.sentinel.com/",
        position: "Application Developer Intern",
        timePeriod: "June 2021 - August 2021",
        text: "Internship at Sentinel Technologies as an Application Developer. \
                \nWorked on a team to develop a web application utilizing the ASP .NET framework.",
      },
      {
        title:
          "OASIS (Organization for the Active Support of International Students)",
        position: "Secretary",
        timePeriod: "August 2019 - May 2022",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
      },
      {
        title: "Covid",
        timePeriod: "2020",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
      },
      {
        title: "EPX Studio",
        link: "https://epx.org.uiowa.edu/",
        position: "President",
        timePeriod: "August 2019 - May 2022",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
      },
      {
        title: "Univeristy of Iowa",
        timePeriod: "August 2018",
        text: "After a reassessment of my educational/life goals I made the difficult decision to transfer to the University of Iowa as a  Computer Science and Engineering major.",
      },
      {
        title: "Univeristy of Louisville",
        timePeriod: "August 2017",
        text: "Entered the College of Engineering as a Computer Science and Computer Engineering major.",
      },
    ];
    return {
      timelineData,
    };
  },
  mounted() {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.isIntersecting) {
          target.classList.add("show");
        } else {
          target.classList.remove("show");
        }
      });
    });
    const targets = document.querySelectorAll(".timeline-item");
    targets.forEach((target) => {
      cardObserver.observe(target);
    });
  },
};
</script>

<template>
  <v-timeline>
    <v-timeline-item
      v-for="item in timelineData"
      dot-color="purple-lighten-2"
      fill-dot
    >
      <v-card class="timeline-item">
        <v-card-title class="bg-purple-lighten-2">
          <v-icon size="large" class="me-4" icon="mdi-magnify"></v-icon>
          <h2 class="font-weight-light" v-if="!item.link">
            <strong>
              {{ item.title }}
            </strong>
          </h2>
          <div v-if="item.link">
            <a :href="item.link" target="_blank" rel="noopener noreferrer"
              ><h2>{{ item.title }}</h2>
            </a>
          </div>
          <div class="text-sm pt-2">{{ item.position }}</div>
          <div>
            <i class="text-xs">{{ item.timePeriod }}</i>
          </div>
        </v-card-title>
        <v-card-text>
          {{ item.text }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped>
a {
  font-weight: bolder;
}
.timeline-item {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(-50%) !important;
}
.show {
  opacity: 1;
  filter: blur(0px);
  transform: translateY(0%) !important;
  transition: all 2s;
}
</style>
