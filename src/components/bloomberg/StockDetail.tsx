"use client";

import { stocks } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

interface StockDetailProps {
  selectedStock: string;
}

export function StockDetail({ selectedStock }: StockDetailProps) {
  const stock = stocks.find((s) => s.symbol === selectedStock) ?? stocks[0];
  const isPositive = stock.change >= 0;

  return (
    <div className="bb-panel h-full flex flex-col">
      <div className="bb-panel-header flex justify-between items-center">
        <span>Security Detail</span>
        <Badge
          variant="outline"
          className={`text-[10px] h-4 rounded-none border-0 px-1 ${
            isPositive ? "bg-[#00d26a]/20 bb-text-green" : "bg-[#ff3e3e]/20 bb-text-red"
          }`}
        >
          {isPositive ? "BULLISH" : "BEARISH"}
        </Badge>
      </div>
      <div className="p-2 flex-1">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold bb-text-white font-mono">
            {stock.price.toFixed(2)}
          </span>
          <span className="text-xs bb-text-muted">USD</span>
          <span
            className={`text-sm font-mono ${
              isPositive ? "bb-text-green" : "bb-text-red"
            }`}
          >
            {isPositive ? "+" : ""}
            {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
          <DetailRow label="Open" value={stock.open.toFixed(2)} />
          <DetailRow label="Prev Close" value={(stock.price - stock.change).toFixed(2)} />
          <DetailRow label="Day High" value={stock.high.toFixed(2)} color="bb-text-green" />
          <DetailRow label="Day Low" value={stock.low.toFixed(2)} color="bb-text-red" />
          <DetailRow label="Volume" value={stock.volume} />
          <DetailRow label="Market Cap" value={stock.marketCap} color="bb-text-yellow" />
        </div>

        <div className="mt-3 pt-2 border-t border-[#1e2d3d]">
          <div className="text-[10px] bb-text-muted mb-1">DAY RANGE</div>
          <div className="relative h-2 bg-[#1e2d3d] rounded-full">
            <div
              className="absolute top-0 h-full bg-gradient-to-r from-[#ff3e3e] via-[#ffd700] to-[#00d26a] rounded-full"
              style={{
                left: "0%",
                width: `${((stock.price - stock.low) / (stock.high - stock.low)) * 100}%`,
              }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-[#0d1117]"
              style={{
                left: `${((stock.price - stock.low) / (stock.high - stock.low)) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
          <div className="flex justify-between text-[10px] mt-0.5">
            <span className="bb-text-red">{stock.low.toFixed(2)}</span>
            <span className="bb-text-green">{stock.high.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  color = "bb-text-white",
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex justify-between">
      <span className="bb-text-muted">{label}</span>
      <span className={`${color} font-mono`}>{value}</span>
    </div>
  );
}
