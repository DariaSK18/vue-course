<template>
  <div>
    <main-layout>
      <h2>Choose Products</h2>
      <div class="button-box">
        <button class="button" @click="displayFilterOnClick">
          Filter Products
        </button>
        <button class="button" @click="displayEditOnClick">
          <router-link class="btn-txt" :to="{ name: 'edit' }"
            >Edit Products</router-link
          >
        </button>
      </div>
      <filter-component
        v-show="displayFilter"
        v-model="searchedNameFilter"
        v-model:min-price="minPrice"
        v-model:max-price="maxPrice"
      />
      <edit-list-component v-show="displayEdit" />
      <div class="content" v-if="!displayEdit">
        <card-template
          v-for="product in filterProducts"
          :key="product.id"
          :prop-data="product"
        >
          <template #info><p>Easy to Buy!</p></template>
        </card-template>
      </div>
      <template #right-footer>
        <div class="footer_block">
          <p>Status : <span>Open</span></p>
        </div>
      </template>
    </main-layout>
  </div>
</template>

<script>
import EditListComponent from "@/components/EditListComponent";
import FilterComponent from "@/components/FilterComponent.vue";
import CardTemplate from "@/components/CardTemplate.vue";
import { toys } from "@/constants/StoreData";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductsView",
  data() {
    return {
      displayFilter: false,
      displayEdit: false,
      searchedNameFilter: "",
      minPrice: null,
      maxPrice: null,
    };
  },
  components: {
    CardTemplate,
    FilterComponent,
    EditListComponent,
  },
  computed: {
    ...mapGetters(["getProductList"]),
    filterProducts() {
      if (!this.displayFilter) return this.getProductList;

      return this.getProductList.filter((product) => {
        const matchedName = this.searchedNameFilter
          ? product.title
              .toLowerCase()
              .includes(this.searchedNameFilter.toLowerCase())
          : true;
        const matchedMinPrice =
          this.minPrice != null ? product.price >= this.minPrice : true;
        const matchedMaxPrice =
          this.maxPrice != null ? product.price <= this.maxPrice : true;
        return matchedName && matchedMinPrice && matchedMaxPrice;
      });
    },
  },
  methods: {
    ...mapActions(["loadData"]),
    displayFilterOnClick() {
      return (this.displayFilter = !this.displayFilter);
    },
    displayEditOnClick() {
      return (this.displayEdit = !this.displayEdit);
    },
  },
  created() {
    this.loadData({ arrayName: "productsList", dataList: toys });
  },
};
</script>

<style lang="scss" scoped>
span {
  color: rgb(9, 198, 9);
  font-weight: 900;
}
.content {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.button-box {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px;
}
.button {
  padding: 10px;
  border: 3px solid rgb(9, 198, 9);
  border-radius: 10px;
  font-weight: 900;
  .btn-txt {
    text-decoration: none;
    font-weight: 900;
    color: black;
  }
}
</style>
