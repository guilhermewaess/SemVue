<template>
    <div class="ui container">
        <h1 class="ui dividing header">Popup</h1>
    
        <p>Popup component, did you noted that semantic-ui has a Popup module that you can use without javascript? But, if you need something more "complex", This is something helpful.</p>
        <p>
            <a href="https://semantic-ui.com/modules/popup.html"> you can see all documentation here</a>
        </p>
    
        <div class="ui button popup-button">Try this beautiful Popup</div>
        <div class="ui grid">
            <div class="two wide column">
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

        <popup popupId="nice-popup" :trigger="trigger.value" targetSelector=".popup-button">
            <div class="ui sub header">OH MY GOD!</div>
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
                { value: 'left right', text: 'Left Right' },
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
                { value: 'focus', text: 'Focus' },
                { value: 'hover', text: 'Hover' },
            ],
        };
    },
    computed: {
        popupOptions() {
            return {
                duration: 400,
                closable: false,
                transition: this.transition,
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

.popup-button {
    margin-bottom: 1em;
}
</style>
