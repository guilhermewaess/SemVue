<template>
    <div class="ui vertical inverted sticky menu fixed top">
        <router-link class="item logo" :to="{ name: 'welcome' }">
            <img class="ui small centered image" src="./../assets/logo.png">
        </router-link>
    
        <router-link class="item" :to="{ name: 'AccordionDoc' }">
            Accordion
        </router-link>

        <router-link class="item" :to="{ name: 'DimmerDoc' }">
            Dimmer
        </router-link>

        <router-link class="item" :to="{ name: 'DropDownDoc' }">
            Dropdown
        </router-link>

        <router-link class="item" :to="{ name: 'EmbedDoc' }">
            Embed
        </router-link>

        <router-link class="item" :to="{ name: 'ModalDoc' }">
            Modal
        </router-link>

        <router-link class="item" :to="{ name: 'PopupDoc' }">
            Popup
        </router-link>

        <router-link class="item" :to="{ name: 'ProgressDoc' }">
            Progress
        </router-link>

        <router-link class="item" :to="{ name: 'RatingDoc' }">
            Rating
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

    .logo{
        background-color: transparent!important;
    }
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
