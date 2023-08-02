import { toUpper } from 'lodash';

export default {
  methods: {
    routeToLink(link) {
      if (link) {
        window.open(link, '_blank');
      }
    },
    capitalize(title) {
      return toUpper(title);
    },
  },
};
