"use client";

import { useMemo, useState } from "react";

export default function SleepEfficiencyCalculator() {
  const [timeInBed, setTimeInBed] = useState("8");
  const [timeAsleep, setTimeAsleep] = useState("7");

  const result = useMemo(() => {
    const bedHours = Number(timeInBed);
    const asleepHours = Number(timeAsleep);

    if (bedHours <= 0) {
      return {
        efficiency: 0,
      };
    }

    const efficiency = (asleepHours / bedHours) * 100;

    return {
      efficiency: efficiency.toFixed(1),
    };
  }, [timeInBed, timeAsleep]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Time in bed (hours)
          </span>

          <input
            type="number"
            min="0"
            step="0.5"
            value={timeInBed}
            onChange={(event) => setTimeInBed(event.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Time asleep (hours)
          </span>

          <input
            type="number"
            min="0"
            step="0.5"
            value={timeAsleep}
            onChange={(event) => setTimeAsleep(event.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          />
        </label>
      </div>

      <div className="mt-8 rounded-lg border border-gray-200 p-5">
        <p className="text-sm text-gray-600">
          Estimated sleep efficiency
        </p>

        <p className="mt-2 text-3xl font-bold">
          {result.efficiency}%
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Sleep efficiency is commonly estimated as the percentage of time
        asleep compared with total time spent in bed.
      </p>
    </div>
  );
}