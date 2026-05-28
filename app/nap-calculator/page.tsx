import type { Metadata } from "next";
import NapCalculator from "@/components/NapCalculator";

export const metadata: Metadata = {
  title: "Nap Calculator | Find the Best Nap Length",
  description:
    "Use this free nap calculator to find a practical nap length based on short naps, full sleep cycles, and your schedule.",
};

export default function NapCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <a
          href="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to all tools
        </a>

        <h1 className="mt-6 text-4xl font-bold">
          Nap Calculator
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Find a practical nap length based on your schedule and how much
          time you have to rest.
        </p>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">
            Calculator
          </h2>

          <div className="mt-6">
  <NapCalculator />
</div>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold">
    What Is a Power Nap?
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      A power nap is a short nap, often around 20 minutes, designed to help
      you rest without entering a deeper sleep stage.
    </p>

    <p>
      Short naps can be useful when you want a quick reset during the day
      without feeling too groggy afterward.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    How Long Should a Nap Be?
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      A 20-minute nap is often used for a quick energy boost. A 45-minute nap
      may give you more rest, while a 90-minute nap is designed to complete
      one full sleep cycle.
    </p>

    <p>
      The best nap length depends on your schedule, how tired you feel, and
      whether you want a short reset or a longer recovery nap.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    Frequently Asked Questions
  </h2>

  <div className="mt-6 space-y-6">
    <div>
      <h3 className="font-semibold">
        Is a 20-minute nap enough?
      </h3>

      <p className="mt-2 text-gray-700">
        A 20-minute nap can be enough for a short rest because it may help
        you avoid waking from deeper sleep.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Why does this calculator include a 90-minute nap?
      </h3>

      <p className="mt-2 text-gray-700">
        A 90-minute nap is included because it roughly matches one full sleep
        cycle, which may reduce the chance of waking in the middle of deeper sleep.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Should I nap late in the day?
      </h3>

      <p className="mt-2 text-gray-700">
        Late naps may make it harder to fall asleep at night for some people.
        Earlier naps are often easier to fit into a stable sleep schedule.
      </p>
    </div>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    Related Sleep Tools
  </h2>

  <div className="mt-6 grid gap-4 sm:grid-cols-3">
    <a
      href="/sleep-calculator"
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
    >
      <h3 className="font-semibold">
        Sleep Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Find recommended bedtimes or wake-up times based on sleep cycles.
      </p>
    </a>

    <a
      href="/sleep-cycle-calculator"
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
    >
      <h3 className="font-semibold">
        Sleep Cycle Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Plan sleep around full 90-minute sleep cycles.
      </p>
    </a>

    <a
      href="/bedtime-calculator"
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
    >
      <h3 className="font-semibold">
        Bedtime Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Estimate when to go to bed based on your planned wake-up time.
      </p>
    </a>
  </div>
</section>
      </div>
    </main>
  );
}
