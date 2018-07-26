import Vue from 'vue';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/^.*-view$/, /^x-.*$/];

Vue.config.errorHandler = function VueErrorHandler(err, vm, info) {
  console.error(err, vm, info);
};
