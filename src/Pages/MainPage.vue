<template>
  <div style="width: 100%;">
    <information-section />
    <about-section />
    <project-section />
    <footer-component />
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
}
</style>
