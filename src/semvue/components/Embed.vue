<template>
    <div :id="embedId"
         :data-url="dataUrl"
         :data-placeholder="dataPlaceholder"
         :class="`ui ${customClass} embed`">
    </div>
</template>

<script>

function createDefaultOptions() {
    return {
        autoplay: this.autoplay,
    };
}

export default {
    name: 'Embed',
    props: {
        embedId: {
            validator: prop => prop.length,
            required: true,
        },
        dataUrl: {
            validator: prop => prop.length,
            required: true,
        },
        dataPlaceholder: {
            type: String,
            default: '',
        },
        autoplay: {
            type: Boolean,
            dafault: false,
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
        this.startEmbed();
    },
    methods: {
        startEmbed() {
            const defaultOptions = createDefaultOptions.call(this);
            const options = Object.assign(defaultOptions, this.options);
            const embedElement = $(`#${this.embedId}`);

            embedElement.embed(options);
        },
    },
    watch: {
        dataUrl() {
            this.startEmbed();
        },
    },
};

</script>
