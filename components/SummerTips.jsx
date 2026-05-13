"use client";

import { Droplets, Sun, Wind } from "lucide-react";

export default function SummerTips() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#fff7ed]">
      
      {/* Lol made it artistic */}
      <span className="hidden sm:block text-[15rem] font-black text-orange-500/5 absolute -top-20 -left-10 z-0 select-none leading-none">
        SUMMER
      </span>

      <div className="relative z-5 text-center">
        <h2 className="text-5xl font-black text-base-content">
          Summer Survival Guide
        </h2>

        <div className="w-24 h-1.5 bg-orange-500 rounded-full mt-6 mx-auto" />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 mt-16 relative z-10 max-w-7xl mx-auto px-6">

        <div
          className="md:row-span-2 md:col-span-1 bg-linear-to-br from-blue-50 to-cyan-100 rounded-4xl p-10 relative overflow-hidden group border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 animate__animated animate__fadeInUp"
          style={{ animationDelay: '500ms' }}
          onAnimationEnd={(e) => {
            e.currentTarget.classList.remove('animate__animated', 'animate__fadeInUp');
          }}
        >
          <Droplets
            size={200}
            className="absolute -bottom-10 -right-10 text-cyan-500/10 group-hover:scale-110 transition-transform duration-700 "
            strokeWidth={1}
          />

          <div className="relative z-5 h-full flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-sm font-semibold text-blue-800">
                01
              </span>

              <h3 className="text-4xl font-black text-blue-900 mt-8 leading-tight">
                Hydrate<br />Daily
              </h3>

              <p className="mt-4 text-blue-700/80 leading-relaxed max-w-xs">
                Beat the heat with proper hydration. Keep your skin glowing and your energy high all summer long.
              </p>
            </div>

            {/* AI suggested me emojis because it was looking blank */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["💧", "🧊", "🍉"].map((emoji, index) => (
                  <span
                    key={index}
                    className="w-9 h-9 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 flex items-center justify-center text-sm shadow-sm"
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-blue-600/70 tracking-wide">
                3 essential tips
              </span>
            </div>
          </div>
        </div>

        {/* Man animate.css is so confusing asf couldn't solve it without AI's help */}
        <div
          className="md:col-span-2 bg-linear-to-r from-orange-100 to-amber-50 rounded-4xl p-10 relative overflow-hidden group border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 animate__animated animate__fadeInUp"
          style={{ animationDelay: '300ms' }}
          onAnimationEnd={(e) => {
            e.currentTarget.classList.remove('animate__animated', 'animate__fadeInUp');
          }}
        >
          <Sun
            size={150}
            className="absolute -top-10 -right-5 text-orange-500/10 group-hover:rotate-12 transition-transform duration-700 pointer-events-none"
            strokeWidth={1}
          />

          <div className="relative z-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-sm font-semibold text-orange-800">
              02
            </span>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="text-4xl font-black text-orange-900 leading-tight">
                  SPF is<br />Non-Negotiable
                </h3>
                <p className="mt-3 text-orange-700/80 leading-relaxed max-w-lg">
                  Shield your skin from harmful UV rays year-round. A broad-spectrum SPF 50 is your best defense against premature aging and sun damage.
                </p>
              </div>

           
              <div className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/60">
                <span className="text-2xl">☀️</span>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-orange-800/60 uppercase tracking-wider">UV Index Today</p>
                  <p className="text-lg font-black text-orange-900 uppercase">Very High</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          className="md:col-span-2 bg-base-100 rounded-4xl p-10 relative overflow-hidden group border border-base-200 shadow-sm hover:shadow-xl transition-all duration-500 animate__animated animate__fadeInUp"
          style={{ animationDelay: '300ms', animationFillMode: 'both'}}
          onAnimationEnd={(e) => {
            e.currentTarget.classList.remove('animate__animated', 'animate__fadeInUp');
          }}
        >
          <Wind
            size={150}
            className="absolute -bottom-5 -right-5 text-base-content/5 group-hover:-translate-x-4 transition-transform duration-700 pointer-events-none"
            strokeWidth={1}
          />

          <div className="relative z-10">
            
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100/60 backdrop-blur-md border border-base-200 text-sm font-semibold text-base-content/70">
              03
            </span>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="max-w-lg">
                <h3 className="text-4xl font-black text-base-content leading-tight">
                  Seek the<br />Breeze
                </h3>
                <p className="mt-3 text-base-content/60 leading-relaxed">
                  Stay cool and comfortable with breathable fabrics, shaded spots, and a gentle breeze. Your summer sanctuary awaits.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-200">
                <span className="text-2xl">🌬️</span>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-base-content/50 uppercase tracking-wider">Feels Like</p>
                  <p className="text-lg font-black text-base-content">72°F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}