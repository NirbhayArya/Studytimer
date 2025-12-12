import { motion } from "framer-motion";

interface TimerCardProps {
  progress: number;
  timeDisplay: string;
  isRunning: boolean;
  mode: "focus" | "shortBreak" | "longBreak";
}

const TimerCard = ({ progress, timeDisplay, isRunning, mode }: TimerCardProps) => {
  const modeLabels = {
    focus: "FOCUS",
    shortBreak: "BREAK",
    longBreak: "RELAX",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative"
    >
      {/* Outer glow */}
      <motion.div
        className="absolute -inset-4 rounded-3xl bg-foreground/10 blur-2xl"
        animate={{
          opacity: isRunning ? [0.3, 0.5, 0.3] : 0.2,
          scale: isRunning ? [1, 1.02, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main card */}
      <div className="relative overflow-hidden rounded-3xl bg-foreground/10 backdrop-blur-xl border border-foreground/20 p-8 md:p-12 shadow-2xl">
        {/* Progress bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-foreground/10 overflow-hidden">
          <motion.div
            className="h-full bg-foreground"
            initial={{ width: "0%" }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-foreground/30 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-foreground/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-foreground/30 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-foreground/30 rounded-br-lg" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 min-w-[280px] md:min-w-[340px]">
          {/* Mode label */}
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.3em] text-foreground/80">
              {modeLabels[mode]}
            </span>
            <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          </motion.div>

          {/* Timer display */}
          <motion.div
            key={timeDisplay}
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {/* Background glow for numbers */}
            <div className="absolute inset-0 blur-xl bg-foreground/20 rounded-full" />
            
            <span className="relative text-8xl md:text-9xl font-mono font-bold text-foreground tracking-tight text-shadow">
              {timeDisplay}
            </span>
          </motion.div>

          {/* Progress percentage */}
          <div className="flex items-center gap-3 text-foreground/60">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="text-sm font-medium tabular-nums">
              {Math.round(progress * 100)}%
            </span>
            <div className="h-px w-12 bg-foreground/30" />
          </div>
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }} />
        </div>
      </div>
    </motion.div>
  );
};

export default TimerCard;
