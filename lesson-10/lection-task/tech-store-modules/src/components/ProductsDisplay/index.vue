<template>
  <div class="container">
    <laptop-card
      v-for="laptop in getFilteredList"
      :key="laptop.id"
      :laptop-data="laptop"
    ></laptop-card>
    <p v-show="!getFilteredList.length">No matches!</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LaptopCard from "./LaptopCard.vue";
export default {
  name: "ProductsDisplay",
  components: {
    LaptopCard,
  },
  computed: {
    ...mapGetters("productsStore", ["getLaptopsList"]),
    ...mapGetters("filters", ["getFilteredList"]),
    // getFilteredList
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>
