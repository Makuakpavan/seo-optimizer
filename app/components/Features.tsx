// components/Features.tsx
import { Search, Zap, BarChart, Shield } from "lucide-react";

const features = [
  {
    icon: <Search className="text-blue-600" size={24} />,
    title: "Keyword Analysis",
    description: "Identify missing keywords and optimize density",
  },
  {
    icon: <Zap className="text-purple-600" size={24} />,
    title: "AI-Powered Suggestions",
    description: "Get actionable recommendations from AI",
  },
  {
    icon: <BarChart className="text-green-600" size={24} />,
    title: "Readability Score",
    description: "Ensure your content is easy to read",
  },
  {
    icon: <Shield className="text-orange-600" size={24} />,
    title: "Competitor Insights",
    description: "See what works for top-ranking pages",
  },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-14">
        Everything You Need for SEO Success
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              bg-white
              p-5 sm:p-6
              rounded-xl
              shadow-sm
              border border-gray-200
              hover:shadow-md
              transition-shadow
            "
          >
            <div className="mb-4 flex items-center justify-center sm:justify-start">
              {feature.icon}
            </div>

            <h3 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">
              {feature.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

