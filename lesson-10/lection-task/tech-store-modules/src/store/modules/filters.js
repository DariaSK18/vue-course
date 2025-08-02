export default {
  namespaced: true,
  state: () => ({
    filter: {
      brands: [],
      seller: null,
    },
  }),
  getters: {
    getFilterData: (state) => state.filter,
    getUniqueBrands: (state, getters, rootState, rootGetters) => {
      const productsList = rootGetters["productsStore/getLaptopsList"];
      const productBrands = productsList.map((product) => product.brand);
      const uniqueBrands = [...new Set(productBrands)];
      //   console.log(uniqueBrands);
      const uniqueBrandsObj = uniqueBrands.map((brand) => ({
        title: brand,
        value: brand,
      }));
      //   console.log(uniqueBrandsObj);
      return uniqueBrandsObj;
    },
    filterCondition:
      ({ filter }) =>
      (product) => {
        // console.log(product);
        const bySeller = !filter.seller || product.sellerId == filter.seller;
        const byBrand =
          !filter.brands.length || filter.brands.includes(product.brand);
        return bySeller && byBrand;
      },
    getFilteredList: (state, getters, rootState, rootGetters) => {
      const productsList = rootGetters["productsStore/getLaptopsList"];
      return productsList.filter((product) => getters.filterCondition(product));
    },
  },
  mutations: {
    setFilter(state, filterData) {
      state.filter = {
        ...state.filter,
        ...filterData,
      };
    },
  },
  actions: {
    setFilter({ commit }, filterData) {
      commit("setFilter", filterData);
    },
  },
};
