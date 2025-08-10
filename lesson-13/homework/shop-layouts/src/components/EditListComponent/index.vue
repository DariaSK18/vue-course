<template>
  <div class="product-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in getProductList"
          :key="product.id"
          :product-data="product"
        >
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }} $</td>
          <td class="button-box">
            <button>
              <router-link
                class="router-link"
                :to="{
                  name: 'edit',
                }"
                >Edit</router-link
              >
            </button>
            <button class="delete" @click="deleteItem(product.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <add-new-product />
  </div>
</template>

<script>
import { toys } from "@/constants/StoreData";
import { mapGetters, mapActions } from "vuex";
import AddNewProduct from "./AddNewProduct.vue";

export default {
  name: "EditListComponent",
  components: {
    AddNewProduct,
  },
  computed: {
    ...mapGetters(["getProductList"]),
  },
  methods: {
    ...mapActions(["loadData", "deleteItem"]),
  },
  created() {
    this.loadData({ arrayName: "productList", dataList: toys });
  },
};
</script>

<style lang="scss" scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
}
table {
  width: 100%;
}
button {
  width: 80px;
  padding: 5px;
  border: 1px solid #42b983;
  font-weight: 600;
  border-radius: 10px;
  .router-link {
    text-decoration: none;
    color: #42b983;
  }
}
.delete {
  color: red;
  border: 1px solid red;
  margin-left: 10px;
}
</style>
