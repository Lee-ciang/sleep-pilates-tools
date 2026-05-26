"use client";

import { useMemo, useState } from "react";

type Mode = "wake" | "bed";

type CycleResult = {
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

function calculateResults(mode: Mode, time: string): CycleResult[] {
  const baseDate = parseTimeToDate(time);

  return RECOMMENDED_CYCLES.map((cycles) => {
    const resultDate = new Date(baseDate);
    const totalCycleMinutes = cycles * CYCLE_MINUTES;

    if (mode === "wake") {
      resultDate.setMinutes(resultDate.getMinutes() - totalCycleMinutes);
    } else {
      resultDate.setMinutes(resultDate.getMinutes() + totalCycleMinutes);
    }

    return {
      time: formatTime(resultDate),
      cycles,
      duration: formatDuration(cycles),
    };
  });
}

export default function SleepCycleCalculator() {
  const [mode, setMode] = useState<Mode>("wake");
  const [time, setTime] = useState("07:00");

  const results = useMemo(() => calculateResults(mode, time), [mode, time]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            mode === "wake"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setMode("wake")}
        >
          I want to wake up at
        </button>

        <button
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            mode === "bed"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setMode("bed")}
        >
          I plan to sleep at
        </button>
      </div>

      <label className="mt-6 block text-sm font-medium text-gray-700">
        Select time
      </label>

      <input
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
      />

      <div className="mt-8">
        <h3 className="text-lg font-semibold">
          {mode === "wake"
            ? "Sleep Cycle Bedtimes"
            : "Sleep Cycle Wake-Up Times"}
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
        This calculator uses 90-minute sleep cycles without adding a
        fall-asleep buffer.
      </p>
    </div>
  );
}