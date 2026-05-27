const tools = [
  {
    name: "Sleep Calculator",
    href: "/sleep-calculator",
    description:
      "Find recommended bedtimes or wake-up times using sleep cycles and a fall-asleep buffer.",
  },
  {
    name: "Sleep Debt Calculator",
    href: "/sleep-debt-calculator",
    description:
      "Estimate how much sleep you may be missing over several days.",
  },
  {
    name: "Nap Calculator",
    href: "/nap-calculator",
    description:
      "Choose between power naps, recovery naps, and full-cycle naps.",
  },
  {
    name: "Bedtime Calculator",
    href: "/bedtime-calculator",
    description:
      "Estimate when to go to bed based on your planned wake-up time.",
  },
  {
    name: "Sleep Cycle Calculator",
    href: "/sleep-cycle-calculator",
    description:
      "Plan sleep around 90-minute cycles without a fall-asleep buffer.",
  },
  {
    name: "Wake Time Calculator",
    href: "/wake-time-calculator",
    description:
      "Estimate wake-up times based on your bedtime and sleep cycles.",
  },
  {
    name: "Sleep Duration Calculator",
    href: "/sleep-duration-calculator",
    description:
      "Calculate total sleep duration between bedtime and wake-up time.",
  },
  {
    name: "Sleep Efficiency Calculator",
    href: "/sleep-efficiency-calculator",
    description:
      "Estimate sleep efficiency using time asleep and time in bed.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <section>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Free Sleep Tools
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Sleep & Pilates Tools
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Free sleep calculators, stretching tools, and wellness planning
            resources to help you sleep better, plan your rest, and build
            healthier daily routines.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">
            Sleep Calculators and Tools
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Start with one of the calculators below to plan your bedtime,
            wake-up time, nap length, sleep duration, or sleep efficiency.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold">
                  {tool.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {tool.description}
                </p>

                <p className="mt-4 text-sm font-medium text-blue-600">
                  Open tool →
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t pt-10">
          <h2 className="text-2xl font-semibold">
            Why Use Sleep Planning Tools?
          </h2>

          <div className="mt-5 space-y-4 text-gray-700">
            <p>
              Sleep tools can help turn vague sleep goals into practical
              schedules. Instead of guessing when to go to bed or wake up, you
              can use simple calculators to estimate timing, duration, and
              consistency.
            </p>

            <p>
              These tools are designed for everyday planning and education.
              They are not medical tools, but they can help you better
              understand your sleep routine.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}