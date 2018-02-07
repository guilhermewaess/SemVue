<template>
    <div :id="id" :class="`ui ${customClass} dimmer`">
        <slot></slot>
    </div>
</template>

<script>
import componentsMixins from './../mixins/Components';

function createDimmerOptions() {
  const defaultOptions = {
    onHide: this.onHide,
  };
  const options = Object.assign(defaultOptions, this.options);

  if (this.options.onHide) {
    options.onHide = this.onHide.bind(this, this.options.onHide);
  }

  return options;
}

export default {
  name: 'Dimmer',
  mixins: [componentsMixins],
  props: {
    showDimmer: {
      type: Boolean,
      required: true,
    },
    targetSelector: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.toggleDimmer();
  },
  methods: {
    onHide(customCallback) {
      if (customCallback) {
        customCallback();
      }
      this.$emit('update:showDimmer', false);
    },
    toggleDimmer() {
      const toggleDecision = this.showDimmer ? 'show' : 'hide';
      const elementToDimmer = $(this.targetSelector);

      const options = createDimmerOptions.call(this);
      elementToDimmer.dimmer(options);
      elementToDimmer.dimmer(toggleDecision);
    },
  },
  watch: {
    showDimmer() {
      this.toggleDimmer();
    },
  },
};
</script>

<style lang="less" scoped>

</style>
