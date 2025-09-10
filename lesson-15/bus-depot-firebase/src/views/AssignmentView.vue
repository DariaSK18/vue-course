<template>
  <!-- <pre>{{ assignedList }}</pre> -->
  <div>
    <h3>Assignment</h3>
    <p v-if="!assignedList.length">No assignments!</p>
    <table v-else>
      <thead>
        <tr>
          <th>Driver</th>
          <th>Bus</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="assignedPair in assignedList" :key="assignedPair.id">
          <td>{{ assignedPair.driver ? assignedPair.driver.name : "-" }}</td>
          <td class="box">
            {{ assignedPair.bus ? assignedPair.bus.regPlate : "-" }}
            <div
              aria-label="delete"
              class="icon"
              @click="deleteItem(assignedPair.id)"
            >
              ❌
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="container">
    <h3>New Assignment</h3>
    <label>
      Driver :
      <select name="driver" v-model="assignedValue.driver">
        <option :value="driver" v-for="driver in driversList" :key="driver.id">
          {{ driver.name }}
        </option>
      </select>
    </label>
    <label>
      Bus :
      <select name="bus" v-model="assignedValue.bus">
        <option :value="bus" v-for="bus in busesList" :key="bus.id">
          {{ bus.regPlate }}
        </option>
      </select>
    </label>
    <div><button @click="onAdd">Add</button></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AssignmentView",
  data() {
    return {
      assignedValue: {
        driver: {},
        bus: {},
      },
    };
  },
  computed: {
    ...mapGetters("drivers", { driversList: "getItemsList" }),
    ...mapGetters("buses", { busesList: "getItemsList" }),
    ...mapGetters("assignedValues", { assignedList: "getItemsList" }),
  },
  methods: {
    ...mapActions("drivers", { driversLoadList: "loadList" }),
    ...mapActions("buses", { busesLoadList: "loadList" }),
    ...mapActions("assignedValues", {
      assignmentLoadList: "loadList",
      addItem: "addItem",
      deleteItem: "deleteItem",
    }),
    onAdd() {
      this.addItem(this.assignedValue);
    },
  },
  created() {
    this.driversLoadList();
    this.busesLoadList();
    this.assignmentLoadList();
  },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
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
  border: 1px solid white;
  border-collapse: collapse;
  padding: 10px;
  color: white;
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
button {
  padding: 5px;
  width: 70px;
}
</style>