"use client";

import { useMemo, useState } from "react";

function parseTimeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (minutes === 0) {
    return `${hours} hours`;
  }

  return `${hours} hours ${minutes} minutes`;
}

export default function SleepDurationCalculator() {
  const [bedtime, setBedtime] = useState("22:30");
  const [wakeTime, setWakeTime] = useState("07:00");

  const result = useMemo(() => {
    const bedtimeMinutes = parseTimeToMinutes(bedtime);
    const wakeMinutes = parseTimeToMinutes(wakeTime);

    let totalMinutes = wakeMinutes - bedtimeMinutes;

    if (totalMinutes <= 0) {
      totalMinutes += 24 * 60;
    }

    return {
      totalMinutes,
      duration: formatDuration(totalMinutes),
      hoursDecimal: (totalMinutes / 60).toFixed(1),
    };
  }, [bedtime, wakeTime]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Bedtime
          </span>

          <input
            type="time"
            value={bedtime}
            onChange={(event) => setBedtime(event.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Wake-up time
          </span>

          <input
            type="time"
            value={wakeTime}
            onChange={(event) => setWakeTime(event.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          />
        </label>
      </div>

      <div className="mt-8 rounded-lg border border-gray-200 p-5">
        <p className="text-sm text-gray-600">
          Total sleep duration
        </p>

        <p className="mt-2 text-3xl font-bold">
          {result.duration}
        </p>

        <p className="mt-2 text-sm text-gray-600">
          {result.hoursDecimal} hours total
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        This calculator estimates the time between bedtime and wake-up time,
        including sleep schedules that pass midnight.
      </p>
    </div>
  );
}