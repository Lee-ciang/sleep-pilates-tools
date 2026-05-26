import type { Metadata } from "next";
import BedtimeCalculator from "@/components/BedtimeCalculator";

export const metadata: Metadata = {
  title: "Bedtime Calculator | Find the Best Time to Go to Bed",
  description:
    "Use this free bedtime calculator to estimate when to go to bed based on your desired wake-up time and 90-minute sleep cycles.",
};

export default function BedtimeCalculatorPage() {
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
          Bedtime Calculator
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Estimate the best time to go to bed based on your planned wake-up
          time and common 90-minute sleep cycles.
        </p>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">
            Calculator
          </h2>

          <div className="mt-6">
  <BedtimeCalculator />
</div>
        </section>


        <section className="mt-12">
  <h2 className="text-2xl font-semibold">
    What Is a Bedtime Calculator?
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      A bedtime calculator estimates when you should go to bed based on your
      desired wake-up time and common 90-minute sleep cycles.
    </p>

    <p>
      Many people use bedtime calculators to plan sleep schedules around
      complete sleep cycles instead of focusing only on total hours slept.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    How This Bedtime Calculator Works
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      This calculator subtracts 90-minute sleep cycles from your selected
      wake-up time to suggest possible bedtimes.
    </p>

    <p>
      The results show several options so you can choose a bedtime that fits
      your schedule while still planning around complete cycles.
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
        What time should I go to bed?
      </h3>

      <p className="mt-2 text-gray-700">
        Your ideal bedtime depends on when you want to wake up and how many
        sleep cycles you want to complete.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Does this calculator include a fall-asleep buffer?
      </h3>

      <p className="mt-2 text-gray-700">
        This bedtime calculator focuses on 90-minute sleep cycles. For a
        version with a 15-minute fall-asleep buffer, use the Sleep Calculator.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Is 7.5 hours of sleep enough?
      </h3>

      <p className="mt-2 text-gray-700">
        7.5 hours equals five 90-minute sleep cycles and may be a practical
        target for many schedules, though individual sleep needs can vary.
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
      className="rounded-lg border border-gray-200 p-5 hover:border-blue-300"
    >
      <h3 className="font-semibold">
        Sleep Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Find recommended bedtimes or wake-up times with a fall-asleep buffer.
      </p>
    </a>

    <a
      href="/sleep-cycle-calculator"
      className="rounded-lg border border-gray-200 p-5 hover:border-blue-300"
    >
      <h3 className="font-semibold">
        Sleep Cycle Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Plan sleep around full 90-minute sleep cycles.
      </p>
    </a>

    <a
      href="/sleep-debt-calculator"
      className="rounded-lg border border-gray-200 p-5 hover:border-blue-300"
    >
      <h3 className="font-semibold">
        Sleep Debt Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Estimate how much sleep you may be missing over time.
      </p>
    </a>
  </div>
</section>
      </div>
    </main>
  );
}