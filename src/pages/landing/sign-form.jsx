import { BsGoogle } from "react-icons/bs";
import { useForm } from "react-hook-form";

import { Button, H2, Input, P, Span } from "../../components/ui/html-tags";
import { zodResolver } from "@hookform/resolvers/zod";
import registrationSchema from "./z-sign-schema";
import { useEffect, useState } from "react";
import formConfig from "./formConfig";

export default function SignForm({ handleGoogleAuth }) {
  const [isLogin, setLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema(isLogin)),
  });

  function onSubmit(data) {
    // TODO : API intigration
  }

  // useEffect(() => {
  //   if (errors) console.log(errors);
  // }, [errors]);

  const { heading, subheading } = formConfig[isLogin ? "login" : "register"];

  return (
    <div className="w-full max-w-md mx-auto my-10 px-4 dark:text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="dark:bg-[#131416] bg-white rounded-md p-6 shadow-lg space-y-4"
      >
        <div className="text-center space-y-1">
          <H2 className={["font-semibold text-2xl"]}>{heading}</H2>
          <P className={["text-gray-600"]}>{subheading} </P>
        </div>

        <Button
          onClick={handleGoogleAuth}
          className={[
            "flex items-center gap-2 justify-center",
            "w-full rounded-2xl border-2 py-2 font-semibold",
            "shadow-md",
            "border-t-blue-500 border-r-red-500 border-b-yellow-500 border-l-green-500",
          ]}
        >
          <BsGoogle />
          <Span>Continue with Google</Span>
        </Button>

        <div className="relative text-center my-4">
          <div className="bg-gray-300 h-[1px]" />
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#131416] px-4 text-sm text-gray-400">
            Or
          </span>
        </div>

        <div className="space-y-3">
          {!isLogin && (
            <div>
              <label className="text-gray-400" htmlFor="name">
                Your Name*
              </label>
              <Input
                id="name"
                className={["block w-full"]}
                placeholder="Your name"
                {...register("name")}
              />
              {errors.name && (
                <P className={["text-red-600"]}>{errors.name.message}</P>
              )}
            </div>
          )}

          <div>
            <label className="text-gray-400" htmlFor="handle">
              User Handle*
            </label>
            <Input
              id="handle"
              className={["block w-full"]}
              placeholder="Your unique handle (e.g. @ram123)"
              {...register("handle")}
            />
            {errors.handle && (
              <P className={["text-red-600"]}>{errors.handle.message}</P>
            )}
          </div>

          <div>
            <label className="text-gray-400" htmlFor="email">
              Email*
            </label>
            <Input
              id="email"
              className={["block w-full"]}
              placeholder="demo@gmail.com"
              {...register("email")}
            />
            {errors.email && (
              <P className={["text-red-600"]}>{errors.email.message}</P>
            )}
          </div>

          <div>
            <label className="text-gray-400" htmlFor="password">
              Password*
            </label>
            <Input
              id="password"
              className={["block w-full"]}
              type="password"
              placeholder="********"
              {...register("password")}
            />
            {errors.password && (
              <P className={["text-red-600"]}>{errors.password.message}</P>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className={[
            "w-full py-2 rounded-2xl font-semibold shadow-md",
            "bg-[#01b0e2] text-white border-none mt-2",
          ]}
        >
          Continue
        </Button>

        <P className={["text-gray-600 text-center"]}>
          <Span>Already have an account?</Span>
          <Button
            onClick={() => setLogin((prev) => !prev)}
            className={["text-[#01b0e2]", "border-none"]}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </Button>
        </P>
      </form>
    </div>
  );
}
