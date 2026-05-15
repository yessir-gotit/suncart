"use client";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { User, Mail, Settings2, LogOut } from "lucide-react";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-[85vh] bg-base-100 flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-base-200 animate-pulse" />
        
        <div className="h-12 w-64 md:w-80 rounded-xl bg-base-200 animate-pulse mt-8" />
        
        <div className="h-6 w-48 md:w-56 rounded-lg bg-base-200 animate-pulse mt-4" />
      </div>
    );
  }

  /* UNAUTHENTICATED STATE */
  if (!session) {
    return (
      <div className="min-h-[85vh] bg-base-100 flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <User size={64} className="text-base-content/20 mb-8" />
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-base-content mb-4">
            Authentication Required
          </h1>
          <p className="text-base-content/50 text-lg mb-8 font-body">
            Sign in to access your profile.
          </p>
          <Link
            href="/login"
            className="bg-base-content text-base-100 px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-500 shadow-xl hover:shadow-primary/40"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="min-h-[85vh] bg-base-100 flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Profile Content */}
      <div className="relative z-10 flex flex-col items-center text-center animate__animated animate__fadeInUp">
        {/* Avatar */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-base-100 shadow-2xl shadow-primary/20 mb-8 relative group">
          <Image
            src={user.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            fill
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-base-content mb-4">
          {user.name || "User"}
        </h1>

        {/* Email */}
        <div className="flex items-center gap-2 text-lg tracking-widest uppercase font-bold text-base-content/40 mb-12">
          <Mail size={16} />
          <span>{user.email || "E-mail"}</span>
        </div>


        <div className="flex items-center gap-4">
          
          <Link
            href="/my-profile/update"
            className="group flex items-center gap-3 bg-base-content text-base-100 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-500 shadow-xl hover:shadow-primary/40"
          >
            Edit Profile
            <Settings2
              size={18}
              className="group-hover:rotate-90 transition-transform duration-500"
            />
          </Link>


          <button
            onClick={() => authClient.signOut()}
            className="btn btn-circle btn-outline border-base-content/20 text-base-content hover:bg-error hover:text-white hover:border-error transition-all"
            aria-label="Sign out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
