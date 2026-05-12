import Link from "next/link";

import { Sun, Heart, MessageCircle, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content relative overflow-hidden pt-24 pb-8">

      {/* Got that glow idea from awwards websites */}

      <div className="absolute top-0 right-0 w-160 h-160 bg-primary/10 blur-[120px] rounded-full " />

      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Sun
                className="text-primary animate-spin duration-[]"

                // used animate-spin becuase it looks cool with the sun icon

                style={{ animationDuration: '10s' }}
                size={32}
              />


              <span className="text-3xl font-black">
                SunCart
              </span>
            </div>
            <p className="text-neutral-content text-opacity-60 mt-6 text-lg max-w-sm">
              Curating the ultimate summer aesthetic. Premium essentials for
              endless sunny days.
            </p>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest font-bold opacity-40 mb-6">
              Drop Us A Line
            </p>
            <a
              href="#"
              className="text-2xl md:text-3xl font-light hover:text-primary transition-all flex items-center gap-2"
            >
              suncart@gmail.com
              <ArrowUpRight
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                size={24}
              />
            </a>

            <div className="mt-4">
               <p className="opacity-60">+8801754-279586321</p>
            </div>
          </div>

          {/* Socials Links */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-6">
              Connect
            </p>
            <div className="flex gap-4">

              <a href="#" className="w-10 h-10 border border-neutral-content/20 rounded-full flex items-center justify-center hover:text-primary hover:border-primary transition-all">
                <Phone size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-neutral-content/20 rounded-full flex items-center justify-center hover:text-primary hover:border-primary transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-neutral-content/20 rounded-full flex items-center justify-center hover:text-primary hover:border-primary transition-all">
                <Mail size={18} />
              </a>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-40 mb-4">Legal</p>
              <Link href="#" className="opacity-60 hover:opacity-100 hover:underline transition-all">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>


        <div className="mt-24 border-t border-white/10 pt-8">
          <p className="text-sm opacity-40">
            &copy; 2026 SunCart. All rights reserved.
          </p>
        </div>

        {/* That Chunky Style which I adapted from awwards */}
        <div className="mt-10">
          <h1 className="text-[15vw] leading-none font-black text-center opacity-5 select-none">
            SUNCART
          </h1>
        </div>
      </div>
    </footer>
  );
}