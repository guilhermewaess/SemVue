<template>
    <div :id="accordionId" :class="`ui ${customClass} accordion`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Accordion',
    props: {
        accordionId: {
            validator: prop => prop.length,
            required: true,
        },
        customClass: {
            type: String,
            default: '',
        },
        options: {
            type: Object,
            default() { return {}; },
        },
    },
    mounted() {
        this.startAccordion();
    },
    methods: {
        startAccordion() {
            const accordionElement = $(`#${this.accordionId}`);
            accordionElement.accordion(this.options);
        },
    },
};
</script>

