import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const PomodoroTechnique = () => {
  return (
    <main className="min-h-screen gradient-bg transition-all duration-700">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-foreground/5 blur-2xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-foreground/5 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-foreground/5 blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="flex items-center justify-center gap-3 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Pomodoro Technique
          </h1>
        </header>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What is the Pomodoro Technique?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              The Pomodoro Technique is a time management method that uses intervals of focused work and short breaks to maximize productivity. Learn how to apply it for better focus and efficiency.
            </p>
            {/* Add more SEO-friendly content here as needed */}
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default PomodoroTechnique;