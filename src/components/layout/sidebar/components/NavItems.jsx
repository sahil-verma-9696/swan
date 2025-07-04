import { Link } from "react-router";
import { navConfig } from "../config";
import cn from "../../../../utility/cn";
import { Span } from "../../../ui/html-tags";

export default function NavItems() {
  return navConfig.map(({ path, icon: Icon, label }) => (
    <Link
      to={path}
      key={path}
      className={cn(
        "text-2xl hover:bg-gray-200 px-4 py-2 rounded-2xl",
        "flex items-center gap-2",
        "dark:hover:bg-gray-800"
      )}
    >
      <Icon />
      <Span>{label}</Span>
    </Link>
  ));
}
