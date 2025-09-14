import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Palette, Play } from "lucide-react";

export function PropsApiSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Props & API
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to all available props and their usage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Common Props */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                Common Props
              </CardTitle>
              <CardDescription>Props available for all loaders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="font-mono font-medium">size</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded px-2 py-1 ml-2">
                      number
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">50</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="font-mono font-medium">color</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded px-2 py-1 ml-2">
                      string
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    #6366f1
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="font-mono font-medium">speed</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded px-2 py-1 ml-2">
                      number
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">1</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loader-Specific Props */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                Loader-Specific Props
              </CardTitle>
              <CardDescription>
                Props available for specific loader types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="font-mono font-medium">count</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded px-2 py-1 ml-2">
                      number
                    </span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded px-2 py-1 ml-2">
                      Pulse, Wave, Grid, Bounce, Bars, Dots, Rotate
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">3</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="font-mono font-medium">
                      text / loadingText
                    </span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded px-2 py-1 ml-2">
                      string
                    </span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded px-2 py-1 ml-2">
                      Typing, others
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    "Loading..."
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="font-mono font-medium">
                      secondaryColor
                    </span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded px-2 py-1 ml-2">
                      string
                    </span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded px-2 py-1 ml-2">
                      Logo, Liquid, Flow, Blob, Ring
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    #e0e7ff
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Example */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Play className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                Usage Example
              </CardTitle>
              <CardDescription>
                Example of how to use props with a loader component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg text-sm overflow-x-auto">
                {`import { SpinLoader } from 'react-loaders-kit';

function MyComponent() {
  return (
    <SpinLoader 
      size={60}
      color="#6366f1"
      speed={1.5}
    />
  );
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
