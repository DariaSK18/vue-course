// import { buses } from "@/constants/depotData";

export const state = () => ({
  itemsList: [],
});
export const getters = {
  getItemsData: ({ itemsList }) => itemsList,
  // getItemById:
  //   ({ itemsList }) =>
  //   (itemId) =>
  //     itemsList.findIndex(itemsList.id == itemId),
};
export const mutations = {
  setItemsData(state, dataList) {
    state.itemsList = dataList;
  },
  deleteItem(state, itemId) {
    const itemIndex = state.itemsList.findIndex((item) => item.id == itemId);
    if (itemIndex !== -1) state.itemsList.splice(itemIndex, 1);
  },
};
export const actions = {
  loadItemsData({ commit }, dataList) {
    commit("setItemsData", dataList);
  },
  deleteItem({ commit }, itemId) {
    commit("deleteItem", itemId);
  },
};
