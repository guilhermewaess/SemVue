<template>
    <div :class="`ui ${customClass} dropdown`" :id="id">
        <div class="text">
            <i :class="`${value[iconProperty]} icon`" v-if="hasIcons"></i>
            {{ value.text }}
        </div>
    
        <i class="dropdown icon"></i>
        <div class="menu">
            <div class="item" v-for="option in options" :data-value="option.value" :key="option.value">
                <i :class="`${option[iconProperty]} icon`" v-if="hasIcons"></i>
                {{ option.text }}
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import componentsMixins from './../mixins/Components';

export default {
  name: 'dropdown',
  mixins: [componentsMixins],
  props: {
    value: {
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    iconProperty: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.startDropdown();
  },
  methods: {
    startDropdown() {
      const dropDownElement = $(`#${this.id}`);
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
      this.$nextTick(this.startDropdown);
    },
  },
  computed: {
    hasIcons() {
      return !!this.iconProperty;
    },
  },
  watch: {
    options() {
      this.updateValue(this.options[0].value);
    },
    iconProperty() {
      this.updateValue(this.options[0].value);
    },
  },
};
</script>

<style lang="less" scoped>

</style>
