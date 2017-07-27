<template>
  <div class="ui container">
    <h1 class="ui dividing header">Search</h1>
  
    <p>Search component,
      <a href="https://semantic-ui.com/modules/search.html"> you can see all documentation here</a>
    </p>
    
  </div>
</template>


<script>
import { Search } from '@/semvue';

export default {
  name: 'SearchDoc',
  components: {
    Search,
  },
};
</script>

<style lang="less" scoped>
.code {
  padding: 0!important;
}
</style>
