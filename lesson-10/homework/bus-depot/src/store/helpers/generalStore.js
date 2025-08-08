export const state = () => ({
  itemsList: [],
  filteredList: [],
  assignedPairsList: [],
});
export const getters = {
  // getItemsData: ({ itemsList }) => itemsList,
  getItemsData: (state) =>
    state.filteredList.length ? state.filteredList : state.itemsList,
  getAssignedPairsList: ({ assignedPairsList }) => assignedPairsList,
  getItemById:
    ({ itemsList }) =>
    (itemId) =>
      itemsList.find((item) => item.id == itemId),
};
export const mutations = {
  setItemsData(state, dataList) {
    state.itemsList = dataList;
    state.filteredList = dataList;
  },
  deleteItem(state, { arrayName, itemId }) {
    const itemIndex = state[arrayName].findIndex((item) => item.id == itemId);
    if (itemIndex !== -1) state[arrayName].splice(itemIndex, 1);
  },
  addNewItem(state, { arrayName, itemData }) {
    state[arrayName].push({
      id: crypto.randomUUID(),
      ...itemData,
    });
  },
  updateItem(state, { arrayName, itemData }) {
    const currentIndex = state[arrayName].findIndex(
      (item) => itemData.id === item.id
    );
    state[arrayName][currentIndex] = itemData;
  },
  filterItems(state, itemObject) {
    state.filteredList = state.itemsList.filter((item) => {
      const matchedName = itemObject.name
        ? item.name.toLowerCase().startsWith(itemObject.name.toLowerCase())
        : true;
      const matchedMinExperience = itemObject.minExperience
        ? item.experience >= itemObject.minExperience
        : true;
      const matchedMaxExperience = itemObject.maxExperience
        ? item.experience <= itemObject.maxExperience
        : true;
      return matchedName && matchedMinExperience && matchedMaxExperience;
    });
  },
};
export const actions = {
  loadItemsData({ commit }, dataList) {
    commit("setItemsData", dataList);
  },
  deleteItem({ commit }, { arrayName, itemId }) {
    commit("deleteItem", { arrayName, itemId });
  },
  addNewItem({ commit }, { arrayName, itemData }) {
    commit("addNewItem", { arrayName, itemData });
  },
  updateItem({ commit }, { arrayName, itemData }) {
    commit("updateItem", { arrayName, itemData });
  },
  filterItems({ commit }, itemObject) {
    commit("filterItems", itemObject);
  },
};
