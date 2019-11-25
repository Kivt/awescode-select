export default {
  beforeDestroy() {
    document.removeEventListener('click', this.globalClickListener);
  },

  methods: {
    onButtonClick() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.addEventListener('click', this.globalClickListener);
      }
    },

    globalClickListener(e) {
      if (!e.target.isEqualNode(this.$refs.button)) {
        this.isOpen = false;
        document.removeEventListener('click', this.globalClickListener);
      }
    },

    onKeyDown(e, type) {
      if (this.isOpen) {
        e.preventDefault();
        this[`onArrow${type}`]();
      }
    },

    onArrowUp() {
      if (!this.activeItem) {
        this.activeItem = this.options.length - 1;
        return;
      }
      this.activeItem -= 1;
    },

    onArrowDown() {
      if (this.activeItem === null || this.activeItem === this.options.length - 1) {
        this.activeItem = 0;
        return;
      }
      this.activeItem += 1;
    },

    onEnter() {
      if (this.isOpen) {
        this.selectedItem = this.activeItem;
      }
    },

    onMouseEnter(index) {
      this.activeItem = index;
    },
  },
};
