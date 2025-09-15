import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy } from "lucide-react";

interface CodeSnippetProps {
  activeLoaderData: any;
  currentProps: Record<string, any>;
}

export function CodeSnippet({ activeLoaderData, currentProps }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const generateCodeSnippet = () => {
    const propsString = Object.entries(currentProps)
      .map(([key, value]) => {
        // For string values that are not numbers or special props, use string format
        if (
          typeof value === "string" &&
          !key.includes("size") &&
          !key.includes("count") &&
          !key.includes("width") &&
          !key.includes("height") &&
          !key.includes("borderWidth") &&
          !key.includes("amplitude") &&
          !key.includes("fluidity") &&
          !key.includes("charDelay") &&
          !key.includes("glowIntensity") &&
          !key.includes("waveWidth")
        ) {
          return `      ${key}="${value}"`;
        }
        // For boolean values, handle specially
        if (typeof value === "boolean") {
          return `      ${key}={${value}}`;
        }
        // For all other values, use JSON.stringify
        return `      ${key}={${JSON.stringify(value)}}`;
      })
      .join("\n");

    return `import { ${activeLoaderData.title.replace(
      " ",
      ""
    )} } from 'react-loadly';

function MyComponent() {
  return (
    <${activeLoaderData.title.replace(" ", "")}
${propsString}
    />
  );
}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-gray-200 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Implementation
        </h4>
        <Button
          onClick={copyToClipboard}
          size="sm"
          variant="outline"
          className="gap-2 hover:bg-green-500/10"
        >
          <Copy className="w-4 h-4" /> {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <ScrollArea className="flex-1 rounded-lg border border-gray-800 bg-gray-900/60 p-4">
        <pre className="text-sm text-gray-200 font-mono whitespace-pre-wrap">
          <code className="language-tsx">
            {generateCodeSnippet()}
          </code>
        </pre>
      </ScrollArea>

      {/* Interface Documentation */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
        <h5 className="text-sm font-semibold text-indigo-300 mb-2">
          Interface: {activeLoaderData.interface}
        </h5>
        <div className="text-xs text-gray-400 space-y-1">
          <div>Common: {activeLoaderData.commonProps.join(", ")}</div>
          {activeLoaderData.uniqueProps.length > 0 && (
            <div>Unique: {activeLoaderData.uniqueProps.join(", ")}</div>
          )}
        </div>
      </div>
    </div>
  );
}