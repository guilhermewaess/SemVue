<template>
  <div class="ui centered container">
    <img class="ui huge centered image" src="./../assets/logo.png">
    <div class="ui centered header">
      SemVue is a effort to bring
      <a href="https://semantic-ui.com/">Semantic-ui</a> components to
      <a href="https://vuejs.org/">VueJs</a> project.
    </div>
  
    <h1 class="ui dividing header">Install</h1>
    <h5>Semantic-ui has dependency of jquery, so, we assume that you already have imported jquery in your project</h5>
    <h3>With npm</h3>
  
    <div class="ui segment">
      <pre>
        npm install --save semvue
      </pre>
    </div>
  
    <h3>Source Download</h3>
    <a href="https://github.com/guilhermewaess/SemVue/tree/master/dist/semvue">You can download files here</a>
  
    <h4>Soon as a possible on CDN</h4>
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

.segment {
  padding: 0!important;
}

pre {
  margin: 0!important;
}

.ui.dividing.header{
  margin-top: 2em;
}
</style>
