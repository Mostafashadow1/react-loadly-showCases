import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className="ml-2 hover:bg-white/10 "
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4 text-gray-400" />
      )}
    </Button>
  );
}

export function InstallationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-3">Install React-Loadly</h2>
          <p className="mb-8 text-gray-400">
            Choose your favorite package manager to install{" "}
            <code>react-loadly</code>.
          </p>
        </motion.div>
        <Tabs defaultValue="npm" className="w-full">
          <TabsList className="grid grid-cols-4  p-1 rounded-xl ">
            {["npm", "pnpm", "yarn", "bun"].map((pm, idx) => (
              <TabsTrigger
                key={pm}
                value={pm}
                defaultValue={"npm"}
                style={{
                  marginLeft: 2,
                  background: "transparent",
                  borderRight:
                    idx <= 2 ? "1px solid rgba(255,255,255,0.2)" : "none",
                  borderRadius: 0,
                }}
                className="data-[state=active]:text-white 
                           data-[state=inactive]:text-gray-400 
                           data-[state=inactive]:hover:text-white 
                            transition-colors   
                           "
              >
                {pm}
              </TabsTrigger>
            ))}
          </TabsList>

          {[
            { value: "npm", text: "npm install react-loadly" },
            { value: "pnpm", text: "pnpm i react-loadly" },
            { value: "yarn", text: "yarn add react-loadly" },
            { value: "bun", text: "bun add react-loadly" },
          ].map(({ value, text }) => (
            <TabsContent key={value} value={value}>
              <Card className="bg-gray-900/60 backdrop-blur-md border border-gray-700/70 hover:border-white/30 transition-all shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white font-semibold">
                    Install with {value}
                  </CardTitle>
                  <CopyButton text={text} />
                </CardHeader>
                <CardContent>
                  <code className="block bg-gradient-to-r from-gray-800 to-gray-700 rounded-md px-4 py-3 text-sm text-cyan-400 font-mono">
                    {text}
                  </code>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Step 2 */}
          <h2 className="text-3xl mt-16 mb-3 font-extrabold">Import Styles</h2>
          <p className="mb-8 text-gray-400">
            To ensure loaders look correct, import the default styles into your
            entry file.
          </p>
        </motion.div>
        <Card className="bg-gray-900/60 backdrop-blur-md border border-gray-700/70 hover:border-white/30 transition-all shadow-lg rounded-2xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white font-semibold">
              Add styles to your main file
            </CardTitle>
            <CopyButton text={'import "react-loadly/styles.css"'} />
          </CardHeader>
          <CardContent>
            <code className="block bg-gradient-to-r from-gray-800 to-gray-700 rounded-md px-4 py-3 text-sm text-pink-400 font-mono">
              import "react-loadly/styles.css"
            </code>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
