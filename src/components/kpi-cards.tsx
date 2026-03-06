"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { kpis } from "@/lib/marketing-data";

export function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => {
        const percent = Math.round((kpi.current / kpi.target) * 100);
        return (
          <Card key={kpi.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {kpi.current.toLocaleString("de-DE")}
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Ziel: {kpi.target.toLocaleString("de-DE")} {kpi.unit}
              </p>
              <Progress value={percent} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">{percent}%</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
