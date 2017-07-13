<template>
    <div :id="progressId" :class="`ui ${customClass} progress`">
        <div class="bar">
            <div class="progress"></div>
        </div>
        <div class="label">Clicking</div>
    </div>
</template>

<script>
function createOptions() {
    const text = {
        active: this.activeText,
        success: this.successText,
        error: this.errorText,
        warning: this.warningText,
    };

    return {
        text,
        value: this.incrementValue,
        total: this.total,
        label: this.progressLabelType,
    };
}

export default {
    name: 'Rating',
    props: {
        progressId: {
            validator: prop => prop.length,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        incrementValue: {
            type: Number,
        },
        progressLabelType: {
            type: String,
            default: 'percent',
        },
        activeText: {
            type: String,
            default: '',
        },
        successText: {
            type: String,
            default: '',
        },
        errorText: {
            type: String,
            default: '',
        },
        warningText: {
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
        this.progressElement = $(`#${this.progressId}`);
        this.startProgress();
    },
    methods: {
        startProgress() {
            const options = createOptions.call(this);
            this.progressElement.progress(options);
        },
        setPercent(percent) {
            this.progressElement.progress('set percent', percent);
        },
        setProgress(progress) {
            this.progressElement.progress('set progress', progress);
        },
        increment() {
            this.progressElement.progress('increment');
        },
        decrement() {
            this.progressElement.progress('decrement');
        },
        updateProgress(progress) {
            this.progressElement.progress('increment', progress);
        },
        complete() {
            this.progressElement.progress('complete');
        },
        reset() {
            this.progressElement.progress('reset');
        },
        setTotal(total) {
            this.progressElement.progress('set total', total);
        },
        getText(text) {
            this.progressElement.progress('get text', text);
        },
        getNormalizedValue(value) {
            this.progressElement.progress('get normalized value', value);
        },
        getPercent() {
            this.progressElement.progress('get percent');
        },
        getValue() {
            this.progressElement.progress('get value');
        },
        getTotal() {
            this.progressElement.progress('get total');
        },
        isComplete() {
            this.progressElement.progress('is complete');
        },
        isSuccess() {
            this.progressElement.progress('is success');
        },
        isWarning() {
            this.progressElement.progress('is warning');
        },
        isError() {
            this.progressElement.progress('is error');
        },
        isActive() {
            this.progressElement.progress('is active');
        },
        setActive() {
            this.progressElement.progress('set active');
        },
        setWarning() {
            this.progressElement.progress('set warning');
        },
        setSuccess() {
            this.progressElement.progress('set success');
        },
        setError() {
            this.progressElement.progress('set error');
        },
        setDuration(duration) {
            this.progressElement.progress('set duration', duration);
        },
        setLabel(text) {
            this.progressElement.progress('set label', text);
        },
        setBarLabel(text) {
            this.progressElement.progress('set bar label', text);
        },
        removeActive() {
            this.progressElement.progress('remove active');
        },
        removeWarning() {
            this.progressElement.progress('remove warning');
        },
        removeSuccess() {
            this.progressElement.progress('remove success');
        },
        removeError() {
            this.progressElement.progress('remove error');
        },
    },
};

</script>
