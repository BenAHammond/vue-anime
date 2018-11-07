const anime = require('animejs');

function install (Vue) {
  Vue.directive('anime', {
    bind(targets, binding) {
      const opts = Object.assign({}, binding.value, { targets })
      anime(opts);
    }
  })
  Vue.prototype.$anime = anime;
}

module.exports = {
  install
};