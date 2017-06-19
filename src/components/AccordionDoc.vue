<template>
    <div class="ui container">
        <h1 class="ui dividing header">Accordion</h1>
        <p>Accordion component,
            <a href="https://semantic-ui.com/modules/accordion.html">you can see all documentation here</a>
        </p>
    
        <div class="ui segment">
            <pre>
                import { Accordion } from 'semvue';

                export default {
                    components: {
                        Accordion,
                    },
                }
            </pre>
        </div>
    
        <div class="ui segment">
            <pre>
                &ltaccordion&gt
                    &ltdiv class="title"&gt
                        &lti class="dropdown icon"&gt&lt/i&gt
                        Item 1
                    &lt/div&gt
                    &ltdiv class="content"&gt
                        &ltp&gtHello, I'm the first item.&lt/p&gt
                    &lt/div&gt
                    &ltdiv class="title"&gt
                        &lti class="dropdown icon"&gt&lt/i&gt
                        Item 2
                    &lt/div&gt
                    &ltdiv class="content"&gt
                        &ltp&gtHello, I'm the second item.&lt/p&gt
                    &lt/div&gt
                &lt/accordion&gt
            </pre>
        </div>
    
        <h3 class="ui dividing header">Example</h3>
        <accordion accordionId="accordion-example">
            <div class="title">
                <i class="dropdown icon"></i>
                Item 1
            </div>
            <div class="content">
                <p>Hello, I'm the first item.</p>
            </div>
            <div class="title">
                <i class="dropdown icon"></i>
                Item 2
            </div>
            <div class="content">
                <p>Hello, I'm the second item.</p>
            </div>
        </accordion>
    
        <h3 class="ui dividing header">Props</h3>
        <accordion accordionId="accordion-props" customClass="styled">
            <div class="title">
                <i class="dropdown icon"></i>
                accordionId (String)
            </div>
            <div class="content">
                <p class="transition hidden">Is a div id for modal, could be usefull when you have more than one accordion on page with different styles</p>
            </div>
            <div class="title">
                <i class="dropdown icon"></i>
                customClass (String | Not Required)
            </div>
            <div class="content">
                <p class="transition hidden">Used to define differente type of accordion,
                    <a href="https://semantic-ui.com/modules/accordion.html">you can see all accordion types here</a>
                </p>
                <pre>
                    e.g.: customClass="styled"
                    default is empty<strong>(standard accordion)</strong>
                </pre>
            </div>
        </accordion>
    </div>
</template>

<script>
import { Accordion } from '@/semvue/index';

export default {
    name: 'AccordionDoc',
    components: {
        Accordion,
    },
};
</script>

<style lang="less" scoped>
.ui.container {
    padding-top: 1em;
}

.segment {
    padding: 0!important;
}

pre {
    margin: 0!important;
}
</style>
