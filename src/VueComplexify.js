const VueComplexify = {
  install (Vue) {
    const complexify = require('node-complexify');

    Vue.prototype.$evalPasswordComplexity = function (password, callback) {
      complexify.evalPasswordComplexity(password, callback);
    }

  }
}

export default VueComplexify
