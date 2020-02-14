<template>
  <VueWebComponent title="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueWebComponent from "./components/VueWebComponent.vue";

@Component({
  components: {
    VueWebComponent
  }
})
export default class App extends Vue {}
</script>
