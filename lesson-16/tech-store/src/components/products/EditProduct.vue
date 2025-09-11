<template>
  <div>
    <h3>Edit Info :</h3>
    <div class="box">
      <label
        >Title
        <input type="text" autocomplete="off" v-model="product.title" />
      </label>
    </div>
    <div class="box">
      <label
        >Price
        <input type="number" min="0" autocomplete="off" v-model="product.price" />
      </label>
    </div>
    <div class="box">
      <label
        >Amount
        <input type="number" min="0" autocomplete="off" v-model="product.amount" />
      </label>
    </div>
    <div class="box">
      <label
        >Available
        <input type="checkbox" v-model="product.available" />
      </label>
    </div>
  </div>
  <div class="box_button">
    <button @click="onSave()">Save</button>
    <button @click="onCancel()">Cancel</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'EditProduct',
  data() {
    return {
      product: {
        title: '',
        price: null,
        amount: null,
        available: false,
      },
    }
  },
  computed: {
    ...mapGetters('products', ['getItemById']),
    productId() {
      return this.$route.params.id
    },
  },
  methods: {
    ...mapActions('products', ['updateItem', 'addItem']),
    onCancel() {
      this.$router.back()
    },
    onSave() {
      if (this.productId) {
        this.updateItem({ itemId: this.productId, data: this.product })
      } else {
        this.addItem(this.product)
      }
      this.$router.push({ name: 'products' })
    },
  },
  created() {
    console.log(this.productId)

    if (this.productId) {
      this.product = { ...this.getItemById(this.productId) }
    }
  },
}
</script>

<style lang="scss" scoped></style>
