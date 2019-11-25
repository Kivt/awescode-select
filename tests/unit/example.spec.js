import { shallowMount } from '@vue/test-utils';
import AwescodeSelect from '@/components/AwescodeSelect.vue';

describe('HelloWorld.vue', () => {
  let wrapper;
  const optionsLength = 10;
  const options = Array.from(Array(optionsLength), (el, i) => ({
    value: i + 1,
    text: `Item ${i + 1}`,
  }));

  it('renders options when button clicked', () => {
    wrapper = shallowMount(AwescodeSelect, {
      propsData: { options },
    });
    wrapper.find('button').trigger('click');
    expect(wrapper.findAll('li')).toHaveLength(optionsLength);
  });

  it('renders v-model value', () => {
    const value = {
      text: 'Item 3',
      value: 3,
    };
    wrapper = shallowMount(AwescodeSelect, {
      propsData: {
        options,
        value,
      },
    });
    expect(wrapper.find('button').text()).toEqual(value.text);
  });
});
