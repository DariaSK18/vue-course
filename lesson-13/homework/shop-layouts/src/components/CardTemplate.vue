<template>
  <div>
    <div class="card-box">
      <div class="pic">
        <img :src="propData.img" alt="Image" />
      </div>
      <div class="lable">
        {{ propData.title }}
      </div>
      <div class="price">
        <b>{{ propData.price }} $</b>
        <slot name="info">
          <p v-show="propData.shipmentWay">
            {{ propData.shipmentWay }} / {{ propData.mainCharacteristic }}
          </p>
        </slot>
      </div>
      <button class="button">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTemplate",
  props: {
    propData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.card-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 220px;
  padding: 10px;
  border-radius: 10px;
  border: 3px solid #42b983;
}
.pic {
  width: 150px;
  height: 150px;
  img {
    width: 100%;
  }
}
.button {
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #42b983;
  font-weight: 700;
}
</style>
