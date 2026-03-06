export const email3 = {
  id: "welcome-3",
  delay: 4, // Tag 4
  subject: "Wie Firma X in 30 Tagen ihre Effizienz verdoppelt hat",
  previewText:
    "Eine echte Erfolgsgeschichte mit konkreten Zahlen und Ergebnissen.",

  body: `Hallo {{firstName}},

heute moechte ich dir eine Geschichte erzaehlen, die zeigt, was moeglich ist.

Die Ausgangssituation:
{{customerName}} stand vor einer Herausforderung, die dir vielleicht bekannt vorkommt: Zu viele manuelle Prozesse, zu wenig Zeit und ein Team, das am Limit arbeitete.

"Wir haben jede Woche 20 Stunden mit Aufgaben verbracht, die eigentlich automatisiert laufen koennten." - {{customerContact}}, {{customerRole}}

Die Loesung:
Innerhalb von 30 Tagen hat {{customerName}} unsere Loesung implementiert und folgende Ergebnisse erzielt:

- 50% weniger Zeitaufwand fuer Routineaufgaben
- 35% hoehere Produktivitaet im gesamten Team
- ROI bereits nach 6 Wochen erreicht

Der entscheidende Moment:
"Als wir gesehen haben, wie die KI in Minuten erledigt, wofuer wir frueher Stunden gebraucht haben, war klar: Es gibt kein Zurueck mehr." - {{customerContact}}

Was {{customerName}} anders gemacht hat:
1. Klein angefangen - mit einem einzigen Prozess
2. Das Team frueh eingebunden
3. Ergebnisse gemessen und optimiert

[Lies die vollstaendige Fallstudie] {{caseStudyLink}}

In der naechsten E-Mail zeige ich dir das Feature, das bei {{customerName}} den groessten Unterschied gemacht hat.

Beste Gruesse
{{senderName}}

P.S. Du musst nicht gleich alles umstellen. Schon ein einzelner automatisierter Prozess kann den Unterschied machen.`,
} as const;
