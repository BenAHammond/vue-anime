const anime = require('animejs');

module.exports.default = {
  install: function (Vue, options) {
    Vue.directive('my-directive', {
      bind(el, binding) {
        const opts = Object.assign({}, binding.value, { targets: el })
        anime(opts);
      }
    })
    // 4. add an instance method
    Vue.prototype.$anime = anime;
  }
}