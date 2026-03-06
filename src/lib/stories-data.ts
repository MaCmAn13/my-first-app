export type InteractionType = "poll" | "quiz" | "question";

export interface PollOption {
  id: string;
  text: string;
}

export interface StoryInteraction {
  type: InteractionType;
  prompt: string;
  options?: PollOption[];
  correctAnswer?: string; // for quiz
  placeholder?: string; // for question
}

export interface Story {
  id: number;
  type: "tipp" | "behind-the-scenes" | "produkt" | "faq" | "community" | "cta";
  typeLabel: string;
  title: string;
  content: string;
  bgGradient: string;
  interaction: StoryInteraction;
}

export const weeklyStories: Story[] = [
  {
    id: 1,
    type: "tipp",
    typeLabel: "Tipp",
    title: "Keyboard-Shortcuts, die dein Leben veraendern",
    content:
      "Wusstest du, dass du mit Cmd+K (Mac) oder Ctrl+K (Windows) in fast jeder App eine Suchleiste oeffnen kannst? Dieser eine Shortcut spart dir taeglich Minuten!",
    bgGradient: "from-blue-600 to-cyan-500",
    interaction: {
      type: "poll",
      prompt: "Nutzt du regelmaessig Keyboard-Shortcuts?",
      options: [
        { id: "a", text: "Ja, staendig!" },
        { id: "b", text: "Nur die Basics (Copy/Paste)" },
        { id: "c", text: "Eher selten" },
        { id: "d", text: "Was sind Shortcuts?" },
      ],
    },
  },
  {
    id: 2,
    type: "tipp",
    typeLabel: "Tipp",
    title: "Dark Mode richtig einsetzen",
    content:
      "Dark Mode ist nicht nur Aesthetik - er reduziert Augenbelastung bei schlechtem Licht und spart Akku auf OLED-Displays. Aber: Fuer laengere Texte ist Light Mode oft besser lesbar.",
    bgGradient: "from-gray-900 to-gray-700",
    interaction: {
      type: "quiz",
      prompt: "Welche Display-Technologie profitiert am meisten vom Dark Mode?",
      options: [
        { id: "a", text: "LCD" },
        { id: "b", text: "OLED" },
        { id: "c", text: "E-Ink" },
      ],
      correctAnswer: "b",
    },
  },
  {
    id: 3,
    type: "behind-the-scenes",
    typeLabel: "Behind the Scenes",
    title: "So planen wir neue Features",
    content:
      "Jedes Feature startet mit einer kurzen Idee. Dann schreiben wir Requirements, designen die Architektur, bauen Frontend & Backend und testen alles gruendlich - bevor ihr es seht.",
    bgGradient: "from-purple-700 to-pink-500",
    interaction: {
      type: "question",
      prompt: "Was wuerdest du gerne mal hinter den Kulissen sehen?",
      placeholder: "z.B. Design-Prozess, Team-Alltag, Tech-Stack...",
    },
  },
  {
    id: 4,
    type: "produkt",
    typeLabel: "Produkt-Update",
    title: "Neu: Interaktive Story-Ansicht",
    content:
      "Ab sofort koennt ihr unsere Inhalte als interaktive Stories erleben - mit Umfragen, Quizzes und offenen Fragen. Swipe durch und mach mit!",
    bgGradient: "from-green-600 to-emerald-400",
    interaction: {
      type: "poll",
      prompt: "Wie gefaellt dir das neue Story-Format?",
      options: [
        { id: "a", text: "Mega, mehr davon!" },
        { id: "b", text: "Ganz cool" },
        { id: "c", text: "Bin noch unsicher" },
        { id: "d", text: "Nicht so meins" },
      ],
    },
  },
  {
    id: 5,
    type: "faq",
    typeLabel: "FAQ",
    title: "Haeufig gefragt: Ist die App kostenlos?",
    content:
      "Ja! Der Grundfunktionsumfang ist und bleibt kostenlos. Wir planen Premium-Features fuer Power-User, aber die Kernfunktionen sind frei verfuegbar.",
    bgGradient: "from-amber-500 to-orange-600",
    interaction: {
      type: "quiz",
      prompt: "Was bedeutet 'Freemium'?",
      options: [
        { id: "a", text: "Komplett gratis" },
        { id: "b", text: "Grundversion gratis, Extras kosten" },
        { id: "c", text: "Kostenlose Testphase, dann kostenpflichtig" },
      ],
      correctAnswer: "b",
    },
  },
  {
    id: 6,
    type: "community",
    typeLabel: "Community",
    title: "Eure Top-Feature-Wuensche",
    content:
      "Letzte Woche habt ihr abgestimmt - hier die Top 3 eurer Wuensche: 1. Offline-Modus, 2. Team-Kollaboration, 3. Benutzerdefinierte Themes. Wir hoeren euch!",
    bgGradient: "from-rose-600 to-red-500",
    interaction: {
      type: "poll",
      prompt: "Welches Feature sollen wir als naechstes bauen?",
      options: [
        { id: "a", text: "Offline-Modus" },
        { id: "b", text: "Team-Kollaboration" },
        { id: "c", text: "Custom Themes" },
        { id: "d", text: "Etwas ganz anderes!" },
      ],
    },
  },
  {
    id: 7,
    type: "cta",
    typeLabel: "Mitmachen",
    title: "Werde Teil unserer Community!",
    content:
      "Du hast Ideen, Feedback oder willst einfach mit Gleichgesinnten connecten? Tritt unserer Community bei und gestalte die Zukunft der App aktiv mit!",
    bgGradient: "from-indigo-600 to-violet-500",
    interaction: {
      type: "question",
      prompt: "Was ist dein groesster Wunsch an uns?",
      placeholder: "Schreib uns deine Idee...",
    },
  },
];
