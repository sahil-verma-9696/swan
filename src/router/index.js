import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layout/private";
import Home from "../pages/home";
import Notifications from "../pages/notifications";
import Messages from "../pages/messages";
import Profile from "../pages/profile";
import LandingPage from "../pages/landing";
import fetchInstance from "../utility/fetchInstance";

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
        Component: Home,
        loader: async (a, b) => {
          // TODO : /me implmentation
          // const data = await fetchInstance("/me");
          // console.log(data);
        },
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
