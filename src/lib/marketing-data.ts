export type Channel = "youtube" | "linkedin" | "tiktok" | "instagram" | "email";

export type ContentStatus = "geplant" | "in-arbeit" | "veroeffentlicht";

export interface ContentItem {
  id: string;
  channel: Channel;
  title: string;
  description: string;
  day: string; // "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So"
  format: string;
  status: ContentStatus;
}

export interface ChannelInfo {
  channel: Channel;
  label: string;
  color: string;
  schedule: string[];
}

export interface KPI {
  label: string;
  current: number;
  target: number;
  unit: string;
}

export const channels: ChannelInfo[] = [
  {
    channel: "youtube",
    label: "YouTube",
    color: "bg-red-500",
    schedule: ["Di: Tutorial (8-12 Min)", "Do: Short (60 Sek)"],
  },
  {
    channel: "linkedin",
    label: "LinkedIn",
    color: "bg-blue-600",
    schedule: ["Mo: Fachartikel", "Mi: Story-Post", "Sa: Rueckblick"],
  },
  {
    channel: "tiktok",
    label: "TikTok",
    color: "bg-pink-500",
    schedule: ["Mi: Quick-Tip", "Fr: Trend-Format"],
  },
  {
    channel: "instagram",
    label: "Instagram",
    color: "bg-purple-500",
    schedule: ["Do: Reel", "Taeglich: Stories"],
  },
  {
    channel: "email",
    label: "E-Mail",
    color: "bg-green-600",
    schedule: ["Welcome-Serie", "Woechentlicher Newsletter"],
  },
];

export const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"] as const;

export const sampleContent: ContentItem[] = [
  {
    id: "1",
    channel: "linkedin",
    title: "KI in der Energieberatung: 5 Praxistipps",
    description: "Fachartikel ueber KI-Anwendungen",
    day: "Mo",
    format: "Fachartikel",
    status: "geplant",
  },
  {
    id: "2",
    channel: "youtube",
    title: "So automatisierst du deinen Beratungsbericht",
    description: "Schritt-fuer-Schritt Tutorial",
    day: "Di",
    format: "Tutorial (8-12 Min)",
    status: "geplant",
  },
  {
    id: "3",
    channel: "tiktok",
    title: "3 KI-Tools die jeder Energieberater kennen muss",
    description: "Schneller Ueberblick",
    day: "Mi",
    format: "Quick-Tip",
    status: "in-arbeit",
  },
  {
    id: "4",
    channel: "linkedin",
    title: "Wie wir unseren Workflow um 40% beschleunigt haben",
    description: "Story-Post mit Einblicken",
    day: "Mi",
    format: "Story-Post",
    status: "geplant",
  },
  {
    id: "5",
    channel: "youtube",
    title: "iSFP in 30 Sekunden erklaert",
    description: "YouTube Short",
    day: "Do",
    format: "Short (60 Sek)",
    status: "geplant",
  },
  {
    id: "6",
    channel: "instagram",
    title: "Behind the Scenes: KI-Webseite fuer Energieberater",
    description: "Reel mit Einblicken ins Produkt",
    day: "Do",
    format: "Reel",
    status: "veroeffentlicht",
  },
  {
    id: "7",
    channel: "tiktok",
    title: "Energieberater reagiert auf KI-Trends",
    description: "Trend-Format",
    day: "Fr",
    format: "Trend-Format",
    status: "geplant",
  },
  {
    id: "8",
    channel: "linkedin",
    title: "Wochenrueckblick: KI + Energiewende",
    description: "Zusammenfassung der Woche",
    day: "Sa",
    format: "Rueckblick",
    status: "geplant",
  },
  {
    id: "9",
    channel: "email",
    title: "Newsletter: Neue Features & Branchen-News",
    description: "Woechentlicher Newsletter",
    day: "Do",
    format: "Newsletter",
    status: "in-arbeit",
  },
];

export const kpis: KPI[] = [
  {
    label: "E-Mail-Abonnenten",
    current: 847,
    target: 2000,
    unit: "Abonnenten",
  },
  {
    label: "Demo-Buchungen (Monat)",
    current: 23,
    target: 50,
    unit: "Buchungen",
  },
  {
    label: "YouTube Abonnenten",
    current: 1250,
    target: 5000,
    unit: "Abonnenten",
  },
  {
    label: "LinkedIn Follower",
    current: 3400,
    target: 10000,
    unit: "Follower",
  },
];
