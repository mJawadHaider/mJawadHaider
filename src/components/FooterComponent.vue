<template>
  <v-row
    class="ma-0 footer-section align-center"
    :class="$vuetify.display.smAndDown ? 'py-10' : 'py-15'"
    justify="center"
  >
    <section-header
      title="Get In Touch"
      titleColor="#a2a2a2"
      icon="mdi-email-open"
      iconColor="#a2a2a2"
      :lineStyling="{ width: '200px', color: 'white' }"
    />

    <v-col
      cols="12"
      md="3"
      sm="12"
      class="d-flex flex-column align-center"
      :class="$vuetify.display.smAndDown ? 'my-3' : ''"
    >
      <h3>Email:</h3>

      <span class="mt-3">
        <v-icon icon="mdi-email" size="small" class="mr-1" />
        <span
          @click="routeToLink('mailto:jhaider869@gmail.com')"
          style="cursor: pointer; text-decoration: underline"
        >
          {{ 'jhaider869@gmail.com' }}
        </span>
      </span>
    </v-col>

    <v-col
      cols="12"
      md="3"
      sm="12"
      class="d-flex flex-column align-center"
    >
      <h3 class="mb-3">Follow Me:</h3>
      <div>
        <v-tooltip
          v-for="(button, index) in socialMediaButtons"
          :key="index"
          location="top"
          :content="button.name"
          max-width="63px"
          max-height="20px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon
              class="mr-3"
              variant="tonal"
              color="#a2a2a2"
              size="small"
              elevation="4"
              @click="routeToLink(button.link)"
            >
              <v-icon color="#a2a2a2" v-bind="button" size="x-large">
                {{ button.icon }}
              </v-icon>
            </v-btn>
          </template>
          <span
            class="d-flex justify-center"
            style="font-size: 12px; margin-top: -4px"
            >{{ button.tooltipText }}</span
          >
        </v-tooltip>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import SectionHeader from './SectionHeader.vue';

export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      socialMediaButtons: [
        {
          icon: 'mdi-linkedin',
          tooltipText: 'Linkedin',
          link: 'https://www.linkedin.com/in/mjawadhaider',
          background: '#0077b5',
        },
        {
          icon: 'mdi-github',
          tooltipText: 'Github',
          link: 'https://github.com/mJawadHaider',
          background: 'grey',
        },
        {
          icon: 'mdi-twitter',
          tooltipText: 'Twitter',
          link: 'https://twitter.com/mJawadHaider03',
          background: '#1da1f2',
        },
        {
          icon: 'mdi-instagram',
          tooltipText: 'Instagram',
          link: 'https://www.instagram.com/m.jawad_haider/',
          background: '#1da1f2',
        },
      ],
    };
  },
};
</script>

<style>
.footer-section {
  background-color: #252525;
  color: #a2a2a2;
  box-shadow: 1px 1px 100px;
  z-index: 1;
}

.footer-section h3 {
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
