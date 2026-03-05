"use client";

import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  ComposedChart,
} from "recharts";
import { generateChartData, stocks } from "@/lib/mock-data";

interface ChartPanelProps {
  selectedStock: string;
}

export function ChartPanel({ selectedStock }: ChartPanelProps) {
  const chartData = useMemo(() => generateChartData(), []);
  const stock = stocks.find((s) => s.symbol === selectedStock) ?? stocks[0];
  const isPositive = stock.change >= 0;

  return (
    <div className="bb-panel h-full flex flex-col">
      <div className="bb-panel-header flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span>{selectedStock}</span>
          <span className="bb-text-white text-[10px] font-normal">
            {stock.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bb-text-white text-xs font-mono">
            {stock.price.toFixed(2)}
          </span>
          <span
            className={`text-xs font-mono ${
              isPositive ? "bb-text-green" : "bb-text-red"
            }`}
          >
            {isPositive ? "+" : ""}
            {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>
      <div className="flex-1 p-2 min-h-0">
        <div className="flex gap-4 mb-2 text-[10px]">
          <span className="bb-text-muted">
            O:{" "}
            <span className="bb-text-white">{stock.open.toFixed(2)}</span>
          </span>
          <span className="bb-text-muted">
            H:{" "}
            <span className="bb-text-green">{stock.high.toFixed(2)}</span>
          </span>
          <span className="bb-text-muted">
            L: <span className="bb-text-red">{stock.low.toFixed(2)}</span>
          </span>
          <span className="bb-text-muted">
            V: <span className="bb-text-white">{stock.volume}</span>
          </span>
          <span className="bb-text-muted">
            MCap: <span className="bb-text-yellow">{stock.marketCap}</span>
          </span>
        </div>
        <ResponsiveContainer width="100%" height="85%">
          <ComposedChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e2d3d"
              vertical={false}
            />
            <XAxis
              dataKey="time"
              tick={{ fill: "#5a6a7a", fontSize: 10 }}
              axisLine={{ stroke: "#1e2d3d" }}
              tickLine={false}
            />
            <YAxis
              yAxisId="price"
              domain={["auto", "auto"]}
              tick={{ fill: "#5a6a7a", fontSize: 10 }}
              axisLine={{ stroke: "#1e2d3d" }}
              tickLine={false}
              orientation="right"
            />
            <YAxis
              yAxisId="volume"
              domain={[0, "auto"]}
              tick={false}
              axisLine={false}
              tickLine={false}
              width={0}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a2332",
                border: "1px solid #1e2d3d",
                borderRadius: "2px",
                fontSize: "11px",
                color: "#c8d6e5",
              }}
              labelStyle={{ color: "#ff8c00" }}
            />
            <Bar
              yAxisId="volume"
              dataKey="volume"
              fill="#1e2d3d"
              opacity={0.5}
            />
            <Area
              yAxisId="price"
              type="monotone"
              dataKey="price"
              stroke={isPositive ? "#00d26a" : "#ff3e3e"}
              strokeWidth={1.5}
              fill={isPositive ? "#00d26a" : "#ff3e3e"}
              fillOpacity={0.08}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
