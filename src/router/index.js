import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layout/private";
import Home from "../pages/home";
import Notifications from "../pages/notifications";
import Messages from "../pages/messages";
import Profile from "../pages/profile";
import LandingPage from "../pages/landing";
import userAuth from "../utility/user-auth";
import { store } from "../store/index";
import AuthHOC from "../components/auth-hoc";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "/home",
        Component: AuthHOC(Home),
      },
      {
        path: "notifications",
        Component: Notifications,
      },
      {
        path: "messages",
        Component: Messages,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
]);
