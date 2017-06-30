<template>
    <div :id="popupId" :class="`ui ${customClass} special popup`">
        <slot></slot>
    </div>
</template>


<script>

function createDefaultOptions() {
    return {
        on: this.trigger,
        target: this.targetSelector,
        popup: `#${this.popupId}`,
        inline: false,
    };
}

export default {
    name: 'Popup',
    props: {
        popupId: {
            validator: prop => prop.length,
            required: true,
        },
        trigger: {
            type: String,
            required: true,
        },
        targetSelector: {
            type: String,
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
        this.startPopup();
    },
    methods: {
        startPopup() {
            const defaultOptions = createDefaultOptions.call(this);
            const options = Object.assign(defaultOptions, this.options);
            const popupElement = $(`${this.targetSelector}`);

            popupElement.popup(options);
        },
    },
    watch: {
        trigger() {
            this.startPopup();
        },
        targetSelector() {
            this.startPopup();
        },
        options: {
            handler() { this.startPopup(); },
            deep: true,
        },
    },
};
</script>

<style lang="less" scoped>

</style>

