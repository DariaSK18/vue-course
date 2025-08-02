<template>
  <div>
    <h3>Products :</h3>
    <ul>
      <li><router-link :to="{ name: 'laptops' }">Laptops</router-link></li>
      <li>Phones</li>
      <li>Radiators</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductsPage",
};
</script>

<style lang="scss" scoped></style>
