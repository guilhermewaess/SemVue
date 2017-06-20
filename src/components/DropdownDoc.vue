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
        <accordion accordionId="accordion-props" customClass="styled">
            <div class="title">
                <i class="dropdown icon"></i>
                dropdownId (String)
            </div>
            <div class="content">
                <p class="transition hidden">Is a div id for dropdown, could be usefull when you have more than one dropdown on page with different styles</p>
            </div>
            <div class="title">
                <i class="dropdown icon"></i>
                value (Object)
            </div>
            <div class="content">
                <p class="transition hidden">Any var where the component will put the selected value</p>
            </div>
            <div class="title">
                <i class="dropdown icon"></i>
                options (Array)
            </div>
            <div class="content">
                <div class="transition hidden">
                    <p>Any array with objects that will use to render options</p>
                    <p>
                        <strong>Must have property text and value</strong>
                        <ul>
                            <li>text: will render as text option</li>
                            <li>value: will be like a key to get selected object on array</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="title">
                <i class="dropdown icon"></i>
                iconProperty (String | Not Required)
            </div>
            <div class="content">
                <div class="transition hidden">
                    <p>If you option has any icon to show, or the dropdown it self is made by icons, this prop defines wich property inside option contains the icon class</p>
                    <pre>
                        e.g.: iconProperty="iconClassProperty"
                        option: { iconClassProperty: 'myIconClass' value: 0 };
                        this will render: <i class="myIconClass icon`"></i>

                        default is empty
                    </pre>
                </div>
            </div>
    
            <div class="title">
                <i class="dropdown icon"></i>
                customClass (String | Not Required)
            </div>
            <div class="content">
                <p class="transition hidden">Used to define differente type of dropdown style,
                    <a href="https://semantic-ui.com/modules/dropdown.html"> you can see all dropdown styles here</a>
                </p>
                <pre>
                    e.g.: customClass="large"
                    default is empty<strong>(standard drodown)</strong>
                </pre>
            </div>
        </accordion>
    </div>
</template>

<script>
import { Accordion, Dropdown } from '@/semvue';

export default {
    name: 'DropdownDoc',
    components: {
        Accordion,
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
            if (this.dropdownOptions === this.defaultOptions) {
                this.dropdownOptions = this.anotherOptions;
            } else {
                this.dropdownOptions = this.defaultOptions;
            }
        },
        changeToOnlyIcons() {
            this.dropdownOptions = this.optionsWithoutText;
        },
        changeToOnlyText() {
            this.dropdownOptions = this.defaultOptions;
            this.iconProperty = '';
        },
        changeToIconsAndText() {
            this.iconProperty = 'iconClass';
            this.dropdownOptions = this.defaultOptions;
        },
    },
};
</script>

<style lang="less" scoped>
pre {
    margin: 0!important;
}

.dropdown-code{
    padding: 0!important;
}
</style>
