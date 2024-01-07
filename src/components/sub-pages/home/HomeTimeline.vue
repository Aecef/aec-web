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
        position: "Application Developer Intern",
        timePeriod: "June 2021 - August 2021",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
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
        position: "President",
        timePeriod: "August 2019 - May 2022",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
      },
      {
        title: "Univeristy of Iowa",
        timePeriod: "August 2018",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Est et nobis iisque percipit.",
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
          <h2 class="font-weight-light">
            <strong>
              {{ item.title }}
            </strong>
          </h2>
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
