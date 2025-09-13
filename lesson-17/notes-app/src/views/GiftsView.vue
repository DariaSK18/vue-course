<template>
    <div>
<h2>Gifts List</h2>
<list-item/>
<add-item><template #default>New Gift </template></add-item>
    </div>
</template>

<script setup>
import ListItem from "../components/ListItem.vue";
import AddItem from "../components/AddItem.vue";
</script>

<style lang="scss" scoped>

</style>