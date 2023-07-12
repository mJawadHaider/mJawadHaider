<template>
  <v-row
    :class="$vuetify.display.smAndDown ? 'pl-8 pr-4' : 'px-12'"
    style="max-width: 100vw"
  >
    <v-col
      cols="12"
      md="7"
      sm="12"
      :class="
        $vuetify.display.smAndDown ? 'left-pane pa-0' : 'left-pane'
      "
    >
      <span
        class="greetings"
        style="color: #2c1f1f"
        :style="
          $vuetify.display.smAndDown
            ? 'margin-top: 50px'
            : 'margin-top: 110px'
        "
      >
        Hey there! I'm
      </span>
      <span class="name"> Muhammad Jawad Haider </span>
      <span class="about">
        Web Developer | Sophomore at UET
      </span>
      <!-- <span class="email"> jhaider869@gmail.com </span> -->

      <div
        class="mt-16"
        style="
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: bold;
          color: #2d2c2c;
        "
      >
        <p class="text-justify">
          Welcome to my portfolio! I am a skilled web developer
          experienced in frontend and backend technologies. With a
          strong foundation in computer science, I create exceptional
          user experiences through clean and efficient code. Browse
          through my projects to see my expertise in HTML, CSS,
          JavaScript, Node.js, and Express. Let's connect and discuss
          how I can contribute to your web development needs. Thank
          you for visiting!
        </p>
      </div>
    </v-col>
    <v-col
      cols="12"
      md="5"
      sm="12"
      :class="
        $vuetify.display.smAndDown ? 'pa-0 mt-10' : 'picture-box pa-0'
      "
    >
      <v-img
        class="picture"
        style="height: auto; z-index: 1"
        :src="require('@/assets/pic-fotor.png')"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.left-pane {
  display: flex;
  flex-direction: column;
  animation: slideInLeft 1s ease-in forwards;
  line-height: 1.2;
}

.picture-box {
  height: 100vh;
  display: flex;
  justify-content: center;
}

.about,
.greetings {
  font-size: 35px;
  font-family: 'Roboto Condensed', sans-serif;
}

.about {
  font-size: 28px;
  color: #2d2c2c;
  margin-top: 15px;
}

.name {
  font-size: 50px;
  font-weight: bold;
  color: #363636;
}

.email {
  font-size: 15px;
  color: #2d2c2c;
  font-weight: bold;
}
</style>
