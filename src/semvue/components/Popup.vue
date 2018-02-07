<template>
    <div :id="id" :class="`ui ${customClass} special popup`">
        <slot></slot>
    </div>
</template>


<script>
import componentsMixins from './../mixins/Components';

function createDefaultOptions() {
  return {
    on: this.trigger,
    target: this.targetSelector,
    popup: `#${this.id}`,
    inline: false,
  };
}

export default {
  name: 'Popup',
  mixins: [componentsMixins],
  props: {
    trigger: {
      type: String,
      required: true,
    },
    targetSelector: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.startPopup();
  },
  methods: {
    startPopup() {
      const defaultOptions = createDefaultOptions.call(this);
      const options = Object.assign(defaultOptions, this.options);
      const popupElement = $(`${this.targetSelector}`);

      popupElement.popup(options);
    },
  },
  watch: {
    trigger() {
      this.startPopup();
    },
    targetSelector() {
      this.startPopup();
    },
    options: {
      handler() {
        this.startPopup();
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>

</style>

