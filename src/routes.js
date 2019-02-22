
// import Dashboard from "@material-ui/icons/Dashboard";
import Assessment from "@material-ui/icons/Assessment";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// core components/views for Admin layout


import ITservicereq from './views/ITservicereq'


// core components/views for RTL layout
import Reqboard from "./views/Reqboard";
import Review from "./views/Reqboard/Review";
import ITformReq1 from "./views/ITservicereq/ITformReq1";
// import admintable from "./views/Reqboard/admintable";

// import DashboardPage from './views/Dashboard/Dashboard'
import Dashboard2 from "./views/Dashboard/Dashboard2";
// import Dashboard3 from "./views/Dashboard/Dashboard3";


const dashboardRoutes = [
//  {
//     path: "/dashboard",
//     name: "Dashboard",
//     rtlName: "لوحة القيادة",
//     icon: Dashboard,
//     component: DashboardPage,
//     layout: "/admin"
//   },
  {
    path: "/dashboard2",
    name: "Dashboard Detail",
    rtlName: "لوحة القيادة",
    icon: Assessment,
    component: Dashboard2,
    layout: "/admin"
  },
  // {
  //   path: "/dashboard3",
  //   name: "Task Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: Assessment,
  //   component: Dashboard3,
  //   layout: "/admin"
  // },
  {
    path: "/ITservicereq",
    name: "User Inbox",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: ITservicereq,
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
    path: "/Reqboard",
    name: "Admin Inbox",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: Reqboard,
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
 
 
  // {
  //   path: "/ITformReq",
  //   name: "IT Request",
  //   rtlName: "لوحة القيادة",
  //   icon: LibraryBooks,
  //   component: ITformReq,
  //   layout: "/admin"
  // },
  
  // {
  //   path: "/admintable",
  //   name: "Admin table",
  //   rtlName: "لوحة القيادة",
  //   icon: LibraryBooks,
  //   component: admintable,
  //   layout: "/admin"
  // },
  
];

export default dashboardRoutes;
