const brands = [
  {
    name: "SunShade",
    emoji: "🕶️",
    tagline: "Eye protection, perfected.",
  },
  {
    name: "CoastalWear",
    emoji: "👗",
    tagline: "Beach fashion essentials.",
  },
  {
    name: "GlowGuard",
    emoji: "🧴",
    tagline: "Skincare that protects.",
  },
  {
    name: "TideWalker",
    emoji: "🩴",
    tagline: "Walk the shore in comfort.",
  },
];

export default function TopBrands() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-10">
          Top Brands We Carry
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide justify-start md:justify-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md min-w-50 shrink-0 snap-center"
            >
              <div className="card-body items-center text-center">
                <span className="text-6xl">{brand.emoji}</span>
                <h3 className="card-title text-xl font-black">{brand.name}</h3>
                <p className="text-sm text-base-content/60 italic">{brand.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
