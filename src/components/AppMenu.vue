<template>
    <div class="ui vertical inverted sticky menu fixed top">
        <router-link class="item" :to="{ name: 'welcome' }">
            <img class="ui mini centered image" src="./../assets/logo.png">
        </router-link>
    
        <router-link class="item" :to="{ name: 'ModalDoc' }">
            Modal
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Menu',
};
</script>

<style lang="less" scoped>
.menu {
    height: 100%;
}

.font-base {
    font-weight: bold!important;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif!important;
}

.title {
    font-size: 1.2em!important;
    .font-base;
}

.item {
    font-size: 1em!important;
    .font-base;
}
</style>
