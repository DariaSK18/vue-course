import { createStore } from "vuex";
import busesStore from "./modules/busesStore";
import driversStore from "./modules/driversStore";

export default createStore({
  modules: {
    busesStore,
    driversStore,
  },
});
