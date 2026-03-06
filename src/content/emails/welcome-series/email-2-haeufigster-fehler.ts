export const email2 = {
  id: "welcome-2",
  delay: 2, // Tag 2
  subject: "Der #1 Fehler, den fast alle machen (und wie KI ihn loest)",
  previewText:
    "Dieser Fehler kostet dich Zeit und Geld. So vermeidest du ihn.",

  body: `Hallo {{firstName}},

hast du schon einen Blick in den Guide geworfen? Heute zeige ich dir etwas, das die meisten uebersehen.

Der haeufigste Fehler:
Die meisten versuchen, alles manuell zu erledigen. Sie verbringen Stunden mit repetitiven Aufgaben, die laengst automatisiert werden koennten.

Das Ergebnis? Zeitverschwendung, Frustration und Ergebnisse, die hinter den Erwartungen bleiben.

Die KI-Loesung:
Mit dem richtigen Einsatz von KI-Werkzeugen kannst du:

1. Routineaufgaben in Minuten statt Stunden erledigen
2. Fehlerquoten drastisch reduzieren
3. Dich auf das konzentrieren, was wirklich zaehlt - Strategie und Kreativitaet

Ein konkretes Beispiel:
Statt manuell Daten zu analysieren und Berichte zu erstellen, uebernimmt unsere KI-Loesung die schwere Arbeit. Du gibst die Richtung vor, die KI liefert die Ergebnisse.

[Erfahre mehr darueber, wie das funktioniert] {{blogLink}}

In der naechsten E-Mail zeige ich dir, wie einer unserer Kunden damit beeindruckende Ergebnisse erzielt hat.

Beste Gruesse
{{senderName}}

P.S. Wenn du den Fehler schon erkannt hast - umso besser. Dann bist du bereit fuer den naechsten Schritt.`,
} as const;
