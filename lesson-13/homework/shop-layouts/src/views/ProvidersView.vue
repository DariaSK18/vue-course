<template>
  <div>
    <main-layout>
      <h2>Choose Providers</h2>
      <div class="content">
        <card-template
          v-for="provider in getProvidersList"
          :key="provider.id"
          :prop-data="provider"
        ></card-template>
      </div>
      <template #left-footer>
        <div class="footer_block">
          <p>The most popular : <span>Econom</span></p>
        </div>
      </template>
      <template #right-footer>
        <div class="footer_block">
          <p>Status : <span>Open</span></p>
        </div>
      </template>
    </main-layout>
  </div>
</template>

<script>
import CardTemplate from "@/components/CardTemplate.vue";
import { providers } from "@/constants/StoreData";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProvidersView",
  components: {
    CardTemplate,
  },
  computed: {
    ...mapGetters(["getProvidersList"]),
  },
  methods: {
    ...mapActions(["loadData"]),
  },
  created() {
    this.loadData({ arrayName: "providersList", dataList: providers });
  },
};
</script>

<style lang="scss" scoped>
span {
  color: rgb(9, 198, 9);
  font-weight: 900;
}
.content {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
