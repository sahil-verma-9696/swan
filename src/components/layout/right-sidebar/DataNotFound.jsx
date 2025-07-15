import { Button, H2, P, Section } from "../../ui/html-tags";

export default function DataNotFound({ heading, subheading, btnText }) {
  return (
    <Section className={[" mx-auto my-4"]}>
      <H2 className={["text-3xl font-semibold py-2"]}>{heading}</H2>
      <P className={["py-4 text-gray-400"]}>{subheading}</P>
      <Button
        className={[
          "px-5 py-3 bg-[#01b0e2] text-white rounded-3xl ",
          "font-bold",
        ]}
      >
        {btnText}
      </Button>
    </Section>
  );
}
