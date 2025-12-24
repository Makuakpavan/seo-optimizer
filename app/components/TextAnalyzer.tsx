// components/TextAnalyzer.tsx
"use client";

import { useState } from "react";
import { Wand2, Copy, RotateCcw } from "lucide-react";
import SeoScore from "./SeoScore";
import Suggestions from "./Suggestions";

const sampleText = `Artificial Intelligence is transforming how businesses operate.
From chatbots to predictive analytics, AI helps companies make 
better decisions and improve customer experiences.`;

export default function TextAnalyzer() {
  const [content, setContent] = useState(sampleText);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const wordCount =
    content && content.trim()
      ? content.trim().split(/\s+/).length
      : 0;

  const analyzeContent = async () => {
    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setAnalysis({
      score: 72,
      suggestions: [
        { type: "warning", text: 'Add more target keywords like "AI benefits"' },
        { type: "success", text: "Good readability score (8.2)" },
        { type: "error", text: "Meta description missing" },
        { type: "info", text: "Consider adding more headings" },
      ],
    });
    setIsAnalyzing(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {/* Input Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="font-medium text-gray-700">
              Your Content
            </label>

            <div className="flex gap-2">
              <button
                onClick={() => setContent(sampleText)}
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                title="Load example"
              >
                <RotateCcw size={18} />
              </button>

              <button
                onClick={copyToClipboard}
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                title="Copy text"
              >
                <Copy size={18} />
              </button>
            </div>
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="
              w-full
              min-h-[220px]
              sm:min-h-[260px]
              lg:min-h-[320px]
              p-4
              border border-gray-300
              rounded-lg
              resize-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-transparent
            "
            placeholder="Paste your article, blog post, or content here..."
          />

          <div className="flex flex-wrap justify-between gap-2 text-sm text-gray-500">
            <span>{content.length} characters</span>
            <span>{wordCount} words</span>
          </div>

          <button
            onClick={analyzeContent}
            disabled={isAnalyzing || !content.trim()}
            className="
              w-full
              flex items-center justify-center gap-2
              py-3 px-4
              rounded-lg
              font-medium
              text-white
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:opacity-90
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            <Wand2 size={20} />
            {isAnalyzing ? "Analyzing..." : "Analyze SEO"}
          </button>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <SeoScore score={analysis?.score} />
          <Suggestions suggestions={analysis?.suggestions} />
        </div>
      </div>
    </div>
  );
}

