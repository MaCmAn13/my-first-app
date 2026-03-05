"use client";

import { useState } from "react";
import { TopBar } from "@/components/bloomberg/TopBar";
import { MarketPanel } from "@/components/bloomberg/MarketPanel";
import { ChartPanel } from "@/components/bloomberg/ChartPanel";
import { NewsPanel } from "@/components/bloomberg/NewsPanel";
import { IndicesPanel } from "@/components/bloomberg/IndicesPanel";
import { StockDetail } from "@/components/bloomberg/StockDetail";
import { CommandLine } from "@/components/bloomberg/CommandLine";

export default function Home() {
  const [selectedStock, setSelectedStock] = useState("AAPL");

  return (
    <div className="bloomberg-terminal h-screen flex flex-col overflow-hidden">
      <TopBar />

      <div className="flex-1 grid grid-cols-12 grid-rows-2 gap-px bg-[#1e2d3d] p-px min-h-0">
        {/* Left column: Market Panel */}
        <div className="col-span-3 row-span-2">
          <MarketPanel
            selectedStock={selectedStock}
            onSelectStock={setSelectedStock}
          />
        </div>

        {/* Center: Chart */}
        <div className="col-span-6 row-span-1">
          <ChartPanel selectedStock={selectedStock} />
        </div>

        {/* Right top: Indices & FX */}
        <div className="col-span-3 row-span-1">
          <IndicesPanel />
        </div>

        {/* Center bottom: News */}
        <div className="col-span-6 row-span-1">
          <NewsPanel />
        </div>

        {/* Right bottom: Stock Detail */}
        <div className="col-span-3 row-span-1">
          <StockDetail selectedStock={selectedStock} />
        </div>
      </div>

      <CommandLine onSelectStock={setSelectedStock} />
    </div>
  );
}
