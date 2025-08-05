import DriverEdit from "@/views/drivers/DriverEdit.vue";
import DriversView from "@/views/drivers/DriversView.vue";
import DriverInfo from "@/views/drivers/DriverInfo.vue";
export default [
  {
    path: "/drivers",
    name: "drivers",
    component: DriversView,
  },
  {
    path: "/driver-edit/:id?",
    name: "editDriver",
    component: DriverEdit,
  },
  {
    path: "/drivers-info/:id",
    name: "infoDriver",
    component: DriverInfo,
  },
];
