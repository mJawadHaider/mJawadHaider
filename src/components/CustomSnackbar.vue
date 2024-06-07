<template>
  <v-snackbar
    id="custom-snackbar"
    v-model="toggleSnackbar"
    location="right bottom"
    min-width="6"
    variant="text"
    :timeout="-1"
    :style="snackBarStyling"
  >
    <template v-slot:actions>
      <v-btn
        v-show="!isSnackBarDisabled"
        class="ma-0 custom-btn-hover"
        size="75"
        elevation="20"
        icon
        :style="`background: ${lightGray};`"
        :disabled="isSnackBarDisabled"
        @click="scrollToTop"
      >
        <v-icon
          size="45"
          color="grey-lighten-1"
        >
          mdi-arrow-up
        </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { gsap } from 'gsap';

export default {
  props: {
    isSnackBarDisabled: Boolean,
    snackbarVisible: Boolean,
  },
  computed: {
    toggleSnackbar: {
      get() { return this.snackbarVisible },
      set() { }
    },
    snackBarStyling() {
      return this.$vuetify.display.mdAndUp
        ? { 'margin-bottom': '80px', 'margin-right': '56px' }
        : { 'margin-bottom': '40px', 'margin-right': '24px' };
    },
  },
  methods: {
    scrollToTop() {
      const appElement = document.getElementById('appBarId');
      appElement.scrollIntoView({ behavior: 'smooth' });
      this.activeTab = 0;
    },
  },
  mounted() {
    gsap.fromTo('#custom-snackbar', {
      opacity: 0,
      scale: 0.5,
      y: 400,
      x: 500,
    }, {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'back.out',
    })
  },
}
</script>

<style scoped>
.custom-btn-hover {
  transition: transform 0.5s;
}

.custom-btn-hover:hover {
  transform: rotate(360deg);
}
</style>