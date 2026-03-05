"use client";

import { indices, currencies } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export function IndicesPanel() {
  return (
    <div className="bb-panel h-full flex flex-col">
      <Tabs defaultValue="indices" className="h-full flex flex-col">
        <div className="bb-panel-header flex items-center justify-between">
          <span>Markets Overview</span>
          <TabsList className="h-5 bg-transparent p-0 gap-2">
            <TabsTrigger
              value="indices"
              className="h-5 px-2 text-[10px] rounded-none bb-text-muted data-[state=active]:bb-text-orange data-[state=active]:bg-transparent data-[state=active]:border-b data-[state=active]:border-[#ff8c00] bg-transparent shadow-none"
            >
              IDX
            </TabsTrigger>
            <TabsTrigger
              value="fx"
              className="h-5 px-2 text-[10px] rounded-none bb-text-muted data-[state=active]:bb-text-orange data-[state=active]:bg-transparent data-[state=active]:border-b data-[state=active]:border-[#ff8c00] bg-transparent shadow-none"
            >
              FX
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="indices" className="flex-1 m-0 min-h-0">
          <ScrollArea className="h-full bb-scrollbar">
            <div className="divide-y divide-[#1e2d3d]">
              {indices.map((idx) => (
                <div
                  key={idx.symbol}
                  className="flex items-center justify-between px-2 py-1.5 hover:bg-[#1a2332] cursor-pointer transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold bb-text-yellow">
                      {idx.symbol}
                    </span>
                    <span className="text-[10px] bb-text-muted">
                      {idx.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs bb-text-white font-mono">
                      {idx.value.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                    <div
                      className={`text-[10px] font-mono ${
                        idx.change >= 0 ? "bb-text-green" : "bb-text-red"
                      }`}
                    >
                      {idx.change >= 0 ? "+" : ""}
                      {idx.change.toFixed(2)} ({idx.changePercent.toFixed(2)}%)
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="fx" className="flex-1 m-0 min-h-0">
          <ScrollArea className="h-full bb-scrollbar">
            <div className="divide-y divide-[#1e2d3d]">
              {currencies.map((cur) => (
                <div
                  key={cur.pair}
                  className="flex items-center justify-between px-2 py-1.5 hover:bg-[#1a2332] cursor-pointer transition-colors"
                >
                  <span className="text-xs font-bold bb-text-yellow">
                    {cur.pair}
                  </span>
                  <div className="text-right">
                    <div className="text-xs bb-text-white font-mono">
                      {cur.rate.toLocaleString("en-US", {
                        minimumFractionDigits: 4,
                        maximumFractionDigits: 4,
                      })}
                    </div>
                    <div
                      className={`text-[10px] font-mono ${
                        cur.change >= 0 ? "bb-text-green" : "bb-text-red"
                      }`}
                    >
                      {cur.change >= 0 ? "+" : ""}
                      {cur.changePercent.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
