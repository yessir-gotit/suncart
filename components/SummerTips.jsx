const tips = [
  {
    emoji: "💧",
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water a day to keep your skin glowing and body energized under the sun.",
  },
  {
    emoji: "☀️",
    title: "Wear SPF Daily",
    description: "Apply SPF 30+ sunscreen every morning, even on cloudy days, to protect against harmful UV rays.",
  },
  {
    emoji: "👕",
    title: "Light Fabrics Only",
    description: "Opt for breathable cotton, linen, and bamboo fabrics to stay cool and comfortable in the heat.",
  },
  {
    emoji: "🕶️",
    title: "Protect Your Eyes",
    description: "Wear UV400 sunglasses to shield your eyes from UV damage and reduce glare on bright days.",
  },
];

export default function SummerTips() {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-10">
          Summer Care Tips 🌴
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="card bg-base-100 shadow-md">
              <div className="card-body items-center text-center">
                <span className="text-5xl">{tip.emoji}</span>
                <h3 className="card-title text-lg font-bold">{tip.title}</h3>
                <p className="text-sm text-base-content/70">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
