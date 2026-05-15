"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Sun, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

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

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await authClient.signUp.email(
      { email, password, name, callbackURL: "/" },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          toast.success("Account created! Welcome to SunCart.");
          router.push("/");
        },
        onError: (ctx) => {
          toast.error(
            ctx.error?.message || "Registration failed. Please try again.",
          );
          setLoading(false);
        },
      },
    );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-base-100">
      {/* Same awwards style */}
      <div className="hidden lg:flex relative overflow-hidden bg-neutral text-neutral-content flex-col justify-center p-12 lg:sticky lg:top-0 lg:min-h-screen lg:w-1/2">

        <div className="w-96 h-96 bg-primary/20 rounded-full blur-[100px] absolute -top-20 -left-20 " />

        <div className="w-96 h-96 bg-secondary/20 rounded-full blur-[100px] absolute -bottom-20 -right-20" />

        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-black tracking-tighter leading-[1.1]">
            Join the Summer
            <br />
            Collective.
          </h1>
          <p className="text-neutral-content/60 mt-6 text-lg max-w-md">
            Curated essentials for sun-drenched days. Become part of a community
            that lives for the warmth.
          </p>
        </div>
      </div>

      <div className="flex items-start mt-9 sm:items-center sm:mt-0 justify-center  p-6 md:p-12 lg:p-24 min-h-screen lg:min-h-full lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-12 flex items-center gap-2 text-primary font-black text-2xl">
            <Sun className="w-6 h-6" />
            SUNCART
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-base-content mb-2 animate__animated animate__fadeInUp">
            Create Account
          </h2>
          <p className="text-base-content/50 mb-12 animate__animated animate__fadeInUp [animation-delay:100ms]">
            Experience premium summer essentials.
          </p>

          <form onSubmit={handleSubmit}>
 
            <div className="relative mb-8 animate__animated animate__fadeInUp [animation-delay:200ms]">
              <label
                htmlFor="name"
                className="absolute -top-3 left-0 text-xs font-bold tracking-[0.2em] uppercase text-base-content/50"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b-2 border-base-content/10 py-3 text-lg text-base-content focus:outline-none focus:border-primary focus:ring-0 transition-colors peer placeholder-transparent"
              />
            </div>

            {/* Email */}
            <div className="relative mb-8 animate__animated animate__fadeInUp [animation-delay:300ms]">
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

  
            <div className="relative mb-8 animate__animated animate__fadeInUp [animation-delay:400ms]">
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

            <div className="animate__animated animate__fadeInUp [animation-delay:500ms] w-full mt-4">
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-between bg-base-content text-base-100 px-6 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-500 shadow-xl hover:shadow-primary/40 w-full disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <span>Creating Account</span>
                    <Loader2 className="animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Join Now</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="flex items-center gap-4 my-8 animate__animated animate__fadeInUp [animation-delay:550ms]">
            <span className="flex-1 h-px bg-base-content/10" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-base-content/30">
              Or
            </span>
            <span className="flex-1 h-px bg-base-content/10" />
          </div>

          {/* Google SigUp */}
          <div className="animate__animated animate__fadeInUp [animation-delay:600ms]">
            <button
              onClick={async () =>
                await authClient.signIn.social({
                  provider: "google",
                  callbackURL: "/",
                })
              }
              className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full font-bold text-sm tracking-widest uppercase border-2 border-base-content/20 text-base-content/80 hover:bg-base-content hover:text-base-100 hover:border-base-content transition-all duration-500 cursor-pointer"
            >
              <GoogleIcon className="w-5 h-5 shrink-0" />
              <span>Sign up with Google</span>
            </button>
          </div>

          <div className="mt-12 text-center text-sm text-base-content/50 animate__animated animate__fadeInUp [animation-delay:650ms]">
            Already a member?{" "}
            <Link
              href="/login"
              className="font-bold text-base-content hover:text-primary transition-colors underline underline-offset-4"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
