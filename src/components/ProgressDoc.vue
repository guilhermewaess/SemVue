<template>
    <div class="ui container">
        <h1 class="ui dividing header">Progress</h1>
    
        <p>Progress component,
            <a href="https://semantic-ui.com/modules/progress.html"> you can see all documentation here</a>
        </p>
        <sem-vue-progress ref="progress" progressId="progressId" :total="100" activeText="Clicked {value} of {total} clicks">
        </sem-vue-progress>
    
        <div class="ui buttons">
            <button class="ui button" @click="increment">Increment</button>
            <button class="ui button" @click="decrement">Decrement</button>
        </div>
        <div class="ui buttons">
            <button class="ui button" @click="complete">Complete</button>
            <button class="ui button" @click="reset">Reset</button>
        </div>
    
    </div>
</template>

<script>
import { SemVueProgress } from '@/semvue';

export default {
    name: 'ProgressDoc',
    components: {
        SemVueProgress,
    },
    data() {
        return {
            progress: this.$refs.progress,
        };
    },
    methods: {
        increment() {
            this.$refs.progress.increment();
        },
        decrement() {
            this.$refs.progress.decrement();
        },
        complete() {
            this.$refs.progress.complete();
        },
        reset() {
            this.$refs.progress.reset();
        },
    },
};
</script>
