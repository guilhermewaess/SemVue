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
    },
    mounted() {
        const accordionElement = $(`#${this.accordionId}`);

        accordionElement.accordion();
    },
};
</script>

