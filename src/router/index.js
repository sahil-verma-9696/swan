import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/private"; // Layout with Sidebar
import Home from "../pages/home";
import Notifications from "../pages/notifications";
import Messages from "../pages/messages";
import Profile from "../pages/profile";
import LandingPage from "../pages/landing";
import withAuth from "../hoc/withAuth";

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
        Component: withAuth(Home),
      },
      {
        path: "notifications",
        Component: withAuth(Notifications),
      },
      {
        path: "messages",
        Component: withAuth(Messages),
      },
      {
        path: "profile",
        Component: withAuth(Profile),
      },
    ],
  },
]);
