// components/SeoScore.tsx
interface SeoScoreProps {
  score?: number;
}

export default function SeoScore({ score }: SeoScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Needs Work";
    return "Poor";
  };

  const normalizedScore =
    typeof score === "number" && !isNaN(score)
      ? Math.max(0, Math.min(100, Math.round(score)))
      : null;

  const displayScore = normalizedScore ?? 0;

  return (
    <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl sm:p-6">
      <h2 className="mb-4 text-base font-semibold text-gray-800 sm:text-lg">
        SEO Score
      </h2>

      {normalizedScore !== null ? (
        <>
          {/* Score + Label */}
          <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-end sm:gap-4">
            <div
              className={`font-bold ${getScoreColor(displayScore)}
                text-4xl sm:text-5xl lg:text-6xl`}
            >
              {displayScore}
              <span className="text-xl text-gray-400 sm:text-2xl">/100</span>
            </div>

            <span
              className={`
                inline-block
                px-3 py-1
                rounded-full
                text-xs sm:text-sm
                font-medium
                ${getScoreColor(displayScore)}
                ${
                  displayScore >= 80
                    ? "bg-green-100"
                    : displayScore >= 60
                    ? "bg-yellow-100"
                    : "bg-red-100"
                }
              `}
            >
              {getScoreLabel(displayScore)}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3">
            <div
              className="h-full transition-all rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ width: `${displayScore}%` }}
            />
          </div>
        </>
      ) : (
        <div className="py-6 text-center sm:py-10">
          <div className="mb-2 text-sm text-gray-400 sm:text-base">
            Your score will appear here
          </div>
          <div className="max-w-md mx-auto text-xs text-gray-500 sm:text-sm">
            Analyze your content to see SEO recommendations
          </div>
        </div>
      )}
    </div>
  );
}


