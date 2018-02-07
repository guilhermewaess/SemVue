<template>
    <div :id="id" :class="`ui ${type} modal`">
        <div class="header">
            <slot name="header">
                Modal Title
            </slot>
        </div>
    
        <div class="content">
            <slot name="content">
                Default Body
            </slot>
        </div>
    
        <div class="actions">
            <slot name="footer">
                Default Footer
            </slot>
        </div>
    </div>
</template>

<script>
import componentsMixins from './../mixins/Components';

function createModalOptions() {
  const defaultOptions = {
    closable: this.closable,
    onHidden: this.onHidden,
  };
  const options = Object.assign(defaultOptions, this.options);

  if (this.options.onHidden) {
    options.onHidden = this.onHidden.bind(this, this.options.onHidden);
  }

  return options;
}

export default {
  name: 'Modal',
  mixins: [componentsMixins],
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: '',
    },
  },
  methods: {
    onHidden(customCallback) {
      if (customCallback) {
        customCallback();
      }
      this.$emit('update:showModal', false);
    },
    toggleModal() {
      const toggleDecision = this.showModal ? 'show' : 'hide';
      const modalElement = $(`#${this.id}`);
      const options = createModalOptions.call(this);

      if (this.showModal) {
        modalElement.modal(options);
      }

      modalElement.modal(toggleDecision);
    },
  },
  watch: {
    showModal() {
      this.toggleModal();
    },
  },
};
</script>
