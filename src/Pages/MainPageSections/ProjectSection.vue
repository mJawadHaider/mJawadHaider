<template>
  <div
    ref="projectAnimation"
    class="fading-div"
    style="max-width: 100vw"
  >
    <v-row
      justify="center"
      class="main-wrapper"
    >
      <section-header
        title="Projects"
        icon="mdi-briefcase"
        iconColor="#473a3a"
        :lineStyling="{ width: '300px', color: '#353131' }"
        titleStyling="mt-12"
      />

      <div
        v-for="(project, index) in projects"
        :key="index"
        class="d-flex justify-center"
        :style="`width: 100%; ${index % 2 === 0
            ? ''
            : 'background-color: white; box-shadow: 1px 1px 8px;'
          }`"
      >
        <project-item
          :project="project"
          :index="index"
        />
      </div>
    </v-row>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import ProjectItem from '@/components/ProjectItem.vue';

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
            'THe 95 Star is a web application for pick and drop services. Customers can make reservations, while the admin has the ability to manage reservations, discount codes, cars, surges, static pages, and configure home page messages.',
          responsibilites:
            'I contributed as full stack developer | Vue.js, Node.js <br><br> I made significant contributions to the project by working on change requests for clients.  In addition to addressing client requirements, I focused on ensuring application security by creating robust APIs and implementing appropriate security measures.',
          duration: 'September 2022 - current',
          image: 'the95Star.png',
          projectLink: 'https://www.the95star.com',
          pictures: [
            'the95Star.png',
            '95Star1.png',
            '95Star2.png',
            '95Star3.png',
          ],
        },
        {
          name: 'Bookee - Web based Book Management Application',
          atCompany: 'Creator',
          description:
            'The app features a user community where users can follow each other and stay updated on reading activities. Users can maintain a status for each book, indicating whether they have read it, are currently reading it, or are interested in reading it.',
          responsibilites:
            'Worked on this project as Full Stack Developer | Vue.js Node.js <br><br> Through my expertise in these technologies, I successfully integrated frontend functionality with backend APIs, ensuring seamless communication and a smooth user experience. ',
          duration: 'September 2022 - December 2022',
          image: 'Bookee-Home.png',
          githubLink:
            'https://github.com/mJawadHaider/DSA-project-Bookee',
          pictures: ['Bookee-Home.png', 'Bookee2.png'],
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
        },
      ],
    };
  },
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: this.$vuetify.display.smAndDown ? 0.0 : 0.2,
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
  },
};
</script>

<style>
.main-wrapper {
  height: auto;
  animation: fadeUp 0.5s ease-in-out;
}

.fading-div {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 1s, transform 0.5s;
}

.visible-div {
  opacity: 1;
  transform: translateY(0);
}</style>
