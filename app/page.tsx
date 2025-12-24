import TextAnalyzer from "@/components/TextAnalyzer";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
     <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Optimize Your Content with <span className="text-blue-600">AI</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Paste your article and get instant SEO suggestions to rank higher on Google.
        </p>
        
        {/* Main Analyzer Component */}
        <TextAnalyzer />
      </section>

      <Features />
      <Footer />
    </main>
  );
}
