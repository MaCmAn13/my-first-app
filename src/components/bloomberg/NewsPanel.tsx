"use client";

import { news } from "@/lib/mock-data";
import { ScrollArea } from "@/components/ui/scroll-area";

export function NewsPanel() {
  return (
    <div className="bb-panel h-full flex flex-col">
      <div className="bb-panel-header flex justify-between items-center">
        <span>News Feed</span>
        <span className="bb-text-muted text-[10px]">TOP STORIES</span>
      </div>
      <ScrollArea className="flex-1 bb-scrollbar">
        <div className="divide-y divide-[#1e2d3d]">
          {news.map((item) => (
            <div
              key={item.id}
              className="px-2 py-1.5 hover:bg-[#1a2332] cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] bb-text-muted">{item.time}</span>
                <span className="text-[10px] bb-text-blue font-bold">
                  {item.source}
                </span>
                <span className="text-[10px] bb-text-orange">
                  {item.category}
                </span>
              </div>
              <p className="text-xs bb-text-white leading-tight">
                {item.headline}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
