const wm = new WeakMap();

export default {
  install: function (Vue) {
    Vue.directive('gr-model', {
      bind(el, binding, vnode) {
        const inputHandler = event =>
          Vue.set(
            vnode.context,
            binding.expression,
            el.tagName.toLowerCase() === 'gr-checkbox' ? event.target.checked : event.target.value
          );

        wm.set(el, inputHandler);

        if (el.tagName.toLowerCase() === 'gr-checkbox') {
          el.checked = binding.value;
        } else {
          el.value = binding.value;
        }

        el.addEventListener('gr-change', inputHandler);
      },
      componentUpdated(el, binding) {
        if (el.tagName.toLowerCase() === 'gr-checkbox') {
          el.checked = binding.value;
        } else {
          el.value = binding.value;
        }
      },
      unbind(el) {
        const inputHandler = wm.get(el);

        el.removeEventListener(el, inputHandler);
      }
    });
  }
};
