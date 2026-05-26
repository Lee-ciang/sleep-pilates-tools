"use client";

import { useMemo, useState } from "react";

function formatNumber(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

export default function SleepDebtCalculator() {
  const [targetSleep, setTargetSleep] = useState(8);
  const [actualSleep, setActualSleep] = useState(6.5);
  const [days, setDays] = useState(7);

  const result = useMemo(() => {
    const dailyDebt = Math.max(targetSleep - actualSleep, 0);
    const totalDebt = dailyDebt * days;
    const equivalentNights = targetSleep > 0 ? totalDebt / targetSleep : 0;

    return {
      dailyDebt,
      totalDebt,
      equivalentNights,
    };
  }, [targetSleep, actualSleep, days]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-3">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Target sleep per night
          </span>
          <input
            type="number"
            min="1"
            max="12"
            step="0.5"
            value={targetSleep}
            onChange={(event) => setTargetSleep(Number(event.target.value))}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Actual sleep per night
          </span>
          <input
            type="number"
            min="0"
            max="12"
            step="0.5"
            value={actualSleep}
            onChange={(event) => setActualSleep(Number(event.target.value))}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Number of days
          </span>
          <input
            type="number"
            min="1"
            max="30"
            step="1"
            value={days}
            onChange={(event) => setDays(Number(event.target.value))}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          />
        </label>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Daily sleep debt</p>
          <p className="mt-2 text-2xl font-bold">
            {formatNumber(result.dailyDebt)} hours
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total sleep debt</p>
          <p className="mt-2 text-2xl font-bold">
            {formatNumber(result.totalDebt)} hours
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Equivalent nights</p>
          <p className="mt-2 text-2xl font-bold">
            {formatNumber(result.equivalentNights)}
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        This estimate compares your target sleep need with your average sleep
        time over a selected number of days.
      </p>
    </div>
  );
}