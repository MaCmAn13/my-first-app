"use client";

import { useState, useRef, useCallback } from "react";

interface CommandLineProps {
  onSelectStock: (symbol: string) => void;
}

const COMMANDS: Record<string, string> = {
  HELP: "Available commands: <TICKER> (view stock), TOP (top movers), NEWS (latest news), DES (description), GP (chart), WEI (world equity indices)",
  TOP: "Top Movers: TSLA +3.73% | AMZN +2.32% | GOOGL +1.98% | NVDA +1.76% | XOM -1.47%",
  DES: "Company Description loaded. Use ticker first, e.g. AAPL <GO>",
  GP: "Graph/Chart panel activated.",
  WEI: "World Equity Indices: SPX +0.49% | INDU +0.34% | DAX +0.61% | NKY +0.66% | UKX -0.18%",
  NEWS: "Loading top news stories...",
};

const KNOWN_TICKERS = [
  "AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "META", "TSLA", "BRK.B", "JPM", "V", "UNH", "XOM",
];

export function CommandLine({ onSelectStock }: CommandLineProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; result: string }>>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = useCallback(
    (rawCmd: string) => {
      const cmd = rawCmd.trim().toUpperCase().replace(/ <GO>$/, "").replace(/ GO$/, "");
      if (!cmd) return;

      let result: string;

      if (KNOWN_TICKERS.includes(cmd)) {
        onSelectStock(cmd);
        result = `Loading ${cmd} Equity...`;
      } else if (COMMANDS[cmd]) {
        result = COMMANDS[cmd];
      } else {
        result = `Unknown command: ${cmd}. Type HELP for available commands.`;
      }

      setHistory((prev) => [...prev.slice(-19), { cmd: rawCmd.trim(), result }]);
      setInput("");
      setHistoryIndex(-1);
    },
    [onSelectStock]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex].cmd);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex].cmd);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="bg-[#0a0e17] border-t border-[#1e2d3d]">
      {history.length > 0 && (
        <div className="max-h-24 overflow-y-auto bb-scrollbar px-3 py-1">
          {history.slice(-3).map((entry, i) => (
            <div key={i} className="text-[10px] leading-relaxed">
              <span className="bb-text-orange">&gt; {entry.cmd}</span>
              <span className="bb-text-muted ml-2">{entry.result}</span>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-2 px-3 py-2 border-t border-[#1e2d3d]">
        <span className="bb-text-orange text-sm font-bold">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-sm bb-text-white font-mono placeholder:bb-text-muted"
          placeholder="Enter command or ticker... (e.g. AAPL, HELP, TOP)"
          autoFocus
          spellCheck={false}
        />
        <button
          onClick={() => executeCommand(input)}
          className="px-3 py-0.5 bg-[#ff8c00] text-black text-xs font-bold tracking-wider hover:bg-[#ffaa33] transition-colors"
        >
          &lt;GO&gt;
        </button>
      </div>
    </div>
  );
}
