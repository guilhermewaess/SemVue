<template>
    <div :id="id" :class="`ui ${customClass} accordion`">
        <slot></slot>
    </div>
</template>

<script>
import componentsMixins from './../mixins/Components';

export default {
  name: 'Accordion',
  mixins: [componentsMixins],
  mounted() {
    this.startAccordion();
  },
  methods: {
    startAccordion() {
      const accordionElement = $(`#${this.id}`);
      accordionElement.accordion(this.options);
    },
  },
};
</script>

