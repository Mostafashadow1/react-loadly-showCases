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
    const loaderName = activeLoaderData.title.replace(/\s+/g, "");

    // pull children out so we can handle it separately
    const { ...propsWithoutChildren } = currentProps;

    // build props string
    const propsString = Object.entries(propsWithoutChildren)
      .map(([key, value]) => {
        if (typeof value === "string") {
          return `      ${key}="${value}"`;
        }
        if (key === "children") {
          if (typeof value === "string") {
            return `      children="${value}"`;
          }
          return `      children={${value}}`; // JSX or ReactNode
        }
        return `      ${key}={${JSON.stringify(value)}}`;
      })
      .join("\n");

    // CASES:


    return `import { ${loaderName} } from 'react-loadly';

function MyComponent() {
  return (
    <${loaderName}
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
    <div className="flex flex-col h-full scrollbar-none">
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
      <ScrollArea className="flex-1 rounded-lg border border-gray-800 bg-gray-900/60 p-4 scrolled-none">
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