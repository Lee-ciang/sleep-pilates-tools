import type { Metadata } from "next";
import WakeTimeCalculator from "@/components/WakeTimeCalculator";

export const metadata: Metadata = {
  title: "Wake Time Calculator | Find the Best Time to Wake Up",
  description:
    "Use this free wake time calculator to estimate when to wake up based on your bedtime and 90-minute sleep cycles.",
};

export default function WakeTimeCalculatorPage() {
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
          Wake Time Calculator
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Estimate the best time to wake up based on your planned bedtime and
          common 90-minute sleep cycles.
        </p>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">
            Calculator
          </h2>

          <div className="mt-6">
  <WakeTimeCalculator />
</div>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold">
    What Is a Wake Time Calculator?
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      A wake time calculator estimates when you may want to wake up based on
      your planned bedtime and common 90-minute sleep cycles.
    </p>

    <p>
      Many people use wake time calculators to plan sleep schedules around
      complete sleep cycles rather than relying only on total sleep hours.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    How This Wake Time Calculator Works
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      This calculator adds 90-minute sleep cycles to your selected bedtime
      to estimate possible wake-up times.
    </p>

    <p>
      The results show several options so you can choose a wake-up time that
      fits your schedule while still planning around complete cycles.
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
        What time should I wake up?
      </h3>

      <p className="mt-2 text-gray-700">
        A practical wake-up time depends on when you go to bed, how many
        sleep cycles you want to complete, and your schedule.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Does this calculator include time to fall asleep?
      </h3>

      <p className="mt-2 text-gray-700">
        This wake time calculator focuses on 90-minute sleep cycles. For a
        version that includes a 15-minute fall-asleep buffer, use the Sleep
        Calculator.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Is waking up after a full sleep cycle better?
      </h3>

      <p className="mt-2 text-gray-700">
        Some people find it easier to wake up near the end of a sleep cycle
        rather than in the middle of deeper sleep.
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
  </div>
</section>
      </div>
    </main>
  );
}
