<template>
    <div :id="modalId" :class="`ui ${modalType} modal`">
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
        modalType: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            shouldActivate: this.showModal,
        };
    },
    methods: {
    },
    watch: {
        showModal() {
            const toggleDecision = this.showModal ? 'show' : 'hide';
            $(`#${this.modalId}`)
                .modal({
                    closable: this.closable,
                    onHidden: () => { this.$emit('update:showModal', false); },
                })
                .modal(toggleDecision);
        },
    },
};

</script>
