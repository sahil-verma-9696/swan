import { useGoogleLogin } from "@react-oauth/google";
import fetchInstance from "../../utility/fetchInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

export default function useIndex() {
  const navigate = useNavigate();
  const [showFormModel, setShowFormModel] = useState(false);

  async function handleLogin(authResult) {
    const myLoggingToast = toast("Logging in...");
    const res = await fetchInstance("/auth/google", {
      method: "POST",
      body: JSON.stringify({ code: authResult.code }),
    });
    toast.dismiss(myLoggingToast);

    // TODO: res.status == success
    if (res.message === "cookie set successfully") {
      navigate("/home");
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
