import { motion } from "framer-motion";
import { Flame, Target, Clock } from "lucide-react";

interface PomodoroStatsProps {
  completedPomodoros: number;
  currentSession: number;
  totalFocusTime: number;
}

const PomodoroStats = ({
  completedPomodoros,
  currentSession,
  totalFocusTime,
}: PomodoroStatsProps) => {
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const stats = [
    {
      icon: Flame,
      label: "Completed",
      value: completedPomodoros.toString(),
      color: "text-accent",
    },
    {
      icon: Target,
      label: "Session",
      value: `#${currentSession}`,
      color: "text-foreground",
    },
    {
      icon: Clock,
      label: "Focus Time",
      value: formatTime(totalFocusTime),
      color: "text-foreground",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex gap-6 md:gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="flex flex-col items-center gap-1"
        >
          <stat.icon className={`w-5 h-5 ${stat.color}`} />
          <span className="text-2xl font-bold text-foreground">{stat.value}</span>
          <span className="text-xs text-foreground/60 uppercase tracking-wider">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PomodoroStats;
