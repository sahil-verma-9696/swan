import { BiMessage, BiSearch, BiUser } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";

export const navConfig = [
  {
    label: "Home",
    icon: GoHomeFill,
    path: "/home",
  },
  {
    label: "Notifications",
    icon: IoNotifications,
    path: "/notifications",
  },
  {
    label: "Messages",
    icon: BiMessage,
    path: "/messages",
  },
  {
    label: "Profile",
    icon: BiUser,
    path: "/profile",
  },
];
