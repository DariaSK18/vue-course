<template>
  <div class="container">
    <h3>Laptops Page</h3>
    <!-- {{ this.getSellersData }} -->
    <!-- {{ this.getLaptopsList }} -->
    <!-- filter component -->
    <filter-components class="filter" />
    <!-- products display -->
    <products-display class="products" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductsDisplay from "../components/ProductsDisplay";
import FilterComponents from "../components/FilterComponents";

export default {
  name: "LaptopsPage",
  components: {
    ProductsDisplay,
    FilterComponents,
  },
  computed: {
    ...mapGetters("productsStore", ["getLaptopsList"]),
    ...mapGetters("sellersStore", ["getSellersData"]),
  },
  methods: {
    ...mapActions("productsStore", ["loadLaptopsData"]),
    ...mapActions("sellersStore", ["loadSellersData"]),
  },
  created() {
    this.loadLaptopsData(), this.loadSellersData();
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
h3 {
  grid-column: span 8;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
}
.filter {
  grid-column: 1 / 3;
}
.products {
  display: flex;
  width: 100%;
  grid-column: 3 / 9;
}
</style>
