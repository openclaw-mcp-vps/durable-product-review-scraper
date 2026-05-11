export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Buy It For Life
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Aggregate Durable Product Reviews{" "}
          <span className="text-[#58a6ff]">Across Every Platform</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          We scrape Amazon, Reddit, and specialized forums to calculate real longevity scores for durable goods — so you buy once and buy right.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $12/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            ["50K+", "Products Tracked"],
            ["12+", "Review Sources"],
            ["Longevity", "Score Algorithm"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{stat}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-white text-5xl font-extrabold mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited product searches",
              "Longevity scores from 12+ sources",
              "Amazon, Reddit & forum reviews",
              "Side-by-side product comparison",
              "Background scraping & alerts"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How is the longevity score calculated?",
              "We aggregate review data from Amazon, Reddit's r/BuyItForLife, and specialist forums, then apply a weighted algorithm factoring in review age, sentiment, failure reports, and long-term ownership feedback."
            ],
            [
              "Which product categories are supported?",
              "Tools, cookware, clothing, electronics, outdoor gear, appliances, and more. If it's discussed in durability communities, we track it."
            ],
            [
              "Can I cancel my subscription anytime?",
              "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no questions asked."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
