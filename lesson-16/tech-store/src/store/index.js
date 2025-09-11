import { createStore } from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";
import getModuleSettingsObject from "./helpers/GetModuleSettingsObject";
export default createStore({
  namespaced: true,
  modules: {
    auth,
    users,
    products: getModuleSettingsObject("products"),
    // buses: getModuleSettingsObject("buses"),
    // assignedValues: getModuleSettingsObject("assignedValues"),
  },
});