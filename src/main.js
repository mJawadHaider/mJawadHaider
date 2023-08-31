import { createApp } from 'vue';
import App from './App.vue';

import 'vuetify/styles';
import vuetify from './plugins/vuetify';
import VueGtag from 'vue-gtag';

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import CommonMixin from './Mixins/CommonMixin';

const app = createApp(App, {
  components,
  directives,
});

app.mixin(CommonMixin);
app.use(vuetify);
app.use(ToastPlugin, {
  position: 'top',
  duration: 2000,
});

app.use(VueGtag, {
  appName: 'Jawad Haider',
  pageTrackerScreenviewEnabled: true,
  config: { id: 'G-SR7CBSGJGM' },
});

// G-SR7CBSGJGM

app.mount('#app');
