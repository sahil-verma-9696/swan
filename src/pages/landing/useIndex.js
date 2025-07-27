import { useGoogleLogin } from "@react-oauth/google";
import fetchInstance from "../../utility/fetchInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

export default function useIndex() {
  const navigate = useNavigate();
  const [showFormModel, setShowFormModel] = useState(false);

  async function handleLogin(authResult) {
    const myLoggingToast = toast.loading("Logging in...");
    console.log(authResult)
    try {
      const res = await fetchInstance("/auth/google", {
        method: "POST",
        body: JSON.stringify({ code: authResult.code }),
      });

      toast.dismiss(myLoggingToast);

      if (res.message === "cookie set successfully") {
        toast.success("Login successful!");
        navigate("/home");
      } else {
        toast.error("Login failed");
      }
    } catch (err) {
      toast.dismiss(myLoggingToast);
      toast.error("Something went wrong during login.");
      console.error(err);
    }
  }

  async function handleError(err) {
    console.log(err);
    toast.error(err.message);
  }

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: handleLogin,
    onError: handleError,
    flow: "auth-code",
  });

  return { handleGoogleAuth, showFormModel, setShowFormModel };
}
