<template>
  <div>
    <h3>Edit Info :</h3>
    <div class="box">
      <label for="name">Driver's name </label>
      <input
        id="name"
        type="text"
        autocomplete="off"
        v-model="driverData.name"
      />
    </div>
    <div class="box">
      <label for="experience">Driver's experience </label>
      <input
        id="experience"
        type="number"
        min="0"
        autocomplete="off"
        v-model="driverData.experience"
      />
    </div>
  </div>
  <!-- {{ this.getItemById(this.driverId) }} -->
  <div class="box_button">
    <button @click="onSave()">Save</button>
    <button @click="onCancel()">Cancel</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { drivers } from "../../constants/depotData";
export default {
  name: "DriverEdit",
  data() {
    return {
      driverData: {
        name: null,
        experience: null,
      },
    };
  },
  computed: {
    ...mapGetters("driversStore", ["getItemById", "getItemsData"]),
    driverId() {
      //   console.log("this.$route.params.id");
      //   console.log(this.$route.params.id);

      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions("driversStore", [
      "loadItemsData",
      "addNewItem",
      "updateItem",
    ]),
    onSave() {
      if (!this.driverId) {
        this.addNewItem({ arrayName: "itemsList", itemData: this.driverData });
      } else {
        this.updateItem({ arrayName: "itemsList", itemData: this.driverData });
      }
      this.$router.push({ name: "drivers" });
    },
    onCancel() {
      this.$router.push({ name: "drivers" });
    },
  },
  created() {
    if (!this.getItemsData.length) this.loadItemsData(drivers);
    if (this.driverId) this.driverData = { ...this.getItemById(this.driverId) };
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
