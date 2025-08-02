import { sellers } from "../../constants/StoreData";

export default {
  namespaced: true,
  state: () => ({
    sellersList: [],
  }),
  getters: {
    getSellersData: (state) => state.sellersList,
  },
  mutations: {
    setSellersData(state, sellers) {
      state.sellersList = sellers;
    },
  },
  actions: {
    loadSellersData({ commit }) {
      commit("setSellersData", sellers);
    },
  },
};
