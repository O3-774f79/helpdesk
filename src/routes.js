// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// core components/views for Admin layout


import ITservicereq from './views/ITservicereq'


// core components/views for RTL layout
import Reqboard from "./views/Reqboard";
import Review from "./views/Reqboard/Review";
import ITformReq1 from "./views/ITservicereq/ITformReq1";
import admintable from "./views/Reqboard/admintable";



const dashboardRoutes = [
  {
    path: "/ITservicereq",
    name: "Service User Request Task List",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: ITservicereq,
    layout: "/admin"
  },
  // {
  //   path: "/ITformReq",
  //   name: "IT Request",
  //   rtlName: "لوحة القيادة",
  //   icon: LibraryBooks,
  //   component: ITformReq,
  //   layout: "/admin"
  // },
  {
    path: "/Reqboard",
    name: "Service Admin Request Task List",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: Reqboard,
    layout: "/admin"
  },
  {
    path: "/ITformReq1",
    name: "User Form",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: ITformReq1,
    layout: "/admin"
  },
  {
    path: "/Review",
    name: "Admin Form",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: Review,
    layout: "/admin"
  },
  {
    path: "/admintable",
    name: "Admin table",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: admintable,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
