<template>
  <v-snackbar
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
export default {
  props: {
    isSnackBarDisabled: Boolean,
    snackbarVisible: Boolean,
  },
  data() {
    return {}
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
}
</script>

<style></style>