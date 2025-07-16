import { Toaster } from "react-hot-toast";
import { H2, Image, P, Button } from "./../../components/ui/html-tags";
import useIndex from "./useIndex";
import SignForm from "./sign-form";
import cn from "../../utility/cn";

export default function LandingPage() {
  const { handleGoogleAuth, showFormModel, setShowFormModel } = useIndex();

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section
        className={cn(
          "flex h-screen",
          "max-sm:flex-col max-sm:h-screen",
          "dark:bg-black dark:text-white"
        )}
      >
        <div className="flex-1 flex justify-center items-center">
          <div className="space-y-4 text-center">
            <Image
              className={[
                "w-60 object-cover shadow-md rounded-full mx-auto",
                "max-sm:w-32",
              ]}
              src="./swan-logo.png"
            />
            <H2 className={["text-5xl font-bold max-sm:text-2xl"]}>
              Welcome to Swan 🦢
            </H2>
            <P className={["text-gray-600"]}>
              Your new favorite place to connect, share, and discover moments
              that matter.
            </P>
            <H2 className={["text-4xl font-bold max-sm:text-2xl"]}>
              Join Today
            </H2>
            <div className="sm:hidden">
              <Button
                className={[
                  "bg-[#01b0e2] text-white rounded-xl px-4 py-2 mt-2 font-semibold shadow-md",
                ]}
                onClick={() => setShowFormModel(true)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Form (hidden on mobile) */}
        <div className="flex-1 justify-center items-center max-sm:hidden flex">
          <SignForm handleGoogleAuth={handleGoogleAuth} />
        </div>
      </section>

      {/* Mobile Modal */}
      {showFormModel && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 sm:hidden">
          <div className="relative w-full max-w-md mx-auto bg-white dark:bg-[#131416] p-6 rounded-xl shadow-lg">
            <Button
              onClick={() => setShowFormModel(false)}
              className={[
                "absolute top-8 right-3 text-gray-500 text-lg border-none dark:text-white",
              ]}
            >
              ✕
            </Button>
            <SignForm handleGoogleAuth={handleGoogleAuth} />
          </div>
        </div>
      )}
    </>
  );
}
