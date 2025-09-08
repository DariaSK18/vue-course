<template>
  <div>
    <!-- <pre>{{ getItemsList }}</pre> -->
    <drivers-layout>
      <list-display>
        <template v-slot:list-title> Drivers List </template>
        <template v-slot:th-cl-first> Name </template>
        <template v-slot:th-cl-second> Experience </template>
        <template v-slot:tbody>
          <tr v-for="driver in getItemsList" :key="driver.id">
            <td>{{ driver.name }}</td>
            <td class="box">
              {{ driver.experience }}
              <router-link
                :to="{
                  name: 'edit',
                  params: {
                    id: driver.id,
                  },
                }"
                aria-label="edit"
                class="icon"
                >✎</router-link
              >
              <div aria-label="delete" class="icon" @click="deleteItem(driver.id)">
                ❌
              </div>
            </td>
          </tr>
        </template>
        <template v-slot:add-btn>Add Driver</template>
      </list-display>
    </drivers-layout>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ListDisplay from "@/components/ListDisplay.vue";
export default {
  name: "DriversView",
  components: {
    ListDisplay,
  },
  computed: {
    ...mapGetters("drivers", ["getItemsList"]),
  },
  methods: {
    ...mapActions("drivers", ["loadList", "deleteItem"]),
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
.icon {
  cursor: pointer;
}
</style>
