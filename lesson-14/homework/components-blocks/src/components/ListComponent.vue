<template>
  <div class="container">
    <h3 class="title">
      <slot name="header" :employeesList="employeesList"> {{ title }}</slot>
    </h3>

    <div class="content">
      <slot :currentPageEmployeesList="currentPageEmployeesList">
        <ol :start="startIndexPage">
          <li v-for="employee in currentPageEmployeesList" :key="employee.id">
            {{ employee.name }}
          </li>
        </ol>
      </slot>
    </div>
    <div class="buttons-block">
      <button v-for="btn in pagesNumber" :key="btn" @click="onClick(btn)">
        {{ btn }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    employeesList: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
    employeesPerPage: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    pagesNumber() {
      return Math.ceil(this.employeesList.length / this.employeesPerPage);
    },
    startIndexPage() {
      return (this.currentPage - 1) * this.employeesPerPage + 1;
    },
    currentPageEmployeesList() {
      const endIndex = this.employeesPerPage + this.startIndexPage;
      return this.employeesList.slice(this.startIndexPage - 1, endIndex - 1);
    },
  },
  methods: {
    onClick(pagesNumber) {
      this.currentPage = pagesNumber;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 2px solid black;
  padding: 10px;
  width: 200px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
}
.content {
  text-align: left;
  flex-grow: 1;
}
.buttons-block {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-shrink: 1;
}
</style>
