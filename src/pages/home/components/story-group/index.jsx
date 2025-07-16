import { Div, H2, Image } from "../../../../components/ui/html-tags";
import Story from "../story";

export default function StroyGroup ({ stories }) {
  return (
    <div className="px-4">
      <H2 className={["text-2xl font-semibold py-2"]}>Stories</H2>
      <Div className={["flex gap-2 items-center overflow-x-auto"]}>
        {stories?.map((story, index) => (
          <Story {...story} key={index} />
        ))}
      </Div>

    </div>
  );
}
