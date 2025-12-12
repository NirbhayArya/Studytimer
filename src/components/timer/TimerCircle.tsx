import { motion } from "framer-motion";

interface TimerCircleProps {
  progress: number;
  timeDisplay: string;
  isRunning: boolean;
}

const TimerCircle = ({ progress, timeDisplay, isRunning }: TimerCircleProps) => {
  const radius = 140;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow effect behind */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-foreground/10 blur-3xl"
        animate={{
          scale: isRunning ? [1, 1.1, 1] : 1,
          opacity: isRunning ? [0.3, 0.5, 0.3] : 0.2,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SVG Circle */}
      <svg
        width={radius * 2 + strokeWidth * 2}
        height={radius * 2 + strokeWidth * 2}
        className="timer-glow transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-foreground/20"
        />
        {/* Progress circle */}
        <motion.circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-foreground"
          initial={false}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </svg>

      {/* Time display */}
      <motion.div
        className="absolute flex flex-col items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          key={timeDisplay}
          className="text-7xl md:text-8xl font-mono font-bold text-foreground text-shadow tracking-tight"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {timeDisplay}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default TimerCircle;
