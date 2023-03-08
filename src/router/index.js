import Vue from "vue";
import Router from "vue-router";
// import ServiceSYS from "@/components/ServiceSYS";
import HomeView from "@/views/HomeView";
import MapServe_ from "@/components/MapServe_";
import ModelServe_ from "@/components/ModelServe_";
import ImageServe_ from "@/components/ImageServe_";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "ServiveSYS",
    //   component: ServiceSYS
    // },
    {
      path: "/",
      name: "HomeView",
      component: HomeView
    },
    {
      path: "/MapServe_",
      name: "MapServe_",
      component: MapServe_
    },
    {
      path: "/ModelServe_",
      name: "ModelServe_",
      component: ModelServe_
    },
    {
      path: "/ImageServe_",
      name: "ImageServe_",
      component: ImageServe_
    }
  ]
});
