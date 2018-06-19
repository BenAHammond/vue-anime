const anime = require('animejs');

const VueAnime = {
  install: function (Vue, options) {
    Vue.directive('anime', {
      bind(el, binding) {
        console.log('Binding', el);
        const opts = Object.assign({}, binding.value, { targets: el })
        anime(opts);
      }
    })
    // 4. add an instance method
    Vue.prototype.$anime = anime;
  }
};

module.exports = VueAnime;