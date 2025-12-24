// components/Suggestions.tsx
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

interface Suggestion {
  type: "success" | "warning" | "error" | "info";
  text: string;
}

interface SuggestionsProps {
  suggestions?: Suggestion[];
}

export default function Suggestions({ suggestions }: SuggestionsProps) {
  const getIcon = (type: Suggestion["type"]) => {
    const baseClass = "shrink-0";
    switch (type) {
      case "success":
        return <CheckCircle className={`${baseClass} text-green-500`} size={20} />;
      case "warning":
        return <AlertTriangle className={`${baseClass} text-yellow-500`} size={20} />;
      case "error":
        return <XCircle className={`${baseClass} text-red-500`} size={20} />;
      case "info":
        return <Info className={`${baseClass} text-blue-500`} size={20} />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
        Suggestions
      </h2>

      {suggestions ? (
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="
                flex items-start gap-3
                p-3 sm:p-4
                rounded-lg
                border border-gray-100
                hover:bg-gray-50
              "
            >
              {getIcon(suggestion.type)}

              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {suggestion.text}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 sm:py-10">
          <div className="text-gray-400 mb-2 text-sm sm:text-base">
            Suggestions will appear here
          </div>
          <div className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
            Get AI-powered recommendations to improve your content
          </div>
        </div>
      )}

      {suggestions && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            className="
              w-full
              py-2.5 sm:py-3
              px-4
              rounded-lg
              font-medium
              text-sm sm:text-base
              text-gray-800
              bg-gray-100
              hover:bg-gray-200
              transition-colors
            "
          >
            View Detailed Report
          </button>
        </div>
      )}
    </div>
  );
}

