<template>
    <div :class="`ui ${customClass} dropdown`" :id="dropdownId">
        <div class="text">
            <i :class="`${value[iconProperty]} icon`" v-if="hasIcons"></i>
            {{ value.text }}
        </div>
    
        <i class="dropdown icon"></i>
        <div class="menu">
            <div class="item" v-for="option in options" :data-value="option.value">
                <i :class="`${option[iconProperty]} icon`" v-if="hasIcons"></i>
                {{ option.text }}
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'dropdown',
    props: {
        dropdownId: {
            validator: prop => prop.length,
            required: true,
        },
        value: {
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        iconProperty: {
            type: String,
        },
        customClass: {
            type: String,
        },
    },
    mounted() {
        this.startDropdown();
    },
    methods: {
        startDropdown() {
            const dropDownElement = $(`#${this.dropdownId}`);
            dropDownElement.dropdown({
                onChange: this.updateValue,
            });
        },
        findSelectedOption(selectedValue) {
            let option = this.tryFindOptionByString(selectedValue);

            if (!option) {
                option = this.tryFindOptionByNumber(selectedValue);
            }

            return option;
        },
        tryFindOptionByString(selectedValue) {
            const option = _.find(this.options, ['value', selectedValue]);
            return option;
        },
        tryFindOptionByNumber(selectedValue) {
            const option = _.find(this.options, ['value', Number(selectedValue)]);
            return option;
        },
        updateValue(value) {
            const option = this.findSelectedOption(value);
            this.$emit('update:value', option);
        },
        defineValue() {
            if (!this.value) {
                this.updateValue(this.options[0].value);
            }
        },
    },
    computed: {
        hasIcons() {
            return this.iconProperty;
        },
    },
    watch: {
        options() {
            this.updateValue(this.options[0].value);
        },
    },
};

</script>

<style lang="less" scoped>

</style>
