<template>
    <div :id="modalId" :class="`ui ${type} modal`">
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
    name: 'modal',
    props: {
        modalId: {
            validator: prop => prop.length,
            required: true,
        },
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
        options: {
            type: Object,
            default() { return {}; },
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
            const modalElement = $(`#${this.modalId}`);
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
