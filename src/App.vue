<template>
  <div>
    <div id="app">
      <router-view></router-view>
      <!-- <augur-cards></augur-cards> -->
    </div>
  </div>
</template>

<script>
import AugurHeader from "./components/AugurHeader.vue";
import AugurCards from "./components/AugurCards.vue";
import VueRouter from "vue-router";
// import RouterView from 'vue-router'
import GrowthMaturityDeclineCard from "./components/GrowthMaturityDeclineCard";
import ExperimentalCard from "./components/ExperimentalCard";

export default {
  name: "app",
  components: {
    "augur-header": AugurHeader,
    "augur-cards": AugurCards
  }
};
</script>

<style scoped>
@import "~shards-ui/dist/css/shards.css";
@import "~quill/dist/quill.snow.css";
@import "~bootstrap/dist/css/bootstrap.css";
</style>

