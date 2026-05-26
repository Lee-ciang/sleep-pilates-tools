"use client";

import { useMemo, useState } from "react";

type NapOption = {
  label: string;
  minutes: number;
  description: string;
};

const NAP_OPTIONS: NapOption[] = [
  {
    label: "Power Nap",
    minutes: 20,
    description: "Best for a quick energy boost.",
  },
  {
    label: "Recovery Nap",
    minutes: 45,
    description: "Useful when you have a little more time to rest.",
  },
  {
    label: "Full Cycle Nap",
    minutes: 90,
    description: "Completes one full sleep cycle.",
  },
];

function parseTimeToDate(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  return date;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function NapCalculator() {
  const [time, setTime] = useState("14:00");

  const results = useMemo(() => {
    const baseDate = parseTimeToDate(time);

    return NAP_OPTIONS.map((option) => {
      const wakeTime = new Date(baseDate);
      wakeTime.setMinutes(wakeTime.getMinutes() + option.minutes);

      return {
        ...option,
        wakeTime: formatTime(wakeTime),
      };
    });
  }, [time]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <label className="block text-sm font-medium text-gray-700">
        What time are you starting your nap?
      </label>

      <input
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {results.map((result) => (
          <div
            key={result.label}
            className="rounded-lg border border-gray-200 p-4"
          >
            <p className="text-sm font-medium text-green-700">
              {result.label}
            </p>

            <p className="mt-2 text-2xl font-bold">
              {result.wakeTime}
            </p>

            <p className="mt-2 text-sm text-gray-600">
              {result.minutes} minutes
            </p>

            <p className="mt-2 text-sm text-gray-600">
              {result.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-500">
        This calculator gives simple nap timing options based on short naps
        and one full 90-minute sleep cycle.
      </p>
    </div>
  );
}