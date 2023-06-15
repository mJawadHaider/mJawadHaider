<template>
  <v-app style="background-color: #a2a2a2;">
    <app-bar  />
    <v-main class="main-container">
      <main-page />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import MainPage from '@/Pages/MainPage.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    MainPage,
  },
  created() {
    document.title = 'Jawad Haider';
  },
  mounted() {
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');

* {
  font-family: 'Fira Sans', sans-serif;
}

.v-btn,
.v-tab {
  text-transform: capitalize !important;
}

.main-container {
  background-color: #a2a2a2;
  padding: 0px;

  @media (max-width: 900px) {
    overflow: hidden;
  }
}
/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
