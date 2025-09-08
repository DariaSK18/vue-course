<template>
  <div>
    <div>
      <h3><slot name="list-title"></slot></h3>
      <!-- <drivers-layout> -->
      <table>
        <thead>
          <tr>
            <th><slot name="th-cl-first"></slot></th>
            <th><slot name="th-cl-second"></slot></th>
          </tr>
        </thead>
        <tbody>
          <slot name="tbody"></slot>
        </tbody>
      </table>
      <button>
        <slot name="add-btn"></slot>
      </button>
      <!-- </drivers-layout> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ListDisplay",
};
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
  border: 1px solid white;
  border-collapse: collapse;
  padding: 10px;
}
table {
  width: 300px;
  margin: 30px 10px;
}
</style>
