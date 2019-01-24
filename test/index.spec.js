import { createLocalVue, shallowMount, Component } from '@vue/test-utils'
import VueAnime from '../index.js'
import Vue from 'vue';

describe('VueAnime', () => {
  it('should export the expected properties on the component', (done) => {
    const testComp = 'hello-world';
    const testCompBody = {
      template: '<div></div>',
      mounted() {
        expect(typeof this.$anime).to.equal('function');
        done();
      }
    };
    const localVue = createLocalVue();

    localVue.use(VueAnime)
    Vue.component(testComp, testCompBody);
    const wrapper = shallowMount(localVue.component(testComp), { localVue });
  })
})