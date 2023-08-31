import { toUpper } from 'lodash';

export default {
  // app-bar: #535353
  // app-main-background: #a2a2a2
  // navigation-drawer icons: ##1f1d1d
  // text-color: #2d2c2c;
  // icon-color: #473a3a
  components: {},
  data: () => {
    return {
      gray: '#999d9e',
      darkGray: '#1c1d20',
      lightGray: '#37383b',
    };
  },
  methods: {
    success() {
    },
    routeToLink(link) {
      if (link) {
        window.open(link, '_blank');
      }
    },
    capitalize(title) {
      return toUpper(title);
    },
    handleMouseMove_Small() {
      if (this.$vuetify.display.smAndDown) {
        return;
      }
      const x = event.clientX;
      const y = event.clientY;

      const rect = event.target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 500) {
        event.target.style.transform = `translate(${deltaX / 7}px, ${
          deltaY / 7
        }px)`;
      } else {
        event.target.style.transform = 'translate(0, 0)';
      }
    },
    handleMouseMove() {
      if (this.$vuetify.display.smAndDown) {
        return;
      }
      const rect = event.target.getBoundingClientRect();
      const x = event.offsetX;
      const y = event.offsetY;
      const moveX = x - rect.width / 2;
      const moveY = y - rect.height / 2;
      event.target.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    },
    handleMouseLeave() {
      if (this.$vuetify.display.smAndDown) {
        return;
      }
      const button = event.target;
      if (button && button.style) {
        button.style.animation = 'bounceBack 0.5s ease';
        setTimeout(() => {
          button.style.animation = '';
          button.style.transform = 'translate(0, 0)';
        }, 500);
      }

      this.appBarTitle = 'Code by Jawad';
    },
  },
};
