"use client";

import { indices } from "@/lib/mock-data";

export function TopBar() {
  return (
    <div className="bg-[#1a2332] border-b border-[#1e2d3d] px-4 py-1 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-[#ff8c00] font-bold text-sm tracking-wider">
          BLOOMBERG
        </span>
        <span className="bb-text-muted text-xs">TERMINAL</span>
      </div>
      <div className="overflow-hidden flex-1 mx-8">
        <div className="flex gap-6 bb-ticker whitespace-nowrap">
          {[...indices, ...indices].map((idx, i) => (
            <span key={i} className="text-xs flex items-center gap-1">
              <span className="bb-text-yellow">{idx.symbol}</span>
              <span className="bb-text-white">
                {idx.value.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </span>
              <span
                className={
                  idx.change >= 0 ? "bb-text-green" : "bb-text-red"
                }
              >
                {idx.change >= 0 ? "+" : ""}
                {idx.changePercent.toFixed(2)}%
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 text-xs">
        <span className="bb-text-muted">
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="bb-text-orange font-mono">
          {new Date().toLocaleTimeString("en-US", { hour12: false })}
        </span>
      </div>
    </div>
  );
}
