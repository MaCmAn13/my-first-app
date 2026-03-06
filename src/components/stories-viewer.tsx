"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { weeklyStories, type Story } from "@/lib/stories-data";

function PollInteraction({ story }: { story: Story }) {
  const [selected, setSelected] = useState<string | null>(null);
  const interaction = story.interaction;
  if (interaction.type !== "poll" || !interaction.options) return null;

  return (
    <div className="space-y-3">
      <p className="font-semibold text-white text-lg">{interaction.prompt}</p>
      <div className="space-y-2">
        {interaction.options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
              selected === option.id
                ? "border-white bg-white/30 font-bold"
                : "border-white/40 bg-white/10 hover:bg-white/20"
            }`}
          >
            <span className="text-white">{option.text}</span>
          </button>
        ))}
      </div>
      {selected && (
        <p className="text-white/80 text-sm text-center animate-in fade-in">
          Danke fuer deine Stimme!
        </p>
      )}
    </div>
  );
}

function QuizInteraction({ story }: { story: Story }) {
  const [selected, setSelected] = useState<string | null>(null);
  const interaction = story.interaction;
  if (interaction.type !== "quiz" || !interaction.options) return null;

  const isCorrect = selected === interaction.correctAnswer;

  return (
    <div className="space-y-3">
      <p className="font-semibold text-white text-lg">{interaction.prompt}</p>
      <div className="space-y-2">
        {interaction.options.map((option) => {
          let styles = "border-white/40 bg-white/10 hover:bg-white/20";
          if (selected) {
            if (option.id === interaction.correctAnswer) {
              styles = "border-green-300 bg-green-500/40 font-bold";
            } else if (option.id === selected && !isCorrect) {
              styles = "border-red-300 bg-red-500/40";
            } else {
              styles = "border-white/20 bg-white/5 opacity-60";
            }
          }
          return (
            <button
              key={option.id}
              onClick={() => !selected && setSelected(option.id)}
              disabled={!!selected}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${styles}`}
            >
              <span className="text-white">{option.text}</span>
            </button>
          );
        })}
      </div>
      {selected && (
        <p className="text-white/80 text-sm text-center animate-in fade-in">
          {isCorrect ? "Richtig! Gut gemacht!" : "Nicht ganz - aber jetzt weisst du es!"}
        </p>
      )}
    </div>
  );
}

function QuestionInteraction({ story }: { story: Story }) {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const interaction = story.interaction;
  if (interaction.type !== "question") return null;

  return (
    <div className="space-y-3">
      <p className="font-semibold text-white text-lg">{interaction.prompt}</p>
      {!submitted ? (
        <div className="space-y-2">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder={interaction.placeholder}
            className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/10 text-white placeholder:text-white/50 resize-none focus:outline-none focus:border-white/70"
            rows={3}
          />
          <Button
            onClick={() => answer.trim() && setSubmitted(true)}
            className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40"
            variant="outline"
          >
            Absenden
          </Button>
        </div>
      ) : (
        <p className="text-white/80 text-sm text-center animate-in fade-in">
          Danke fuer dein Feedback!
        </p>
      )}
    </div>
  );
}

function StoryInteractionBlock({ story }: { story: Story }) {
  switch (story.interaction.type) {
    case "poll":
      return <PollInteraction story={story} />;
    case "quiz":
      return <QuizInteraction story={story} />;
    case "question":
      return <QuestionInteraction story={story} />;
  }
}

const typeColorMap: Record<Story["type"], string> = {
  tipp: "bg-blue-500",
  "behind-the-scenes": "bg-purple-500",
  produkt: "bg-green-500",
  faq: "bg-amber-500",
  community: "bg-rose-500",
  cta: "bg-indigo-500",
};

export function StoriesViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const story = weeklyStories[currentIndex];
  const total = weeklyStories.length;

  const goNext = () => setCurrentIndex((i) => Math.min(i + 1, total - 1));
  const goPrev = () => setCurrentIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div
        className={`relative w-full max-w-md bg-gradient-to-br ${story.bgGradient} rounded-3xl overflow-hidden shadow-2xl`}
        style={{ minHeight: "85vh" }}
      >
        {/* Progress bars */}
        <div className="absolute top-0 left-0 right-0 flex gap-1 p-3 z-10">
          {weeklyStories.map((_, i) => (
            <Progress
              key={i}
              value={i < currentIndex ? 100 : i === currentIndex ? 50 : 0}
              className="h-1 flex-1 bg-white/30"
            />
          ))}
        </div>

        {/* Navigation touch areas */}
        <button
          onClick={goPrev}
          className="absolute top-0 left-0 w-1/3 h-full z-20 cursor-pointer"
          aria-label="Vorherige Story"
        />
        <button
          onClick={goNext}
          className="absolute top-0 right-0 w-1/3 h-full z-20 cursor-pointer"
          aria-label="Naechste Story"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-6 pt-12" style={{ minHeight: "85vh" }}>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className={`${typeColorMap[story.type]} text-white border-0`}>
                {story.typeLabel}
              </Badge>
              <span className="text-white/60 text-sm">
                {currentIndex + 1} / {total}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white leading-tight">
              {story.title}
            </h2>

            <p className="text-white/90 text-base leading-relaxed">
              {story.content}
            </p>
          </div>

          {/* Interactive element */}
          <div className="mt-auto pt-6">
            <StoryInteractionBlock story={story} />
          </div>

          {/* Navigation hints */}
          <div className="flex justify-between mt-4 text-white/50 text-xs">
            <span>{currentIndex > 0 ? "< Zurueck" : ""}</span>
            <span>{currentIndex < total - 1 ? "Weiter >" : "Ende"}</span>
          </div>
        </div>
      </div>

      {/* Story dots */}
      <div className="flex gap-2 mt-4">
        {weeklyStories.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? "bg-white w-6" : "bg-white/40"
            }`}
            aria-label={`Story ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
