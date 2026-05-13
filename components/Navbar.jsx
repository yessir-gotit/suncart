"use client";

import Link from "next/link";
import Image from "next/image";
import { Sun, Menu, User, LogOut, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const session = null;
  const isPending = false;

  return (
    <div className="sticky top-0 z-5 transition-all duration-500 animate__animated animate__fadeInDown animate__faster">
      <div className="bg-base-100/60 backdrop-blur-xl border-b border-white/40 shadow-sm transition-colors duration-300">

        <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Logo  */}
          <div className="navbar-start">
            <Link href="/" className="flex items-center gap-1 sm:gap-2 group">
              <Sun
                className="text-primary animate-[spin_10s_linear_infinite] group-hover:scale-110 transition-transform duration-500"
                size={24}
              />
              <span className="text-xl sm:text-2xl font-black tracking-tighter bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                SunCart
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="navbar-center hidden md:flex">
            <ul className="flex items-center gap-4 lg:gap-8">
              <li>
                <Link
                  href="/"
                  className="text-base font-semibold text-base-content/80 hover:text-primary transition-all duration-300 relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-base font-semibold text-base-content/80 hover:text-primary transition-all duration-300 relative group"
                >
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="text-base font-semibold text-base-content/80 hover:text-primary transition-all duration-300 relative group"
                >
                  My Profile
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu with Auth */}
          <div className="navbar-end gap-2">
     
            <div className="dropdown dropdown-end md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost hover:bg-primary/10 transition-colors duration-300"
              
              >
                <Menu size={24} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-1 p-3 w-screen max-w-[calc(100vw-2rem)] sm:max-w-56 bg-base-100/90 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl animate__animated animate__fadeIn animate__faster"
              >
                <li>
                  <Link href="/" className="text-base font-semibold hover:text-primary active:scale-95 transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-base font-semibold hover:text-primary active:scale-95 transition-all">
                    Products
                  </Link>
                </li>
                <li>
                  <hr className="my-1 border-base-content/10" />
                </li>


                {isPending ? (
                  <li>
                    <span className="loading loading-spinner loading-sm mx-auto my-2"></span>
                  </li>
                ) : session ? (
                  <>
                    <li>
                      <Link href="/my-profile" className="flex items-center gap-3 text-base font-semibold hover:text-primary transition-colors">
                        <User size={18} />
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button className="flex items-center gap-3 text-base font-semibold hover:text-error transition-colors w-full">
                        <LogOut size={18} />
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/login" className="flex items-center gap-3 text-base font-semibold hover:bg-primary/10 hover:text-primary transition-all rounded-lg px-3 py-2">
                        <User size={18} />
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link href="/register" className="flex items-center gap-3 text-base font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-all rounded-lg px-3 py-2">
                        <ShoppingBag size={18} />
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {isPending ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : session ? (
      

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="avatar hover:opacity-80 transition-opacity duration-300">
                

                    <div className="relative w-8 sm:w-10 h-8 sm:h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                      <Image
                        src={session.user?.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                        alt="Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 w-56 bg-base-100/90 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl animate__animated animate__fadeIn animate__faster">

                    <li><Link href="/my-profile" className="flex gap-3 text-base font-semibold"><User size={18} /> My Profile</Link></li>
                    <li><button className="flex gap-3 text-base font-semibold hover:text-error transition-colors"><LogOut size={18} /> Logout</button></li>
                  </ul>
                </div>
              </div>
            ) : (
    


              <div>
                <Link
                  href="/login"
                  className="btn btn-ghost btn-sm hover:bg-primary/10 hover:text-primary transition-all duration-300 hidden mx-3 md:inline-flex"
                >
                  <User size={18} />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="btn btn-primary shadow-lg shadow-primary/30 rounded-full px-4 hidden md:inline-flex hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}