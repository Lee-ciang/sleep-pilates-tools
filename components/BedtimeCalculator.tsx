"use client";

import { useMemo, useState } from "react";

type BedtimeResult = {
  time: string;
  cycles: number;
  duration: string;
};

const CYCLE_MINUTES = 90;
const RECOMMENDED_CYCLES = [6, 5, 4, 3];

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

function formatDuration(cycles: number) {
  const totalMinutes = cycles * CYCLE_MINUTES;
  const hours = totalMinutes / 60;

  return `${hours} hours`;
}

function calculateBedtimes(wakeTime: string): BedtimeResult[] {
  const baseDate = parseTimeToDate(wakeTime);

  return RECOMMENDED_CYCLES.map((cycles) => {
    const bedtime = new Date(baseDate);
    const totalCycleMinutes = cycles * CYCLE_MINUTES;

    bedtime.setMinutes(bedtime.getMinutes() - totalCycleMinutes);

    return {
      time: formatTime(bedtime),
      cycles,
      duration: formatDuration(cycles),
    };
  });
}

export default function BedtimeCalculator() {
  const [wakeTime, setWakeTime] = useState("07:00");

  const results = useMemo(
    () => calculateBedtimes(wakeTime),
    [wakeTime]
  );

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <label className="block text-sm font-medium text-gray-700">
        What time do you want to wake up?
      </label>

      <input
        type="time"
        value={wakeTime}
        onChange={(event) => setWakeTime(event.target.value)}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
      />

      <div className="mt-8">
        <h3 className="text-lg font-semibold">
          Recommended Bedtimes
        </h3>

        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          {results.map((result) => (
            <div
              key={`${result.time}-${result.cycles}`}
              className="rounded-lg border border-gray-200 p-4"
            >
              <p className="text-2xl font-bold">
                {result.time}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {result.duration}
              </p>

              <p className="text-sm text-gray-600">
                {result.cycles} sleep cycles
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        This calculator estimates bedtimes using 90-minute sleep cycles.
      </p>
    </div>
  );
}