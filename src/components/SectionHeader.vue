<template>
  <v-col
    cols="8"
    md="4"
    sm="8"
    class="d-flex justify-center align-center"
    :class="titleStyling"
  >
    <h1 :style="`color: ${titleColor}`">{{ title }}</h1>
  </v-col>

  <!-- seperator -->
  <v-col
    cols="12"
    md="10"
    sm="12"
    class="py-0 d-flex align-center justify-center"
    style="max-height: 52px"
  >
    <hr style="width: 275px; color: white" :style="lineStyling" />
    <v-icon class="mx-3" :color="iconColor" size="25">
      {{ icon }}
    </v-icon>
    <hr style="width: 275px; color: white" :style="lineStyling" />
  </v-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => 'Title Here',
    },
    titleColor: {
      type: String,
      default: () => '#473a3a',
    },
    icon: {
      type: String,
      default: () => '',
    },
    iconColor: {
      type: String,
      default: () => '',
    },
    lineStyling: {
      type: Object,
      default: () => {},
    },
    titleStyling: {
      type: String,
      default: () => '',
    }
  },
};
</script>

<style></style>
