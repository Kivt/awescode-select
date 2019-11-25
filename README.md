# awescode-select

## Demo
To view demo examples locally clone the repo and run ```npm install``` and ```npm run serve```  
To run tests locally run ```npm run test:unit```

## Installation
```
npm install vue-awescode-select
```

## Usage
To use component globally
```js
import vue from 'vue';
import VueAwescodeSelect from 'vue-awescode-select';
Vue.use(VueAwescodeSelect);
```

Or you can use locally inside your component
```
<template>
  <vue-awescode-select 
    v-model="value"
    :options="options"
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

## API

### Props

| Prop  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| options  | Array  | true  | -  | Dropdown options for select. Each object must contain next keys: ```text<String>``` and ```value<any>```    |

### Events

| Event                         | Returns         | Description                              |
|-------------------------------|-----------------|------------------------------------------|
| @change                      	| Object    			| Indicates that the value has been changed. NB, this will fire when a default value has been selected when the component is mounted. Use the input event if you want the value the user has selected.|	          
| @input                        | Object	        | Indicates that the value has been changed by the user.|


