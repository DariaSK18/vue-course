<template>
  <div class="card">
    <h3>{{ laptopData.title }}</h3>
    <h5>{{ laptopData.brand }}</h5>
    <div class="box">
      <p :class="setPriceColor">{{ laptopData.price }} $</p>
      <p>{{ laptopData.amount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaptopCard",
  props: {
    laptopData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    setPriceColor() {
      return this.laptopData.available ? "price" : "grey";
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 2px solid black;
  border-radius: 20px;
  min-width: 230px;
  height: 160px;
  padding: 20px;
}
.box {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}
h3 {
  color: blue;
}
.price {
  color: green;
  font-weight: 900;
}
.grey {
  color: grey;
}
</style>
