import type { Metadata } from "next";
import { getToolData } from "@/app/toolData";
import PhaseTwoSleepTool from "@/components/PhaseTwoSleepTool";
import ToolPage from "@/components/ToolPage";

const tool = getToolData("sleep-consistency-calculator");

export const metadata: Metadata = {
  title: tool.seoTitle,
  description: tool.metaDescription,
};

export default function SleepConsistencyCalculatorPage() {
  return (
    <ToolPage tool={tool}>
      <PhaseTwoSleepTool slug={tool.slug} />
    </ToolPage>
  );
}
