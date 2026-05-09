"use client";

import Link from "next/link";

// TODO: Import and use auth session hook when auth system is set up
// import { useSession } from "@/lib/auth-client";

export default function Navbar() {
  // TODO: Replace with actual auth check
  const session = null;
  const isPending = false;

  return (
    <div className="navbar sticky top-0 z-50 backdrop-blur-md bg-base-100/80 shadow-sm">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/my-profile">My Profile</Link></li>
          </ul>
        </div>
        {/* Logo */}
        <Link href="/" className="text-primary font-black text-xl px-2">
          ☀️ SunCart
        </Link>
      </div>

      {/* Center nav links - hidden on mobile */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li><Link href="/" className="btn btn-ghost btn-sm">Home</Link></li>
          <li><Link href="/products" className="btn btn-ghost btn-sm">Products</Link></li>
          <li><Link href="/my-profile" className="btn btn-ghost btn-sm">My Profile</Link></li>
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : session ? (
          <>
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-8">
                <span className="text-xs">U</span>
              </div>
            </div>
            <span className="text-sm font-medium hidden sm:inline">{session.user?.name || "User"}</span>
            <button className="btn btn-ghost btn-sm">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-primary btn-sm">Login</Link>
            <Link href="/register" className="btn btn-outline btn-sm hidden sm:inline-flex">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
