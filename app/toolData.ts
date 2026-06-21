export type ToolSlug =
  | "sleep-calculator"
  | "sleep-debt-calculator"
  | "nap-calculator"
  | "sleep-cycle-calculator"
  | "bedtime-calculator"
  | "wake-time-calculator"
  | "sleep-duration-calculator"
  | "sleep-efficiency-calculator"
  | "sleep-score-calculator"
  | "sleep-quality-calculator"
  | "rem-sleep-calculator"
  | "deep-sleep-calculator"
  | "sleep-age-calculator"
  | "sleep-needs-calculator"
  | "sleep-consistency-calculator"
  | "sleep-schedule-calculator";

export type ToolSummary = {
  name: string;
  href: `/${ToolSlug}`;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ToolPageData = ToolSummary & {
  slug: ToolSlug;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  explanationTitle: string;
  explanation: string[];
  faq: FaqItem[];
  related: ToolSlug[];
};

export const allTools: ToolSummary[] = [
  {
    name: "Sleep Calculator",
    href: "/sleep-calculator",
    description:
      "Find recommended bedtimes or wake-up times using sleep cycles and a fall-asleep buffer.",
  },
  {
    name: "Sleep Debt Calculator",
    href: "/sleep-debt-calculator",
    description:
      "Estimate how much sleep you may be missing over several days.",
  },
  {
    name: "Nap Calculator",
    href: "/nap-calculator",
    description:
      "Choose between power naps, recovery naps, and full-cycle naps.",
  },
  {
    name: "Bedtime Calculator",
    href: "/bedtime-calculator",
    description:
      "Estimate when to go to bed based on your planned wake-up time.",
  },
  {
    name: "Sleep Cycle Calculator",
    href: "/sleep-cycle-calculator",
    description:
      "Plan sleep around 90-minute cycles without a fall-asleep buffer.",
  },
  {
    name: "Wake Time Calculator",
    href: "/wake-time-calculator",
    description:
      "Estimate wake-up times based on your bedtime and sleep cycles.",
  },
  {
    name: "Sleep Duration Calculator",
    href: "/sleep-duration-calculator",
    description:
      "Calculate total sleep duration between bedtime and wake-up time.",
  },
  {
    name: "Sleep Efficiency Calculator",
    href: "/sleep-efficiency-calculator",
    description:
      "Estimate sleep efficiency using time asleep and time in bed.",
  },
  {
    name: "Sleep Score Calculator",
    href: "/sleep-score-calculator",
    description:
      "Estimate an overall sleep score from duration, efficiency, wake-ups, and consistency.",
  },
  {
    name: "Sleep Quality Calculator",
    href: "/sleep-quality-calculator",
    description:
      "Rate sleep quality using restfulness, sleep latency, wake-ups, and total sleep time.",
  },
  {
    name: "REM Sleep Calculator",
    href: "/rem-sleep-calculator",
    description:
      "Estimate REM sleep minutes from your total sleep time and REM percentage.",
  },
  {
    name: "Deep Sleep Calculator",
    href: "/deep-sleep-calculator",
    description:
      "Estimate deep sleep minutes and compare them with your total sleep duration.",
  },
  {
    name: "Sleep Age Calculator",
    href: "/sleep-age-calculator",
    description:
      "Estimate a sleep age signal from sleep duration, regularity, wake-ups, and energy.",
  },
  {
    name: "Sleep Needs Calculator",
    href: "/sleep-needs-calculator",
    description:
      "Estimate a practical nightly sleep need range from age group and lifestyle factors.",
  },
  {
    name: "Sleep Consistency Calculator",
    href: "/sleep-consistency-calculator",
    description:
      "Compare weekday and weekend sleep timing to estimate schedule consistency.",
  },
  {
    name: "Sleep Schedule Calculator",
    href: "/sleep-schedule-calculator",
    description:
      "Build a simple sleep schedule from wake time, target sleep, and wind-down buffer.",
  },
];

export const toolPageData: Record<ToolSlug, ToolPageData> = {
  "sleep-calculator": {
    ...allTools[0],
    slug: "sleep-calculator",
    seoTitle: "Sleep Calculator | Best Bedtime and Wake-Up Times",
    metaDescription:
      "Use this free sleep calculator to find the best bedtime or wake-up time based on 90-minute sleep cycles and a 15-minute fall-asleep buffer.",
    h1: "Sleep Calculator",
    intro:
      "Calculate the best bedtime or wake-up time based on natural 90-minute sleep cycles.",
    explanationTitle: "How This Sleep Calculator Works",
    explanation: [
      "This calculator uses 90-minute sleep cycles and a 15-minute fall-asleep buffer.",
    ],
    faq: [],
    related: [
      "sleep-debt-calculator",
      "nap-calculator",
      "sleep-cycle-calculator",
    ],
  },
  "sleep-debt-calculator": {
    ...allTools[1],
    slug: "sleep-debt-calculator",
    seoTitle: "Sleep Debt Calculator | Estimate Missed Sleep",
    metaDescription:
      "Use this free sleep debt calculator to estimate how much sleep you may be missing over several days.",
    h1: "Sleep Debt Calculator",
    intro: "Estimate how much sleep you may be missing over several days.",
    explanationTitle: "How Sleep Debt Is Estimated",
    explanation: [
      "Sleep debt compares target sleep with actual sleep across a selected period.",
    ],
    faq: [],
    related: [
      "sleep-calculator",
      "sleep-duration-calculator",
      "sleep-efficiency-calculator",
    ],
  },
  "nap-calculator": {
    ...allTools[2],
    slug: "nap-calculator",
    seoTitle: "Nap Calculator | Find a Practical Nap Length",
    metaDescription:
      "Use this free nap calculator to choose a power nap, recovery nap, or full-cycle nap.",
    h1: "Nap Calculator",
    intro: "Choose a practical nap length based on your schedule.",
    explanationTitle: "How Nap Timing Works",
    explanation: [
      "Short naps can support alertness, while longer naps may include a fuller sleep cycle.",
    ],
    faq: [],
    related: [
      "sleep-calculator",
      "sleep-cycle-calculator",
      "bedtime-calculator",
    ],
  },
  "sleep-cycle-calculator": {
    ...allTools[4],
    slug: "sleep-cycle-calculator",
    seoTitle: "Sleep Cycle Calculator | Plan 90-Minute Sleep Cycles",
    metaDescription:
      "Use this free sleep cycle calculator to plan sleep around 90-minute cycles.",
    h1: "Sleep Cycle Calculator",
    intro: "Plan sleep around full 90-minute sleep cycles.",
    explanationTitle: "How Sleep Cycles Are Estimated",
    explanation: [
      "This tool uses 90-minute cycles as a simple planning estimate.",
    ],
    faq: [],
    related: [
      "sleep-calculator",
      "bedtime-calculator",
      "wake-time-calculator",
    ],
  },
  "bedtime-calculator": {
    ...allTools[3],
    slug: "bedtime-calculator",
    seoTitle: "Bedtime Calculator | Estimate When To Go To Bed",
    metaDescription:
      "Use this free bedtime calculator to estimate when to go to bed based on your planned wake-up time.",
    h1: "Bedtime Calculator",
    intro: "Estimate when to go to bed based on your planned wake-up time.",
    explanationTitle: "How Bedtime Is Estimated",
    explanation: [
      "The calculator counts backward from wake time using full sleep cycles.",
    ],
    faq: [],
    related: [
      "sleep-calculator",
      "sleep-cycle-calculator",
      "wake-time-calculator",
    ],
  },
  "wake-time-calculator": {
    ...allTools[5],
    slug: "wake-time-calculator",
    seoTitle: "Wake Time Calculator | Estimate Wake-Up Times",
    metaDescription:
      "Use this free wake time calculator to estimate wake-up times based on bedtime and sleep cycles.",
    h1: "Wake Time Calculator",
    intro: "Estimate wake-up times based on your bedtime and sleep cycles.",
    explanationTitle: "How Wake Times Are Estimated",
    explanation: [
      "The calculator adds full sleep cycles to your selected bedtime.",
    ],
    faq: [],
    related: [
      "sleep-calculator",
      "bedtime-calculator",
      "sleep-cycle-calculator",
    ],
  },
  "sleep-duration-calculator": {
    ...allTools[6],
    slug: "sleep-duration-calculator",
    seoTitle: "Sleep Duration Calculator | Calculate Total Sleep Time",
    metaDescription:
      "Use this free sleep duration calculator to calculate total sleep time between bedtime and wake-up time.",
    h1: "Sleep Duration Calculator",
    intro: "Calculate total sleep duration between bedtime and wake-up time.",
    explanationTitle: "How Sleep Duration Is Calculated",
    explanation: [
      "This calculator finds the elapsed time between bedtime and wake time.",
    ],
    faq: [],
    related: [
      "sleep-debt-calculator",
      "sleep-efficiency-calculator",
      "sleep-calculator",
    ],
  },
  "sleep-efficiency-calculator": {
    ...allTools[7],
    slug: "sleep-efficiency-calculator",
    seoTitle: "Sleep Efficiency Calculator | Estimate Sleep Efficiency",
    metaDescription:
      "Use this free sleep efficiency calculator to estimate the percentage of time spent asleep while in bed.",
    h1: "Sleep Efficiency Calculator",
    intro:
      "Estimate sleep efficiency by comparing time asleep with total time spent in bed.",
    explanationTitle: "How Sleep Efficiency Is Calculated",
    explanation: [
      "Sleep efficiency divides time asleep by total time in bed and converts the result to a percentage.",
    ],
    faq: [],
    related: [
      "sleep-duration-calculator",
      "sleep-debt-calculator",
      "sleep-calculator",
    ],
  },
  "sleep-score-calculator": {
    ...allTools[8],
    slug: "sleep-score-calculator",
    seoTitle: "Sleep Score Calculator | Estimate Your Sleep Score",
    metaDescription:
      "Use this free sleep score calculator to estimate an overall sleep score from duration, efficiency, wake-ups, and sleep consistency.",
    h1: "Sleep Score Calculator",
    intro:
      "Estimate a simple sleep score using sleep duration, sleep efficiency, wake-ups, and schedule consistency.",
    explanationTitle: "How The Sleep Score Calculator Works",
    explanation: [
      "The score combines several everyday sleep signals into a 0 to 100 estimate.",
      "It is designed for personal planning and education, not diagnosis or medical measurement.",
    ],
    faq: [
      {
        question: "What is a sleep score?",
        answer:
          "A sleep score is a simple summary number that combines multiple sleep factors into one estimate.",
      },
      {
        question: "Is this sleep score medical advice?",
        answer:
          "No. This tool is for general education and personal planning only.",
      },
      {
        question: "Why do wake-ups affect the score?",
        answer:
          "Frequent wake-ups can make sleep feel less restorative, so the calculator includes them as one comfort signal.",
      },
    ],
    related: [
      "sleep-quality-calculator",
      "sleep-efficiency-calculator",
      "sleep-consistency-calculator",
    ],
  },
  "sleep-quality-calculator": {
    ...allTools[9],
    slug: "sleep-quality-calculator",
    seoTitle: "Sleep Quality Calculator | Estimate Sleep Quality",
    metaDescription:
      "Use this free sleep quality calculator to estimate sleep quality from restfulness, sleep latency, wake-ups, and total sleep time.",
    h1: "Sleep Quality Calculator",
    intro:
      "Estimate sleep quality using restfulness, time to fall asleep, wake-ups, and sleep duration.",
    explanationTitle: "How The Sleep Quality Calculator Works",
    explanation: [
      "The calculator weighs both objective timing inputs and your subjective restfulness rating.",
      "The result can help you compare nights and notice patterns in your routine.",
    ],
    faq: [
      {
        question: "How is sleep quality different from sleep duration?",
        answer:
          "Sleep duration measures time asleep, while sleep quality considers how restful and uninterrupted sleep feels.",
      },
      {
        question: "Can I use this daily?",
        answer:
          "Yes. It is most useful when used consistently to compare trends over time.",
      },
      {
        question: "Does this replace a sleep tracker?",
        answer:
          "No. It is a simple self-assessment tool and does not measure sleep stages.",
      },
    ],
    related: [
      "sleep-score-calculator",
      "sleep-efficiency-calculator",
      "sleep-duration-calculator",
    ],
  },
  "rem-sleep-calculator": {
    ...allTools[10],
    slug: "rem-sleep-calculator",
    seoTitle: "REM Sleep Calculator | Estimate REM Sleep Time",
    metaDescription:
      "Use this free REM sleep calculator to estimate REM sleep minutes from total sleep duration and REM percentage.",
    h1: "REM Sleep Calculator",
    intro:
      "Estimate how much REM sleep you may get from total sleep time and an estimated REM percentage.",
    explanationTitle: "How REM Sleep Is Estimated",
    explanation: [
      "This calculator multiplies total sleep time by your selected REM sleep percentage.",
      "REM estimates vary by person and night, so the result is best used as a planning estimate.",
    ],
    faq: [
      {
        question: "What does REM sleep mean?",
        answer:
          "REM sleep is a sleep stage commonly associated with dreaming and later-night sleep cycles.",
      },
      {
        question: "What percentage should I use?",
        answer:
          "Many general sleep summaries use roughly 20 to 25 percent as an adult estimate, but individual nights vary.",
      },
      {
        question: "Can this calculator measure my actual REM sleep?",
        answer:
          "No. It estimates REM time from inputs you provide and does not measure sleep stages.",
      },
    ],
    related: [
      "deep-sleep-calculator",
      "sleep-cycle-calculator",
      "sleep-duration-calculator",
    ],
  },
  "deep-sleep-calculator": {
    ...allTools[11],
    slug: "deep-sleep-calculator",
    seoTitle: "Deep Sleep Calculator | Estimate Deep Sleep Time",
    metaDescription:
      "Use this free deep sleep calculator to estimate deep sleep minutes from total sleep duration and deep sleep percentage.",
    h1: "Deep Sleep Calculator",
    intro:
      "Estimate deep sleep time from your total sleep duration and an estimated deep sleep percentage.",
    explanationTitle: "How Deep Sleep Is Estimated",
    explanation: [
      "The calculator multiplies total sleep time by the deep sleep percentage you enter.",
      "It is an educational estimate and does not measure sleep stages directly.",
    ],
    faq: [
      {
        question: "What is deep sleep?",
        answer:
          "Deep sleep is a sleep stage often discussed in relation to physical restoration and early-night sleep.",
      },
      {
        question: "Is more deep sleep always better?",
        answer:
          "Not necessarily. Sleep stages naturally vary across people and nights.",
      },
      {
        question: "Can this replace a sleep study?",
        answer:
          "No. It is a simple calculator, not a clinical measurement tool.",
      },
    ],
    related: [
      "rem-sleep-calculator",
      "sleep-cycle-calculator",
      "sleep-duration-calculator",
    ],
  },
  "sleep-age-calculator": {
    ...allTools[12],
    slug: "sleep-age-calculator",
    seoTitle: "Sleep Age Calculator | Estimate Your Sleep Age",
    metaDescription:
      "Use this free sleep age calculator to estimate a sleep age signal from sleep duration, regularity, wake-ups, and daytime energy.",
    h1: "Sleep Age Calculator",
    intro:
      "Estimate a sleep age signal from your actual age, sleep duration, consistency, wake-ups, and energy.",
    explanationTitle: "How Sleep Age Is Estimated",
    explanation: [
      "The result adjusts your actual age up or down based on routine sleep signals.",
      "It is a playful wellness estimate for reflection, not a biological age test.",
    ],
    faq: [
      {
        question: "What is sleep age?",
        answer:
          "Sleep age is a simple estimate that compares your sleep pattern with your actual age.",
      },
      {
        question: "Is sleep age a medical measurement?",
        answer:
          "No. This calculator is educational and should not be used for diagnosis.",
      },
      {
        question: "How can I use the result?",
        answer:
          "Use it as a conversation starter for improving consistency, duration, and sleep comfort.",
      },
    ],
    related: [
      "sleep-score-calculator",
      "sleep-quality-calculator",
      "sleep-consistency-calculator",
    ],
  },
  "sleep-needs-calculator": {
    ...allTools[13],
    slug: "sleep-needs-calculator",
    seoTitle: "Sleep Needs Calculator | Estimate Nightly Sleep Need",
    metaDescription:
      "Use this free sleep needs calculator to estimate a practical nightly sleep range from age group and lifestyle factors.",
    h1: "Sleep Needs Calculator",
    intro:
      "Estimate a practical nightly sleep need range based on age group, activity level, sleep debt, and schedule strain.",
    explanationTitle: "How Sleep Needs Are Estimated",
    explanation: [
      "The calculator starts with a general age-based range and adjusts it for lifestyle signals.",
      "The result is a planning range, not a prescription.",
    ],
    faq: [
      {
        question: "How much sleep do adults need?",
        answer:
          "Many adults plan around 7 to 9 hours, though individual needs vary.",
      },
      {
        question: "Why does activity level matter?",
        answer:
          "Higher physical or mental demand may make a longer sleep opportunity useful for some people.",
      },
      {
        question: "Can this tell me my exact sleep need?",
        answer:
          "No. It gives a practical estimate to help with planning.",
      },
    ],
    related: [
      "sleep-calculator",
      "sleep-debt-calculator",
      "sleep-schedule-calculator",
    ],
  },
  "sleep-consistency-calculator": {
    ...allTools[14],
    slug: "sleep-consistency-calculator",
    seoTitle: "Sleep Consistency Calculator | Compare Sleep Schedule Regularity",
    metaDescription:
      "Use this free sleep consistency calculator to compare weekday and weekend sleep timing and estimate schedule regularity.",
    h1: "Sleep Consistency Calculator",
    intro:
      "Compare weekday and weekend bedtime and wake time to estimate sleep schedule consistency.",
    explanationTitle: "How Sleep Consistency Is Calculated",
    explanation: [
      "The calculator compares the midpoint of weekday and weekend sleep windows.",
      "A smaller difference means a more consistent sleep schedule.",
    ],
    faq: [
      {
        question: "What is sleep consistency?",
        answer:
          "Sleep consistency describes how regular your bedtime and wake time are across days.",
      },
      {
        question: "Why compare weekday and weekend schedules?",
        answer:
          "Large differences can make your routine feel less stable from week to week.",
      },
      {
        question: "Is a perfect score necessary?",
        answer:
          "No. The score is a planning estimate, not a requirement.",
      },
    ],
    related: [
      "sleep-score-calculator",
      "sleep-schedule-calculator",
      "bedtime-calculator",
    ],
  },
  "sleep-schedule-calculator": {
    ...allTools[15],
    slug: "sleep-schedule-calculator",
    seoTitle: "Sleep Schedule Calculator | Build a Simple Sleep Plan",
    metaDescription:
      "Use this free sleep schedule calculator to build a simple bedtime and wake-up plan from target sleep and wind-down time.",
    h1: "Sleep Schedule Calculator",
    intro:
      "Build a simple sleep schedule from your wake time, target sleep duration, and wind-down buffer.",
    explanationTitle: "How The Sleep Schedule Calculator Works",
    explanation: [
      "The calculator counts backward from your wake time using your target sleep duration and wind-down buffer.",
      "It also shows nearby cycle-friendly options for flexible planning.",
    ],
    faq: [
      {
        question: "How is this different from the bedtime calculator?",
        answer:
          "This tool includes target sleep duration and wind-down time, while the bedtime calculator focuses on sleep cycles.",
      },
      {
        question: "Should I use the same schedule every day?",
        answer:
          "A consistent schedule can make planning easier, but real life sometimes requires flexibility.",
      },
      {
        question: "Does this guarantee better sleep?",
        answer:
          "No. It helps plan timing but cannot guarantee sleep quality.",
      },
    ],
    related: [
      "sleep-needs-calculator",
      "sleep-consistency-calculator",
      "wake-time-calculator",
    ],
  },
};

export function getToolData(slug: ToolSlug) {
  return toolPageData[slug];
}
