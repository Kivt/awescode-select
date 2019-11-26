<template>
  <div class="h-12 pos-r">
    <button
      :id="_uid"
      ref="button"
      class="
        focus:outline-none px-3 pt-3 w-full h-full focus:border-blue-500
        border rounded bg-white border-gray-500 text-left
      "
      :disabled="disabled"
      @click="onButtonClick"
      @keydown.up="onKeyDown($event, 'Up')"
      @keydown.down="onKeyDown($event, 'Down')"
      @keydown.enter="onEnter"
    >
      {{ title }}
    </button>

    <div
      class="helper-text z-1 pl-3 text-gray-600"
      :class="{'open text-xs': isPlaceholderTop}"
    >
      {{ placeholder }}
    </div>

    <ul
      class="
        select-menu w-full max-w-full overflow-y-auto z-2
        bg-white rounded-b list-none text-sm border py-2 border-gray-500
      "
      :class="{
        'opacity-0 invisible': !isOpen,
      }"
    >
      <li
        v-for="(item, index) in options"
        :key="index"
        :class="{'bg-blue-100': activeItem === index}"
        class="py-1 px-3 cursor-pointer"
        @click="onListItemClick(index)"
        @mouseenter="onMouseEnter(index)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import selectMixin from './selectMixin';

export default {
  name: 'AwescodeSelect',

  mixins: [selectMixin],

  props: {
    value: {
      type: Object,
      default: () => ({}),
    },

    options: {
      type: Array,
      required: true,
      validator: val => val.every((el) => {
        let isValid = true;
        isValid *= ('text' in el) && (typeof el.text === 'string');
        isValid *= 'value' in el;
        return !!isValid;
      }),
    },

    placeholder: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    isOpen: false,
    activeItem: null,
    selectedItem: null,
  }),

  computed: {
    title() {
      return this.selectedItem === null ? '' : this.options[this.selectedItem].text;
    },

    isPlaceholderTop() {
      return this.isOpen || (this.selectedItem !== null);
    },
  },

  watch: {
    value: {
      deep: true,
      handler() {
        this.findCurrentValue();
        const i = this.selectedItem;
        this.$emit('change', i === null ? null : this.options[i]);
      },
    },
  },

  mounted() {
    this.findCurrentValue();
  },

  methods: {
    findCurrentValue() {
      // Find value from 'v-model' in options
      if (!this.value || this.checkIfValuesSame()) {
        return;
      }

      if (this.value.value) {
        this.options.forEach((el, i) => {
          if (el.value === this.value.value) {
            this.activeItem = i;
            this.selectedItem = i;
            this.$emit('input', this.options[i]);
          }
        });
      }
    },

    checkIfValuesSame() {
      // Compare current selected value and prop value
      if (this.selectedItem === null) {
        return false;
      }
      return this.options[this.selectedItem] === this.value.value;
    },

    onListItemClick(i = this.selectedItem) {
      this.activeItem = i;
      this.selectedItem = i;
      this.$emit('input', this.options[i]);
      document.removeEventListener('click', this.globalClickListener);
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.pos-r {
  position: relative;
}

.helper-text {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: transform .15s, font-size .15s;
}

.helper-text.open {
  transform: translateY(-100%);
}

.select-menu {
  position: absolute;
  max-height: 50vh;
  bottom: 3px;
  left: 0;
  transform: translateY(100%);
  transition: visibility .15s linear, opacity .15s linear;
}
</style>
