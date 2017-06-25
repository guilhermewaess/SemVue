<template>
    <div class="ui container">
        <h1 class="ui dividing header">DropDown</h1>
    
        <p>Dropdown component,
            <a href="https://semantic-ui.com/modules/dropdown.html"> you can see all documentation here</a>
        </p>
    
        <dropdown dropdownId="drop-phones" :options="dropdownOptions" :value.sync="selectedValue" customClass="large label" :iconProperty="iconProperty">
        </dropdown>
    
        <div class="ui buttons">
            <button class="ui button" @click="changeToOnlyIcons">Only Icons</button>
            <button class="ui button" @click="changeToOnlyText">Only Text</button>
            <button class="ui button" @click="changeToIconsAndText">Icons and Text</button>
            <button class="ui button" @click="changeOptions">Change options</button>
        </div>
    
        <h4 class="ui header">SelectedValue</h4>
        <div class="ui segment">{{ selectedValue }}</div>
    
        <h4 class="ui header">Options Array</h4>
        <div class="ui segment">{{ dropdownOptions }}</div>
    
        <div class="ui segment dropdown-code">
            <pre>
                import { Dropdown } from 'semvue';

                export default {
                    components: {
                        Dropdown,
                    },
                }
            </pre>
        </div>
        <div class="ui segment dropdown-code">
            <pre>
                &ltdropdown dropdownId="drop-phones" 
                    :options="dropdownOptions" 
                    :value.sync="selectedValue" 
                    customClass="large label" 
                    :iconProperty="iconProperty"&gt
                &lt/dropdown&gt
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
                    <td>dropdownId</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Is a div id for dropdown</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>Number</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Used to control current selected value</td>
                </tr>
                <tr>
                    <td>iconProperty</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String Empty</td>
                    <td>
                        <p>If you option has any icon to show, or the dropdown it self is made by icons, this prop defines wich property inside option contains the icon class</p>
                        <div class="ui segment dropdown-code">
                            <pre>
        e.g.: iconProperty="iconClassProperty"
        option: { iconClassProperty: 'myIconClass' value: 0 };
        this will render: &lti class="myIconClass icon`"&gt&lt/i&gt
                                </pre>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>curstomClass</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>Used to put any aditional class inside rating div </br>
                        e.g. class="ui customClass dropdown"
                    </td>
                </tr>
            </tbody>
        </table>
    
    </div>
</template>

<script>
import { Dropdown } from '@/semvue';

export default {
    name: 'DropdownDoc',
    components: {
        Dropdown,
    },
    created() {
        this.dropdownOptions = this.defaultOptions;
        this.selectedValue = this.dropdownOptions[0];
    },
    data() {
        return {
            selectedValue: null,
            iconProperty: 'iconClass',
            dropdownOptions: [],
            defaultOptions: [
                { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' },
                { iconClass: 'mobile', value: 2, text: 'Hello, I\'m mobile phone 2' },
                { iconClass: 'whatsapp', value: 3, text: 'Hello, I\'m whats phone 3' },
            ],
            anotherOptions: [
                { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m THE NEW normal phone 1' },
                { iconClass: 'mobile', value: 2, text: 'Hello, I\'m THE NEW mobile phone 2' },
                { iconClass: 'whatsapp', value: 3, text: 'Hello, I\'m THE NEW whats phone 3' },
            ],
            optionsWithoutText: [
                { iconClass: 'volume control phone', value: 1 },
                { iconClass: 'mobile', value: 2 },
                { iconClass: 'whatsapp', value: 3 },
            ],
        };
    },
    methods: {
        changeOptions() {
            this.restoreIconProperty();
            if (this.dropdownOptions === this.defaultOptions) {
                this.dropdownOptions = this.anotherOptions;
            } else {
                this.dropdownOptions = this.defaultOptions;
            }
        },
        changeToOnlyIcons() {
            this.restoreIconProperty();
            this.dropdownOptions = this.optionsWithoutText;
        },
        changeToOnlyText() {
            this.dropdownOptions = this.defaultOptions;
            this.iconProperty = '';
        },
        changeToIconsAndText() {
            this.restoreIconProperty();
            this.dropdownOptions = this.defaultOptions;
        },
        restoreIconProperty() {
            this.iconProperty = 'iconClass';
        },
    },
};
</script>

<style lang="less" scoped>
pre {
    margin: 0!important;
}

.dropdown-code {
    padding: 0!important;
}
</style>
