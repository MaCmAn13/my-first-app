"use client";

import { stocks, type StockData } from "@/lib/mock-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

function PriceCell({ value, isPositive }: { value: number; isPositive: boolean }) {
  return (
    <span className={isPositive ? "bb-text-green" : "bb-text-red"}>
      {isPositive ? "+" : ""}
      {value.toFixed(2)}
    </span>
  );
}

function StockRow({ stock, isSelected, onClick }: { stock: StockData; isSelected: boolean; onClick: () => void }) {
  const isPositive = stock.change >= 0;
  return (
    <TableRow
      className={`cursor-pointer border-b border-[#1e2d3d] hover:bg-[#1a2332] transition-colors ${
        isSelected ? "bg-[#1a2332]" : ""
      }`}
      onClick={onClick}
    >
      <TableCell className="py-1 px-2 text-xs font-bold bb-text-yellow">
        {stock.symbol}
      </TableCell>
      <TableCell className="py-1 px-2 text-xs bb-text-white text-right font-mono">
        {stock.price.toFixed(2)}
      </TableCell>
      <TableCell className="py-1 px-2 text-xs text-right font-mono">
        <PriceCell value={stock.change} isPositive={isPositive} />
      </TableCell>
      <TableCell className="py-1 px-2 text-xs text-right font-mono">
        <PriceCell value={stock.changePercent} isPositive={isPositive} />
        <span className={isPositive ? "bb-text-green" : "bb-text-red"}>%</span>
      </TableCell>
      <TableCell className="py-1 px-2 text-xs bb-text-muted text-right font-mono">
        {stock.volume}
      </TableCell>
    </TableRow>
  );
}

interface MarketPanelProps {
  selectedStock: string;
  onSelectStock: (symbol: string) => void;
}

export function MarketPanel({ selectedStock, onSelectStock }: MarketPanelProps) {
  return (
    <div className="bb-panel h-full flex flex-col">
      <div className="bb-panel-header flex justify-between items-center">
        <span>Equity Monitor</span>
        <span className="bb-text-muted text-[10px]">US EQUITIES</span>
      </div>
      <ScrollArea className="flex-1 bb-scrollbar">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#1e2d3d] hover:bg-transparent">
              <TableHead className="py-1 px-2 text-[10px] bb-text-muted font-normal h-auto">
                TICKER
              </TableHead>
              <TableHead className="py-1 px-2 text-[10px] bb-text-muted font-normal text-right h-auto">
                LAST
              </TableHead>
              <TableHead className="py-1 px-2 text-[10px] bb-text-muted font-normal text-right h-auto">
                CHG
              </TableHead>
              <TableHead className="py-1 px-2 text-[10px] bb-text-muted font-normal text-right h-auto">
                CHG%
              </TableHead>
              <TableHead className="py-1 px-2 text-[10px] bb-text-muted font-normal text-right h-auto">
                VOL
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stocks.map((stock) => (
              <StockRow
                key={stock.symbol}
                stock={stock}
                isSelected={selectedStock === stock.symbol}
                onClick={() => onSelectStock(stock.symbol)}
              />
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}
