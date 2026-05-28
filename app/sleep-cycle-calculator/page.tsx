import type { Metadata } from "next";
import SleepCycleCalculator from "@/components/SleepCycleCalculator";

export const metadata: Metadata = {
  title: "Sleep Cycle Calculator | Plan Around 90-Minute Cycles",
  description:
    "Use this free sleep cycle calculator to estimate ideal bedtimes and wake-up times based on 90-minute sleep cycles.",
};

export default function SleepCycleCalculatorPage() {
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
          Sleep Cycle Calculator
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Calculate recommended sleep and wake times using 90-minute sleep
          cycles.
        </p>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">
            Calculator
          </h2>

          <div className="mt-6">
  <SleepCycleCalculator />
</div>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold">
    What Is a Sleep Cycle?
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      A sleep cycle is commonly described as a repeating pattern of sleep
      stages that lasts about 90 minutes.
    </p>

    <p>
      Planning sleep around full cycles can help you estimate bedtimes or
      wake-up times that may feel more natural.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    How This Sleep Cycle Calculator Works
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      This calculator uses 90-minute sleep cycles to estimate possible
      bedtimes or wake-up times.
    </p>

    <p>
      Unlike the main Sleep Calculator, this tool does not add a 15-minute
      fall-asleep buffer. It focuses only on complete cycle timing.
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
        How long is one sleep cycle?
      </h3>

      <p className="mt-2 text-gray-700">
        One sleep cycle is often estimated at about 90 minutes, although
        the exact length can vary from person to person.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Is this different from the Sleep Calculator?
      </h3>

      <p className="mt-2 text-gray-700">
        Yes. The Sleep Calculator includes a 15-minute fall-asleep buffer,
        while this Sleep Cycle Calculator focuses only on 90-minute cycles.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        How many sleep cycles should I aim for?
      </h3>

      <p className="mt-2 text-gray-700">
        Many adults plan around 4 to 6 sleep cycles, depending on their
        schedule and sleep needs.
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
        Find recommended bedtimes or wake-up times with a fall-asleep buffer.
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

    <a
      href="/wake-time-calculator"
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
    >
      <h3 className="font-semibold">
        Wake Time Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Estimate wake-up times based on your bedtime and sleep cycles.
      </p>
    </a>
  </div>
</section>
      </div>
    </main>
  );
}
