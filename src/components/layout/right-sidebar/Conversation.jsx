import { Div, H2 } from "../../ui/html-tags";
import DataNotFound from "./DataNotFound";

export default function Conversations() {
  return (
    <Div className={["flex-1 p-4"]}>
      <H2 className={["text-2xl font-semibold  "]}>Messages</H2>

      <DataNotFound
        heading={"Welcome to your inbox!"}
        subheading={
          "Drop a line, share posts and more with private conversations between you and others on Swan."
        }
        btnText={"Write a message"}
      />
    </Div>
  );
}
