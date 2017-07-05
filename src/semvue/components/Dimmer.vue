<template>
    <div :id="dimmerId" :class="`ui ${customClass} dimmer`">
        <slot></slot>
    </div>
</template>

<script>
import _ from 'lodash';

function createDimmerOptions() {
    const defaultOptions = {
        onHide: this.onHide,
    };
    const options = Object.assign(defaultOptions, this.options);

    if (this.options.onHide) {
        options.onHide = this.onHide.bind(this, this.options.onHide);
    }

    return options;
}

function defineSelector() {
    return this.targetSelector || '.ui.page.dimmer';
}

export default {
    name: 'Dimmer',
    props: {
        dimmerId: {
            validator: prop => prop.length,
            required: true,
        },
        showDimmer: {
            type: Boolean,
            required: true,
        },
        targetSelector: {
            validator: prop => prop || _.some(this.customClass, 'page'),
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
        this.selector = defineSelector.call(this);
        this.toggleDimmer();
    },
    beforeDestroy() {
        this.$emit('update:showDimmer', false);
        this.changeDimmerStatus('hide');
    },
    data() {
        return {
            selector: null,
        };
    },
    methods: {
        onHide(customCallback) {
            if (customCallback) {
                customCallback();
            }
            this.$emit('update:showDimmer', false);
        },
        toggleDimmer() {
            const toggleDecision = this.showDimmer ? 'show' : 'hide';
            this.changeDimmerStatus(toggleDecision);
        },
        changeDimmerStatus(status) {
            const elementToDimmer = $(this.selector);

            if (this.showDimmer) {
                const options = createDimmerOptions.call(this);
                elementToDimmer.dimmer(options);
            }

            elementToDimmer.dimmer(status);
        },
    },
    watch: {
        showDimmer() {
            this.toggleDimmer();
        },
    },
};
</script>

<style lang="less" scoped>

</style>
