export const email1 = {
  id: "welcome-1",
  delay: 0, // sofort
  subject: "Willkommen! Dein kostenloser Download wartet auf dich",
  previewText:
    "Schoen, dass du dabei bist. Hier ist dein versprochener Download.",

  body: `Hallo {{firstName}},

herzlich willkommen! Wir freuen uns, dass du dich fuer unseren Newsletter entschieden hast.

Wie versprochen findest du hier deinen kostenlosen Download:

[Download jetzt herunterladen] {{downloadLink}}

In diesem Guide erfaehrst du:
- Die 3 wichtigsten Strategien, die sofort umsetzbar sind
- Praxiserprobte Vorlagen, die du direkt nutzen kannst
- Schritt-fuer-Schritt-Anleitungen fuer deinen Erfolg

Was dich in den naechsten Tagen erwartet:
Wir schicken dir eine kurze Serie mit unseren besten Tipps und Einblicken. Kein Spam - nur Inhalte, die dir wirklich weiterhelfen.

Falls du Fragen hast, antworte einfach auf diese E-Mail. Wir lesen jede Nachricht.

Viel Erfolg mit deinem Download!

Beste Gruesse
{{senderName}}

P.S. Schau am besten gleich in den Guide rein, solange die Motivation frisch ist.`,
} as const;
