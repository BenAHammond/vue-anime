const anime = require('animejs');

const VueAnime = {
  install: function (Vue, options) {
    Vue.directive('anime', {
      bind(el, binding) {
        const opts = Object.assign({}, binding.value, { targets: el })
        anime(opts);
      }
    })
    Vue.prototype.$anime = anime;
  }
};

module.exports = VueAnime;