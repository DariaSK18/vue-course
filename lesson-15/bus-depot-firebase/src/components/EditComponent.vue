<template>
    <div>
    <h3>Edit Info :</h3>
    <div class="box">
      <label for="name">Driver's name </label>
      <input
        id="name"
        type="text"
        autocomplete="off"
        v-model="driverData.name"
      />
    </div>
    <div class="box">
      <label for="experience">Driver's experience </label>
      <input
        id="experience"
        type="number"
        min="0"
        autocomplete="off"
        v-model="driverData.experience"
      />
    </div>
  </div>
  <div class="box_button">
    <button @click="onSave()">Save</button>
    <button @click="onCancel()">Cancel</button>
  </div>
</template>

<script>
    export default {
        name:'EditComponent',
        data() {
            return {
                driverData: {
                    name: '',
                    experience: 0,
                }
            }
        },
        methods: {
            onCancel() {
                this.$router.back()
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>