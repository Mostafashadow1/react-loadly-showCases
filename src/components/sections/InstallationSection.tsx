import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function InstallationSection() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-1 border border-white/10 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 rounded-t-xl">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-300">Installation Guide</span>
          <div></div>
        </div>

        <div className="p-6 space-y-6">
          {/* Step 1: Install the package */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-white">
                Install the package
              </h3>
            </div>

            <div className="flex items-center group bg-gray-800/50 rounded-lg px-4 py-3">
              <code className="flex-1 text-green-400 font-mono">
                npm install react-loaders-kit
              </code>
              <Button
                onClick={() =>
                  copyToClipboard("npm install react-loaders-kit", 1)
                }
                variant="ghost"
                size="sm"
                className="ml-2 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {copiedStep === 1 ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>

            <div className="flex gap-2 mt-2">
              <Button
                onClick={() => copyToClipboard("yarn add react-loaders-kit", 1)}
                variant="outline"
                size="sm"
                className="text-xs h-8 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                yarn
              </Button>
              <Button
                onClick={() => copyToClipboard("pnpm add react-loaders-kit", 1)}
                variant="outline"
                size="sm"
                className="text-xs h-8 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                pnpm
              </Button>
            </div>
          </div>

          {/* Step 2: Import CSS */}
          <div className="space-y-3 pt-4 border-t border-gray-700/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-white">
                Import CSS styles
              </h3>
            </div>

            <p className="text-gray-300 text-sm">
              Add this import to your main application file (e.g.,{" "}
              <code className="text-green-400">main.tsx</code> or{" "}
              <code className="text-green-400">App.tsx</code>):
            </p>

            <div className="flex items-center group bg-gray-800/50 rounded-lg px-4 py-3">
              <code className="flex-1 text-green-400 font-mono">
                import "react-loader-kit/styles.css";
              </code>
              <Button
                onClick={() =>
                  copyToClipboard('import "react-loader-kit/styles.css";', 2)
                }
                variant="ghost"
                size="sm"
                className="ml-2 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {copiedStep === 2 ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Usage tip */}
          <div className="pt-4 border-t border-gray-700/50">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-300 text-sm">
                <span className="font-medium text-white">Tip:</span> Make sure
                to import the CSS file to ensure loaders are styled correctly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
