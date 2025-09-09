<template>
  <div>
    <h3>Edit Info :</h3>
    <div class="box">
      <label for="name">Reg Plate </label>
      <input
        id="name"
        type="text"
        autocomplete="off"
        v-model="busData.regPlate"
      />
    </div>
    <div class="box">
      <label for="experience">Amount of seats </label>
      <input
        id="experience"
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
export default {
  name: "EditBus",
  data() {
    return {
      busData: {
        name: "",
        experience: 0,
      },
    };
  },
  computed: {
    ...mapGetters('buses', ["getItemById"]),
    busId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions("buses", ["addItem", "updateItem"]),
    onCancel() {
      this.$router.back();
    },
    onSave() {
      if (!this.busId) {
        this.addItem(this.busData); 
      }
      else this.updateItem({'itemId': this.busId, 'data':this.busData})
      this.$router.push({ name: "buses" });
    },
  },
  created () {
    if(this.busId) this.busData = {...this.getItemById(this.busId)}
  },
};
</script>

<style lang="scss" scoped></style>
