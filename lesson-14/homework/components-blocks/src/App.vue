<template>
  <div class="container">
    <list-component :employees-list="employees" title="Employees List" />
    <list-component :employees-list="employees" title="Employees Experience">
      <template #default="{ currentPageEmployeesList }">
        <div v-for="employee in currentPageEmployeesList" :key="employee.id">
          {{ employee.name }} - {{ employee.experience }}
        </div>
      </template>
    </list-component>
    <list-component :employees-list="employees">
      <template #header="{ employeesList }">
        {{ employeesList.length }} employees together!
      </template>
    </list-component>
  </div>
</template>

<script>
import ListComponent from "./components/ListComponent.vue";
export default {
  components: {
    ListComponent,
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Anna Johnson",
          experience: 5,
          position: "Frontend Developer",
        },
        {
          id: 2,
          name: "Igor Smith",
          experience: 3,
          position: "Backend Developer",
        },
        {
          id: 3,
          name: "Olga Brown",
          experience: 8,
          position: "Project Manager",
        },
        {
          id: 4,
          name: "Dmitry Wilson",
          experience: 2,
          position: "QA Engineer",
        },
        {
          id: 5,
          name: "Kate Miller",
          experience: 6,
          position: "UX/UI Designer",
        },
        {
          id: 6,
          name: "Sergey Taylor",
          experience: 4,
          position: "DevOps Engineer",
        },
        {
          id: 7,
          name: "Maria Davis",
          experience: 1,
          position: "Junior Developer",
        },
        { id: 8, name: "Alex Green", experience: 10, position: "CTO" },
        {
          id: 9,
          name: "Natalie White",
          experience: 7,
          position: "Data Analyst",
        },
        {
          id: 10,
          name: "Vlad Roberts",
          experience: 5,
          position: "System Administrator",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
