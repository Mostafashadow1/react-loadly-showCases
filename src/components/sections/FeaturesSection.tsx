import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Palette, Code, Smartphone, Accessibility } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/10 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
            Why Choose Our Loaders?
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Designed with developers in mind, our loader collection offers
            everything you need for beautiful loading states.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-card dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="pb-3">
              <div className="w-14 h-14 rounded-xl bg-indigo-500/10 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              </div>
              <CardTitle className="text-xl font-bold">Lightweight</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground dark:text-gray-400">
                Minimal bundle size with zero dependencies. Each loader is
                optimized for performance.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-card dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="pb-3">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <Palette className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-xl font-bold">
                Fully Customizable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground dark:text-gray-400">
                Change colors, sizes, speeds, and more with simple props. Make
                it match your brand perfectly.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-card dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="pb-3">
              <div className="w-14 h-14 rounded-xl bg-pink-500/10 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                <Code className="w-7 h-7 text-pink-600 dark:text-pink-400" />
              </div>
              <CardTitle className="text-xl font-bold">Easy to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground dark:text-gray-400">
                Import and use in seconds. No complex setup or configuration
                required.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-card dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="pb-3">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Smartphone className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-xl font-bold">
                Fully Responsive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground dark:text-gray-400">
                Looks great on all devices. Automatically adapts to any screen
                size or resolution.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-card dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="pb-3">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Accessibility className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-xl font-bold">Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground dark:text-gray-400">
                Built with accessibility in mind. Proper ARIA attributes and
                semantic HTML for screen readers.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
