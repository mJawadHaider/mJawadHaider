export default {
  methods: {
    routeToLink(link) {
      if (link) {
        window.open(link, '_blank');
      }
    },
  },
};
