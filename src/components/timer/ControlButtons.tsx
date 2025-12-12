import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, SkipForward } from "lucide-react";

interface ControlButtonsProps {
  isRunning: boolean;
  onToggle: () => void;
  onReset: () => void;
  onSkip: () => void;
}

const ControlButtons = ({ isRunning, onToggle, onReset, onSkip }: ControlButtonsProps) => {
  return (
    <div className="flex items-center gap-4">
      {/* Reset button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors"
        aria-label="Reset timer"
      >
        <RotateCcw className="w-5 h-5" />
      </motion.button>

      {/* Main play/pause button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="relative px-12 py-4 rounded-full bg-foreground text-primary-foreground font-semibold text-xl shadow-glow-lg overflow-hidden group"
        aria-label={isRunning ? "Pause timer" : "Start timer"}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <span className="relative z-10 flex items-center gap-2">
          {isRunning ? (
            <>
              <Pause className="w-6 h-6" />
              PAUSE
            </>
          ) : (
            <>
              <Play className="w-6 h-6" />
              START
            </>
          )}
        </span>
      </motion.button>

      {/* Skip button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSkip}
        className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors"
        aria-label="Skip to next"
      >
        <SkipForward className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default ControlButtons;
