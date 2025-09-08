<template>
  <div>
    <buses-layout>
      <list-display>
        <template v-slot:list-title> Buses List </template>
        <template v-slot:th-cl-first> Reg Plate </template>
        <template v-slot:th-cl-second> Seats </template>
        <template v-slot:tbody>
          <tr v-for="bus in getItemsList" :key="bus.id">
            <td>{{ bus.regPlate }}</td>
            <td class="box">
              {{ bus.seatCount }}
              <router-link
                :to="{
                  name: 'home',
                  // name: 'edit',
                  // params: {
                  //   id: driver.id,
                  // },
                }"
                aria-label="edit"
                class="icon"
                >✎</router-link
              >
              <div aria-label="delete" class="icon" @click="deleteItem(bus.id)">
                ❌
              </div>
            </td>
          </tr>
        </template>
        <template v-slot:add-btn>Add Bus</template>
      </list-display>
    </buses-layout>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ListDisplay from "@/components/ListDisplay.vue";
export default {
  name: "BusesView",
  components: {
    ListDisplay,
  },
  computed: {
    ...mapGetters("buses", ["getItemsList"]),
  },
  methods: {
    ...mapActions("buses", ["loadList", "deleteItem"]),
  },
  created() {
    this.loadList();
  },
};
</script>

<style scoped>
.icon {
  cursor: pointer;
}
.button-add {
  padding: 10px;
  text-decoration: none;
}
.box {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
}
tr {
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  border: 1px solid white;
  border-collapse: collapse;
  padding: 10px;
}
</style>
