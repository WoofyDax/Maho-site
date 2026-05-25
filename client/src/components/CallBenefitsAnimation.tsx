import { Check, Users, Zap, Target, Award } from "lucide-react";
import { useState, useEffect } from "react";

export function CallBenefitsAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Personalized Physique Strategy",
      description: "We identify the fastest path to your goal based on your schedule, training history, and current lifestyle.",
      icon: Target,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "180-Day Transformation Roadmap",
      description: "You'll see what your next 6 months could look like with a structured plan instead of random workouts.",
      icon: Zap,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Nutrition & Training Bottleneck Audit",
      description: "We uncover what is actually holding you back: food, consistency, training intensity, recovery, or accountability.",
      icon: Award,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Custom Action Plan",
      description: "You'll leave with clear next steps whether or not you decide to work with us.",
      icon: Check,
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Software Interface Container */}
      <div className="glass-card p-1 border-yellow-500/30 overflow-hidden">
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg overflow-hidden">
          {/* Window Header */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border-b border-yellow-500/20 px-6 py-4 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
            <span className="text-gray-400 text-sm font-medium ml-4">call_benefits.exe</span>
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12 min-h-96">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left: Steps List */}
              <div className="flex-1 space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                        isActive
                          ? "bg-gradient-to-r from-yellow-500/30 to-yellow-600/20 border border-yellow-500/50 shadow-lg shadow-yellow-500/20"
                          : "bg-gray-800/40 border border-gray-700/50 hover:bg-gray-800/60"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                          isActive
                            ? "bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-600/50"
                            : "bg-gray-700 group-hover:bg-gray-600"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? "text-black" : "text-gray-300"}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-sm font-semibold truncate transition-colors ${
                            isActive ? "text-yellow-300" : "text-gray-300"
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500 hidden md:block">Step {index + 1}</p>
                      </div>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right: Content Display */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-600/50">
                        {(() => {
                          const Icon = steps[activeStep].icon;
                          return <Icon className="w-6 h-6 text-black" />;
                        })()}
                      </div>
                      <h3 className="text-2xl font-bold text-yellow-300">{steps[activeStep].title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {steps[activeStep].description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Progress</span>
                      <span>{activeStep + 1} of {steps.length}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-500"
                        style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-950/50 border-t border-yellow-500/10 px-6 py-3 flex items-center justify-between text-xs text-gray-500">
            <span>Ready to get started?</span>
            <span className="text-yellow-400/60">→ Book your call below</span>
          </div>
        </div>
      </div>

      {/* Manual Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeStep
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 w-8"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
