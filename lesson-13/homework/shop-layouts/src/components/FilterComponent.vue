<template>
  <div class="filter-container">
    <lable>Filter by price : </lable>
    <input type="number" min="0" placeholder="min" v-model="minPriceFilter" />
    -
    <input type="number" min="0" placeholder="max" v-model="maxPriceFilter" />
    <hr />
    <lable>Find by name : </lable>
    <input
      type="text"
      autocomplete="off"
      placeholder="Product name"
      v-model="searchedNameFilter"
    />
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    minPrice: {
      type: Number,
      required: true,
    },
    maxPrice: {
      type: Number,
      required: true,
    },
  },
  computed: {
    searchedNameFilter: {
      get() {
        return this.modelValue;
      },
      set(newVal) {
        this.$emit("update:modelValue", newVal);
      },
    },
    minPriceFilter: {
      get() {
        return this.minPrice;
      },
      set(newVal) {
        this.$emit("update:minPrice", newVal);
      },
    },
    maxPriceFilter: {
      get() {
        return this.maxPrice;
      },
      set(newVal) {
        this.$emit("update:maxPrice", newVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-container {
  text-align: left;
  padding: 30px;
}
</style>
