<template>
  <div>Assignment View</div>
  <table>
    <thead>
      <tr>
        <th>Driver</th>
        <th>Bus</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="assignedPair in getAssignedPairsList" :key="assignedPair.id">
        <td>{{ assignedPair.driver.name }}</td>
        <td class="box">
          {{ assignedPair.bus.regPlate }}
          <div
            aria-label="delete"
            class="icon"
            @click="
              deleteItem({
                arrayName: 'assignedPairsList',
                itemId: assignedPair.id,
              })
            "
          >
            ❌
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <section>
    <h5>New Assignment</h5>
    <div>
      <label for="driver">Driver : </label>
      <select v-model="assignedValues.driver" name="driver" id="driver">
        <option
          :value="getDriverById(driver.id)"
          v-for="driver in driversData"
          :key="driver.id"
        >
          {{ driver.name }}
        </option>
      </select>
    </div>
    <div>
      <label for="bus">Bus : </label>
      <select v-model="assignedValues.bus" name="bus" id="bus">
        <option
          :value="getBusById(bus.id)"
          v-for="bus in busesData"
          :key="bus.id"
        >
          {{ bus.regPlate }}
        </option>
      </select>
    </div>
  </section>
  <button @click="onAdd">Add</button>
  <!-- {{ assignedValues }}
  {{ assignedPairsList[0] }} -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { drivers, buses } from "@/constants/depotData";
export default {
  name: "AssignmentView",
  data() {
    return {
      // assignedPairsList: [],
      assignedValues: {
        driver: {},
        bus: {},
      },
    };
  },
  computed: {
    ...mapGetters("driversStore", {
      driversData: "getItemsData",
      getDriverById: "getItemById",
      getAssignedPairsList: "getAssignedPairsList",
    }),
    ...mapGetters("busesStore", {
      busesData: "getItemsData",
      getBusById: "getItemById",
    }),
    // ...mapGetters("generalStore", ["getAssignedPairsList"]),
  },
  methods: {
    ...mapActions("driversStore", {
      loadDriverData: "loadItemsData",
      addNewItem: "addNewItem",
      deleteItem: "deleteItem",
    }),
    ...mapActions("busesStore", { loadBusesData: "loadItemsData" }),
    onAdd() {
      this.addNewItem({
        arrayName: "assignedPairsList",
        itemData: { id: crypto.randomUUID(), ...this.assignedValues },
      });
      // this.getAssignedPairsList.push({
      //   id: crypto.randomUUID(),
      //   ...this.assignedValues,
      // });
      this.assignedValues = {
        driver: {},
        bus: {},
      };
    },
    // onDelete(pairId) {
    //   const pairIndex = this.getAssignedPairsList.findIndex(
    //     (pair) => pair.id === pairId
    //   );
    //   this.getAssignedPairsList.splice(pairIndex, 1);
    // },
  },
  created() {
    this.loadDriverData(drivers);
    this.loadBusesData(buses);
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
button {
  padding: 5px;
  width: 70px;
}
</style>
