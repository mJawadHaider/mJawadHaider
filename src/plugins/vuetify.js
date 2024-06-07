import { createVuetify } from 'vuetify';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import '@mdi/font/css/materialdesignicons.css';

export default createVuetify({
  components: {
    ...components,
    VSkeletonLoader,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
});
