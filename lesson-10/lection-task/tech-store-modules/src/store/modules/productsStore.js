import { laptops } from "../../constants/StoreData";

export default {
  namespaced: true,
  state: () => ({
    laptopsList: [],
    // laptopsInheritedSellersList: [],
  }),
  getters: {
    getLaptopsList: (state) => state.laptopsList,
    getLaptopsInheritedSellersList: (
      state,
      getters,
      rootState,
      rootGetters
    ) => {
      const sellersList = rootGetters["sellersStore/getSellersData"];

      const sellersObj = {};
      sellersList.map((el) => {
        // console.log("---el", el);
        sellersObj[el.id] = el;
      });
      // console.log("---sellersObj", sellersObj);

      const laptopsInheritedSellersList = getters.getLaptopsList.map(
        (laptop) => ({
          ...laptop,
          seller: sellersObj[laptop.sellerId],
          // console.log("----laptop.sellerId", laptop.sellerId);
          // console.log("----laptop.sellersObj", sellersObj);
          // laptop, sellersObj;
        })
      );
      // console.log("----sellersList", sellersList);
      return laptopsInheritedSellersList;
    },
  },
  mutations: {
    setLaptopsData(state, laptops) {
      state.laptopsList = laptops;
    },
  },
  actions: {
    loadLaptopsData({ commit }) {
      commit("setLaptopsData", laptops);
    },
  },
};
