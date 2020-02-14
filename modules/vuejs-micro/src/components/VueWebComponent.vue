<template>
  <div class="app">
    <h3>Title: {{ title }}</h3>
    <h4>version: Vue 2.6.10</h4>
    <button @click="handleIncrement">
      Increment the number on <b>micro one</b>
    </button>
  </div>
</template>
<script>
export default {
  props: ["title"],
  methods: {
    handleIncrement(e) {
      const event = new CustomEvent("INCREMENT", {
        bubbles: true,
        composed: true
      });
      const elem = e.target;
      if (elem === null) {
        return;
      }
      elem.dispatchEvent(event);
    }
  }
};
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 12px;
  padding: 12px;
  border: 1px solid #2ee89f;
}
</style>
