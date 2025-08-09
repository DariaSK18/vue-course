import { createStore } from "vuex";

export default createStore({
  state: {
    lessonsList: [],
    teachersList: [],
    userName: null,
  },
  getters: {
    getLessonsList: ({ lessonsList }) => lessonsList,
    getTeachersList: ({ teachersList }) => teachersList,
    getUserName: ({ userName }) => userName,
    getLessonById: (state) => (lessonId) =>
      state.lessonsList.find((lesson) => lesson.id == lessonId),
    getTeacherById: (state) => (teacherId) =>
      state.teachersList.find((teacher) => teacher.id == teacherId),
  },
  mutations: {
    setData(state, { arrayName, itemData }) {
      state[arrayName] = itemData;
    },
    setUserName(state, name) {
      state.userName = name;
    },
    logOff(state) {
      state.userName = null;
    },
  },
  actions: {
    loadData({ commit }, { arrayName, itemData }) {
      commit("setData", { arrayName, itemData });
    },
    setUserName({ commit }, name) {
      commit("setUserName", name);
    },
    logOff({ commit }) {
      commit("logOff");
    },
  },
});
