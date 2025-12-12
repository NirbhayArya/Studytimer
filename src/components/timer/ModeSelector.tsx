import { motion } from "framer-motion";

export type TimerMode = "focus" | "shortBreak" | "longBreak";

interface ModeSelectorProps {
  currentMode: TimerMode;
  onModeChange: (mode: TimerMode) => void;
}

const modes = [
  { id: "focus" as const, label: "Focus", time: 25 },
  { id: "shortBreak" as const, label: "Short Break", time: 5 },
  { id: "longBreak" as const, label: "Long Break", time: 15 },
];

const ModeSelector = ({ currentMode, onModeChange }: ModeSelectorProps) => {
  return (
    <div className="glass-card rounded-full p-1.5 flex gap-1">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onModeChange(mode.id)}
          className="relative px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-colors duration-300"
        >
          {currentMode === mode.id && (
            <motion.div
              layoutId="activeMode"
              className="absolute inset-0 bg-foreground/20 rounded-full"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span
            className={`relative z-10 transition-colors duration-300 ${
              currentMode === mode.id
                ? "text-foreground"
                : "text-foreground/60 hover:text-foreground/80"
            }`}
          >
            {mode.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ModeSelector;
