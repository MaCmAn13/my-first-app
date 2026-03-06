export const email4 = {
  id: "welcome-4",
  delay: 6, // Tag 6
  subject: "Dieses Feature spart unseren Nutzern 10+ Stunden pro Woche",
  previewText:
    "Entdecke die Funktion, die den groessten Unterschied macht.",

  body: `Hallo {{firstName}},

erinnerst du dich an die Erfolgsgeschichte aus meiner letzten E-Mail? Heute zeige ich dir das Feature, das dabei den groessten Unterschied gemacht hat.

{{featureName}} - Dein neuer Produktivitaets-Booster

Was es macht:
{{featureName}} analysiert automatisch deine Daten, erkennt Muster und liefert dir fertige Handlungsempfehlungen - in Echtzeit.

So funktioniert es in 3 Schritten:

Schritt 1: Verbinden
Verbinde deine bestehenden Tools und Datenquellen mit wenigen Klicks. Keine Programmierung noetig.

Schritt 2: Analysieren
Die KI analysiert deine Daten und identifiziert Optimierungspotenziale, die du sonst uebersehen wuerdest.

Schritt 3: Umsetzen
Du erhaeltst konkrete, umsetzbare Empfehlungen. Mit einem Klick kannst du Aenderungen direkt uebernehmen.

Was unsere Nutzer sagen:
"{{featureName}} hat die Art veraendert, wie wir arbeiten. Was frueher ein ganzer Arbeitstag war, erledigen wir jetzt in einer Stunde." - {{testimonialAuthor}}

Das Beste daran:
- Keine Einarbeitungszeit - intuitiv bedienbar
- Funktioniert mit deinen bestehenden Tools
- Ergebnisse ab dem ersten Tag sichtbar

[Sieh dir {{featureName}} in Aktion an] {{featureVideoLink}}

Morgen uebermorgen habe ich noch etwas Besonderes fuer dich vorbereitet.

Beste Gruesse
{{senderName}}

P.S. Das Feature ist in allen Plaenen enthalten - auch in der kostenlosen Testversion.`,
} as const;
