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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="driver in getItemsData" :key="driver.id">
          <td>{{ driver.name }}</td>
          <td class="box">
            {{ driver.experience }}
            <router-link
              :to="{
                name: 'editDriver',
                params: {
                  id: driver.id,
                },
              }"
              aria-label="edit"
              class="icon"
              >✎</router-link
            >
            <div
              aria-label="delete"
              class="icon"
              @click="deleteItem(driver.id)"
            >
              ❌
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link
      :to="{
        name: 'editDriver',
      }"
      class="button-add"
      >Add New Driver</router-link
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { drivers } from "../../constants/depotData";
export default {
  name: "DriversView",
  computed: {
    ...mapGetters("driversStore", ["getItemsData"]),
  },
  methods: {
    ...mapActions("driversStore", ["loadItemsData", "deleteItem"]),
  },
  created() {
    this.loadItemsData(drivers);
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  gap: 10px;
}
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
