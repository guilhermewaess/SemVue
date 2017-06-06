<template>
  <div class="ui fluid container">
    <app-menu></app-menu>
    <div class="pusher">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import '@/semantic-ui/semantic.min.css';
import '@/semantic-ui/semantic.min';
import AppMenu from '@/components/AppMenu';

export default {
  name: 'app',
  components: {
    AppMenu,
  },
};
</script>

<style lang="less">
.ui.container{
  height: 100%;
}
.pusher {
  height: 100%;
  margin-left: 210px;
}
</style>

