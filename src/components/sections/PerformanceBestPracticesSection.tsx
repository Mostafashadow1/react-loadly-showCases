import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Smartphone } from "lucide-react";

export function PerformanceBestPracticesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Performance & Best Practices
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Optimized for performance and built with best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <CardTitle>Lightweight</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Minimal bundle size with zero dependencies. Each loader is
                optimized for performance.
              </CardDescription>
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <span className="font-bold">Bundle size:</span> &lt; 5KB per
                  component
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <CardTitle>Tree Shakable</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Import only what you need. Unused components are automatically
                excluded from your bundle.
              </CardDescription>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <span className="font-bold">ESM support:</span> Full tree
                  shaking support
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <CardTitle>Optimized Animations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                CSS-based animations for smooth performance. No heavy JavaScript
                computations during animation.
              </CardDescription>
              <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <span className="font-bold">60 FPS:</span> Guaranteed smooth
                  animations
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Best Practices */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">React Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mt-1">
                    <svg
                      className="h-4 w-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">TypeScript Support:</span>{" "}
                    Full TypeScript definitions for all components and props
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mt-1">
                    <svg
                      className="h-4 w-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Accessibility:</span> All
                    loaders are accessible with proper ARIA attributes
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mt-1">
                    <svg
                      className="h-4 w-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Responsive Design:</span>{" "}
                    Loaders automatically adapt to any screen size
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mt-1">
                    <svg
                      className="h-4 w-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Performance Monitoring:</span>{" "}
                    Built-in performance monitoring hooks
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
