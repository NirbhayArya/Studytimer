import { motion } from "framer-motion";
import { Clock, Brain, Zap, Users, CheckCircle, Coffee, Target, BookOpen } from "lucide-react";

const benefits = [
  { icon: Brain, title: "Reduces Distractions", desc: "Stay focused with structured time blocks" },
  { icon: Zap, title: "Improves Concentration", desc: "Train your brain to focus deeply" },
  { icon: Coffee, title: "Prevents Burnout", desc: "Regular breaks keep you refreshed" },
  { icon: Target, title: "Increases Motivation", desc: "Small wins build momentum" },
];

const variations = [
  { num: "01", title: "50/10 Method", desc: "Best for deep work sessions" },
  { num: "02", title: "52/17 Method", desc: "Used by productivity researchers." },
  { num: "03", title: "Flowtime Technique", desc: "Flexible intervals based on natural focus rhythms" },
  { num: "04", title: "20/5 Study Method", desc: "Ideal for students and memory-based learning." },

];
const steps = [
  { num: "01", title: "Choose One Task", desc: "Pick a single clear task to focus on" },
  { num: "02", title: "Remove Distractions", desc: "Close tabs, silence phone, clear desk" },
  { num: "03", title: "Start 25-Min Timer", desc: "Focus deeply until the timer ends" },
  { num: "04", title: "Take 5-Min Break", desc: "Step away, stretch, hydrate" },
  { num: "05", title: "Repeat & Rest", desc: "After 4 cycles, take a 15-30 min break" },
];

const audiences = [
  { icon: BookOpen, label: "Students" },
  { icon: Brain, label: "People with ADHD" },
  { icon: Zap, label: "Developers" },
  { icon: Users, label: "Remote Workers" },
];

const PomodoroGuide = () => {
  return (
    <section className="py-16 px-4" aria-labelledby="guide-heading">
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Pomodoro Technique Guide: Boost Productivity & Time Management
          </h1>
          <h2 id="guide-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Staying Focused Is So Hard in 2026?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Constant notifications, endless tabs, dopamine overload, and multitasking make it harder than ever to
            stay focused. Even when you sit down to work, your mind jumps between tasks — lowering productivity
            and increasing mental fatigue.<br />
            <br />
            The Pomodoro Technique solves this by using short, structured focus intervals backed by cognitive
            psychology. It helps you study longer, reduce procrastination, and stay consistent without burning out.
          </p>
          <h2 id="guide-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Is the Pomodoro Technique?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
            The Pomodoro Technique is a time-management method created by Francesco Cirillo
            that breaks work into focused intervals separated by short breaks. It uses
            cognitive psychology to help you study longer, reduce procrastination, and stay consistent.
          </p>

        </motion.div>

        {/* Traditional Cycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Traditional Pomodoro Cycle
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-foreground/10 rounded-xl p-4 text-center">
              <span className="text-4xl font-bold font-mono text-foreground">25</span>
              <p className="text-foreground/70 text-sm mt-1">minutes focused work</p>
            </div>
            <div className="bg-foreground/10 rounded-xl p-4 text-center">
              <span className="text-4xl font-bold font-mono text-foreground">5</span>
              <p className="text-foreground/70 text-sm mt-1">minutes short break</p>
            </div>
            <div className="bg-foreground/10 rounded-xl p-4 text-center">
              <span className="text-4xl font-bold font-mono text-foreground">15-30</span>
              <p className="text-foreground/70 text-sm mt-1">min break after 4 pomodoros</p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Why the Pomodoro Technique Works?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 glass-card rounded-xl p-4"
              >
                <div className="p-2 rounded-lg bg-foreground/10">
                  <benefit.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-foreground/60">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Who Benefits Most?
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 bg-foreground/10 rounded-full px-4 py-2"
              >
                <item.icon className="w-4 h-4 text-foreground" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            How to Use the Pomodoro Technique?
          </h3>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-4 flex items-center gap-4"
              >
                <span className="text-2xl font-bold font-mono text-foreground/30">{step.num}</span>
                <div>
                  <h4 className="font-semibold text-foreground">{step.title}</h4>
                  <p className="text-sm text-foreground/60">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Variations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            What are the variations of Pomodoro Technique?
          </h3>
          <div className="space-y-3">
            {variations.map((variation, i) => (
              <motion.div
                key={variation.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-4 flex items-center gap-4"
              >
                <span className="text-2xl font-bold font-mono text-foreground/30">{variation.num}</span>
                <div>
                  <h4 className="font-semibold text-foreground">{variation.title}</h4>
                  <p className="text-sm text-foreground/60">{variation.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <article className="glass-card rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">
                Is the Pomodoro Technique scientifically proven?
              </h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Yes! The technique is backed by cognitive psychology research showing that
                regular breaks improve concentration and prevent mental fatigue. Studies show
                that focused work intervals followed by rest enhance memory retention and learning.
              </p>
            </article>
            <article className="glass-card rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">
                Can Pomodoro help with ADHD?
              </h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Absolutely! The structured intervals and frequent breaks help people with ADHD
                maintain focus by breaking tasks into manageable chunks. The timer creates
                urgency and the breaks prevent overwhelm.
              </p>
            </article>
            <article className="glass-card rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">
                Can I change the Pomodoro length?
              </h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Yes! While 25 minutes is traditional, you can adjust based on your needs.
                Some prefer 50-minute deep work sessions, while others do better with
                15-minute sprints. Experiment to find what works for you.
              </p>
            </article>
            <article className="glass-card rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">
                Is Pomodoro good for studying?
              </h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Yes, the Pomodoro Technique is highly effective for studying as it boosts focus, reduces burnout by incorporating breaks, and makes daunting tasks manageable by breaking them into short, timed (usually 25-min) intervals, helping build consistent study habits and improve time management.
              </p>
            </article>
            <article className="glass-card rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">
                Does Pomodoro help with ADHD?
              </h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Yes, the Pomodoro Technique often works very well for ADHD by breaking overwhelming tasks into short, manageable bursts (e.g., 25 mins work, 5 mins break), combating procrastination, time blindness, and distraction through clear start/stop signals and built-in rest, but it requires customization (adjusting timers) to fit individual focus needs.
              </p>
            </article>
            <article className="glass-card rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">
                For what tasks Pomodoro Technique work best?
              </h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Pomodoro works best for tasks requiring sustained focus, breaking down large projects, tackling tedious/boring work, and overcoming procrastination, such as studying, writing, coding, or administrative tasks.
              </p>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PomodoroGuide;
