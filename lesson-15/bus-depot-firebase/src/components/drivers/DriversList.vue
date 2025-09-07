<template>
    <div>
        <h3>Drivers list</h3>
        <drivers-layout>
            <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="driver in getItemsList" :key="driver.id">
          <td>{{ driver.name }}</td>
          <td class="box">
            {{ driver.experience }}
            <router-link
              :to="{
                name: 'home'
                // name: 'edit',
                // params: {
                //   id: driver.id,
                // },
              }"
              aria-label="edit"
              class="icon"
              >✎</router-link
            >
            <div
              aria-label="delete"
              class="icon"
              @click="deleteItem()"
            >
              ❌
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button>Add Driver</button>
        </drivers-layout>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'DriversList',
        computed: {
            ...mapGetters('drivers', ['getItemsList'])
        },
        methods: {
            ...mapActions('drivers', ['loadList'])
        },
        created () {
            this.loadList();
        },
    }
</script>

<style scoped>
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