<template>
  <div>
    <seller-filter
      :seller-list="getSellersData"
      v-model="selectedValue.seller"
    />
    <brand-filter v-model="selectedValue.brands" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BrandFilter from "./BrandFilter";
import SellerFilter from "./SellerFilter";
export default {
  name: "FilterComponents",
  components: {
    BrandFilter,
    SellerFilter,
  },
  computed: {
    ...mapGetters("filters", ["getFilterData"]),
    ...mapGetters("sellersStore", ["getSellersData"]),
    selectedValue: {
      get() {
        return this.getFilterData;
      },
      set(newVal) {
        this.setFilter(newVal);
      },
    },
  },
  methods: {
    ...mapActions("filters", ["setFilter"]),
  },
};
</script>

<style lang="scss" scoped></style>
