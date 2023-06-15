<template>
  <v-app-bar color="#535353" style="height: 23px; position: static;" elevation="4" density="compact">
    <div class="app-bar">
      <!-- <v-btn
        v-for="(button, index) in appBarButtons"
        :key="index"
        density="comfortable"
        variant="tonal"
        color="white"
        @click="btnClicked(button)"
      >
        {{ button.title }}
      </v-btn> -->
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      appBarButtons: [
        {
          title: 'Home',
          StartingPoint: 0,
        },
        {
          title: 'About Me',
          StartingPoint: 100,
        },
        {
          title: 'Projects',
          StartingPoint: 200,
        },
        {
          title: 'Contact Me',
          StartingPoint: 3000,
        },
      ],
    };
  },
  methods: {
    // btnClicked(btn) {
    //   window.scrollTo(0, btn.StartingPoint);
    // },
    btnClicked(btn) {
      // const contentElement = this.$refs.content;
      // const scrollHeight = contentElement.scrollHeight;
      // const startPosition = contentElement.scrollTop;
      const duration = 1000; // Animation duration in milliseconds
      const startTime = performance.now();

      const scrollAnimation = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const ease = this.easeOutQuad(elapsed / duration);
        const newPosition = btn.StartingPoint;

        window.scrollTo(0, newPosition);

        if (elapsed < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      };

      requestAnimationFrame(scrollAnimation);
    },

    easeOutQuad(t) {
      return t * (2 - t);
    },
  },
};
</script>

<style>
.app-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  gap: 1em;
}
</style>
