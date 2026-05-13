"use client";

import Link from "next/link";
import { Sun, ShoppingBag, Flame, Palmtree } from "lucide-react";
import { useTrail, useSpring, animated } from "@react-spring/web";

export default function Hero() {

  const textTrail = useTrail(4, {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 280, friction: 55 },
  });


  const visualTrail = useTrail(3, {
    from: { opacity: 0, scale: 0.85, y: 30 },
    to: { opacity: 1, scale: 1, y: 0 },
    config: { mass: 1.2, tension: 200, friction: 40 },
    delay: 200,
  });


  const [card1Spring, card1Api] = useSpring(() => ({
    rotate: -6,
    scale: 1,
    config: { mass: 1, tension: 300, friction: 25 },
  }));

  const [card2Spring, card2Api] = useSpring(() => ({
    rotate: 6,
    scale: 1,
    config: { mass: 1, tension: 300, friction: 25 },
  }));

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center gap-8 sm:gap-12 px-5 sm:px-8 lg:px-15 xl:px-25 py-20 lg:py-0 overflow-hidden">

      {/* I Just copied this background from internet and edited some values :)*/}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-base-100 to-secondary/5 opacity-0 animate-[fadeIn_1.5s_ease-out_0s_both]"></div>
        <div className="absolute -top-1/4 right-0 w-200 h-200 bg-primary/15 rounded-full blur-[120px] sm:blur-[160px] opacity-0 animate-[fadeIn_2s_ease-out_0.2s_both]"></div>
        <div className="absolute -bottom-1/4 left-1/4 w-[700px] h-[700px] bg-secondary/15 rounded-full blur-[120px] sm:blur-[160px] opacity-0 animate-[fadeIn_2s_ease-out_0.4s_both]"></div>
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] sm:blur-[140px] opacity-0 animate-[fadeIn_2s_ease-out_0.3s_both]"></div>
      </div>

  
      <div className="relative z-1 flex-1 space-y-5 sm:space-y-7 lg:space-y-8 lg:max-w-[50%]">
        {/* Badge */}
        <animated.div style={textTrail[0]}>
          <div className="badge badge-primary badge-outline gap-2 px-3 py-2.5 sm:px-4 sm:py-3">
            <Sun size={14} className="sm:w-4 sm:h-4" />
            <span className="text-[11px] sm:text-sm font-semibold tracking-wide">
              Summer Collection 2024
            </span>
          </div>
        </animated.div>

        <animated.h1
          style={textTrail[1]}
          className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-8xl font-black"
        >
          Beat the Heat
          <br />
          in Style.
        </animated.h1>

     
        <animated.p
          style={textTrail[2]}
          className="text-sm sm:text-lg md:text-xl text-base-content/60 max-w-md lg:max-w-lg leading-relaxed"
        >
          Discover the coolest summer essentials — from premium sunglasses to
          beach-ready gear. Your ultimate summer glow-up starts here.
        </animated.p>

        <animated.div
          style={textTrail[3]}
          className="flex flex-wrap items-center gap-2.5 sm:gap-4"
        >
          <Link
            href="/products"
            className="btn btn-primary btn-md sm:btn-lg gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            Shop Now
          </Link>
          <Link
            href="/products"
            className="btn btn-outline btn-md sm:btn-lg border-2 hover:bg-base-200/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Deals
          </Link>
        </animated.div>
      </div>


      <div className="relative z-2 w-full lg:w-[45%] xl:w-[48%] min-h-112.5 sm:min-h-137.5 lg:min-h-150 flex items-center justify-center">

        {/* Sun icon */}
        <animated.div
          style={visualTrail[0]}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* ring though it's not visible but for a nerd like me it looks good lol :) */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full border-2 border-dashed border-accent/20 animate-[spin_40s_linear_infinite]"></div>

          
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white/5 dark:bg-white/2 backdrop-blur-md border border-white/10 shadow-2xl"></div>

          <div className="relative z-10 p-5 sm:p-6 md:p-8 bg-linear-to-br from-primary/20 to-accent/20 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl shadow-accent/20">
            <Sun className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-accent drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]" strokeWidth={1.5} />
          </div>

          <span className="relative z-10 mt-4 text-xs sm:text-sm font-bold tracking-[0.2em] text-accent/70 uppercase">
            Est. 2026
          </span>
        </animated.div>

        {/* our first card */}
        <animated.div
          style={{ ...card1Spring, ...visualTrail[1] }}
          onMouseEnter={() => card1Api.start({ rotate: 0, scale: 1.03 })}
          onMouseLeave={() => card1Api.start({ rotate: -6, scale: 1 })}
          className="absolute top-[10%] left-[5%] sm:top-[15%] sm:left-[10%] w-44 sm:w-52 md:w-60 bg-base-100/60 dark:bg-base-100/10 backdrop-blur-2xl border border-base-200/80 dark:border-white/10 shadow-2xl rounded-2xl p-3 sm:p-4 md:p-5 "
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-1.5 sm:p-2 rounded-xl bg-primary/20">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>


            <div>
              <p className="font-bold text-base-content text-xs sm:text-sm md:text-base leading-tight">
                Hot Deals
              </p>

              <p className="text-[10px] sm:text-xs text-base-content/50">
                Limited Time
              </p>
            </div>
          </div>
          <div className="badge badge-secondary badge-outline gap-1 text-[10px] sm:text-xs py-1">

            <span>🔥</span> Up to 50% Off
          </div>
        </animated.div>

        {/* Our Second Card */}
        <animated.div
          style={{ ...card2Spring, ...visualTrail[2] }}
          onMouseEnter={() => card2Api.start({ rotate: 0, scale: 1.03 })}
          onMouseLeave={() => card2Api.start({ rotate: 6, scale: 1 })}
          className="absolute bottom-[10%] right-[5%] sm:bottom-[15%] sm:right-[10%] w-44 sm:w-52 md:w-60 bg-base-100/60 dark:bg-base-100/10 backdrop-blur-2xl border border-base-200/80 dark:border-white/10 shadow-2xl rounded-2xl p-3 sm:p-4 md:p-5 cursor-default"
        >

          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-1.5 sm:p-2 rounded-xl bg-secondary/20">
              <Palmtree className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            </div>
            <div>
              <p className="font-bold text-base-content text-xs sm:text-sm md:text-base leading-tight">
                Summer Essentials
              </p>
              <p className="text-[10px] sm:text-xs text-base-content/50">
                New Arrivals
              </p>
            </div>
          </div>
          <div className="badge badge-primary badge-outline gap-1 text-[10px] sm:text-xs py-1">
            <span>✨</span> Shop Collection
          </div>
        </animated.div>
      </div>
    </section>
  );
}
