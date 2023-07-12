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
      :class="$vuetify.display.smAndDown ? 'mt-5' : ''"
      class="d-flex flex-column justify-center"
      style="max-width: 550px; max-height: 255px"
      :style="$vuetify.display.smAndDown ? 'padding-right: 5px' : ''"
    >
      <v-img
        class="project-picture"
        style="cursor: pointer"
        :style="
          isImageLoading && $vuetify.display.mdAndUp
            ? 'min-width: 550px'
            : ''
        "
        :src="require(`@/assets/${project.image}`)"
        :lazy-src="require(`@/assets/${project.image}`)"
        @click="dialog = true"
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
      <v-dialog v-model="dialog" width="900">
        <v-img
          class="project-picture"
          style="box-shadow: 1px 1px 25px"
          :src="require(`@/assets/${project.image}`)"
          @click="dialog = false"
        />
      </v-dialog>
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
      dialog: false,
      isImageLoading: true,
    };
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
  border: 1px solid #7a7a7a;
  box-shadow: 5px 4px 9px;
}
</style>
