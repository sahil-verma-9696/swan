import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/private"; // Layout with Sidebar
import Home from "../pages/home";
import Notifications from "../pages/notifications";
import Messages from "../pages/messages";
import Profile from "../pages/profile";
import LandingPage from "../pages/landing";
import AuthHOC from "../components/auth-hoc";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "home",
        Component: AuthHOC(Home),
      },
      {
        path: "notifications",
        Component: AuthHOC(Notifications),
      },
      {
        path: "messages",
        Component: AuthHOC(Messages),
      },
      {
        path: "profile",
        Component: AuthHOC(Profile),
      },
    ],
  },
]);
