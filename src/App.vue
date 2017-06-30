<template>
  <div class="ui fluid container">
    <a href="https://www.github.com/guilhermewaess/SemVue" target="_blank" class="ui black right corner huge label">
      <i class="github icon"></i>
    </a>
    <app-menu></app-menu>
    <div class="pusher">
      <transition name="component-transition">
        <router-view></router-view>
      </transition>
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
html,
body {
  height: 100%
}

.ui.container {
  padding-top: 1em;
  padding-bottom: 1em;
  height: 100%;
}

.pusher {
  height: 100%;
  margin-left: 210px;
}

.component-transition-enter-active,
.component-transition-leave-active {
  transition: opacity .1s ease;
}

.component-transition-enter,
.component-transition-leave-to {
  opacity: 0;
}
</style>

