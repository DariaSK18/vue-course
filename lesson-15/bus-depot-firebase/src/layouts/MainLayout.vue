<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="hasError">Sorry. Something went wrong.</div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainLayout",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

</style>
