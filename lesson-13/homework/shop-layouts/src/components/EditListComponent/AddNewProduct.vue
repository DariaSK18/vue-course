<template>
  <div>
    <h3>Add New Product</h3>
    <div class="form">
      <div class="box">
        <label for="product-id">ID : </label>
        <input
          placeholder="Product ID"
          type="number"
          name="product-id"
          id="product-id"
          v-model.number.lazy="newProductData.id"
        />
      </div>
      <div class="box">
        <label for="product-title">Title : </label>
        <input
          placeholder="Product Title"
          type="text"
          name="product-title"
          id="product-title"
          v-model.lazy="newProductData.title"
        />
      </div>
      <div class="box">
        <label for="product-price">Price : </label>
        <input
          placeholder="Product Price"
          type="number"
          name="product-price"
          id="product-price"
          v-model.number.lazy="newProductData.price"
        />
      </div>
      <button @click="addNewProduct">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddNewProduct",
  data() {
    return {
      newProductData: {
        id: null,
        title: null,
        price: null,
      },
    };
  },
  methods: {
    ...mapActions(["addProduct"]),
    addNewProduct() {
      this.addProduct(this.newProductData);
      this.newProductData = {
        id: null,
        title: null,
        price: null,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  text-align: left;
  margin: 0 auto;
  input {
    padding: 5px;
    width: 380px;
  }
}
label {
  display: block;
  font-weight: 800;
}
button {
  width: 100px;
  margin: 0 auto;
  padding: 10px;
  font-weight: 600;
}
</style>
