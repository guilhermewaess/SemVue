<template>
    <div class="ui container">
        <h1 class="ui dividing header">Popup</h1>
    
        <p>Popup component, did you note that semantic-ui has a Popup module that you can use without javascript? But, if you need something more "complex", This is something helpful.</p>
        <p>
            <a href="https://semantic-ui.com/modules/popup.html"> you can see all documentation here</a>
        </p>
    
        <div class="ui button popup-example-element">Try here the beautiful Popup</div>
    
        <div class="ui grid">
            <div class="three wide column">
                <div class="ui sub header">Position</div>
                <dropdown dropdownId="dropdown-positions" :options="positions" :value.sync="position" customClass="large fluid label"></dropdown>
            </div>
            <div class="two wide column">
                <div class="ui sub header">Trigger</div>
                <dropdown dropdownId="dropdown-triggers" :options="triggers" :value.sync="trigger" customClass="large fluid label"></dropdown>
            </div>
            <div class="three wide column">
                <div class="ui sub header">Transitions</div>
                <dropdown dropdownId="dropdown-transitions" :options="transitions" :value.sync="transition" customClass="large fluid label"></dropdown>
            </div>
        </div>
    
        <h3 class="ui dividing header">Usage</h3>
        <div class="ui segment code">
            <pre>
            import { Popup } from 'semvue';

            export default {
                components: {
                    Popup,
                },
            }
            </pre>
        </div>
    
        <div class="ui segment code">
            <pre>
            &ltpopup popupId="nice-popup" :trigger="trigger.value" targetSelector=".popup-example-element" :options="popupOptions" customClass="fluid"&gt
                *your custom popup html here*
            &lt/popup&gt
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
                    <td>popupId</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Is a div id for popup (used to get your custom complex popup and start it on semantic-ui)</td>
                </tr>
                <tr>
                    <td>trigger</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Used to toggle popup on element.
                        <p>
                            <a href="https://semantic-ui.com/modules/popup.html"> you can see all popup triggers here</a>
                        </p>
                        <p>*Attention, according on semantic-ui docs, sometimes your overrides on options will need diferent styles (e.g min-width) on your popup</p>
                    </td>
                </tr>
                <tr>
                    <td>targetSelector</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Selector of element where popup should appear (could be #elementId or .element-class)</td>
                </tr>
                <tr>
                    <td>curstomClass</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>Used to put any aditional class inside rating div </br>
                        e.g. class="ui customClass popup"
                    </td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>Object</td>
                    <td>No</td>
                    <td>Object Empty</td>
                    <td>Overrides component options.
                        <a href="https://semantic-ui.com/modules/popup.html"> You can see all options here</a>
                    </td>
                </tr>
            </tbody>
        </table>
    
        <popup popupId="nice-popup" :trigger="trigger.value" targetSelector=".popup-example-element" :options="popupOptions" customClass="fluid">
            <div class="ui three column divided center aligned grid">
                <div class="column">
                    <h4 class="ui header">Selected Position</h4>
                    <p>{{ position.text }}</p>
                </div>
                <div class="column">
                    <h4 class="ui header">Selected Trigger</h4>
                    <p>{{ trigger.text }}</p>
                </div>
                <div class="column">
                    <h4 class="ui header">Selected Transition</h4>
                    <p>{{ transition.text }}</p>
                </div>
            </div>
        </popup>
    </div>
</template>

<script>
import { Dropdown, Popup } from '@/semvue';

export default {
    name: 'PopupDoc',
    components: {
        Dropdown,
        Popup,
    },
    data() {
        return {
            position: { value: 'top left', text: 'Top Left' },
            trigger: { value: 'click', text: 'Click' },
            transition: { value: 'horizontal flip', text: 'Horizontal Flip' },
            positions: [
                { value: 'top left', text: 'Top Left' },
                { value: 'top center', text: 'Top Center' },
                { value: 'top right', text: 'Top Right' },
                { value: 'bottom left', text: 'Bottom Left' },
                { value: 'bottom center', text: 'Bottom Center' },
                { value: 'bottom right', text: 'Bottom Right' },
                { value: 'right center', text: 'Right Center' },
                { value: 'left center', text: 'Left Center' },
            ],
            transitions: [
                { value: 'horizontal flip', text: 'Horizontal Flip' },
                { value: 'vertical flip', text: 'Vertical Flip' },
                { value: 'fade up', text: 'Fade Up' },
                { value: 'fade', text: 'Fade' },
                { value: 'scale', text: 'Scale' },
            ],
            triggers: [
                { value: 'click', text: 'Click' },
                { value: 'hover', text: 'Hover' },
            ],
        };
    },
    computed: {
        popupOptions() {
            return {
                closable: false,
                duration: 500,
                position: this.position.value,
                transition: this.transition.value,
            };
        },
    },
};
</script>


<style lang="less" scoped>
#dropdown-positions,
#dropdown-triggers {
    margin-left: 0;
}

.popup-example-element {
    margin-bottom: 1em;
}

.code {
    padding: 0!important;
}
</style>
