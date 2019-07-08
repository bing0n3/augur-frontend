<template>
  <div>
    <div id="app">
      <router-view></router-view>
      <!-- <augur-cards></augur-cards> -->
    </div>
  </div>
</template>

<script>
import AugurHeader from "./AugurHeader.vue";
import AugurCards from "./AugurCards.vue";
import VueRouter from "vue-router";
// import RouterView from 'vue-router'
import GrowthMaturityDeclineCard from "./GrowthMaturityDeclineCard";
import ExperimentalCard from "./ExperimentalCard";

export default {
  name: "app",
  components: {
    "augur-header": AugurHeader,
    "augur-cards": AugurCards
  }
};
</script>

<style>
@import "~shards-ui/dist/css/shards.css";
@import "~quill/dist/quill.snow.css";
@import "~bootstrap/dist/css/bootstrap.css";
@import "~@/styles/app.4b014d92.css";
@import "~@/styles/icon.css";
@import "~@/styles/chunk-vendors.7677be57.css";

</style>
<style lang="stylus">
@import "~@/styles/augur.styl";

</style>

<style lang="scss">
@import "~@/styles/date-range.scss";
</style>

</style>
