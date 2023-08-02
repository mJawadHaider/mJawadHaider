<template>
  <div style="width: 100%">
    <information-section id="informationSectionId" />
    <about-section id="aboutSectionId" />
    <project-section id="projectSectionId" />
    <footer-component id="footerSectionId" />
    <v-snackbar
      v-model="snackbarVisible"
      location="right bottom"
      min-width="5"
      variant="text"
      :timeout="-1"
      :style="snackBarStyling"
    >
      <template v-slot:actions>
        <v-btn
          class="ma-0"
          density="comfortable"
          size="x-large"
          elevation="20"
          icon
          :style="{ background: '#535353' }"
          :disabled="isSnackBarDisabled"
          @click="scrollToTop"
        >
          <v-icon
            size="x-large"
            color="grey-lighten-4"
          >
            mdi-arrow-up
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import InformationSection from './MainPageSections/InformationSection.vue';
import AboutSection from './MainPageSections/AboutSection.vue';
import ProjectSection from './MainPageSections/ProjectSection.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    InformationSection,
    AboutSection,
    ProjectSection,
    FooterComponent,
  },
  data: () => {
    return {
      snackbarVisible: false,
    };
  },
  props: {
    isSnackBarDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    snackBarStyling() {
      return this.$vuetify.display.mdAndUp
        ? { 'margin-bottom': '60px', 'margin-right': '56px' }
        : { 'margin-bottom': '30px', 'margin-right': '17px' };
    },
  },
  methods: {
    scrollToTop() {
      const appElement = document.getElementById('appBarId');
      appElement.scrollIntoView({ behavior: 'smooth' });
      this.activeTab = 0;
    },
    checkVisibility(elementId) {
      const element = document.getElementById(elementId);
      const top = element.getBoundingClientRect().top;
      const bottom = element.getBoundingClientRect().bottom;

      if (bottom < 0 || top > window.innerHeight) {
        return false;
      } else if (top >= 0 && bottom <= window.innerHeight) {
        // Component is fully visible
        return true;
      } else if (top < window.innerHeight && bottom > 300) {
        // Component is partially visible
        return true;
      }
    },
    toggleSnackBar() {
      const scrollY = window.scrollY;
      this.snackbarVisible = scrollY > 190;

      // index is according to the order of components & order is changed bcz footer is small and must be checked before above section
      let refs = [
        { ref: 'informationSectionId', index: 0 },
        { ref: 'aboutSectionId', index: 1 },
        { ref: 'footerSectionId', index: 3 },
        { ref: 'projectSectionId', index: 2 },
      ];

      for (let index = 0; index < refs.length; index++) {
        const element = refs[index];
        if (this.checkVisibility(element.ref)) {
          this.$emit('toggleTabIndex', element.index);
          break;
        }
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.toggleSnackBar);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.toggleSnackBar);
  },
};
</script>

<style>
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-700px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}</style>
