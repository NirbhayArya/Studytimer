import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, Trash2, Circle } from "lucide-react";
import { useState } from "react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  pomodoros: number;
  completedPomodoros: number;
}

interface TaskListProps {
  tasks: Task[];
  onAddTask: (title: string) => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  currentTaskId: string | null;
  onSelectTask: (id: string) => void;
}

const TaskList = ({
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  currentTaskId,
  onSelectTask,
}: TaskListProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      onAddTask(newTaskTitle.trim());
      setNewTaskTitle("");
      setIsAdding(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Tasks</h2>
        <span className="text-sm text-foreground/60">
          {tasks.filter((t) => t.completed).length}/{tasks.length} done
        </span>
      </div>

      <div className="space-y-2">
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className={`glass-card rounded-xl p-4 cursor-pointer transition-all ${
                currentTaskId === task.id
                  ? "ring-2 ring-foreground/50"
                  : "hover:bg-foreground/5"
              }`}
              onClick={() => onSelectTask(task.id)}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleTask(task.id);
                  }}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    task.completed
                      ? "bg-foreground border-foreground"
                      : "border-foreground/40 hover:border-foreground/60"
                  }`}
                >
                  {task.completed && (
                    <Check className="w-4 h-4 text-primary-foreground" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <p
                    className={`font-medium truncate transition-all ${
                      task.completed
                        ? "line-through text-foreground/50"
                        : "text-foreground"
                    }`}
                  >
                    {task.title}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: task.pomodoros }).map((_, i) => (
                      <Circle
                        key={i}
                        className={`w-3 h-3 ${
                          i < task.completedPomodoros
                            ? "fill-foreground text-foreground"
                            : "text-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteTask(task.id);
                  }}
                  className="p-2 rounded-lg text-foreground/40 hover:text-foreground hover:bg-foreground/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Add task section */}
        <AnimatePresence>
          {isAdding ? (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-4"
            >
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="What are you working on?"
                autoFocus
                className="w-full bg-transparent text-foreground placeholder:text-foreground/40 outline-none text-lg"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-foreground text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Add
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsAdding(true)}
              className="w-full glass-card rounded-xl p-4 border-2 border-dashed border-foreground/20 hover:border-foreground/40 text-foreground/60 hover:text-foreground transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Task
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TaskList;
