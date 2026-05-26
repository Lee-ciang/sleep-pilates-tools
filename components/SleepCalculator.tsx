"use client";

import { useState } from "react";

type Mode = "wake" | "bed";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function SleepCalculator() {
  const [mode, setMode] = useState<Mode>("wake");
  const [time, setTime] = useState("07:00");

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex gap-3">
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

      <p className="mt-6 text-sm text-gray-500">
        Results will be calculated using 90-minute sleep cycles and a
        15-minute fall-asleep buffer.
      </p>
    </div>
  );
}