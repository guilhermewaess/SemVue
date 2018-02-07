<template>
    <div class="ui container">
        <h1 class="ui dividing header">Accordion</h1>
        <p>Accordion component,
            <a href="https://semantic-ui.com/modules/accordion.html">you can see all documentation here</a>
        </p>

        <h3 class="ui dividing header">Example</h3>
        <accordion id="accordion-example" customClass="styled">
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

        <h3 class="ui dividing header">Usage</h3>
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
                    <td>id</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Is a div id for accordion</td>
                </tr>
                <tr>
                    <td>curstomClass</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>Used to put any aditional class inside accordion div </br>
                        e.g. class="ui customClass accordion"
                    </td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>Object</td>
                    <td>No</td>
                    <td>Object empty</td>
                    <td>Overrides component options.<a href="https://semantic-ui.com/modules/accordion.html"> You can see all options here</a></td>
                </tr>
            </tbody>
        </table>
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
.segment {
    padding: 0!important;
}

pre {
    margin: 0!important;
}
</style>
