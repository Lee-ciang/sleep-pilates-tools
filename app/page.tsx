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
            <li>Sleep Calculator</li>
            <li>Sleep Debt Calculator</li>
            <li>Nap Calculator</li>
            <li>Stretch Routine Generator</li>
            <li>Sleep Cycle Calculator</li>
          </ul>
        </section>
      </div>
    </main>
  );
}