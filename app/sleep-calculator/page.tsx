import type { Metadata } from "next";
import SleepCalculator from "@/components/SleepCalculator";


export const metadata: Metadata = {
  title: "Sleep Calculator | Best Bedtime and Wake-Up Times",
  description:
    "Use this free sleep calculator to find the best bedtime or wake-up time based on 90-minute sleep cycles and a 15-minute fall-asleep buffer.",
};


export default function SleepCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        <a
  href="/"
  className="text-sm font-medium text-blue-600 hover:underline"
>
  ← Back to all tools
</a>
        <h1 className="text-4xl font-bold">
          Sleep Calculator
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Calculate the best bedtime or wake-up time based on
          natural 90-minute sleep cycles.
        </p>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">
            Calculator
          </h2>

          <div className="mt-6">
  <SleepCalculator />
</div>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold">
    What Do The Results Mean?
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      <strong>Best (6 cycles):</strong> Around 9 hours of sleep.
      This option is ideal for most adults when schedule allows.
    </p>

    <p>
      <strong>Good (5 cycles):</strong> Around 7.5 hours of sleep.
      This is often considered the practical target for many people.
    </p>

    <p>
      <strong>Minimum (4 cycles):</strong> Around 6 hours of sleep.
      Suitable occasionally, but not recommended as a long-term habit.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-semibold">
    How This Sleep Calculator Works
  </h2>

  <div className="mt-6 space-y-4 text-gray-700">
    <p>
      This calculator uses 90-minute sleep cycles. A full sleep cycle
      usually includes light sleep, deep sleep, and REM sleep.
    </p>

    <p>
      The calculator also includes a 15-minute fall-asleep buffer,
      because most people do not fall asleep instantly after going to bed.
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
        How many hours of sleep do adults need?
      </h3>

      <p className="mt-2 text-gray-700">
        Most adults generally benefit from around 7 to 9 hours of sleep per
        night, although individual needs can vary.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Why does this calculator use 90-minute cycles?
      </h3>

      <p className="mt-2 text-gray-700">
        Sleep is commonly described as occurring in cycles of roughly
        90 minutes, moving through different stages before repeating.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Why is there a 15-minute fall-asleep buffer?
      </h3>

      <p className="mt-2 text-gray-700">
        Most people do not fall asleep immediately after getting into bed,
        so the calculator includes a small buffer for more realistic results.
      </p>
    </div>
  </div>
</section>
      </div>
    </main>
  );
}