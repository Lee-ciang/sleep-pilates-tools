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
      </div>
    </main>
  );
}