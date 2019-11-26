<template>
  <div id="app">
    <div class="container mx-auto mt-6 px-3">
      <vue-awescode-select
        v-model="selectValue"
        :options="options"
        placeholder="Select"
      />
    </div>
  </div>
</template>

<script>
import VueAwescodeSelect from './components/VueAwescodeSelect.vue';

export default {
  name: 'app',

  components: {
    VueAwescodeSelect,
  },

  data: () => ({
    options: [],
    selectValue: {
      text: 'Item 3',
      value: 3,
    },
  }),

  created() {
    this.options = Array.from(Array(100), (el, i) => ({
      value: i + 1,
      text: `Item ${i + 1}`,
    }));
  },
};
</script>
