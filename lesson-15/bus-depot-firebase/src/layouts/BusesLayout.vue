<template>
  <div>
    <main-layout :isLoading="isLoading" :hasError="hasError">
      <slot></slot>
    </main-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BusesLayout",
  computed: {
    ...mapGetters("buses", ["isLoading", "hasError"]),
  },
};
</script>
