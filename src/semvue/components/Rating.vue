<template>
    <div :id="ratingId" :class="`ui ${customClass} ${type} rating`">
    
    </div>
</template>

<script>

function createDefaultOptions() {
    return {
        initialRating: this.currentRating,
        maxRating: this.maxRating,
        onRate: this.onRate,
    };
}

export default {
    name: 'Rating',
    props: {
        ratingId: {
            validator: prop => prop.length,
            required: true,
        },
        currentRating: {
            type: Number,
            required: true,
        },
        maxRating: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            default: '',
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
        this.startRating();
    },
    methods: {
        startRating() {
            const defaultOptions = createDefaultOptions.call(this);
            const options = Object.assign(defaultOptions, this.options);
            const ratingElement = $(`#${this.ratingId}`);

            ratingElement.rating(options);
        },
        onRate(newRate) {
            this.$emit('update:currentRating', newRate);
        },
    },
    watch: {
        currentRating() {
            this.startRating();
        },
    },
};

</script>
