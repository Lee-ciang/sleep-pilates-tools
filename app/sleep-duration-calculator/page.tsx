import type { Metadata } from "next";
import SleepDurationCalculator from "@/components/SleepDurationCalculator";

export const metadata: Metadata = {
  title: "Sleep Duration Calculator | Calculate Total Sleep Time",
  description:
    "Use this free sleep duration calculator to estimate how many hours and minutes you sleep between bedtime and wake-up time.",
};

export default function SleepDurationCalculatorPage() {
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
          Sleep Duration Calculator
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Calculate total sleep duration between your bedtime and wake-up time.
        </p>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">
            Calculator
          </h2>

          <div className="mt-6">
  <SleepDurationCalculator />
</div>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold">
    What Is a Sleep Duration Calculator?
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      A sleep duration calculator estimates how much time passes between your
      bedtime and wake-up time.
    </p>

    <p>
      It is useful for checking whether your sleep schedule gives you enough
      total rest across the night.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    How This Sleep Duration Calculator Works
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      This calculator converts your bedtime and wake-up time into minutes,
      then calculates the time difference between them.
    </p>

    <p>
      If your sleep schedule passes midnight, the calculator automatically
      accounts for the overnight time span.
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
        How many hours of sleep should I get?
      </h3>

      <p className="mt-2 text-gray-700">
        Sleep needs vary by person, but many adults aim for around 7 to 9
        hours of sleep per night.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Can this calculator handle overnight sleep?
      </h3>

      <p className="mt-2 text-gray-700">
        Yes. The calculator automatically handles sleep schedules that pass
        midnight.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Does this calculator measure sleep quality?
      </h3>

      <p className="mt-2 text-gray-700">
        No. This tool only estimates total sleep duration based on your
        selected times.
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
      href="/sleep-efficiency-calculator"
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
    >
      <h3 className="font-semibold">
        Sleep Efficiency Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Estimate sleep efficiency using time asleep and time in bed.
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
        Find recommended bedtimes or wake-up times with a fall-asleep buffer.
      </p>
    </a>
  </div>
</section>
      </div>
    </main>
  );
}
