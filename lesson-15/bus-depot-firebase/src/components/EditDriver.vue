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
  <div class="box_button">
    <button @click="onSave()">Save</button>
    <button @click="onCancel()">Cancel</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditDriver",
  data() {
    return {
      driverData: {
        name: "",
        experience: 0,
      },
    };
  },
  computed: {
    ...mapGetters("drivers", ["getItemById"]),
    driverId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions("drivers", ["addItem", "updateItem"]),
    onCancel() {
      this.$router.back();
    },
    onSave() {
      if (!this.driverId) {
        this.addItem(this.driverData);
      } else this.updateItem({ itemId: this.driverId, data: this.driverData });
      this.$router.push({ name: "drivers" });
    },
  },
  created() {
    if (this.driverId) this.driverData = { ...this.getItemById(this.driverId) };
  },
};
</script>

<style lang="scss" scoped></style>
