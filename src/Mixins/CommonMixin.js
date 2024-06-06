import { toUpper } from 'lodash';
import { gsap } from 'gsap';

let customCursor = {};

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

      primaryBackground: '#2b2b2b',
      primary: '#222831',
      secondary: '#d5a880',
      white: '#EEEEEE',
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
    changeCursorOnHover(element) {
      element.addEventListener('mouseenter', () => {
        if (!customCursor) return;
        customCursor.classList?.add('large');
        document.body.classList?.add('hover');
      });
      element.addEventListener('mouseleave', () => {
        if (!customCursor) return;
        customCursor.classList?.remove('large');
        document.body.classList?.remove('hover');
      });
    },
    initializeCustomCursorOutline() {
      window.addEventListener('mousemove', function (e) {
        if (!customCursor) return;
        const positionX = e.pageX  + 7;
        const positionY = e.pageY  + 7;

        customCursor.style.left = `${positionX}px`;
        customCursor.style.top = `${positionY}px`;
      });

      window.addEventListener('click', function(e) {
        if (!customCursor) return;
        customCursor.classList?.add('large');
        setTimeout(() => {
          customCursor.classList?.remove('large');
        }, 200);
      });
    },
  },
  mounted() {
    customCursor = document.querySelector('[cursor-outline]');
    if (this.$vuetify.display.mdAndUp && customCursor && customCursor.classList) {
      this.initializeCustomCursorOutline();
      
      const buttons = document.querySelectorAll('.magnetic-button, button, .my-cursor-hover');
      buttons.forEach((div) => {
        if (div) this.changeCursorOnHover(div);
      });
    }
  },
};
