<template>
  <v-col
    cols="10"
    class="py-13 ma-0 mb-5 align-center"
    :class="$vuetify.display.smAndDown ? 'px-1' : 'd-flex'"
    style="max-width: 100svw"
    :style="$vuetify.display.smAndDown
      ? 'display: flex; flex-direction: column;'
      : ''
      "
  >
    <div
      :class="$vuetify.display.smAndDown ? 'pr-1' : 'pr-5'"
      class="text-lightGray"
    >
      <div
        class="project-item d-flex mt-4"
        style="font-size: large; font-weight: bold"
      >
        <v-img
          v-if="project.icon"
          :style="`max-width: ${project.iconSize}`"
          :src="require(`../assets/${project.icon}`)"
          class="mr-1"
        ></v-img>
        <span>
          {{ project.name }}
          {{ project.atCompany ? ` | ${project.atCompany}` : '' }}
        </span>
      </div>
      <span class="project-item">
        <p>{{ project.duration }}</p>
        <h4 class="mt-10">Description:</h4>
        <p
          class="mt-2 text-justify"
          v-html="project.description"
        />

        <h4 class="mt-10">Responsibilites:</h4>
        <p
          class="mt-2 text-justify"
          v-html="project.responsibilites"
        />
      </span>
    </div>
    <div
      :class="$vuetify.display.smAndDown ? 'mt-5' : 'mt-7'"
      class="d-flex flex-column justify-center align-center"
      style="max-width: 550px"
      :style="$vuetify.display.smAndDown ? 'padding-right: 5px' : ''"
    >
      <v-carousel
        v-if="project.pictures.length !== 1"
        v-model="carouselIndex"
        cycle
        :height="projectImageHeight"
        hide-delimiters
        show-arrows="hover"
        style="box-shadow: 5px 4px 9px"
      >
        <template v-slot:prev="{ props }">
          <v-btn
            v-bind="props"
            size="30"
            color="white"
            style="margin-left: -10px"
            icon
            @click="props.onClick"
          >
            <v-icon :color="lightGray">
              mdi-arrow-left-drop-circle-outline
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn
            v-bind="props"
            size="30"
            color="white"
            style="margin-right: -10px"
            icon
            @click="props.onClick"
          >
            <v-icon :color="lightGray">
              mdi-arrow-right-drop-circle-outline
            </v-icon>
          </v-btn>
        </template>
        <v-carousel-item
          v-for="(slidePic, index) in project.pictures"
          :key="index"
          class="fill-height"
        >
          <v-img
            class="project-picture"
            :style="$vuetify.display.mdAndUp ? 'min-width: 550px' : ''"
            :src="require(`@/assets/${slidePic}`)"
            :lazy-src="require(`@/assets/${slidePic}`)"
            @click="openImgDialog"
            @load="isImageLoading = false"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-carousel-item>
      </v-carousel>
      <v-img
        v-else
        class="project-picture"
        style="cursor: pointer"
        :style="$vuetify.display.mdAndUp ? 'min-width: 550px' : ''"
        :src="require(`@/assets/${project.pictures[0]}`)"
        :lazy-src="require(`@/assets/${project.pictures[0]}`)"
        @click="openImgDialog"
        @load="isImageLoading = false"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <div class="mt-9 d-flex justify-center">
        <v-btn
          v-for="(btn, index) in buttons"
          :key="index"
          variant="elevated"
          elevation="4"
          rounded
          :size="$vuetify.display.xs ? 'default' : 'large'"
          prepend-icon="mdi-github"
          class="mr-4 text-white"
          :class="{ 'custom-btn-hover': $vuetify.display.mdAndUp }"
          :color="lightGray"
          @click="routeToLink(project[btn.linkKey])"
          @mousemove="handleMouseMove_Small"
          @mouseleave="handleMouseLeave"
        >
          {{ btn.title }}
        </v-btn>
      </div>
    </div>
    <v-dialog
      v-model="isImgDialogOpen"
      width="900"
    >
      <v-carousel
        v-if="project.pictures.length !== 1"
        v-model="carouselIndex"
        cycle
        height="420"
        hide-delimiters
        show-arrows="hover"
        style="box-shadow: 5px 4px 9px"
      >
        <template v-slot:prev="{ props }">
          <v-btn
            v-bind="props"
            size="30"
            color="white"
            style="margin-left: -10px"
            icon
            @click="props.onClick"
          >
            <v-icon :color="lightGray">
              mdi-arrow-left-drop-circle-outline
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn
            v-bind="props"
            size="30"
            color="white"
            style="margin-right: -10px"
            icon
            @click="props.onClick"
          >
            <v-icon :color="lightGray">
              mdi-arrow-right-drop-circle-outline
            </v-icon>
          </v-btn>
        </template>
        <v-carousel-item
          v-for="(slidePic, index) in project.pictures"
          :key="index"
          class="fill-height"
        >
          <v-img
            class="project-picture"
            style="cursor: zoom-out"
            :style="$vuetify.display.mdAndUp ? 'min-width: 550px' : ''
              "
            :src="require(`@/assets/${slidePic}`)"
            :lazy-src="require(`@/assets/${slidePic}`)"
            @click="openImgDialog"
            @load="isImageLoading = false"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-carousel-item>
      </v-carousel>
      <v-img
        v-else
        class="project-picture"
        style="cursor: pointer"
        :style="$vuetify.display.mdAndUp ? 'min-width: 550px' : ''"
        :src="require(`@/assets/${project.pictures[0]}`)"
        :lazy-src="require(`@/assets/${project.pictures[0]}`)"
        @click="openImgDialog"
        @load="isImageLoading = false"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => { },
    },
    index: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      isImgDialogOpen: false,
      isImageLoading: true,
      carouselIndex: 0,
    };
  },
  computed: {
    projectImageHeight() {
      return this.$vuetify.display.xs ? '164' : '260';
    },
    buttons() {
      let btns = [
        {
          title: 'GITHUB-LINK',
          linkKey: 'githubLink',
        },
        {
          title: 'SEE PROJECT',
          linkKey: 'projectLink',
        },
      ];
      return btns.filter(btn => this.project[btn.linkKey]);
    },
  },
  methods: {
    openImgDialog() {
      if (this.$vuetify.display.mdAndUp) {
        this.isImgDialogOpen = !this.isImgDialogOpen;
      }
    },
  },
};
</script>

<style scoped>
.project-item {
  font-family: 'Roboto Condensed', sans-serif;
  /* color: #473a3a; */
}

.v-btn {
  height: 50px;
  border-radius: 30px;
  padding-inline: 23px;
}

.project-picture {
  object-fit: cover;
  width: 100%;
  height: 100%;
  /* border: 1px solid #7a7a7a; */
  box-shadow: 5px 4px 9px;
  cursor: zoom-in;
}
</style>
