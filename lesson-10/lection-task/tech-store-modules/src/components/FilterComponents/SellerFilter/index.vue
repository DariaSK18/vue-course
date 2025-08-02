<template>
  <h3>Seller Filter</h3>
  <div
    v-for="seller in sellerListWithDefault"
    :key="seller.id"
    class="container"
  >
    <!-- {{ seller }} -->
    <input
      type="radio"
      :name="seller"
      :id="seller.id"
      :value="seller.id"
      v-model="selectedValue"
    />
    <label :for="seller.id">{{ seller.name }}</label>
  </div>
  <!-- <hr />
  {{ selectedValue }} -->
  <!-- {{ getLaptopsInheritedSellersList }} -->
  <!-- {{ getUniqueSellers }} -->
  <!-- {{ getUniqueBrands[0].title }} -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SellerFilter",
  props: {
    sellerList: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: [Number],
      default: null,
    },
  },
  computed: {
    ...mapGetters("sellersStore", ["getSellersData"]),
    ...mapGetters("filters", ["getFilterData"]),
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(newVal) {
        this.$emit("update:modelValue", newVal);
      },
    },
    sellerListWithDefault() {
      return [{ id: 0, name: "Any seller" }, ...this.sellerList];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 5px;
  justify-content: start;
}
</style>
