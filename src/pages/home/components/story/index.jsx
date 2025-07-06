import { Div, Image, Span } from "../../../../components/ui/html-tags";

export default function Story({ user_img, user_name, story_thumb }) {
  return (
    <Div
      className={[
        "relative",
        "w-30 rounded-md overflow-hidden  shadow-md ",
        "shrink-0",
      ]}
    >
      <Div
        className={[
          "absolute bottom-0",
          "size-full p-2",
          "bg-gradient-to-b from-transparent to-black ",
          "flex flex-col justify-between",
        ]}
      >
        <Image
          className={["rounded-full size-10 border-2"]}
          src={user_img}
          alt=""
        />
        <Span className={["font-semibold text-white"]}>{user_name}</Span>
      </Div>

      <Image src={story_thumb} alt="" />
    </Div>
  );
}
