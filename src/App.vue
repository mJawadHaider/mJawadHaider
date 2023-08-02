<template>
  <v-app style="background-color: #a2a2a2">
    <app-bar
      id="appBarId"
      :tabs="tabs"
      @toggleNavigationDrawer="toggleNavigationDrawer"
    />
    <v-main class="main-container">
      <main-page
        :isSnackBarDisabled="disbaleSnackbar"
        @toggleTabIndex="toggleTabIndex"
      />
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
  data: () => {
    return {
      activeTabIndex: 0,
      disbaleSnackbar: false,
    };
  },
  computed: {
    tabs() {
      const appBarButtons = [
        {
          title: 'Home',
          componentId: '',
          isActive: true,
        },
        {
          title: 'About Me',
          block: 'center',
          componentId: 'aboutSectionId',
          isActive: false,
        },
        {
          title: 'Projects',
          block: 'start',
          componentId: 'projectSectionId',
          isActive: false,
        },
        {
          title: 'Contact Me',
          componentId: 'footerSectionId',
          isActive: false,
        },
      ];
      return appBarButtons.map((tab, index) =>
        index === this.activeTabIndex
          ? { ...tab, isActive: true }
          : { ...tab, isActive: false }
      );
    },
  },
  methods: {
    toggleTabIndex(index) {
      this.activeTabIndex = index || 0;
    },
    toggleNavigationDrawer(toggle) {
      document.documentElement.style.overflow = toggle
        ? 'hidden'
        : '';
      this.disbaleSnackbar = toggle;
    },
  },
  created() {
    document.title = 'Jawad Haider';
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
.v-tab,
.upper-case {
  text-transform: uppercase !important;
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
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
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
}</style>
