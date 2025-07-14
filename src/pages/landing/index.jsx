import {
  Button,
  Div,
  H2,
  Image,
  P,
  Section,
} from "./../../components/ui/html-tags";
import useIndex from "./useIndex";

export default function LandingPage() {
  const { handleGoogleAuth } = useIndex();
  return (
    <Section className={["flex overflow-auto w-full"]}>
      <Div className={["flex-1 flex justify-center items-center"]}>
        <Image
          className={["w-100 object-cover shadow-md rounded-full"]}
          src="./swan-logo.png"
        />
      </Div>
      <Div className={["flex-1 flex flex-col justify-center items-start"]}>
        <H2 className={["text-6xl font-bold mb-4"]}>Welcome to Swan 🦢</H2>
        <P className={["text-gray-600"]}>
          Your new favorite place to connect, share, and discover moments that
          matter.
        </P>
        <H2 className={["text-4xl font-bold mb-4"]}>Join Today</H2>
        <div className="inset-0 rounded-2xl border-4 animate-spin-slow border-t-blue-500 border-r-red-500 border-b-yellow-500 border-l-green-500 p-1 bg-white">
          <Button
            onClick={handleGoogleAuth}
            className={["text-gray-600 pr-4 pl-4 dark:text-black"]}
          >
            Signup with google
          </Button>
        </div>
      </Div>
    </Section>
  );
}
