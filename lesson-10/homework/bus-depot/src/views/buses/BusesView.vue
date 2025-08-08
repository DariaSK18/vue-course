<template>
  <!-- <h1>Buses View</h1> -->
  <h3>Our drivers :</h3>
  <table>
    <thead>
      <tr>
        <th>Reg Plate</th>
        <th>Seats</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="bus in getItemsData" :key="bus.id">
        <td>{{ bus.regPlate }}</td>
        <td class="box">
          {{ bus.seatCount }}
          <router-link
            :to="{
              name: 'editBus',
              params: {
                id: bus.id,
              },
            }"
            aria-label="edit"
            class="icon"
            >✎</router-link
          >
          <div
            aria-label="delete"
            class="icon"
            @click="deleteItem({ arrayName: 'itemsList', itemId: bus.id })"
          >
            ❌
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <router-link
    :to="{
      name: 'editBus',
    }"
    class="button-add"
    >Add New Bus</router-link
  >
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { buses } from "@/constants/depotData";
export default {
  name: "BusesView",
  computed: {
    ...mapGetters("busesStore", ["getItemsData"]),
  },
  methods: {
    ...mapActions("busesStore", ["loadItemsData", "deleteItem"]),
  },
  created() {
    this.loadItemsData(buses);
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
tr {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
}
table {
  width: 300px;
}
.icon {
  cursor: pointer;
}
.button-add {
  padding: 10px;
  border: 1px solid black;
  color: black;
  text-decoration: none;
}
table {
  margin: 30px 10px;
}
</style>
