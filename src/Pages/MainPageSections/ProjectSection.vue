<template>
  <div
    ref="projectAnimation"
    class="fading-div"
  >
    <v-row
      justify="center"
      class="main-wrapper"
    >
      <section-header
        title="Projects"
        icon="mdi-briefcase"
        :titleColor="secondary"
        :iconColor="white"
        :lineStyling="{ width: '300px', color: white }"
        titleStyling="mt-12 text-uppercase"
      />

      <v-col
        cols="12"
        class="d-flex justify-center"
        :class="{ 'my-6': $vuetify.display.xs, 'my-16': $vuetify.display.smAndUp }"
      >
        <v-row
          class="projects-wrapper"
          justify="center"
        >
          <v-col
            v-for="(project, index) in projects"
            :key="index"
            cols="12"
            md="3"
            class="project-item my-cursor-hover pa-0"
            @click="toggleProjectDetailsDialog(project)"
          >
            <project-item
              :project="project"
              :index="index"
              @closeDialog="toggleProjectDetailsDialog"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import ProjectItem from '@/components/ProjectItem.vue';
import { gsap } from 'gsap';
import { fetchProjects } from '@/utils/fetchData';

export default {
  components: {
    ProjectItem,
    SectionHeader,
  },
  data() {
    return {
      projects: [
        {
          icon: '95star.png',
          iconSize: '30px',
          name: 'The 95 Stars - Pick & Drop Service',
          atCompany: 'Contributor',
          description:
            'The 95 Star is a web application for pick and drop services. Customers can make reservations, while the admin has the ability to manage reservations, discount codes, cars, surges, static pages, and configure home page messages.',
          responsibilites:
            'I made contributions to the project by working on change requests for clients.  In addition to addressing client requirements, I focused on ensuring application security by creating robust APIs and implementing appropriate security measures.',
          duration: 'September 2022 - Febuary 2023',
          image: 'the95Star.png',
          projectLink: 'https://www.the95star.com',
          pictures: [
            'the95Star.png',
            '95Star1.png',
            '95Star2.png',
            '95Star3.png',
          ],
          active: false,
        },
        {
          name: 'Bookee - Web based Book Management Application',
          atCompany: 'Creator',
          description:
            'The app features a user community where users can follow each other and stay updated on reading activities. Users can maintain a status for each book, indicating whether they have read it, are currently reading it, or are interested in reading it.',
          responsibilites:
            'Through my expertise in web technologies, I successfully integrated frontend functionality with backend APIs, ensuring seamless communication and a smooth user experience. ',
          duration: 'September 2022 - December 2022',
          image: 'Bookee-Home.png',
          githubLink:
            'https://github.com/mJawadHaider/DSA-project-Bookee',
          pictures: ['Bookee-Home.png', 'Bookee2.png'],
          active: false,
        },
        {
          icon: 'budgetManager.png',
          iconSize: '22px',
          name: 'Budget Manager',
          atCompany: 'Contributor',
          description:
            'Budget Manager is a web app for construction companies, streamlining budget management, project funding, and e-invoice generation for customers.',
          responsibilites:
            'As a frontend developer, I was responsible for developing the complete frontend of the application using Vuetify and Vue.js. I utilized the power of these frameworks to create a visually appealing and user-friendly interface for seamless user interactions.',
          duration: 'April 2022 - September 2022',
          image: 'BM.png',
          githubLink:
            'https://github.com/isajjadali/budget-manager-v3',
          pictures: ['BM.png', 'BM1.png', 'BM2.png'],
          active: false,
        },
      ],
      fetchProjects,
    };
  },
  computed: {},
  methods: {
    toggleProjectDetailsDialog(project) {
      project.active = !project.active;
      if (project.active) {
        document.body.classList.add('card');
      } else {
        document.body.classList.remove('card');
        document.body.classList.remove('hover');
      }
    },
    addAnimationToProjectCards() {
      const cards = gsap.utils.toArray('.project-item');
      let currentRow = 0;
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: currentRow % 2 ? 500 : -500,
          },
          {
            opacity: 1,
            // delay: Math.floor((index) / 3),
            delay: currentRow * 0.5,
            x: 0,
            duration: 0.7,
            ease: 'power1.out',
          },
        );
        if (index % 3 === 2) currentRow++;
      })
    },
  },
  async mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible-div');
        } else {
          entry.target.classList.remove('visible-div');
        }
      });
    }, options);

    observer.observe(this.$refs.projectAnimation);
    this.addAnimationToProjectCards();
    this.projects = await this.fetchProjects();
  },
};
</script>

<style lang="scss">
.main-wrapper {
  height: auto;
  animation: fadeUp 0.5s ease-in-out;
  padding-bottom: 50px;
}

.fading-div {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 1s, transform 0.5s;

  @media (max-width: 600px) {
    margin-inline: 20px;
    padding-inline: 28px;
  }

  @media (max-width: 900px) {
    padding-inline: 14px;
    margin-inline: 60px;
  }
}

.visible-div {
  opacity: 1;
  transform: translateY(0);
}

.projects-wrapper {
  gap: 0.9rem;
}

.project-item {
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #ffffff40;
  border-radius: 12px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 15px #353535;

  position: relative;
  overflow: hidden;
}

.project-item:hover .main-content {
  transform: scale(1.2);
}

.project-item:hover .overlay-content {
  height: 100%
}
</style>
