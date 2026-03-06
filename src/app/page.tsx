import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KPICards } from "@/components/kpi-cards";
import { ChannelOverview } from "@/components/channel-overview";
import { ContentCalendar } from "@/components/content-calendar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold tracking-tight">
            Marketing Agent
          </h1>
          <p className="text-sm text-muted-foreground">
            KI-Loesungen fuer Energieberater &mdash; Content-Planung & KPIs
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section>
          <h2 className="text-lg font-semibold mb-4">KPI-Ueberblick</h2>
          <KPICards />
        </section>

        <Tabs defaultValue="kalender" className="w-full">
          <TabsList>
            <TabsTrigger value="kalender">Wochenkalender</TabsTrigger>
            <TabsTrigger value="kanaele">Kanaele</TabsTrigger>
          </TabsList>
          <TabsContent value="kalender" className="mt-4">
            <ContentCalendar />
          </TabsContent>
          <TabsContent value="kanaele" className="mt-4">
            <ChannelOverview />
          </TabsContent>
        </Tabs>

        <section className="border-t pt-6">
          <h2 className="text-lg font-semibold mb-2">Funnel-Strategie</h2>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">YouTube / TikTok</span>
            <span>&rarr;</span>
            <span className="font-medium text-foreground">LinkedIn / Meta</span>
            <span>&rarr;</span>
            <span className="font-medium text-foreground">Google Retargeting</span>
            <span>&rarr;</span>
            <span className="font-medium text-foreground">Demo-Buchung</span>
          </div>
        </section>
      </main>
    </div>
  );
}
