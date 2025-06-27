import { FaMobileAlt, FaBrain, FaServer, FaCubes } from "react-icons/fa";

export default function Tech() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0071ce] mb-8 text-center">Our Tech Stack</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-8 border-2 border-[#0071ce]">
        {/* Frontend */}
        <div className="flex items-start gap-4">
          <div className="bg-[#0071ce] text-white rounded-full p-3 text-2xl flex items-center justify-center">
            <FaMobileAlt />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-[#0071ce]">Frontend</h2>
            <div className="bg-gray-100 rounded p-2 mt-1 text-xs font-mono text-gray-700">
              Flutter (simulated in website)
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex items-center">Cross-platform UI for seamless shopping experiences.</div>
        {/* AI Logic */}
        <div className="flex items-start gap-4">
          <div className="bg-[#ffc220] text-[#0071ce] rounded-full p-3 text-2xl flex items-center justify-center">
            <FaBrain />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-[#ffc220]">AI Logic</h2>
            <div className="bg-gray-100 rounded p-2 mt-1 text-xs font-mono text-gray-700">
              {`{
  "trigger": "rain_forecast",
  "action": "suggest_umbrella"
}`}
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex items-center">JSON-based behavior and triggers for smart, contextual assistance.</div>
        {/* Backend */}
        <div className="flex items-start gap-4">
          <div className="bg-[#0071ce] text-white rounded-full p-3 text-2xl flex items-center justify-center">
            <FaServer />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-[#0071ce]">Backend</h2>
            <div className="bg-gray-100 rounded p-2 mt-1 text-xs font-mono text-gray-700">
              Local Dart services
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex items-center">Fast, local processing for privacy and speed.</div>
        {/* Extras */}
        <div className="flex items-start gap-4">
          <div className="bg-[#ffc220] text-[#0071ce] rounded-full p-3 text-2xl flex items-center justify-center">
            <FaCubes />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-[#ffc220]">Extras</h2>
            <div className="bg-gray-100 rounded p-2 mt-1 text-xs font-mono text-gray-700">
              AR mockups for in-store pathfinding
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex items-center">Augmented reality guides for easy in-store navigation.</div>
      </div>
    </section>
  );
} 