import {
  BsBookmark,
  BsChatLeft,
  BsDot,
  BsHeart,
  BsShare,
  BsThreeDots,
} from "react-icons/bs";
import {
  Button,
  Div,
  Image,
  P,
  Span,
} from "../../../../components/ui/html-tags";
import { User } from "../../../../data/dummy";

export default function Post() {
  return (
    <Div
      className={["max-w-full px-2 my-4 flex gap-2 border-b border-gray-600"]}
    >
      <Div className={[""]}>
        <Image
          className={["size-12 object-cover rounded-full"]}
          src={User.image}
          alt=""
        />
      </Div>
      <Div className={["w-full"]}>
        <Div className={["flex justify-between"]}>
          <Div className={["flex items-center"]}>
            <Span className={["font-semibold"]}>{User.name}</Span>
            <Span className={["font-thin text-sm"]}>{User.username}</Span>
            <BsDot />
            <Span className={["font-thin text-sm"]}>{"2 jul"}</Span>
          </Div>
          <BsThreeDots />
        </Div>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim ad
          repellat modi atque soluta minima voluptate eius, impedit ducimus,
          molestiae pariatur placeat dolorum.
        </P>
        <Image className={["rounded-lg my-4"]} src={User.image} alt="" />
        <Div className={["flex justify-between my-4"]}>
          <Div className={["flex gap-2 items-center"]}>
            {/* Like  */}
            <Button
              className={["flex items-center gap-1", "hover:text-red-500"]}
            >
              <BsHeart />
              <Span>100</Span>
            </Button>

            <Button
              className={["flex items-center gap-1", "hover:text-blue-500"]}
            >
              <BsChatLeft />
              <Span>100</Span>
            </Button>
            <BsShare />
          </Div>
          <BsBookmark />
        </Div>
      </Div>
    </Div>
  );
}
