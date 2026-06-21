import type { Metadata } from "next";
import { getToolData } from "@/app/toolData";
import PhaseTwoSleepTool from "@/components/PhaseTwoSleepTool";
import ToolPage from "@/components/ToolPage";

const tool = getToolData("sleep-age-calculator");

export const metadata: Metadata = {
  title: tool.seoTitle,
  description: tool.metaDescription,
};

export default function SleepAgeCalculatorPage() {
  return (
    <ToolPage tool={tool}>
      <PhaseTwoSleepTool slug={tool.slug} />
    </ToolPage>
  );
}
