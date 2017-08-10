<template>
    <div class="ui container">
        <h1 class="ui dividing header">Dimmer</h1>
        <p>Dimmer component,
            <a href="https://semantic-ui.com/modules/dimmer.html"> you can see all dimmer documentation here</a>
        </p>
    
        <h3 class="ui dividing header">Examples</h3>
        <div class="ui six centered grid">
    
            <div class="three wide center aligned column centered">
                <button class="ui button" @click="changeDimmerVisibility('showBasicDimmer')">Basic dimmer</button>
                <div class="ui center aligned segment basic-dimmer">
                    Basic Dimmer
    
                    <dimmer dimmerId="basic-dimmer" targetSelector=".basic-dimmer" :showDimmer.sync="showBasicDimmer"></dimmer>
                </div>
            </div>
    
            <div class="three wide center aligned column centered">
                <button class="ui button" @click="changeDimmerVisibility('showContentDimmer')">Content dimmer</button>
                <div class="ui center aligned segment content-dimmer">
                    Content Dimmer
    
                    <dimmer dimmerId="content-dimmer" targetSelector=".content-dimmer" :showDimmer.sync="showContentDimmer">
                        <div class="content">
                            <div class="center">
                                <h2 class="ui inverted icon header">
                                    <i class="heart icon"></i>
                                    SemVue!
                                </h2>
                            </div>
                        </div>
                    </dimmer>
                </div>
            </div>
    
            <div class="three wide center aligned column centered">
                <button class="ui button" @click="changeDimmerVisibility('showLoadingDimmer')">Loading dimmer</button>
                <div class="ui center aligned segment loading-dimmer">
                    Loading Dimmer
    
                    <dimmer dimmerId="loading-dimmer" targetSelector=".loading-dimmer" :showDimmer.sync="showLoadingDimmer">
                        <div class="ui text loader">Loading</div>
                    </dimmer>
                </div>
            </div>
    
            <div class="three wide center aligned column centered">
                <button class="ui button" @click="changeDimmerVisibility('showHoverDimmer')">Hover dimmer</button>
                <div class="ui center aligned segment hover-dimmer">
                    Hover Dimmer
    
                    <dimmer dimmerId="hover-dimmer" targetSelector=".hover-dimmer" :showDimmer.sync="showHoverDimmer" :options="hoverDimmerOptions">
                        <div class="content">
                            <div class="center">
                                <h2 class="ui inverted icon header">
                                    Hover Here
                                </h2>
                            </div>
                        </div>
                    </dimmer>
                </div>
            </div>
    
            <div class="three wide center aligned column centered">
                <button class="ui button all-paragraphs-button" @click="changeDimmerVisibility('showAllParagraphsDimmer')">Dimmer all paragraphs</button>
                <dimmer targetSelector="p" dimmerId="all-paragraphs-dimmer" :showDimmer.sync="showAllParagraphsDimmer"></dimmer>
            </div>
        </div>
    
        <h3 class="ui dividing header">Usage</h3>
        <p>
            <strong>Is important to put dimmer component inside element which will be dimmed. Unless if you want to dimmer all elements like paragraphs example</strong>
        </p>
    
        <div class="ui segment code">
            <pre>
            import { Dimmer } from 'semvue';
    
            export default {
                components: {
                    Dimmer,
                },
            }
            </pre>
        </div>
        <div class="ui segment code">
            <pre>
            &ltdiv class="ui center aligned segment content-dimmer"&gt
                Content Dimmer

                &ltdimmer dimmerId="content-dimmer" targetSelector=".content-dimmer" :showDimmer.sync="showContentDimmer"&gt
                    &ltdiv class="content"&gt
                        &ltdiv class="center"&gt
                            &lth2 class="ui inverted icon header"&gt
                                &lti class="heart icon"&gt&lt/i&gt
                                SemVue!
                            &lt/h2&gt
                        &lt/div&gt
                    &lt/div&gt
                &lt/dimmer&gt
            &lt/div&gt
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
                    <td>dimmerId</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Is a div id for dimmer</td>
                </tr>
                <tr>
                    <td>showDimmer</td>
                    <td>Boolean</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Used to control dimmer visibility</td>
                </tr>
                <tr>
                    <td>targetSelector</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Selector of element where dimmer should appear (could be #elementId or .element-class)</td>
                </tr>
                <tr>
                    <td>curstomClass</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>Used to put any aditional class inside dimmer div </br>
                        e.g. class="ui customClass dimmer"
                    </td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>Object</td>
                    <td>No</td>
                    <td>Object Empty</td>
                    <td>Overrides component options.
                        <a href="https://semantic-ui.com/modules/dimmer.html"> You can see all options here</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { Dimmer } from '@/semvue';

export default {
    name: 'DimmerDoc',
    components: {
        Dimmer,
    },
    data() {
        return {
            showBasicDimmer: false,
            showLoadingDimmer: false,
            showContentDimmer: false,
            showAllParagraphsDimmer: false,
            showHoverDimmer: false,
            hoverDimmerOptions: { on: 'hover' },
        };
    },
    methods: {
        changeDimmerVisibility(dimmer) {
            this[dimmer] = true;
        },
    },
};
</script>

<style lang="less" scoped>
.column.centered {
    min-height: 15em!important;
}

.ui.center.aligned.segment {
    height: 78%;
}

.all-paragraphs-button {
    margin-top: 50%;
}
</style>
