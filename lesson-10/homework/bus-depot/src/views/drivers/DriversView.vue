<template>
  <div>
    <!-- <h1>Drivers View</h1> -->
    <h3>Our drivers :</h3>
    <div class="filter">
      <label for="#">Full Name</label>
      <input type="text" placeholder="Full Name" v-model="driverFilter.name" />
      <label for="#">Experience :</label>
      <input
        type="number"
        placeholder="min"
        v-model="driverFilter.minExperience"
      />
      <input
        type="number"
        placeholder="max"
        v-model="driverFilter.maxExperience"
      />
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
              @click="deleteItem({ arrayName: 'itemsList', itemId: driver.id })"
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
  data() {
    return {
      driverFilter: {
        name: "",
        minExperience: null,
        maxExperience: null,
      },
    };
  },
  computed: {
    ...mapGetters("driversStore", ["getItemsData"]),
  },
  methods: {
    ...mapActions("driversStore", [
      "loadItemsData",
      "deleteItem",
      "filterItems",
    ]),
  },
  watch: {
    driverFilter: {
      handler(newVal) {
        this.filterItems(newVal);
      },
      deep: true,
    },
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
