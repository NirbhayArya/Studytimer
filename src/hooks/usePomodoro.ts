import { useState, useEffect, useCallback, useRef } from "react";
import { TimerMode } from "@/components/timer/ModeSelector";
import { Task } from "@/components/timer/TaskList";

const TIMER_DURATIONS: Record<TimerMode, number> = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export const usePomodoro = () => {
  const [mode, setMode] = useState<TimerMode>("focus");
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATIONS.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [currentSession, setCurrentSession] = useState(1);
  const [totalFocusTime, setTotalFocusTime] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const focusStartRef = useRef<number | null>(null);

  const totalDuration = TIMER_DURATIONS[mode];
  const progress = (totalDuration - timeLeft) / totalDuration;

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }, []);

  const playSound = useCallback(() => {
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = "sine";
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  }, []);

  const handleTimerComplete = useCallback(() => {
    playSound();
    setIsRunning(false);

    if (mode === "focus") {
      const newCompletedPomodoros = completedPomodoros + 1;
      setCompletedPomodoros(newCompletedPomodoros);
      
      // Update task progress
      if (currentTaskId) {
        setTasks((prev) =>
          prev.map((task) =>
            task.id === currentTaskId
              ? { ...task, completedPomodoros: task.completedPomodoros + 1 }
              : task
          )
        );
      }

      // Calculate focus time
      if (focusStartRef.current) {
        const focusDuration = Math.floor(
          (Date.now() - focusStartRef.current) / 60000
        );
        setTotalFocusTime((prev) => prev + focusDuration);
        focusStartRef.current = null;
      }

      // Determine next break
      if (newCompletedPomodoros % 4 === 0) {
        setMode("longBreak");
        setTimeLeft(TIMER_DURATIONS.longBreak);
      } else {
        setMode("shortBreak");
        setTimeLeft(TIMER_DURATIONS.shortBreak);
      }
    } else {
      setMode("focus");
      setTimeLeft(TIMER_DURATIONS.focus);
      setCurrentSession((prev) => prev + 1);
    }
  }, [mode, completedPomodoros, currentTaskId, playSound]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, handleTimerComplete]);

  const toggleTimer = useCallback(() => {
    if (!isRunning && mode === "focus" && !focusStartRef.current) {
      focusStartRef.current = Date.now();
    }
    setIsRunning((prev) => !prev);
  }, [isRunning, mode]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(TIMER_DURATIONS[mode]);
    focusStartRef.current = null;
  }, [mode]);

  const skipTimer = useCallback(() => {
    setIsRunning(false);
    if (mode === "focus") {
      setMode("shortBreak");
      setTimeLeft(TIMER_DURATIONS.shortBreak);
    } else {
      setMode("focus");
      setTimeLeft(TIMER_DURATIONS.focus);
      setCurrentSession((prev) => prev + 1);
    }
    focusStartRef.current = null;
  }, [mode]);

  const changeMode = useCallback((newMode: TimerMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(TIMER_DURATIONS[newMode]);
    focusStartRef.current = null;
  }, []);

  const addTask = useCallback((title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      pomodoros: 4,
      completedPomodoros: 0,
    };
    setTasks((prev) => [...prev, newTask]);
    if (!currentTaskId) {
      setCurrentTaskId(newTask.id);
    }
  }, [currentTaskId]);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    if (currentTaskId === id) {
      setCurrentTaskId(null);
    }
  }, [currentTaskId]);

  const selectTask = useCallback((id: string) => {
    setCurrentTaskId(id);
  }, []);

  return {
    mode,
    timeLeft,
    timeDisplay: formatTime(timeLeft),
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
  };
};
