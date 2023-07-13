<template>
  <v-col
    cols="10"
    class="py-13 ma-0 mb-5 align-center"
    :class="$vuetify.display.smAndDown ? 'px-1' : 'd-flex'"
    style="max-width: 100svw"
  >
    <div :class="$vuetify.display.smAndDown ? 'pr-1' : 'pr-5'">
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
        <span class="">
          {{ project.name }}
          {{
            `${project.atCompany ? ` | ${project.atCompany}` : ''}`
          }}
        </span>
      </div>
      <span class="project-item">
        <p>{{ project.duration }}</p>
        <h4 class="mt-10">Description:</h4>
        <p class="mt-2 text-justify" v-html="project.description" />

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
        height="260"
        hide-delimiters
        show-arrows-on-hover
        style="box-shadow: 5px 4px 9px"
      >
        <template v-slot:prev="{ props }">
          <v-btn
            size="30"
            color="white"
            style="margin-left: -10px"
            icon
            @click="props.onClick"
          >
            <v-icon color="brown-darken-3">
              mdi-arrow-left-drop-circle-outline
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn
            size="30"
            color="white"
            style="margin-right: -10px"
            icon
            @click="props.onClick"
          >
            <v-icon color="brown-darken-3">
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
            style="cursor: pointer"
            :style="
              $vuetify.display.mdAndUp
                ? 'min-width: 550px'
                : ''
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
        :style="
          isImageLoading && $vuetify.display.mdAndUp
            ? 'min-width: 550px'
            : ''
        "
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
          v-if="project.githubLink"
          small
          variant="elevated"
          elevation="4"
          size="small"
          prepend-icon="mdi-github"
          class="mr-4"
          :class="index % 2 === 0 ? 'text-#252525' : 'text-white'"
          :color="index % 2 === 0 ? 'grey-lighten-2' : '#a2a2a2'"
          @click="routeToLink(project.githubLink)"
        >
          GITHUB-LINK
        </v-btn>
        <v-btn
          v-if="project.projectLink"
          small
          variant="elevated"
          elevation="4"
          size="small"
          prepend-icon="mdi-open-in-new"
          :class="index % 2 === 0 ? 'text-#252525' : 'text-white'"
          :color="index % 2 === 0 ? 'grey-lighten-2' : '#a2a2a2'"
          @click="routeToLink(project.projectLink)"
        >
          SEE PROJECT
        </v-btn>
      </div>
    </div>
    <v-dialog v-model="isImgDialogOpen" width="900">
      <v-img
        class="project-picture"
        style="box-shadow: 1px 1px 25px"
        :src="require(`@/assets/${project.pictures[carouselIndex]}`)"
        @click="isImgDialogOpen = false"
      />
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: {},
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
  methods: {
    openImgDialog() {
      if (this.$vuetify.display.mdAndUp) {
        this.isImgDialogOpen = true;
      }
    },
  },
};
</script>

<style>
.project-item {
  font-family: 'Roboto Condensed', sans-serif;
  color: #473a3a;
}

.project-picture {
  object-fit: cover;
  width: 100%;
  height: 100%;
  /* border: 1px solid #7a7a7a; */
  box-shadow: 5px 4px 9px;
}
</style>
