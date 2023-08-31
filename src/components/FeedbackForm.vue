<template>
  <v-sheet
    :width="$vuetify.display.xs ? 360 : 550"
    class="mx-auto"
    color="transparent"
  >
    <h3 class="mb-4 text-center">Your Feedback is appreciable!!</h3>
    <v-form
      ref="feedbackForm"
      @submit.prevent="submitFeedback"
      :disabled="feedbackLoading"
    >
      <div>
        <v-text-field
          v-model="name"
          label="Your Name"
          :color="gray"
          class="mb-4"
          :hide-details="true"
        />
        <v-text-field
          v-model="email"
          class="mb-4"
          label="Email"
          :color="gray"
          :hide-details="true"
        />
        <v-textarea
          v-model="message"
          class="mb-4"
          label="Feedback Message"
          :color="gray"
          :hide-details="true"
        />
        <div class="d-flex justify-center mt-2">
          <v-btn
            class="custom-btn-hover mr-4"
            rounded
            color="grey-lighten-2"
            variant="outlined"
            style="justify-self: end;"
            :disabled="feedbackLoading"
            @click="onClose"
          >
            Close
          </v-btn>
          <v-btn
            type="submit"
            class="custom-btn-hover"
            rounded
            color="grey-lighten-2"
            variant="outlined"
            :loading="feedbackLoading"
            style="justify-self: end;"
          >
            Submit
          </v-btn>
        </div>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      snackbarMessage: '',
      feedbackLoading: false,
      toggleSnackbar: false,
      isError: false,
    };
  },
  methods: {
    async submitFeedback() {
      this.$refs.feedbackForm?.resetValidation();

      if (!this.name && !this.email) {
        this.$toast.error('Name or Email must be provided');
        return;
      }
      if (!this.message) {
        this.$toast.error('Your Feedback is appreciable!');
        return;
      }

      try {
        await this.submitSpreadSheet();
        this.$refs.feedbackForm?.reset();
        this.$toast.success('Your feedback has been submitted :)');
        this.onClose();
      } catch (err) {
        this.isError = true;
        this.snackbarMessage = err;
        this.toggleSnackbar = true;
      }
    },
    async submitSpreadSheet() {
      const url = 'https://sheetdb.io/api/v1/many29t84qz0w';

      const currentDate = new Date();

      const day = currentDate.getDate();
      const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthAbbreviations[currentDate.getMonth()];
      const year = currentDate.getFullYear();

      const formattedDate = `${day}/${month}/${year}`;

      const payload = {
        data: [
          {
            Name: this.name,
            Email: this.email,
            Message: this.message,
            FeedbackDate: formattedDate,
          },
        ],
      };

      this.feedbackLoading = true;
      await axios.post(url, payload);
      this.feedbackLoading = false;
    },
    onClose() {
      this.$emit('onClose');
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>

<style></style>