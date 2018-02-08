<template>
    <div :id="searchId"
         :class="'ui search'">
        <slot :name="`search-${searchId}`">
            <div class="ui icon input">
                <input class="prompt"
                       type="text">
                <i class="search icon"></i>
            </div>
        </slot>
        <div class="results"></div>
    </div>
</template>

<script>
function createDefaultOptions() {
  const options = Object.assign(
    {
      searchFields: this.searchFields,
      fields: {
        title: 'name',
      },
    },
    this.options,
  );

  if (this.content) {
    options.source = this.content;
  } else {
    options.apiSettings = {
      url: this.apiUrl,
    };
  }

  options.onSelect = this.onSelect.bind(this, this.options.onSelect);
//   options.type = 'duGui';
  return options;
}

export default {
  name: 'Search',
  props: {
    searchId: {
      validator: prop => prop.length,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      validator: () => !this.apiUrl,
    },
    apiUrl: {
      type: String,
      validator: () => !this.content,
    },
    value: {
      required: true,
    },
    searchFields: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    $.fn.search.settings.templates.duGui = (a, b) => {
      debugger;
      console.log(a, b); // eslint-disable-line
      return `<div class="result"><div class="content"><div class="title">${
        a.name
      }</div></div></div>`;
    };
    console.log($.fn.search.settings.templates); // eslint-disable-line
    debugger;
    this.startSearch();
  },
  methods: {
    startSearch() {
      const options = createDefaultOptions.call(this);
      const searchElement = $(`#${this.searchId}`);

      searchElement.search(options);
    },
    onSelect(customCallback, value) {
      if (customCallback) {
        customCallback();
      }
      debugger;
      this.$emit('update:value', value);
      return false;
    },
  },
};
</script>
