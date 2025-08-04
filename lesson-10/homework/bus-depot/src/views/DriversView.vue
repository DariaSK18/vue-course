<template>
  <div>
    <h1>Drivers View</h1>
    <h3>Our drivers :</h3>
    <div class="filter">
      <label for="#">Full Name</label>
      <input type="text" placeholder="Full Name" />
      <label for="#">Experience :</label>
      <input type="number" placeholder="min" />
      <input type="number" placeholder="max" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DriversView",
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  gap: 10px;
}
</style>
