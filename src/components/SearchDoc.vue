<template>
  <div class="ui container">
    <h1 class="ui dividing header">Search</h1>
  
    <p>Search component,
      <a href="https://semantic-ui.com/modules/search.html"> you can see all documentation here</a>
    </p>
  
    <div class="ui six centered grid">
      <div class="four wide column">
        <label for="">Type (Luke | R2 | Darth | Owen)</label>
        <search searchId="content-search"
                :content="content"
                :value.sync="contentValue"
                :searchFields="['name']"></search>
        <label for="">Content search</label>
      </div>
  
      <div class="four wide column">
        <label for="">Type any StarWars people</label>
                <!-- apiUrl="https://swapi.co/api/people/?search={query}" -->
        <search searchId="api-search"
                apiUrl="https://jsonplaceholder.typicode.com/users?name={query}"
                :value.sync="apiValue"
                :searchFields="['name']"></search>
        <label for="">Api content <a href="http://swapi.co/documentation#people">(Thanks Swapi)</a></label>
      </div>
    </div>
  </div>
</template>


<script>
import { Search } from '@/semvue';

export default {
  name: 'SearchDoc',
  components: {
    Search,
  },
  data() {
    return {
      contentValue: null,
      apiValue: null,
      content: [
        { name: 'Luke Skywalker' },
        { name: 'R2-D2' },
        { name: 'Darth Vader' },
        { name: 'Owen Lars' },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.code {
  padding: 0 !important;
}
</style>
