<template>
  <div class="container">
    <input
      type="checkbox"
      :value="brandData.value"
      :name="brandData.title"
      :id="brandData.title"
      v-model="selectedValue"
    />
    <label :for="brandData.title">{{ brandData.title }}</label>
  </div>
</template>

<script>
export default {
  name: "BrandFilterItem",
  props: {
    brandData: {
      type: Object,
      default: () => ({}),
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(newVal) {
        this.$emit("update:modelValue", newVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 10px;
  justify-content: start;
}
</style>
