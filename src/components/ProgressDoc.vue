<template>
    <div class="ui container">
        <h1 class="ui dividing header">Progress</h1>
    
        <p>Progress component,
            <a href="https://semantic-ui.com/modules/progress.html"> you can see all documentation here</a>
        </p>
        <sem-vue-progress ref="progress"
                          progressId="progressId"
                          :total="100"
                          activeText="Clicked {value} of {total} clicks"
                          successText="You finished to click {total} times"
                          warningText="Watch out, are you really clicking?"
                          errorText="Ops, something went wrong during clicking time">
    
            <div class="label"
                 slot="start-label">Please, click on increment button</div>
        </sem-vue-progress>
    
        <div class="ui segment">
            <sem-vue-progress ref="topSegmentProgress"
                              progressId="top-segment-progress"
                              customClass="top attached"
                              :total="100"
                              activeText="Clicked {value} of {total} clicks"
                              successText="You finished to click {total} times"
                              warningText="Watch out, are you really clicking?"
                              errorText="Ops, something went wrong during clicking time">
            </sem-vue-progress>
            Top and Bottom attached progress
            <sem-vue-progress ref="bottomSegmentProgress"
                              progressId="bottom-segment-progress"
                              customClass="bottom attached"
                              :total="100"
                              activeText="Clicked {value} of {total} clicks"
                              successText="You finished to click {total} times"
                              warningText="Watch out, are you really clicking?"
                              errorText="Ops, something went wrong during clicking time">
            </sem-vue-progress>
        </div>
    
        <div class="ui center aligned container action-buttons">
            <div class="ui center aligned buttons">
                <button class="ui green button"
                        @click="increment">Increment</button>
                <div class="or"></div>
                <button class="ui red button"
                        @click="decrement">Decrement</button>
            </div>
            <div class="ui buttons">
                <button class="ui button"
                        @click="complete">Complete</button>
                <div class="or"></div>
                <button class="ui button"
                        @click="reset">Reset</button>
            </div>
            <div class="ui buttons">
                <button class="ui grey button"
                        @click="setState('setActive')">SetActive</button>
                <div class="or"></div>
    
                <button class="ui green button"
                        @click="setState('setSuccess')">SetSuccess</button>
                <div class="or"></div>
    
                <button class="ui red button"
                        @click="setState('setError')">SetError</button>
                <div class="or"></div>
    
                <button class="ui yellow button"
                        @click="setState('setWarning')">SetWarning</button>
            </div>
        </div>
    
        <h3 class="ui dividing header">Usage</h3>
        *&ltprogress&gt is a reserved html tag, so don't forget to use sem-vue-progress tag*
        <div class="ui segment code">
            <pre>
            import { SemVueProgress } from '@/semvue'; 

            export default {
                components: {
                    SemVueProgress,
                },
                methods: {
                    increment() {
                        this.$refs.progressRef.increment();
                    },
                }
            }
            </pre>
        </div>
        Note that you need to ref the component and use API*
        <div class="ui segment code">
            <pre>
            &ltsem-vue-progress ref="progressRef"
                                progressId="progressRef"
                                :total="100"
                                activeText="Clicked {value} of {total} clicks"
                                successText="You finished to click {total} times"
                                warningText="Watch out, are you really clicking?"
                                errorText="Ops, something went wrong during clicking time"&gt
            &lt/sem-vue-progress&gt
            </pre>
        </div>
    
        If you want to change the start label under the bar, you can use <strong>slot: start-label</strong>.
        <div class="ui segment code">
            <pre>
            &ltsem-vue-progress ref="progressRef"
                                progressId="progressRef"
                                :total="100"&gt

                &ltdiv class="label" slot="start-label"&gtPlease, click on increment button&lt/div&gt
            &lt/sem-vue-progress&gt
            </pre>
        </div>
    
        <h3 class="ui dividing header">Props</h3>
        <table class="ui definition table">
            <thead>
                <tr>
                    <th></th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>progressId</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>IsA div id for rating</td>
                </tr>
                <tr>
                    <td>total</td>
                    <td>Number</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Used to control the total value of progress</td>
                </tr>
                <tr>
                    <td>incrementValue</td>
                    <td>Number</td>
                    <td>No</td>
                    <td>A random generated number</td>
                    <td>Used to increment the progress value</td>
                </tr>
                <tr>
                    <td>progressLabelType</td>
                    <td>String</td>
                    <td>No</td>
                    <td>percent</td>
                    <td>Current label used inside of progress bar
                        <a href="https://semantic-ui.com/modules/progress.html">(percent or ratio)</a>
                    </td>
                </tr>
                <tr>
                    <td>activeText</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>
                        Used to customize the active text
                        <br> e.g. "Clicked {value} of {total} clicks"
                    </td>
                </tr>
                <tr>
                    <td>sucessText</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>
                        Used to customize success text
                        <br> e.g. "You finished to click {total} times"
                    </td>
                </tr>
                <tr>
                    <td>warningText</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>
                        Used to customize the warning text
                        <br> e.g. "Watch out, are you really clicking?"
                    </td>
                </tr>
                <tr>
                    <td>errorText</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>
                        Used to customize error text
                        <br> e.g. "Ops, something went wrong during clicking time"
                    </td>
                </tr>
                <tr>
                    <td>curstomClass</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>Used to put any aditional class inside progress div </br>
                        e.g. class="ui customClass progress"
                    </td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>Object</td>
                    <td>No</td>
                    <td>Object empty</td>
                    <td>Overrides component options.
                        <a href="https://semantic-ui.com/modules/rating.html"> You can see all options here</a>
                    </td>
                </tr>
            </tbody>
        </table>
    
        <h3 class="ui dividing header">API</h3>
        <table class="ui definition table ">
            <thead>
                <tr>
                    <th>Behavior</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>setPercent(percent)</td>
                    <td>Sets current percent of progress to value. If using a total will convert from percent to estimated value</td>
                </tr>
                <tr>
                    <td>setProgress(value)</td>
                    <td>Sets progress to specified value. Will automatically calculate percent from total</td>
                </tr>
                <tr>
                    <td>increment(incrementValue)</td>
                    <td>Increments progress by increment value, if not passed a value will use random amount specified in settings</td>
                </tr>
                <tr>
                    <td>decrement(decrementValue)</td>
                    <td>Decrements progress by decrement value, if not passed a value will use random amount specified in settings</td>
                </tr>
                <tr>
                    <td>updateProgress(value)</td>
                    <td>Immediately updates progress to value, ignoring progress animation interval delays</td>
                </tr>
                <tr>
                    <td>complete</td>
                    <td>Finishes progress and sets loaded to 100%</td>
                </tr>
                <tr>
                    <td>reset</td>
                    <td>Resets progress to zero</td>
                </tr>
                <tr>
                    <td>setTotal(total)</td>
                    <td>SetTotal to a new value</td>
                </tr>
                <tr>
                    <td>getText(text)</td>
                    <td>Replaces templated string with value, total, percent left and percent</td>
                </tr>
                <tr>
                    <td>getNormalized value(value)</td>
                    <td>Returns normalized value inside acceptable range specified by total</td>
                </tr>
                <tr>
                    <td>getPercent</td>
                    <td>Returns percent as last specified</td>
                </tr>
                <tr>
                    <td>getValue</td>
                    <td>Returns current progress value</td>
                </tr>
                <tr>
                    <td>getTotal</td>
                    <td>Returns total</td>
                </tr>
                <tr>
                    <td>isComplete</td>
                    <td>Returns whether progress isCompleted</td>
                </tr>
                <tr>
                    <td>isSuccess</td>
                    <td>Returns whether progress was a success</td>
                </tr>
                <tr>
                    <td>isWarning</td>
                    <td>Returns whether progress isIn warning state</td>
                </tr>
                <tr>
                    <td>isError</td>
                    <td>Returns whether progress isIn error state</td>
                </tr>
                <tr>
                    <td>isActive</td>
                    <td>Returns whether progress isIn active state</td>
                </tr>
                <tr>
                    <td>setActive</td>
                    <td>Sets progress to active state</td>
                </tr>
                <tr>
                    <td>setWarning</td>
                    <td>Sets progress to warning state</td>
                </tr>
                <tr>
                    <td>setSuccess</td>
                    <td>Sets progress to success state</td>
                </tr>
                <tr>
                    <td>setError</td>
                    <td>Sets progress to error state</td>
                </tr>
                <tr>
                    <td>setDuration(value)</td>
                    <td>Changes progress animation speed</td>
                </tr>
                <tr>
                    <td>setLabel(text)</td>
                    <td>Sets progress exterior label to text</td>
                </tr>
                <tr>
                    <td>setBarLabel(text)</td>
                    <td>Sets progress bar label to text</td>
                </tr>
                <tr>
                    <td>remove active</td>
                    <td>Removes progress to active state</td>
                </tr>
                <tr>
                    <td>remove warning</td>
                    <td>Removes progress to warning state</td>
                </tr>
                <tr>
                    <td>remove success</td>
                    <td>Removes progress to success state</td>
                </tr>
                <tr>
                    <td>remove error</td>
                    <td>Removes progress to error state</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { SemVueProgress } from '@/semvue';

export default {
    name: 'ProgressDoc',
    components: {
        SemVueProgress,
    },
    methods: {
        increment() {
            this.$refs.progress.increment();
            this.$refs.topSegmentProgress.increment();
            this.$refs.bottomSegmentProgress.increment();
        },
        decrement() {
            this.$refs.progress.decrement();
            this.$refs.topSegmentProgress.decrement();
            this.$refs.bottomSegmentProgress.decrement();
        },
        complete() {
            this.$refs.progress.complete();
            this.$refs.topSegmentProgress.complete();
            this.$refs.bottomSegmentProgress.complete();
        },
        reset() {
            this.$refs.progress.reset();
            this.$refs.topSegmentProgress.reset();
            this.$refs.bottomSegmentProgress.reset();
        },
        setState(state) {
            this.$refs.progress[state]();
            this.$refs.topSegmentProgress[state]();
            this.$refs.bottomSegmentProgress[state]();
        },
    },
};
</script>

<style lang="less" scoped>
.action-buttons {
    height: auto;
}

.code {
    padding: 0!important;
}
</style>
