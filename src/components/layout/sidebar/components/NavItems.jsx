import { Link, NavLink } from "react-router-dom";
import { navConfig } from "../config";
import cn from "../../../../utility/cn";
import { Span } from "../../../ui/html-tags";

export default function NavItems() {
  return navConfig.map(({ path, icon: Icon, label }) => (
    <NavLink
      to={path}
      key={path}
      className={({ isActive }) =>
        cn(
          "text-2xl hover:bg-gray-200 px-4 py-2 rounded-2xl",
          "flex items-center gap-2",
          "dark:hover:bg-gray-800",
          isActive && "bg-gray-300 dark:bg-gray-700",
          "max-sm:flex-col"
        )
      }
    >
      <Icon />
      <Span className={["max-sm:text-xs"]}>{label}</Span>
    </NavLink>
  ));
}
