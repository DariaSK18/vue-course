<template>
  <button v-show="userPermissions.write && userPermissions.update" @click="onAdd">
    Add Product
  </button>
  <div class="items">
    <product-item v-for="product in getItemsList" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ProductsList',
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters('products', ['getItemsList']),
    ...mapGetters('users', ['userPermissions']),
  },
  methods: {
    ...mapActions('products', ['loadList']),
    ...mapActions('users', ['loadUserPermissions']),
    onAdd() {
      this.$router.push({
        name: 'edit',
      })
    },
  },
  created() {
    this.loadList()
    this.loadUserPermissions()
  },
}
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
