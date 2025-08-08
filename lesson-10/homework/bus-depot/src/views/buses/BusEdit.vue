<template>
  <div>
    <h3>Edit Info :</h3>
    <div class="box">
      <label for="reg">Reg Plate </label>
      <input
        id="reg"
        type="text"
        autocomplete="off"
        v-model="busData.regPlate"
      />
    </div>
    <div class="box">
      <label for="seats">Seats </label>
      <input
        id="seats"
        type="number"
        min="0"
        autocomplete="off"
        v-model="busData.seatCount"
      />
    </div>
  </div>
  <div class="box_button">
    <button @click="onSave()">Save</button>
    <button @click="onCancel()">Cancel</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { buses } from "../../constants/depotData";
export default {
  name: "BusEdit",
  data() {
    return {
      busData: {
        regPlate: null,
        seatCount: null,
      },
    };
  },
  computed: {
    ...mapGetters("busesStore", ["getItemById", "getItemsData"]),
    busId() {
      //   console.log("this.$route.params.id");
      //   console.log(this.$route.params.id);

      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions("busesStore", ["loadItemsData", "addNewItem", "updateItem"]),
    onSave() {
      if (!this.busId) {
        this.addNewItem({ arrayName: "itemsList", itemData: this.busData });
      } else {
        this.updateItem({ arrayName: "itemsList", itemData: this.busData });
      }
      this.$router.push({ name: "buses" });
    },
    onCancel() {
      this.$router.push({ name: "buses" });
    },
  },
  created() {
    if (!this.getItemsData.length) this.loadItemsData(buses);
    if (this.busId) this.busData = { ...this.getItemById(this.busId) };
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  gap: 10px;
  width: 300px;
  justify-content: space-between;
  margin-bottom: 10px;
}
.box_button {
  display: flex;
  gap: 10px;
  width: 300px;
  justify-content: space-around;
  padding-top: 20px;
}
button {
  width: 90px;
  padding: 8px;
  font-weight: 700;
}
</style>
