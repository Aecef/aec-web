<script lang="ts">
export default {
  name: "HomeTimeline",
  data() {
    const timelineData = [
      {
        title: "The Future",
        timePeriod: "Present",
        text: "As i continue my journey within software/project management, I will be searching for companies that share my values in adaptability/creatity.",
      },
      {
        title: "Certified Associate in Project Management (CAPM)",
        timePeriod: "August 2023",
        text: "Looking for a greater understanding of project managements role in Software engineering, I pursued a CAPM offered by the Project Management Institute. Through that process I gained a greater understanding of Agile and Waterfall methodologies, as well as the importance of clearly defining goals and aligning them with values of the client.",
      },
      {
        title: "Client Home Healthcare Inc.",
        link: "https://www.clienthhc.com/",
        position: "Help Desk Specialist",
        timePeriod: "June 2022 - July 2023",
        text: "Navigating Care with Precision:  I ensured seamless support \
              for patients and colleagues, troubleshooting issues, and delivering timely solutions to enhance the healthcare experience.",
      },
      {
        title: "BSE in Computer Science Engineering",
        timePeriod: "May 2022",
        text: "I officially graduated from the University of Iowa with a BSE in Computer Science Engineering. \
              I've honed my skills in analyzing cutting-edge solutions, tackling complex challenges, and exploring new technologies. ",
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
        title: "OASIS",
        position: "Secretary",
        timePeriod: "August 2019 - May 2022",
        text: "OASIS (Organization for the Active Support of International Students) is an University of Iowa organization that provides a support system for international students. \
              As a secretary I was responsible for taking minutes at meetings, sending out emails, and other administrative tasks.",
      },
      {
        title: "Covid",
        timePeriod: "2020",
        text: "In 2020 the normal routine of univeristy life was disrupted by the Covid-19 pandemic. \
              The University of Iowa transitioned to online classes and managed multiple organizations in all-virtual models.",
      },
      {
        title: "EPX Studio",
        link: "https://epx.org.uiowa.edu/",
        position: "President",
        timePeriod: "August 2019 - May 2022",
        text: "EPX Studio is a student organization at the University of Iowa that provides a space for students to learn about and create video games, animation, and other types of media. My role as president was my first true experience with leadership and the responsibility that came with it. Organizing meetings, planning events, recruitment, and ensuring that the organization was running smoothly were some of my primary roles.",
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

    const resizeClassAdded = false;
    return {
      timelineData,
      resizeClassAdded,
    };
  },
  mounted() {
    const paddingTargets = document.querySelectorAll(".v-timeline-item__body");
    const timelineDividers = document.querySelectorAll(".v-timeline-divider");
    if (window.innerWidth < 800) {
      this.resizeClassAdded = paddingHandler(
        window.innerWidth,
        this.resizeClassAdded,
        paddingTargets,
        timelineDividers
      );
    }

    // Checks if the card is in view
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

    // Checks if the window is resized
    window.addEventListener("resize", () => {
      this.resizeClassAdded = paddingHandler(
        window.innerWidth,
        this.resizeClassAdded,
        paddingTargets,
        timelineDividers
      );
    });

    function paddingHandler(
      windowSize: number,
      resizeClassAdded: boolean,
      paddingTargets: NodeListOf<Element>,
      timelineDividers: NodeListOf<Element>
    ): boolean {
      if (windowSize < 800 && !resizeClassAdded) {
        paddingTargets.forEach((target) => {
          target.classList.add("px-0");
        });
        timelineDividers.forEach((target) => {
          target.classList.add("py-4");
        });
        return true;
      } else {
        paddingTargets.forEach((target) => {
          target.classList.remove("px-0");
        });
        timelineDividers.forEach((target) => {
          target.classList.remove("py-4");
        });
      }
      return false;
    }
  },
};
</script>

<template>
  <v-timeline class="timeline-wrapper" line-inset="12">
    <v-timeline-item
      v-for="item in timelineData"
      dot-color="purple-lighten-2"
      fill-dot
    >
      <div class="item-padding">
        <v-card class="timeline-item">
          <v-card-title class="bg-purple-lighten-2">
            <v-icon size="large" icon="mdi-magnify"></v-icon>
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
            <div class="text-sm pt-2" v-if="item.position">
              {{ item.position }}
            </div>
            <div>
              <i class="text-xs">{{ item.timePeriod }}</i>
            </div>
          </v-card-title>
          <v-card-text>
            <p>
              {{ item.text }}
            </p>
          </v-card-text>
        </v-card>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped>
a {
  font-weight: bolder;
  color: orange;
}

h2 {
  font-family: "Jomhuria", Helvetica;
  font-size: 2.5rem;
  font-weight: 400;
  height: 2.25rem;
}

p {
  padding-bottom: 20px;
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
  transition: all 1s ease-in-out;
}

@media screen and (max-width: 800px) {
  .timeline-wrapper {
    display: table;
  }
  .item-padding {
    padding: 0px !important;
  }
}
</style>

<style>
@media screen and (max-width: 800px) {
  .v-timeline--vertical.v-timeline {
    padding-inline-start: 0px !important;
  }
}
</style>
