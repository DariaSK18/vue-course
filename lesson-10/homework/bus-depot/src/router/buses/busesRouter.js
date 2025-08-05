import BusesView from "@/views/buses/BusesView.vue";
import BusInfo from "@/views/buses/BusInfo.vue";
import BusEdit from "@/views/buses/BusEdit.vue";
export default [
  {
    path: "/buses",
    name: "buses",
    component: BusesView,
  },
  {
    path: "/buses-edit/:id?",
    name: "editBus",
    component: BusEdit,
  },
  {
    path: "/buses-info/:id",
    name: "infoBus",
    component: BusInfo,
  },
];
