import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
     
      <div className="absolute w-125 h-125 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse" />

     
      <div className="absolute text-[12rem] font-black text-primary opacity-20 select-none pointer-events-none">
        404
      </div>


      <div className="relative z-10 text-center px-6">
        <div className="text-7xl mb-4 animate__animated animate__bounceIn">🌞</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 animate__animated animate__bounceIn">
          Lost in the Sun?
        </h1>
        <p className="text-lg text-base-content/70 mb-8 max-w-md mx-auto animate__animated animate__bounceIn">
          Looks like this page went on vacation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__bounceIn">
          <Link href="/" className="btn btn-primary btn-lg">
            Go Home
          </Link>
          <Link href="/products" className="btn btn-outline btn-secondary btn-lg">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
