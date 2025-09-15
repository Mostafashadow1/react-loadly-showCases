import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

import type { ILoader } from "@/types/ILoader";

interface LoadersShowcaseSectionProps {
  loaders: ILoader[];
  setActiveLoader: (name: string) => void;
  loaderSize: number;
  setLoaderSize: (size: number) => void;
  loaderSpeed: number;
  setLoaderSpeed: (speed: number) => void;
  loaderColor: string;
  setLoaderColor: (color: string) => void;
  loaderSecondaryColor: string;
  setLoaderSecondaryColor: (color: string) => void;
  loaderCount: number;
  setLoaderCount: (count: number) => void;
  loaderText: string;
  setLoaderText: (text: string) => void;
  activeLoader: string;
}

export function LoadersShowcaseSection({
  loaders,
  setActiveLoader,
  loaderSize,
  setLoaderSize,
  loaderSpeed,
  setLoaderSpeed,
  loaderColor,
  setLoaderColor,
  // loaderSecondaryColor,
  // setLoaderSecondaryColor,
  // loaderCount,
  // setLoaderCount,
  loaderText,
  setLoaderText,
  activeLoader,
}: LoadersShowcaseSectionProps) {
  const activeLoaderData =
    loaders.find((l) => l.name === activeLoader) || loaders[0];
  const ActiveLoaderComponent = activeLoaderData.component;

  const generateCodeSnippet = () => {
    return `import { ${activeLoaderData.title} } from 'react-loadly';

function MyComponent() {
  return (
    <${activeLoaderData.title}
      size={${loaderSize}}
      color="${loaderColor}"
      speed={${loaderSpeed}}
    />
  );
}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Loader Collection
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our collection of beautiful loaders. Click on any loader to
            customize it.
          </p>
        </div>

        {/* Loader grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {loaders.map((loader) => (
            <Dialog key={loader.name}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group"
                >
                  <Card
                    className="cursor-pointer border border-gray-800/70 bg-gray-900/40 backdrop-blur-md 
                               rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-indigo-500/20 
                               transition-all duration-300"
                    onClick={() => setActiveLoader(loader.name)}
                  >
                    <CardContent className="p-6 flex flex-col items-center">
                      <div className="flex justify-center mb-4 h-24 items-center">
                        <loader.component size={40} color={loaderColor} />
                      </div>
                      <h3 className="font-semibold text-white text-center">
                        {loader.title}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>

              {/* Dialog */}
              <DialogContent
                className="max-w-5xl w-[90vw] h-[90vh] overflow-hidden 
                                         bg-gradient-to-br from-gray-900 to-gray-950 
                                         border border-gray-800 rounded-2xl shadow-xl text-white p-0"
              >
                <DialogHeader className="p-6 border-b border-gray-800">
                  <DialogTitle className="text-xl font-bold">
                    {loader.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                  {/* Preview */}
                  <div className="flex items-center justify-center bg-gray-900/50 border-r border-gray-800 p-6">
                    <ActiveLoaderComponent
                      size={loaderSize}
                      color={loaderColor}
                    />
                  </div>

                  {/* Controls */}
                  <ScrollArea className="p-6 space-y-6">
                    <div>
                      <Label className="text-gray-300">Size</Label>
                      <Slider
                        min={20}
                        max={100}
                        step={1}
                        value={[loaderSize]}
                        onValueChange={(value) => setLoaderSize(value[0])}
                        className="mt-2"
                      />
                      <Badge variant="outline" className="mt-1">
                        {loaderSize}px
                      </Badge>
                    </div>

                    <div>
                      <Label className="text-gray-300">Speed</Label>
                      <Slider
                        min={0.1}
                        max={5}
                        step={0.1}
                        value={[loaderSpeed]}
                        onValueChange={(value) => setLoaderSpeed(value[0])}
                        className="mt-2"
                      />
                      <Badge variant="secondary" className="mt-1">
                        {loaderSpeed}x
                      </Badge>
                    </div>

                    <div>
                      <Label className="text-gray-300">Primary Color</Label>
                      <div className="flex items-center gap-3 mt-2">
                        <div
                          className="w-8 h-8 rounded-md border border-gray-700"
                          style={{ backgroundColor: loaderColor }}
                        />
                        <Input
                          type="color"
                          value={loaderColor}
                          onChange={(e) => setLoaderColor(e.target.value)}
                          className="w-16 h-10 cursor-pointer"
                        />
                        <Input
                          type="text"
                          value={loaderColor}
                          onChange={(e) => setLoaderColor(e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-300">Text</Label>
                      <Input
                        type="text"
                        value={loaderText}
                        onChange={(e) => setLoaderText(e.target.value)}
                        placeholder="Loading..."
                        className="mt-2"
                      />
                    </div>
                  </ScrollArea>

                  {/* Code Snippet */}
                  <div className="flex flex-col p-6 border-l border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-gray-300">Code Snippet</Label>
                      <Button
                        onClick={() => copyToClipboard(generateCodeSnippet())}
                        size="sm"
                        variant="outline"
                        className="gap-2"
                      >
                        <Copy className="w-4 h-4" /> Copy
                      </Button>
                    </div>
                    <ScrollArea className="flex-1 rounded-lg border border-gray-800 bg-gray-900/60 p-4">
                      <pre className="text-sm text-indigo-100 font-mono whitespace-pre-wrap">
                        {generateCodeSnippet()}
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
