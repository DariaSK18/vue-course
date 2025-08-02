<template>
  <h3>Brand Filter</h3>
  <!-- {{ getUniqueBrands }} -->
  <brand-filter-item
    v-for="brand in getUniqueBrands"
    :key="brand.value"
    :brand-data="brand"
    v-model="selectedValue"
  />

  <!-- <hr />
  {{ selectedValue }} -->
</template>

<script>
import { mapGetters } from "vuex";
import BrandFilterItem from "./BrandFilterItem.vue";
export default {
  name: "BrandFilter",
  components: {
    BrandFilterItem,
  },
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters("filters", ["getUniqueBrands"]),
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

<style lang="scss" scoped></style>
