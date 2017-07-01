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
function createDefaultOptions() {
    return {
        closable: this.closable,
        onHidden: this.onHiddenCallback,
    };
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
        onHiddenCallback() {
            this.$emit('update:showModal', false);
        },
        toggleModal() {
            const defaultOptions = createDefaultOptions.call(this);
            const toggleDecision = this.showModal ? 'show' : 'hide';
            const modalElement = $(`#${this.modalId}`);
            const options = Object.assign(defaultOptions, this.options);

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
