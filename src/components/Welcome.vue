<template>
  <div class="ui fluid container">
    <img class="ui big centered image" src="./../assets/logo.png">
    <div class="ui centered header">
      SemVue is a effort to bring
      <a href="https://semantic-ui.com/">Semantic-ui</a> components to
      <a href="https://vuejs.org/">VueJs</a> project.
    </div>
  </div>
</template>

<script>
export default {
  name: 'SemVue',
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.image {
  margin-top: 2em;
}
</style>
