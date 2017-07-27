<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
        searchId: {
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
        this.startSearch();
    },
    methods: {
        startSearch() {
            const defaultOptions = {}; // createDefaultOptions.call(this);
            const options = Object.assign(defaultOptions, this.options);
            const searchElement = $(`#${this.searchId}`);

            searchElement.embed(options);
        },
    },
};

</script>
