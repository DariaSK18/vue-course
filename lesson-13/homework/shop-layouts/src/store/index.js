import { createStore } from "vuex";

export default createStore({
  state: {
    productsList: [],
    providersList: [],
  },
  getters: {
    getProductList: ({ productsList }) => productsList,
    getProvidersList: ({ providersList }) => providersList,
  },
  mutations: {
    setData(state, { arrayName, dataList }) {
      state[arrayName] = dataList;
    },
    deleteItem(state, itemId) {
      const itemIndex = state.productsList.findIndex(
        (item) => item.id == itemId
      );
      state.productsList.splice(itemIndex, 1);
    },
    addProduct(state, newProductData) {
      state.productsList.push(newProductData);
    },
  },
  actions: {
    loadData({ commit }, { arrayName, dataList }) {
      commit("setData", { arrayName, dataList });
    },
    deleteItem({ commit }, itemId) {
      commit("deleteItem", itemId);
    },
    addProduct({ commit }, newProductData) {
      commit("addProduct", newProductData);
    },
  },
});
