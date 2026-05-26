import type { Metadata } from "next";
import SleepDebtCalculator from "@/components/SleepDebtCalculator";


export const metadata: Metadata = {
  title: "Sleep Debt Calculator | Estimate Your Sleep Deficit",
  description:
    "Use this free sleep debt calculator to estimate how much sleep you may be missing compared with your target sleep need.",
};

export default function SleepDebtCalculatorPage() {
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
          Sleep Debt Calculator
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Estimate your weekly sleep debt by comparing how much sleep you need
          with how much sleep you actually get.
        </p>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">
            Calculator
          </h2>

          <div className="mt-6">
  <SleepDebtCalculator />
</div>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold">
    What Is Sleep Debt?
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      Sleep debt is the difference between the amount of sleep your body
      needs and the amount of sleep you actually get.
    </p>

    <p>
      For example, if your target sleep need is 8 hours per night but you
      only sleep 6.5 hours, you may build up 1.5 hours of sleep debt each day.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    How Sleep Debt Accumulates
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      Sleep debt can build up when you regularly sleep less than your target
      sleep need. Even small nightly gaps can add up over several days.
    </p>

    <p>
      This calculator helps estimate that accumulated gap so you can better
      understand whether your current sleep schedule may be leaving you short.
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
        Can sleep debt be recovered?
      </h3>

      <p className="mt-2 text-gray-700">
        Some short-term sleep debt may improve with more consistent rest,
        but it is usually better to build a stable sleep schedule than to
        rely on catching up later.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Is one night of poor sleep a problem?
      </h3>

      <p className="mt-2 text-gray-700">
        One short night is common and not always a major issue. Sleep debt
        becomes more concerning when short sleep continues across multiple days.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        What if I need different amounts of sleep on different days?
      </h3>

      <p className="mt-2 text-gray-700">
        This calculator uses averages for a simple estimate. If your schedule
        changes often, use your typical target sleep and average actual sleep.
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
        Find recommended bedtimes or wake-up times based on sleep cycles.
      </p>
    </a>

    <div className="rounded-lg border border-gray-200 p-5">
      <h3 className="font-semibold">
        Nap Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Find a practical nap length based on your schedule.
      </p>
    </div>

    <div className="rounded-lg border border-gray-200 p-5">
      <h3 className="font-semibold">
        Sleep Cycle Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Plan sleep around full 90-minute sleep cycles.
      </p>
    </div>
  </div>
</section>
      </div>
    </main>
  );
}