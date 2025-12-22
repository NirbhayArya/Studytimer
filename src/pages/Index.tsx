import { motion } from "framer-motion";
import { usePomodoro } from "@/hooks/usePomodoro";
import TimerCard from "@/components/timer/TimerCard";
import ModeSelector from "@/components/timer/ModeSelector";
import ControlButtons from "@/components/timer/ControlButtons";
import TaskList from "@/components/timer/TaskList";
import PomodoroStats from "@/components/timer/PomodoroStats";
import PomodoroGuide from "@/components/PomodoroGuide";
import { Timer } from "lucide-react";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const {
    mode,
    timeDisplay,
    isRunning,
    progress,
    completedPomodoros,
    currentSession,
    totalFocusTime,
    tasks,
    currentTaskId,
    toggleTimer,
    resetTimer,
    skipTimer,
    changeMode,
    addTask,
    toggleTask,
    deleteTask,
    selectTask,
  } = usePomodoro();

  const modeClass =
    mode === "focus"
      ? "mode-focus"
      : mode === "shortBreak"
        ? "mode-shortbreak"
        : "mode-longbreak";

  const currentTask = tasks.find((t) => t.id === currentTaskId);

  return (
    <>
      <Helmet>
        <title>Pomodoro Timer - Focus Better, Study Smarter & Stay Consistent</title>
        <meta name="description" content="Learn how to use the Pomodoro Technique for studying, ADHD focus, productivity, and deep work. Step-by-step Pomodoro guide with proven tips for students and professionals." />
      </Helmet>
      <main
        className={`min-h-screen gradient-bg transition-all duration-700 ${modeClass}`}
      >
        {/* Floating decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-foreground/5 blur-2xl"
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-foreground/5 blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-foreground/5 blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Timer className="w-8 h-8 text-foreground" aria-hidden="true" />
            <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              FocusFlow Pomodoro Timer
            </h1>
          </motion.header>

          {/* Hero Section with Timer */}
          <section aria-label="Pomodoro Timer" className="min-h-[80vh] flex flex-col items-center justify-center gap-8">
            {/* Mode selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <ModeSelector currentMode={mode} onModeChange={changeMode} />
            </motion.div>

            {/* Timer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TimerCard
                progress={progress}
                timeDisplay={timeDisplay}
                isRunning={isRunning}
                mode={mode}
              />
            </motion.div>

            {/* Current task indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-center"
            >
              <p className="text-foreground/60 text-sm uppercase tracking-wider mb-1">
                {mode === "focus"
                  ? "Time to focus!"
                  : mode === "shortBreak"
                    ? "Take a short break"
                    : "Take a long break"}
              </p>
              {currentTask && mode === "focus" && (
                <p className="text-foreground font-medium text-lg">
                  {currentTask.title}
                </p>
              )}
            </motion.div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ControlButtons
                isRunning={isRunning}
                onToggle={toggleTimer}
                onReset={resetTimer}
                onSkip={skipTimer}
              />
            </motion.div>

            {/* Stats */}
            <PomodoroStats
              completedPomodoros={completedPomodoros}
              currentSession={currentSession}
              totalFocusTime={totalFocusTime}
            />

            {/* Task list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 w-full flex justify-center"
            >
              <TaskList
                tasks={tasks}
                onAddTask={addTask}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
                currentTaskId={currentTaskId}
                onSelectTask={selectTask}
              />
            </motion.div>
          </section>

          {/* SEO Content Guide Section */}
          <PomodoroGuide />

          {/* Footer */}
          {/* <footer className="py-8 text-center border-t border-foreground/10 mt-16">
          <p className="text-sm text-foreground/50">
            © 2025 FocusFlow. Free Pomodoro Timer for students, developers, and professionals.
          </p>
        </footer> */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
