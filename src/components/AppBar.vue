<template>
  <div>
    <v-navigation-drawer
      v-if="$vuetify.display.smAndDown"
      app
      v-model="toggle"
      absolute
      :color="darkGray"
      style="position: fixed"
      elevation="10"
      location="right"
      width="500"
    >
      <div
        style="color: white;"
        class="mr-6 py-4 d-flex justify-end"
      >
        <v-btn
          variant="tonal"
          size="x-large"
          icon
          @click.stop="toggleNavigationDrawer"
        >
          <v-icon
            size="x-large"
            color="white"
            icon="mdi-close"
          />
        </v-btn>
      </div>
      <div
        style="width: 100%; margin: 83px 16px 24px;"
        class="px-3"
      >
        <span
          style="color: gray; font-size: 13px; margin-bottom: 10px;"
          class="upper-case"
        >
          Navigation
        </span>
        <div class="stripe" />
      </div>
      <v-list
        v-if="showNavigationList"
        class="px-5"
        nav
      >
        <div
          v-for="(tab, index) in tabs"
          :key="index"
        >
          <v-list-item
            :title="tab.title"
            :active="tab.isActive"
            :base-color="gray"
            color="white"
            class="mt-1 upper-case navigation-list"
            @click="scrollToSection(tab, index)"
          >
            <template v-slot:append>
              <div
                class="dot"
                v-if="tab.isActive"
              ></div>
            </template>
          </v-list-item>
        </div>
      </v-list>
      <div
        :style="$vuetify.display.xs ? { height: '34%' } : { height: '38%' }"
        style="align-content: space-between;"
        class="d-flex flex-column justify-end mx-7 mb-12"
      >
        <div
          class="stripe mb-5"
          style="width: 100%;"
        />
        <span class="text-gray my-5">SOCIALS</span>
        <div
          v-if="showNavigationList"
          style="animation: slideInRight 0.5s ease-in forwards;"
        >
          <social-component
            :iconSize="$vuetify.display.xs ? 'default' : 'x-large'" />
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      v-if="!isFooterVisible"
      id="appBar"
      class="pt-3 px-6 font-18"
      scroll-behavior="fade-image hide"
      scroll-threshold="191"
      app
      flat
      :color="darkGray"
      :image="require('../assets/app-bar.png')"
      :elevation="0"
      style="height: 80px"
    >
      <div
        class="app-bar-title text-white magnetic-div"
        style="height: 100%; cursor: pointer;"
        :style="$vuetify.display.smAndDown ? 'width: 50%; padding: 0' : 'width: 18%'"
        @mousemove="handleMouseMove(-1)"
        @mouseleave="handleMouseLeave(-1)"
        @mouseenter="handleMouseEnter"
        @click="refreshPage"
      >
        <v-icon
          icon="mdi-copyright"
          class="pt-0 mr-1"
          size="small"
        />
        <span style="font-weight: 450;">
          {{ appBarTitle }}
        </span>
      </div>
      <div
        v-if="$vuetify.display.smAndDown"
        style="display: flex; justify-content: end; width: 50%;"
      >
        <v-app-bar-nav-icon
          :color="gray"
          class="text-white"
          flat
          :ripple="false"
          width="85"
          height="40"
          :border="0"
          style="border-radius: 7px;"
          @click.stop="toggleNavigationDrawer"
        >
          <v-icon
            icon="mdi-checkbox-blank-circle"
            size="7"
            class="mr-2"
          /> menu
        </v-app-bar-nav-icon>
      </div>

      <div
        v-if="$vuetify.display.mdAndUp"
        class="tabs-container text-white"
      >
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="px-2 magnetic-button"
          :class="tab.isActive ? 'button-selected' : ''"
          style="border-radius: 5px; transition: transform 0.2s;"
          @mousemove="handleMouseMove(index)"
          @mouseleave="handleMouseLeave(index)"
          @click="scrollToSection(tab)"
        >
          <span class="button-text">
            {{ tab.title }}
          </span>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import SocialComponent from './SocialComponent.vue';

export default {
  components: {
    SocialComponent,
  },
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    isFooterVisible: Boolean,
  },
  data: () => {
    return {
      toggle: false,
      activeIndex: -1,
      appBarTitle: 'Code by Jawad',
      showNavigationList: false,
    };
  },
  watch: {
    toggle(newValue) {
      this.$emit('toggleNavigationDrawer', newValue);
    },
  },
  computed: {
    activeTab: {
      get() {
        return this.tabs.findIndex((tab) => tab.isActive);
      },
      set() { },
    },
  },
  methods: {
    toggleNavigationDrawer() {
      this.toggle = !this.toggle;
      this.showNavigationList = !this.showNavigationList;
    },
    scrollToSection(btn) {
      this.toggle = false;
      this.showNavigationList = false;
      const component = document.getElementById(
        btn?.componentId || 'appBarId'
      );
      const scrollPosition = component.getBoundingClientRect().top + window.scrollY - 35;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    },
    handleMouseMove() {
      const x = event.clientX;
      const y = event.clientY;

      const rect = event.target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 500) {
        event.target.style.transform = `translate(${deltaX / 10}px, ${deltaY / 10}px)`;
      } else {
        event.target.style.transform = 'translate(0, 0)';
      }
    },
    handleMouseLeave() {
      const button = event.target;

      button.style.animation = 'bounceBack 0.5s ease';
      setTimeout(() => {
        button.style.animation = '';
        button.style.transform = 'translate(0, 0)';
      }, 500);

      this.appBarTitle = 'Code by Jawad';
    },
    handleMouseEnter() {
      this.appBarTitle = 'JAWAD HAIDER';
    },
    refreshPage() {
      location.reload();
    },
  },
};
</script>

<style lang="scss">
.app-bar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.6em;
  margin-right: 7rem;
}

.app-bar-title {
  display: flex;
  align-items: center;
  width: 50%;
  color: #1f1d1d;
  padding-left: 1.7rem;
}

.stripe {
  width: 90%;
  height: 2px;
  display: block;
  background-color: #ffffff39;
  margin-block: 20px;
}

.navigation-list {

  animation: slideInRight 0.5s ease-in forwards;

  .v-list-item__content {
    padding-block: 10px;

    .v-list-item-title {
      font-size: 1.5rem;
      padding-block: 10px;
      height: 40px;
      text-transform: uppercase !important;
    }
  }

  .v-list-item__append {
    margin-right: 15px;
  }
}

.magnetic-button {
  color: #ffffff85;
  transition: color 0.2s;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  .button-text {
    padding: 20px 10px;
  }

  &:hover {
    color: white;
    font-weight: bold;
  }
}

.button-selected {
  color: white;
  font-weight: bold;
}

.tabs-container {
  width: 100%;
  color: #211d1d;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: white;
  /* Adjust the color as needed */
  border-radius: 100%;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  transition: opacity 0.2s;
}

@keyframes bounceBack {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(0);
  }

  40% {
    transform: translateX(-5px);
  }

  60% {
    transform: translateX(5px);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(700px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
