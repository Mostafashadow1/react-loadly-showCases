"use client";

import React, { useMemo } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import type { PropControlConfig } from "@/utils/loaderPropsConfig";

interface PropNodeControlProps {
  propName: string;
  value?: React.ReactNode;
  onChange: (propName: string, value: React.ReactNode) => void;
  propConfig: PropControlConfig;
  scope?: Record<string, any>;
}

export default function PropNodeControl({
  propName,
  value,
  onChange,
  propConfig,
  scope = {},
}: PropNodeControlProps) {
  const placeholderJSX = propConfig.placeholder || "<div>...</div>";

  const initialCode = typeof value === "string" ? value : placeholderJSX;

  const combinedScope = useMemo(
    () => ({ React, ...scope }),
    [scope]
  );

  return (
    <div className="space-y-3">
      <label className="text-sm text-zinc-300 font-medium">{propName}</label>

      <LiveProvider

        scope={combinedScope}
        language="jsx"
        noInline={true}
      >
        <div className="rounded border border-gray-700">
          <LiveEditor
            onChange={(next) => onChange(propName, next)}
            className="text-sm font-mono bg-transparent p-3"
          />
        </div>

        <div className="flex gap-4 mt-3">
          {/* PREVIEW */}
          <div className="flex-1">
            <div className="mb-2 text-xs text-zinc-400">Preview</div>
            <div className="min-h-[48px] p-3 rounded border border-gray-700 bg-transparent">
              <LivePreview />
            </div>
          </div>

          {/* SCOPE */}
          <div className="w-48">
            <div className="mb-2 text-xs text-zinc-400">Scope</div>
            <div className="p-3 rounded border border-gray-700 bg-transparent text-xs text-zinc-300">
              {Object.keys(scope).length === 0 ? (
                <div className="text-zinc-500">No custom components.</div>
              ) : (
                <ul className="list-disc pl-4">
                  {Object.keys(scope).map((k) => (
                    <li key={k}>
                      <code>{k}</code>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* ERRORS */}
        <LiveError className="text-red-400 text-sm mt-2" />
      </LiveProvider>
    </div>
  );
}