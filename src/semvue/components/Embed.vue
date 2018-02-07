<template>
    <div :id="id"
         :data-url="dataUrl"
         :data-placeholder="dataPlaceholder"
         :class="`ui ${customClass} embed`">
    </div>
</template>

<script>
import componentsMixins from './../mixins/Components';

function createDefaultOptions() {
  return {
    autoplay: this.autoplay,
  };
}

export default {
  name: 'Embed',
  mixins: [componentsMixins],
  props: {
    dataUrl: {
      validator: prop => prop.length,
      required: true,
    },
    dataPlaceholder: {
      type: String,
      default: '',
    },
    autoplay: {
      type: Boolean,
      dafault: false,
    },
  },
  mounted() {
    this.startEmbed();
  },
  methods: {
    startEmbed() {
      const defaultOptions = createDefaultOptions.call(this);
      const options = Object.assign(defaultOptions, this.options);
      const embedElement = $(`#${this.id}`);

      embedElement.embed(options);
    },
  },
  watch: {
    dataUrl() {
      this.startEmbed();
    },
  },
};
</script>
