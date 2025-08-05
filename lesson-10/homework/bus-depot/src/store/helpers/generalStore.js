export const state = () => ({
  itemsList: [],
});
export const getters = {
  getItemsData: ({ itemsList }) => itemsList,
  getItemById:
    ({ itemsList }) =>
    (itemId) =>
      itemsList.find((item) => item.id == itemId),
};
export const mutations = {
  setItemsData(state, dataList) {
    state.itemsList = dataList;
  },
  deleteItem(state, itemId) {
    const itemIndex = state.itemsList.findIndex((item) => item.id == itemId);
    if (itemIndex !== -1) state.itemsList.splice(itemIndex, 1);
  },
  addNewItem(state, itemData) {
    state.itemsList.push({
      id: crypto.randomUUID(),
      ...itemData,
    });
  },
  updateItem(state, itemData) {
    const currentIndex = state.itemsList.findIndex(
      (item) => itemData.id === item.id
    );
    state.itemsList[currentIndex] = itemData;
  },
};
export const actions = {
  loadItemsData({ commit }, dataList) {
    commit("setItemsData", dataList);
  },
  deleteItem({ commit }, itemId) {
    commit("deleteItem", itemId);
  },
  addNewItem({ commit }, itemData) {
    commit("addNewItem", itemData);
  },
  updateItem({ commit }, itemData) {
    commit("updateItem", itemData);
  },
};
