<template>
  <div>
    <products-list />
  </div>
</template>

<script>
import ProductsList from '@/components/products/ProductsList.vue'
export default {
  name: 'ProductsView',
  components: {
    ProductsList,
  },
}
</script>

<style lang="scss" scoped></style>
