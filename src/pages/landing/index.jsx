import { useGoogleLogin } from "@react-oauth/google";

import { Div, H2, Image, P, Section } from "./../../components/ui/html-tags";
import { useDispatch } from "react-redux";
import fetchInstance from "../../utility/fetchInstance";
import { useNavigate } from "react-router";
export default function LandingPage() {
  const navigate = useNavigate();


  const login = async (authResult) => {
    try {
      console.log(authResult.code);
      fetchInstance('/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         code: authResult.code
        }),
        credentials: 'include'
      })
        .then((data) => {
          if (data.message === "cookie set successfully") {
            navigate("/home");
          }
        });
    } catch (error) {
      console.log(error)
    }
  }

  const loginGoogle = useGoogleLogin({
    onSuccess: login,
    onError: login,
    flow: 'auth-code'
  })


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
          <button onClick={loginGoogle} className="text-gray-600 pr-4 pl-4">Signup with google</button>
        </div>
      </Div>
    </Section>
  );
}
