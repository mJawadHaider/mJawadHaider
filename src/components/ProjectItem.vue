<template>
  <v-col
    cols="10"
    class="py-13 ma-0"
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
      style="max-width: 550px;"
      :style="$vuetify.display.smAndDown ? 'padding-right: 5px' : ''"
    >
      <img
        class="project-picture"
        :src="require(`@/assets/${project.image}`)"
      />
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
    return {};
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
  /* width: 550px; */
  width: 100%;  
  border: 1px solid #7a7a7a;
  box-shadow: 5px 4px 9px;
}
</style>
