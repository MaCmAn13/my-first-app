"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  weekdays,
  sampleContent,
  channels,
  type ContentItem,
  type ContentStatus,
} from "@/lib/marketing-data";

function statusVariant(status: ContentStatus) {
  switch (status) {
    case "veroeffentlicht":
      return "default" as const;
    case "in-arbeit":
      return "secondary" as const;
    case "geplant":
      return "outline" as const;
  }
}

function statusLabel(status: ContentStatus) {
  switch (status) {
    case "veroeffentlicht":
      return "Live";
    case "in-arbeit":
      return "In Arbeit";
    case "geplant":
      return "Geplant";
  }
}

function channelColor(channel: string) {
  return channels.find((c) => c.channel === channel)?.color ?? "bg-gray-500";
}

function ContentCard({ item }: { item: ContentItem }) {
  return (
    <Card className="mb-2">
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`inline-block w-2 h-2 rounded-full ${channelColor(item.channel)}`}
          />
          <span className="text-xs font-medium uppercase text-muted-foreground">
            {item.channel}
          </span>
          <Badge variant={statusVariant(item.status)} className="text-[10px] ml-auto">
            {statusLabel(item.status)}
          </Badge>
        </div>
        <p className="text-sm font-medium leading-tight">{item.title}</p>
        <p className="text-xs text-muted-foreground mt-1">{item.format}</p>
      </CardContent>
    </Card>
  );
}

export function ContentCalendar() {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-7 gap-3 min-w-[900px]">
        {weekdays.map((day) => {
          const dayItems = sampleContent.filter((c) => c.day === day);
          return (
            <div key={day}>
              <div className="text-center font-semibold text-sm mb-2 py-2 rounded-md bg-muted">
                {day}
              </div>
              <div className="min-h-[120px]">
                {dayItems.length > 0 ? (
                  dayItems.map((item) => (
                    <ContentCard key={item.id} item={item} />
                  ))
                ) : (
                  <div className="text-center text-xs text-muted-foreground py-4">
                    Kein Content
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
