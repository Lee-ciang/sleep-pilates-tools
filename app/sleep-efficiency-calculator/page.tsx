import type { Metadata } from "next";
import SleepEfficiencyCalculator from "@/components/SleepEfficiencyCalculator";

export const metadata: Metadata = {
  title: "Sleep Efficiency Calculator | Estimate Sleep Efficiency",
  description:
    "Use this free sleep efficiency calculator to estimate the percentage of time spent asleep while in bed.",
};

export default function SleepEfficiencyCalculatorPage() {
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
          Sleep Efficiency Calculator
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Estimate sleep efficiency by comparing time asleep with total time
          spent in bed.
        </p>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">
            Calculator
          </h2>

          <div className="mt-6">
  <SleepEfficiencyCalculator />
</div>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold">
    What Is Sleep Efficiency?
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      Sleep efficiency compares the amount of time you spend asleep with the
      total amount of time you spend in bed.
    </p>

    <p>
      For example, if you spend 8 hours in bed and sleep for 7 hours, your
      estimated sleep efficiency is 87.5%.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    How This Sleep Efficiency Calculator Works
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      This calculator divides your time asleep by your total time in bed,
      then converts the result into a percentage.
    </p>

    <p>
      The formula is simple: time asleep divided by time in bed, multiplied
      by 100.
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
        What is a good sleep efficiency score?
      </h3>

      <p className="mt-2 text-gray-700">
        Many sleep resources describe higher sleep efficiency percentages as
        a sign of spending more time asleep while in bed.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Can this calculator measure sleep quality?
      </h3>

      <p className="mt-2 text-gray-700">
        No. This calculator only estimates sleep efficiency based on time
        asleep and time in bed.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Why is sleep efficiency important?
      </h3>

      <p className="mt-2 text-gray-700">
        Sleep efficiency can help you understand how much of your time in bed
        is actually spent sleeping.
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
      href="/sleep-duration-calculator"
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
    >
      <h3 className="font-semibold">
        Sleep Duration Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Calculate total sleep time between bedtime and wake-up time.
      </p>
    </a>

    <a
      href="/sleep-debt-calculator"
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
    >
      <h3 className="font-semibold">
        Sleep Debt Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Estimate how much sleep you may be missing over time.
      </p>
    </a>

    <a
      href="/sleep-calculator"
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
    >
      <h3 className="font-semibold">
        Sleep Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Find recommended bedtimes or wake-up times using sleep cycles.
      </p>
    </a>
  </div>
</section>
      </div>
    </main>
  );
}
