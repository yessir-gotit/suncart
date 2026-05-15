"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { ArrowRight, Sun, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

// Wrapping the svg on function makes it easier to use it
function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await authClient.signIn.email(
      { email, password, callbackURL: redirectTo },

      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          toast.success("Welcome back! You've signed in successfully.");
          router.push(redirectTo);

        },
        onError: (a) => {
          toast.error(a.error?.message || "Invalid email or password.");
          setLoading(false);
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-base-100">
      {/* my awwards style */}
      <div className="hidden lg:justify-center lg:flex relative overflow-hidden bg-neutral text-neutral-content flex-col justify-between p-12 lg:sticky lg:top-0 lg:h-screen lg:w-1/2">
        <div className="w-96 h-96 bg-secondary/30 rounded-full blur-[100px] absolute -top-20 -left-20 pointer-events-none" />
        <div className="w-96 h-96 bg-accent/20 rounded-full blur-[100px] absolute -bottom-20 -right-20 pointer-events-none" />

  
        
        <div className="relative z-10">
          <h1 className="text-7xl xl:text-9xl font-black tracking-tighter leading-[1.1]">
            Welcome Back.
          </h1>
          <p className="text-neutral-content/60 mt-6 text-lg max-w-md">
            Resume your summer journey. The sun is waiting.
          </p>
        </div>
      </div>

      {/* The Form */}
      <div className="w-full flex items-start mt-9 sm:items-center sm:mt-0 justify-center p-6 md:p-12 lg:p-24 min-h-screen lg:w-1/2">
        <div className="w-full max-w-md">

          {/* Mobile Heading */}
          <div className="lg:hidden mb-12 flex items-center gap-2 text-primary font-black text-2xl">
            <Sun className="w-6 h-6" />
            SUNCART
          </div>

          {/* Form Headng */}
          <h2 className="text-4xl font-black tracking-tight text-base-content mb-2 animate__animated animate__fadeInUp"
          
          >
            Sign In
          </h2>
          <p className="text-base-content/50 mb-12 animate__animated animate__fadeInUp [animation-delay:100ms]">
            Enter your details to continue.
          </p>

          <form onSubmit={handleSubmit}>
            
            <div className="relative mb-8 animate__animated animate__fadeInUp [animation-delay:200ms]">
              <label
                htmlFor="email"
                className="absolute -top-3 left-0 text-xs font-bold tracking-[0.2em] uppercase text-base-content/50"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b-2 border-base-content/10 py-3 text-lg text-base-content focus:outline-none focus:border-primary focus:ring-0 transition-colors peer placeholder-transparent"
              />
            </div>

            
            <div className="relative mb-8 animate__animated animate__fadeInUp [animation-delay:300ms]">
              <label
                htmlFor="password"
                className="absolute -top-3 left-0 text-xs font-bold tracking-[0.2em] uppercase text-base-content/50"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b-2 border-base-content/10 py-3 text-lg text-base-content focus:outline-none focus:border-primary focus:ring-0 transition-colors peer placeholder-transparent"
              />
            </div>

            
            <div className="flex justify-end mb-8 animate__animated animate__fadeInUp [animation-delay:400ms]">
              <Link
                href="#"
                className="text-sm font-bold text-base-content/50 hover:text-primary transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="animate__animated animate__fadeInUp [animation-delay:500ms] w-full">
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-between bg-base-content text-base-100 px-6 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-500 shadow-xl hover:shadow-primary/40 w-full disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <span>Signing In</span>
                    <Loader2 className="animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8 animate__animated animate__fadeInUp [animation-delay:550ms]">
            <span className="flex-1 h-px bg-base-content/10" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-base-content/30">Or</span>
            <span className="flex-1 h-px bg-base-content/10" />
          </div>

          {/* Google Sign-In */}
          <div className="animate__animated animate__fadeInUp [animation-delay:600ms]">
            <button
              onClick={async () =>
                await authClient.signIn.social({
                  provider: "google",
                  callbackURL: redirectTo,
                })
              }
              className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full font-bold text-sm tracking-widest uppercase border-2 border-base-content/20 text-base-content/80 hover:bg-base-content hover:text-base-100 hover:border-base-content transition-all duration-500 cursor-pointer"
            >
              <GoogleIcon className="w-5 h-5 shrink-0" />
              <span>Sign in with Google</span>
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-12 text-center text-sm text-base-content/50 animate__animated animate__fadeInUp [animation-delay:600ms]">
            New to Suncart?{" "}
            <Link
              href="/register"
              className="font-bold text-base-content hover:text-primary transition-colors underline underline-offset-4"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
