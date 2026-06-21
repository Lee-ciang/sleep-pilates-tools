"use client";

import { useMemo, useState } from "react";
import type { ToolSlug } from "@/app/toolData";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function formatNumber(value: number, decimals = 1) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(decimals);
}

function scoreLabel(score: number) {
  if (score >= 85) {
    return "Strong";
  }

  if (score >= 70) {
    return "Good";
  }

  if (score >= 55) {
    return "Needs attention";
  }

  return "Low";
}

function parseTimeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

function formatMinutesAsTime(totalMinutes: number) {
  const normalized = ((Math.round(totalMinutes) % 1440) + 1440) % 1440;
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function minutesBetween(start: string, end: string) {
  const startMinutes = parseTimeToMinutes(start);
  const endMinutes = parseTimeToMinutes(end);
  const difference = endMinutes - startMinutes;

  return difference <= 0 ? difference + 1440 : difference;
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      {children}
    </label>
  );
}

function NumberInput({
  value,
  onChange,
  min,
  max,
  step,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
    />
  );
}

function TimeInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="time"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
    />
  );
}

function ResultCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
      {detail ? <p className="mt-1 text-sm text-gray-600">{detail}</p> : null}
    </div>
  );
}

export default function PhaseTwoSleepTool({ slug }: { slug: ToolSlug }) {
  if (slug === "sleep-score-calculator") {
    return <SleepScoreCalculator />;
  }

  if (slug === "sleep-quality-calculator") {
    return <SleepQualityCalculator />;
  }

  if (slug === "rem-sleep-calculator") {
    return <StageSleepCalculator stage="REM" />;
  }

  if (slug === "deep-sleep-calculator") {
    return <StageSleepCalculator stage="Deep" />;
  }

  if (slug === "sleep-age-calculator") {
    return <SleepAgeCalculator />;
  }

  if (slug === "sleep-needs-calculator") {
    return <SleepNeedsCalculator />;
  }

  if (slug === "sleep-consistency-calculator") {
    return <SleepConsistencyCalculator />;
  }

  return <SleepScheduleCalculator />;
}

function CalculatorShell({
  children,
  note,
}: {
  children: React.ReactNode;
  note: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {children}

      <p className="mt-6 text-sm text-gray-500">{note}</p>
    </div>
  );
}

function SleepScoreCalculator() {
  const [duration, setDuration] = useState(7.5);
  const [efficiency, setEfficiency] = useState(88);
  const [wakeups, setWakeups] = useState(1);
  const [consistency, setConsistency] = useState(45);

  const result = useMemo(() => {
    const durationScore = clamp(100 - Math.abs(duration - 8) * 16, 0, 100);
    const efficiencyScore = clamp(efficiency, 0, 100);
    const wakeupScore = clamp(100 - wakeups * 12, 0, 100);
    const consistencyScore = clamp(100 - consistency * 0.9, 0, 100);
    const score = Math.round(
      durationScore * 0.35 +
        efficiencyScore * 0.3 +
        wakeupScore * 0.2 +
        consistencyScore * 0.15,
    );

    return {
      score,
      durationScore,
      wakeupScore,
      consistencyScore,
    };
  }, [duration, efficiency, wakeups, consistency]);

  return (
    <CalculatorShell note="This score is an educational estimate based on the inputs you provide.">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Sleep duration (hours)">
          <NumberInput
            value={duration}
            onChange={setDuration}
            min={0}
            max={14}
            step={0.25}
          />
        </Field>

        <Field label="Sleep efficiency (%)">
          <NumberInput
            value={efficiency}
            onChange={setEfficiency}
            min={0}
            max={100}
            step={1}
          />
        </Field>

        <Field label="Nighttime wake-ups">
          <NumberInput
            value={wakeups}
            onChange={setWakeups}
            min={0}
            max={12}
            step={1}
          />
        </Field>

        <Field label="Schedule variation (minutes)">
          <NumberInput
            value={consistency}
            onChange={setConsistency}
            min={0}
            max={240}
            step={5}
          />
        </Field>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <ResultCard
          label="Estimated sleep score"
          value={`${result.score}/100`}
          detail={scoreLabel(result.score)}
        />
        <ResultCard
          label="Duration signal"
          value={`${Math.round(result.durationScore)}/100`}
        />
        <ResultCard
          label="Consistency signal"
          value={`${Math.round(result.consistencyScore)}/100`}
        />
      </div>
    </CalculatorShell>
  );
}

function SleepQualityCalculator() {
  const [duration, setDuration] = useState(7.5);
  const [restfulness, setRestfulness] = useState(7);
  const [latency, setLatency] = useState(20);
  const [wakeups, setWakeups] = useState(1);

  const result = useMemo(() => {
    const durationScore = clamp(100 - Math.abs(duration - 8) * 14, 0, 100);
    const restScore = clamp(restfulness * 10, 0, 100);
    const latencyScore = clamp(100 - Math.max(latency - 15, 0) * 2, 0, 100);
    const wakeupScore = clamp(100 - wakeups * 14, 0, 100);
    const score = Math.round(
      durationScore * 0.3 +
        restScore * 0.35 +
        latencyScore * 0.15 +
        wakeupScore * 0.2,
    );

    return {
      score,
      restScore,
      latencyScore,
    };
  }, [duration, restfulness, latency, wakeups]);

  return (
    <CalculatorShell note="Sleep quality is subjective, so use this as a simple self-check rather than a diagnosis.">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Sleep duration (hours)">
          <NumberInput
            value={duration}
            onChange={setDuration}
            min={0}
            max={14}
            step={0.25}
          />
        </Field>

        <Field label="Restfulness rating (1-10)">
          <NumberInput
            value={restfulness}
            onChange={setRestfulness}
            min={1}
            max={10}
            step={1}
          />
        </Field>

        <Field label="Time to fall asleep (minutes)">
          <NumberInput
            value={latency}
            onChange={setLatency}
            min={0}
            max={180}
            step={5}
          />
        </Field>

        <Field label="Nighttime wake-ups">
          <NumberInput
            value={wakeups}
            onChange={setWakeups}
            min={0}
            max={12}
            step={1}
          />
        </Field>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <ResultCard
          label="Estimated quality"
          value={`${result.score}/100`}
          detail={scoreLabel(result.score)}
        />
        <ResultCard
          label="Restfulness signal"
          value={`${Math.round(result.restScore)}/100`}
        />
        <ResultCard
          label="Sleep latency signal"
          value={`${Math.round(result.latencyScore)}/100`}
        />
      </div>
    </CalculatorShell>
  );
}

function StageSleepCalculator({ stage }: { stage: "REM" | "Deep" }) {
  const [sleepHours, setSleepHours] = useState(7.5);
  const [percentage, setPercentage] = useState(stage === "REM" ? 22 : 18);

  const result = useMemo(() => {
    const totalMinutes = sleepHours * 60;
    const stageMinutes = totalMinutes * (percentage / 100);
    const remainingMinutes = Math.max(totalMinutes - stageMinutes, 0);

    return {
      stageMinutes,
      remainingMinutes,
    };
  }, [sleepHours, percentage]);

  return (
    <CalculatorShell note="Sleep stage estimates vary from night to night and are not clinical measurements.">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Total sleep time (hours)">
          <NumberInput
            value={sleepHours}
            onChange={setSleepHours}
            min={0}
            max={14}
            step={0.25}
          />
        </Field>

        <Field label={`${stage} sleep estimate (%)`}>
          <NumberInput
            value={percentage}
            onChange={setPercentage}
            min={0}
            max={100}
            step={1}
          />
        </Field>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <ResultCard
          label={`Estimated ${stage.toLowerCase()} sleep`}
          value={`${formatNumber(result.stageMinutes, 0)} min`}
          detail={`${formatNumber(result.stageMinutes / 60)} hours`}
        />
        <ResultCard label="Input percentage" value={`${percentage}%`} />
        <ResultCard
          label="Other sleep time"
          value={`${formatNumber(result.remainingMinutes, 0)} min`}
        />
      </div>
    </CalculatorShell>
  );
}

function SleepAgeCalculator() {
  const [age, setAge] = useState(35);
  const [duration, setDuration] = useState(7.2);
  const [variation, setVariation] = useState(60);
  const [wakeups, setWakeups] = useState(1);
  const [energy, setEnergy] = useState(7);

  const result = useMemo(() => {
    const durationPenalty = Math.abs(duration - 8) * 2.2;
    const consistencyPenalty = variation / 45;
    const wakeupPenalty = wakeups * 0.8;
    const energyAdjustment = (7 - energy) * 1.2;
    const sleepAge = Math.round(
      clamp(
        age +
          durationPenalty +
          consistencyPenalty +
          wakeupPenalty +
          energyAdjustment,
        10,
        100,
      ),
    );
    const difference = sleepAge - age;

    return {
      sleepAge,
      difference,
    };
  }, [age, duration, variation, wakeups, energy]);

  return (
    <CalculatorShell note="Sleep age is a playful planning estimate, not a biological age or medical test.">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your age">
          <NumberInput value={age} onChange={setAge} min={10} max={100} />
        </Field>

        <Field label="Average sleep duration (hours)">
          <NumberInput
            value={duration}
            onChange={setDuration}
            min={0}
            max={14}
            step={0.25}
          />
        </Field>

        <Field label="Schedule variation (minutes)">
          <NumberInput
            value={variation}
            onChange={setVariation}
            min={0}
            max={240}
            step={5}
          />
        </Field>

        <Field label="Energy rating (1-10)">
          <NumberInput
            value={energy}
            onChange={setEnergy}
            min={1}
            max={10}
            step={1}
          />
        </Field>

        <Field label="Nighttime wake-ups">
          <NumberInput
            value={wakeups}
            onChange={setWakeups}
            min={0}
            max={12}
            step={1}
          />
        </Field>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ResultCard
          label="Estimated sleep age"
          value={`${result.sleepAge} years`}
          detail={
            result.difference <= 0
              ? "Younger than or aligned with your actual age"
              : `${result.difference} years above your actual age`
          }
        />
        <ResultCard label="Actual age" value={`${age} years`} />
      </div>
    </CalculatorShell>
  );
}

function SleepNeedsCalculator() {
  const [ageGroup, setAgeGroup] = useState("adult");
  const [activity, setActivity] = useState(1);
  const [sleepDebt, setSleepDebt] = useState(0);
  const [strain, setStrain] = useState(1);

  const result = useMemo(() => {
    const baseRanges: Record<string, [number, number]> = {
      teen: [8, 10],
      adult: [7, 9],
      older: [7, 8],
    };
    const base = baseRanges[ageGroup] ?? baseRanges.adult;
    const adjustment = activity * 0.25 + strain * 0.2 + Math.min(sleepDebt, 10) * 0.08;
    const low = base[0] + adjustment;
    const high = base[1] + adjustment;

    return {
      low,
      high,
      midpoint: (low + high) / 2,
    };
  }, [ageGroup, activity, sleepDebt, strain]);

  return (
    <CalculatorShell note="Sleep need ranges are planning estimates and can vary by person.">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Age group">
          <select
            value={ageGroup}
            onChange={(event) => setAgeGroup(event.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          >
            <option value="teen">Teen</option>
            <option value="adult">Adult</option>
            <option value="older">Older adult</option>
          </select>
        </Field>

        <Field label="Activity level (0-3)">
          <NumberInput
            value={activity}
            onChange={setActivity}
            min={0}
            max={3}
            step={1}
          />
        </Field>

        <Field label="Recent sleep debt (hours)">
          <NumberInput
            value={sleepDebt}
            onChange={setSleepDebt}
            min={0}
            max={30}
            step={0.5}
          />
        </Field>

        <Field label="Schedule strain (0-3)">
          <NumberInput
            value={strain}
            onChange={setStrain}
            min={0}
            max={3}
            step={1}
          />
        </Field>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <ResultCard
          label="Estimated range"
          value={`${formatNumber(result.low)}-${formatNumber(result.high)} h`}
        />
        <ResultCard
          label="Planning target"
          value={`${formatNumber(result.midpoint)} h`}
        />
        <ResultCard label="Age group" value={ageGroup} />
      </div>
    </CalculatorShell>
  );
}

function SleepConsistencyCalculator() {
  const [weekdayBed, setWeekdayBed] = useState("23:00");
  const [weekdayWake, setWeekdayWake] = useState("07:00");
  const [weekendBed, setWeekendBed] = useState("00:30");
  const [weekendWake, setWeekendWake] = useState("08:30");

  const result = useMemo(() => {
    const weekdayMidpoint =
      parseTimeToMinutes(weekdayBed) +
      minutesBetween(weekdayBed, weekdayWake) / 2;
    const weekendMidpoint =
      parseTimeToMinutes(weekendBed) +
      minutesBetween(weekendBed, weekendWake) / 2;
    const rawDifference = Math.abs(weekdayMidpoint - weekendMidpoint) % 1440;
    const difference = Math.min(rawDifference, 1440 - rawDifference);
    const score = Math.round(clamp(100 - difference * 0.75, 0, 100));

    return {
      difference,
      score,
      weekdayDuration: minutesBetween(weekdayBed, weekdayWake),
      weekendDuration: minutesBetween(weekendBed, weekendWake),
    };
  }, [weekdayBed, weekdayWake, weekendBed, weekendWake]);

  return (
    <CalculatorShell note="This calculator compares schedule timing, not overall sleep quality.">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Weekday bedtime">
          <TimeInput value={weekdayBed} onChange={setWeekdayBed} />
        </Field>

        <Field label="Weekday wake time">
          <TimeInput value={weekdayWake} onChange={setWeekdayWake} />
        </Field>

        <Field label="Weekend bedtime">
          <TimeInput value={weekendBed} onChange={setWeekendBed} />
        </Field>

        <Field label="Weekend wake time">
          <TimeInput value={weekendWake} onChange={setWeekendWake} />
        </Field>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <ResultCard
          label="Consistency score"
          value={`${result.score}/100`}
          detail={scoreLabel(result.score)}
        />
        <ResultCard
          label="Midpoint difference"
          value={`${formatNumber(result.difference, 0)} min`}
        />
        <ResultCard
          label="Sleep duration gap"
          value={`${formatNumber(
            Math.abs(result.weekdayDuration - result.weekendDuration),
            0,
          )} min`}
        />
      </div>
    </CalculatorShell>
  );
}

function SleepScheduleCalculator() {
  const [wakeTime, setWakeTime] = useState("07:00");
  const [targetSleep, setTargetSleep] = useState(8);
  const [windDown, setWindDown] = useState(30);

  const result = useMemo(() => {
    const wakeMinutes = parseTimeToMinutes(wakeTime);
    const targetBedtime = wakeMinutes - targetSleep * 60 - windDown;
    const cycleOptions = [6, 5, 4].map((cycles) => {
      const sleepMinutes = cycles * 90;

      return {
        cycles,
        bedtime: formatMinutesAsTime(wakeMinutes - sleepMinutes - windDown),
        sleepHours: sleepMinutes / 60,
      };
    });

    return {
      targetBedtime: formatMinutesAsTime(targetBedtime),
      cycleOptions,
    };
  }, [wakeTime, targetSleep, windDown]);

  return (
    <CalculatorShell note="Schedule results are planning estimates and include your selected wind-down buffer.">
      <div className="grid gap-6 sm:grid-cols-3">
        <Field label="Wake time">
          <TimeInput value={wakeTime} onChange={setWakeTime} />
        </Field>

        <Field label="Target sleep (hours)">
          <NumberInput
            value={targetSleep}
            onChange={setTargetSleep}
            min={4}
            max={12}
            step={0.25}
          />
        </Field>

        <Field label="Wind-down buffer (minutes)">
          <NumberInput
            value={windDown}
            onChange={setWindDown}
            min={0}
            max={180}
            step={5}
          />
        </Field>
      </div>

      <div className="mt-8">
        <ResultCard
          label="Target bedtime"
          value={result.targetBedtime}
          detail={`${targetSleep} hours sleep plus ${windDown} min wind-down`}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {result.cycleOptions.map((option) => (
          <ResultCard
            key={option.cycles}
            label={`${option.cycles} sleep cycles`}
            value={option.bedtime}
            detail={`${option.sleepHours} hours asleep`}
          />
        ))}
      </div>
    </CalculatorShell>
  );
}
