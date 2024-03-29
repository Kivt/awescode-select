# awescode-select

Custom select built with Vue.js and Tailwind.css

## Demo
To view demo examples locally clone the repo and run `npm install` and `npm run serve`  
To run tests locally - `npm run test:unit`

## Installation
```
npm install vue-awescode-select
```

## Usage

Inside your component
```js
<template>
  <vue-awescode-select 
    v-model="value"
    :options="options"
    placeholder="Select"
  />
</template>

<script>
import VueAwescodeSelect from 'vue-awescode-select';

export default {
  components: {
    VueAwescodeSelect,
  },
  data: () => ({
    value: null,
    options: [
      { text: 'Option 1', value: 1 },
      { text: 'Option 2', value: 2 },
    ],
  }),
};
</script>
```

If you are using Nuxt.js you need to use transpile for this package  
Inside `nuxt.config.js`

```js
export default {
  // Your other settings
  build: {
    transpile: ['vue-awescode-select']
  }
}
```

## API

### Props

| Prop  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| options  | Array  | true  | -  | Dropdown options for select. Each object must contain next keys: ```text<String>``` and ```value<any>```    |
| placeholder  | string  | false  | ''  | Placeholder for select |

### Events

| Event                         | Returns         | Description                              |
|-------------------------------|-----------------|------------------------------------------|
| @change                      	| Object    			| Indicates that the value has been changed. NB, this will fire when a default value has been selected when the component is mounted. Use the input event if you want the value the user has selected.|	          
| @input                        | Object	        | Indicates that the value has been changed by the user.|


