'use strict';

var anime = require('animejs').default;

function install(Vue) {
  Vue.directive('anime', {
    bind: function bind(targets, binding) {
      var opts = Object.assign({}, binding.value, { targets: targets });
      anime(opts);
    }
  });
  Vue.prototype.$anime = anime;
}

module.exports = {
  install: install
};
