import type { ReactNode } from "react";
import { toolPageData, type ToolPageData, type ToolSlug } from "@/app/toolData";

const relatedCardClassName =
  "block rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm";

type ToolPageProps = {
  tool: ToolPageData;
  children: ReactNode;
};

export default function ToolPage({ tool, children }: ToolPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <a
          href="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          &larr; Back to all tools
        </a>

        <h1 className="mt-6 text-4xl font-bold">{tool.h1}</h1>

        <p className="mt-4 text-lg text-gray-600">{tool.intro}</p>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">Calculator</h2>

          <div className="mt-6">{children}</div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">{tool.explanationTitle}</h2>

          <div className="mt-6 space-y-4 text-gray-700">
            {tool.explanation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            {tool.faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold">{item.question}</h3>

                <p className="mt-2 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedTools related={tool.related} />
      </div>
    </main>
  );
}

function RelatedTools({ related }: { related: ToolSlug[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Related Sleep Tools</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {related.map((slug) => {
          const tool = toolPageData[slug];

          return (
            <a key={tool.href} href={tool.href} className={relatedCardClassName}>
              <h3 className="font-semibold">{tool.name}</h3>

              <p className="mt-2 text-sm text-gray-600">{tool.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
