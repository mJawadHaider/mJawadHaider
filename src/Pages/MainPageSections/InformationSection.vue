<template>
  <v-row :style="informationSection">
    <v-col
      cols="12"
      md="7"
      sm="12"
      :class="$vuetify.display.smAndDown ? 'left-pane pa-0' : 'left-pane'"
      class="pt-13 text-center"
    >
      <span
        class="greetings text-mysecondary"
        :style="$vuetify.display.smAndDown ? 'margin-top: 50px' : ''"
      >
        Hey there! I'm
      </span>
      <span class="name text-mywhite"></span>
      <span class="about text-mysecondary"></span>
      <!-- <span class="email"> jhaider869@gmail.com </span> -->

      <div
        class="text-mywhite"
        style="margin-top: 120px; font-family: 'Roboto Condensed', sans-serif; font-weight: bold;"
      >
        <p class="text-justify text-center description"></p>
      </div>
    </v-col>
    <v-col
      cols="12"
      md="5"
      sm="12"
      :class="$vuetify.display.smAndDown ? 'pa-0 mt-10' : 'picture-box pa-0'"
    >
      <v-img
        class="picture profile-picture"
        style="height: auto; z-index: 0"
        :src="require('@/assets/pic2.png')"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
import { gsap, Power2 } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default {
  data() {
    return {};
  },
  computed: {
    informationSection() {
      const commonStyling = {
        "padding-top": "32px",
        "max-width": "100vw",
        height: "calc(100vh - 80px)",
      };
      return this.$vuetify.display.smAndDown
        ? { ...commonStyling, "padding-left": "32px", "padding-right": "16px" }
        : { ...commonStyling, "padding-inline": "48px", "margin-top": "48px" };
    },
  },
  mounted() {
    const profilePic = gsap.fromTo(
      ".profile-picture",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        duration: 5,
        opacity: 1,
        delay: 2.5,
        ease: "sine.inOut",
        paused: true,
        onComplete: () => {
          gsap.fromTo(
            ".profile-picture",
            {
              y: 0,
              opacity: 1,
              ease: "power2.inOut",
            },
            {
              y: 20,
              duration: 5,
              opacity: 1,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            }
          );
        },
      }
    );

    const fromToTextConfig = {
      from: {
        opacity: 0,
      },
      to: (text, args) => ({
        opacity: 1,
        duration: 2,
        text: text,
        ease: "none",
        delay: 1,
        paused: true,
        ...args,
      }),
    };
    const desc =
      "Welcome to my portfolio! I am a skilled software engineer experienced in frontend and backend technologies. With a strong foundation in computer science, I create exceptional user experiences through clean and efficient code. Browse through my projects to see my expertise. Let's connect and Thank you for visiting!";

    const about = gsap.fromTo(
      ".about",
      fromToTextConfig.from,
      fromToTextConfig.to("Software Engineer | Junior at UET", {
        delay: 1,
        onComplete: () => {
          gsap.to(".description", {
            duration: 8,
            text: desc,
            ease: "none",
            delay: 0,
            opacity: 1,
          });
        },
      })
    );
    const name = gsap.fromTo(
      ".name",
      fromToTextConfig.from,
      fromToTextConfig.to("Muhammad Jawad Haider", {
        delay: 0,
        onComplete: () => {
          about.play();
        },
      })
    );

    const HiThere = gsap.fromTo(
      ".greetings",
      {
        x: -1000,
      },
      {
        duration: 2,
        x: 0,
        delay: 1,
        ease: "elastic.out",
        paused: true,
        onComplete: () => {
          name.play();
        },
      }
    );

    HiThere.play();
    profilePic.play();
  },
};
</script>

<style>
.left-pane {
  display: flex;
  flex-direction: column;
  /* animation: slideInLeft 1s ease-in forwards; */
  line-height: 1.2;
}

.picture-box {
  height: 53vh;
  display: flex;
  justify-content: center;
}

.about,
.greetings {
  font-size: 35px;
  font-family: "Roboto Condensed", sans-serif;
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
