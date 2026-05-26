export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          Sleep & Pilates Tools
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Free sleep calculators, stretching tools, and wellness planning
          resources to help you sleep better and move better.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Featured Tools
          </h2>

          <ul className="mt-6 space-y-3">
            <li>
  <a
    href="/sleep-calculator"
    className="text-blue-600 hover:underline"
  >
    Sleep Calculator
  </a>
</li>
            <li>
  <a
    href="/sleep-debt-calculator"
    className="text-blue-600 hover:underline"
  >
    Sleep Debt Calculator
  </a>
</li>
            <li>
  <a
    href="/nap-calculator"
    className="text-blue-600 hover:underline"
  >
    Nap Calculator
  </a>
</li>
            <li>Stretch Routine Generator</li>
            <li>Sleep Cycle Calculator</li>
          </ul>
        </section>
      </div>
    </main>
  );
}