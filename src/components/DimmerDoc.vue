// @ts-check
<template>
    <div class="ui container">
        <h1 class="ui dividing header">Dimmer</h1>
        <p>Dimmer component,
            <a href="https://semantic-ui.com/modules/dimmer.html"> you can see all dimmer documentation here</a>
        </p>
    
        <button class="ui button" @click="changeDimmerVisibility('showBasicDimmer')">Try basic dimmer</button>
        <button class="ui button" @click="changeDimmerVisibility('showLoadingDimmer')">Try Loading dimmer</button>
        <button class="ui button" @click="changeDimmerVisibility('showContentDimmer')">Try Content dimmer</button>
        <button class="ui button" @click="changeDimmerVisibility('showAllParagraphsDimmer')">Try dimmer all paragraphs</button>
        <button class="ui button" @click="changeDimmerVisibility('showPageDimmer')">Try page dimmer</button>
    
        <h3 class="ui dividing header">Usage</h3>
        <div class="ui segment code">
            <pre>
                                        import { Dimmer } from 'semvue';
                            
                                        export default {
                                            components: {
                                                Dimmer,
                                            },
                                        }
                                        </pre>
            <dimmer v-if="showBasicDimmer" dimmerId="basic-dimmer" targetSelector=".ui.segment.code" :showDimmer.sync="showBasicDimmer"></dimmer>
    
            <dimmer v-if="showLoadingDimmer" dimmerId="loading-dimmer" targetSelector=".ui.segment.code" :showDimmer.sync="showLoadingDimmer">
                <div class="ui text loader">Loading</div>
            </dimmer>
    
            <dimmer v-if="showContentDimmer" dimmerId="content-dimmer" targetSelector=".ui.segment.code" :showDimmer.sync="showContentDimmer">
                <div class="content">
                    <div class="center">
                        <h2 class="ui inverted icon header">
                            <i class="heart icon"></i>
                            SemVue!
                        </h2>
                    </div>
                </div>
            </dimmer>
    
            <dimmer v-if="showHoverDimmer" dimmerId="hover-dimmer" targetSelector=".ui.segment.code" :showDimmer.sync="showHoverDimmer" :options="hoverDimmerOptions">
                <div class="content">
                    <div class="center">
                        <h2 class="ui inverted icon header">
                            Hover Dimmer! Works o/
                        </h2>
                    </div>
                </div>
            </dimmer>
        </div>
    
        <dimmer v-if="showAllParagraphsDimmer" targetSelector="p" dimmerId="all-paragraphs-dimmer" :showDimmer.sync="showAllParagraphsDimmer"></dimmer>
    
        <dimmer v-if="showPageDimmer" dimmerId="page-dimmer" :showDimmer.sync="showHoverDimmer" customClass="page">
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
            showPageDimmer: false,
            hoverDimmerOptions: { on: 'hover' },
        };
    },
    methods: {
        changeDimmerVisibility(dimmer) {
            this.hideAllDimmers();
            this[dimmer] = true;
        },
        hideAllDimmers() {
            this.showBasicDimmer = false;
            this.showLoadingDimmer = false;
            this.showContentDimmer = false;
            this.showAllParagraphsDimmer = false;
            this.showHoverDimmer = false;
            this.showPageDimmer = false;
        },
    },
};
</script>
