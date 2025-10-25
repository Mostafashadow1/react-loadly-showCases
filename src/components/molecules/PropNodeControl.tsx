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
      </LiveProvider>
    </div>
  );
}