<template>
    <div :id="id" :class="`ui ${customClass} ${type} rating`">
    
    </div>
</template>

<script>
import componentsMixins from './../mixins/Components';

function createDefaultOptions() {
  return {
    initialRating: this.currentRating,
    maxRating: this.maxRating,
    onRate: this.onRate,
  };
}

export default {
  name: 'Rating',
  mixins: [componentsMixins],
  props: {
    currentRating: {
      type: Number,
      required: true,
    },
    maxRating: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.startRating();
  },
  methods: {
    startRating() {
      const defaultOptions = createDefaultOptions.call(this);
      const options = Object.assign(defaultOptions, this.options);
      const ratingElement = $(`#${this.id}`);

      ratingElement.rating(options);
    },
    onRate(newRate) {
      this.$emit('update:currentRating', newRate);
    },
  },
  watch: {
    currentRating() {
      this.startRating();
    },
  },
};
</script>
