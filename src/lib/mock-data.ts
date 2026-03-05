export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  high: number;
  low: number;
  open: number;
  marketCap: string;
}

export interface IndexData {
  symbol: string;
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

export interface CurrencyData {
  pair: string;
  rate: number;
  change: number;
  changePercent: number;
}

export interface NewsItem {
  id: number;
  time: string;
  source: string;
  headline: string;
  category: string;
}

export interface ChartDataPoint {
  time: string;
  price: number;
  volume: number;
}

export const stocks: StockData[] = [
  { symbol: "AAPL", name: "Apple Inc", price: 189.84, change: 2.31, changePercent: 1.23, volume: "52.3M", high: 191.05, low: 187.45, open: 188.12, marketCap: "2.95T" },
  { symbol: "MSFT", name: "Microsoft Corp", price: 415.26, change: -1.87, changePercent: -0.45, volume: "21.1M", high: 418.50, low: 413.20, open: 417.00, marketCap: "3.09T" },
  { symbol: "GOOGL", name: "Alphabet Inc", price: 175.98, change: 3.42, changePercent: 1.98, volume: "28.7M", high: 176.80, low: 172.30, open: 173.10, marketCap: "2.18T" },
  { symbol: "AMZN", name: "Amazon.com", price: 201.45, change: 4.56, changePercent: 2.32, volume: "45.2M", high: 202.10, low: 197.80, open: 198.20, marketCap: "2.09T" },
  { symbol: "NVDA", name: "NVIDIA Corp", price: 878.35, change: 15.23, changePercent: 1.76, volume: "38.9M", high: 885.00, low: 860.10, open: 865.00, marketCap: "2.17T" },
  { symbol: "META", name: "Meta Platforms", price: 512.30, change: -3.21, changePercent: -0.62, volume: "15.8M", high: 516.40, low: 509.80, open: 515.00, marketCap: "1.30T" },
  { symbol: "TSLA", name: "Tesla Inc", price: 248.42, change: 8.94, changePercent: 3.73, volume: "82.1M", high: 251.30, low: 240.50, open: 241.00, marketCap: "790.5B" },
  { symbol: "BRK.B", name: "Berkshire Hath B", price: 441.20, change: 0.85, changePercent: 0.19, volume: "3.2M", high: 443.10, low: 439.50, open: 440.00, marketCap: "795.2B" },
  { symbol: "JPM", name: "JPMorgan Chase", price: 198.75, change: 1.23, changePercent: 0.62, volume: "8.5M", high: 199.80, low: 196.90, open: 197.50, marketCap: "571.3B" },
  { symbol: "V", name: "Visa Inc", price: 285.60, change: -0.45, changePercent: -0.16, volume: "5.1M", high: 287.20, low: 284.10, open: 286.00, marketCap: "585.8B" },
  { symbol: "UNH", name: "UnitedHealth Grp", price: 527.80, change: 2.10, changePercent: 0.40, volume: "3.8M", high: 530.00, low: 524.50, open: 526.00, marketCap: "487.2B" },
  { symbol: "XOM", name: "Exxon Mobil", price: 104.35, change: -1.56, changePercent: -1.47, volume: "12.4M", high: 106.20, low: 103.80, open: 105.90, marketCap: "416.1B" },
];

export const indices: IndexData[] = [
  { symbol: "SPX", name: "S&P 500", value: 5234.18, change: 25.61, changePercent: 0.49 },
  { symbol: "INDU", name: "Dow Jones", value: 39127.80, change: 134.21, changePercent: 0.34 },
  { symbol: "CCMP", name: "Nasdaq Comp", value: 16439.22, change: 78.81, changePercent: 0.48 },
  { symbol: "RTY", name: "Russell 2000", value: 2083.47, change: -8.23, changePercent: -0.39 },
  { symbol: "VIX", name: "CBOE VIX", value: 13.25, change: -0.42, changePercent: -3.07 },
  { symbol: "DAX", name: "DAX Index", value: 18498.35, change: 112.45, changePercent: 0.61 },
  { symbol: "UKX", name: "FTSE 100", value: 8420.12, change: -15.34, changePercent: -0.18 },
  { symbol: "NKY", name: "Nikkei 225", value: 40168.07, change: 263.16, changePercent: 0.66 },
];

export const currencies: CurrencyData[] = [
  { pair: "EUR/USD", rate: 1.0842, change: 0.0012, changePercent: 0.11 },
  { pair: "GBP/USD", rate: 1.2715, change: -0.0023, changePercent: -0.18 },
  { pair: "USD/JPY", rate: 151.32, change: 0.45, changePercent: 0.30 },
  { pair: "USD/CHF", rate: 0.8834, change: -0.0015, changePercent: -0.17 },
  { pair: "AUD/USD", rate: 0.6542, change: 0.0034, changePercent: 0.52 },
  { pair: "USD/CAD", rate: 1.3578, change: 0.0021, changePercent: 0.15 },
  { pair: "BTC/USD", rate: 68425.30, change: 1250.40, changePercent: 1.86 },
  { pair: "ETH/USD", rate: 3542.18, change: -45.20, changePercent: -1.26 },
];

export const news: NewsItem[] = [
  { id: 1, time: "14:32", source: "BBG", headline: "Fed Officials Signal Patience on Rate Cuts Amid Sticky Inflation", category: "CENTRAL BANKS" },
  { id: 2, time: "14:28", source: "RTR", headline: "NVIDIA Surpasses $2T Market Cap on AI Chip Demand Surge", category: "TECHNOLOGY" },
  { id: 3, time: "14:25", source: "BBG", headline: "European Gas Prices Rise as LNG Shipments Face Delays", category: "COMMODITIES" },
  { id: 4, time: "14:21", source: "DJ", headline: "Tesla Announces New Gigafactory Location in Southeast Asia", category: "AUTOMOTIVE" },
  { id: 5, time: "14:18", source: "BBG", headline: "US Treasury Yields Climb After Stronger-Than-Expected Jobs Data", category: "FIXED INCOME" },
  { id: 6, time: "14:15", source: "RTR", headline: "China's Manufacturing PMI Expands for First Time in Six Months", category: "ECONOMICS" },
  { id: 7, time: "14:11", source: "BBG", headline: "Goldman Sachs Raises S&P 500 Year-End Target to 5,600", category: "STRATEGY" },
  { id: 8, time: "14:08", source: "DJ", headline: "Oil Steadies Near $82 as OPEC+ Considers Extending Output Cuts", category: "COMMODITIES" },
  { id: 9, time: "14:04", source: "BBG", headline: "Apple Vision Pro Sales Exceed Initial Expectations in Launch Quarter", category: "TECHNOLOGY" },
  { id: 10, time: "14:01", source: "RTR", headline: "ECB's Lagarde: Rate Decision to Be Data-Dependent Going Forward", category: "CENTRAL BANKS" },
  { id: 11, time: "13:57", source: "BBG", headline: "JPMorgan Reports Record Trading Revenue in Q1 Results", category: "FINANCIALS" },
  { id: 12, time: "13:54", source: "DJ", headline: "Bitcoin ETFs See $4.6B Inflows in First Month of Trading", category: "CRYPTO" },
  { id: 13, time: "13:50", source: "RTR", headline: "Microsoft Secures $10B Pentagon Cloud Contract Extension", category: "TECHNOLOGY" },
  { id: 14, time: "13:47", source: "BBG", headline: "German Industrial Output Falls More Than Expected in January", category: "ECONOMICS" },
  { id: 15, time: "13:43", source: "BBG", headline: "Pfizer Acquires Biotech Startup for $8.5B in Cancer Drug Push", category: "HEALTHCARE" },
];

export function generateChartData(): ChartDataPoint[] {
  const data: ChartDataPoint[] = [];
  let price = 5180;
  const times = [
    "09:30", "09:45", "10:00", "10:15", "10:30", "10:45",
    "11:00", "11:15", "11:30", "11:45", "12:00", "12:15",
    "12:30", "12:45", "13:00", "13:15", "13:30", "13:45",
    "14:00", "14:15", "14:30",
  ];
  for (const time of times) {
    price = price + (Math.random() - 0.45) * 8;
    data.push({
      time,
      price: Math.round(price * 100) / 100,
      volume: Math.round(Math.random() * 500 + 100),
    });
  }
  return data;
}
