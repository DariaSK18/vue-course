import { createStore } from "vuex";
import productsStore from "./modules/productsStore";
import sellersStore from "./modules/sellersStore";
import filters from "./modules/filters";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    productsStore,
    sellersStore,
    filters,
  },
});
