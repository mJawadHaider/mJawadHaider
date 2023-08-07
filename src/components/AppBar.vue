<template>
  <div>
    <v-navigation-drawer
      v-if="$vuetify.display.smAndDown"
      app
      v-model="toggle"
      absolute
      color="#a2a2a2"
      style="position: fixed"
      elevation="10"
    >
      <v-list-item
        prepend-icon="mdi-account-circle"
        :style="{
          background: '#535353',
          'padding-block': '10px',
          color: '#1f1d1d',
        }"
        class="drawer-header"
      >
        <h3>M Jawad Haider</h3>
        <template v-slot:append>
          <v-btn
            variant="tonal"
            density="comfortable"
            icon
            @click.stop="toggle = !toggle"
          >
            <v-icon
              size="large"
              color="#1f1d1d"
            >
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </template>
      </v-list-item>
      <v-divider />
      <v-list
        nav
        density="compact"
      >
        <div
          v-for="(tab, index) in tabs"
          :key="index"
        >
          <v-list-item
            :title="tab.title"
            :active="tab.isActive"
            base-color="#1f1d1d"
            color="brown-darken-4"
            class="mt-1 upper-case"
            @click="scrollToSection(tab, index)"
          />
          <v-divider v-if="index !== tabs.length - 1" />
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      id="appBar"
      color="#535353"
      elevation="4"
      density="compact"
      :style="{ position: 'fixed' }"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        @click.stop="toggle = !toggle"
      />
      <div
        v-if="$vuetify.display.mdAndUp"
        class="app-bar-title"
      >
        <v-icon
          icon="mdi-account-circle"
          class="pt-1 mr-2"
        />
        <h3 class="upper-case">M Jawad Haider</h3>
      </div>
      <div
        v-if="$vuetify.display.mdAndUp"
        style="width: 100%; margin-right: 7rem; color: #211d1d"
      >
        <v-tabs
          v-if="$vuetify.display.mdAndUp"
          v-model="activeTab"
          color="grey-lighten-1"
          align-tabs="end"
        >
          <v-tab
            v-for="(tab, index) in tabs"
            :key="index"
            style="padding-inline: 10px"
            @click="scrollToSection(tab, index)"
          >
            {{ tab.title }}
          </v-tab>
        </v-tabs>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      toggle: false,
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
    scrollToSection(btn) {
      this.toggle = false;
      const component = document.getElementById(
        btn.componentId || 'appBarId'
      );
      component.scrollIntoView({
        behavior: 'smooth',
        block: this.$vuetify.display.mdAndUp
          ? btn.block || 'start'
          : 'start',
      });
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
  width: 50%;
  color: #1f1d1d;
  padding-left: 7rem;
}

.drawer-header {
  .v-list-item__prepend {
    font-size: 20px;
    width: 40px;
  }

  .v-list-item__append {
    width: 40px;
    margin-right: -10px;
  }
}

.v-list-item-title {
  text-transform: uppercase !important;
}
</style>
