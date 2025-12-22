import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const AboutUs = () => (
  <>
    <Helmet>
      <title>About Us – Meet the Team Behind Your Productivity</title>
      <meta name="description" content="Learn about us and our mission to help students and professionals boost focus, manage time, and achieve more with our Pomodoro study techniques." />
    </Helmet>
    <main className="min-h-screen gradient-bg transition-all duration-700">
      {/* Floating decorative elements */}
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
            About Us – Meet the Team Behind Your Productivity
          </h1>
        </header>
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="guide-heading" className="text-2xl md:text-2xl font-bold text-foreground mb-4">
              Helping Students and Professionals Build Deep Focus With a Smart Pomodoro
              Study Timer
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              In a world full of notifications, multitasking, and constant digital noise, studying effectively and maintaining
              deep focus has become harder than ever. Our mission is to help students, competitive exam aspirants, and
              professionals focus better, manage time efficiently, and build consistent study habits using a powerful
              Pomodoro timer and online study timer designed for real-world productivity.<br />
              <br />
              This platform is built for people who want practical focus tools, science-backed productivity techniques, and a
              distraction-free focus timer that actually works.
            </p>
            <h2 id="guide-heading" className="text-2xl md:text-2xl font-bold text-foreground mb-4">
              Why We Built This Pomodoro Study Timer?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Most learners struggle with short attention spans, digital distractions, long study hours with low retention, and
              burnout. The solution is not studying longer, but studying smarter using a Pomodoro focus timer.
            </p>
            <h2 id="guide-heading" className="text-2xl md:text-2xl font-bold text-foreground mb-4">
              Our Philosophy: Focus Is a Skill, Not a Talent
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              We believe focus can be trained with the right productivity techniques. Our online Pomodoro timer for studying
              is designed to improve concentration, reduce fatigue, and support consistent study habits.
            </p>
            <h2 id="guide-heading" className="text-2xl md:text-2xl font-bold text-foreground mb-4">
              What Is the Pomodoro Technique and Why It Works?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              The Pomodoro Technique is a time management method that uses short, focused work sessions followed by
              breaks. It aligns with attention span research, cognitive load theory, and habit formation psychology.
            </p>
            <h2 id="guide-heading" className="text-2xl md:text-2xl font-bold text-foreground mb-4">
              What Makes Our Online Study Timer Different?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              The platform is minimal, distraction-free, browser-based, privacy-safe, and free to use. It is designed
              specifically for students, exam aspirants, and professionals who want deep focus.
            </p>
            <h2 id="guide-heading" className="text-2xl md:text-2xl font-bold text-foreground mb-4">
              How This Focus Timer Helps You Study Effectively?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Using a Pomodoro focus timer trains your brain for deep focus, improves time management, reduces burnout,
              and encourages long-term consistency.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Who This Platform Is For
              </h3>
              <div className="flex flex-wrap flex-col justify-center gap-3 items-center">

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 * 0.05 }}
                  className="flex items-center gap-2 bg-foreground/10 rounded-full px-4 py-2 w-fit"
                >

                  <span className="text-sm font-medium text-foreground">Students preparing for school, college, and university exams</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 * 0.05 }}
                  className="flex items-center gap-2 bg-foreground/10 rounded-full px-4 py-2 w-fit"
                >

                  <span className="text-sm font-medium text-foreground">Competitive exam aspirants</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 * 0.05 }}
                  className="flex items-center gap-2 bg-foreground/10 rounded-full px-4 py-2 w-fit"
                >

                  <span className="text-sm font-medium text-foreground">Working professionals and lifelong learners</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 * 0.05 }}
                  className="flex items-center gap-2 bg-foreground/10 rounded-full px-4 py-2 w-fit"
                >

                  <span className="text-sm font-medium text-foreground">Productivity and deep work enthusiasts</span>
                </motion.div>


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
                    What is a Pomodoro study timer?
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    A Pomodoro study timer is a tool based on the Pomodoro Technique, which breaks work into intervals (usually 25 minutes) with short breaks in between to improve focus and productivity.
                  </p>
                </article>
                <article className="glass-card rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">
                    How can I use the timer to study effectively?
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Set a clear task, start a 25-minute focus session, take a 5-minute break, and repeat. After four sessions, take a longer break to recharge.
                  </p>
                </article>
                <article className="glass-card rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">
                    Is the online focus timer free to use?
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Yes, our timer is completely free and accessible online without any registration or subscription.
                  </p>
                </article>
                <article className="glass-card rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">
                    Can professionals benefit from the Pomodoro Technique?
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Absolutely. Professionals can use Pomodoro sessions to manage tasks efficiently, reduce procrastination, and maintain deep focus throughout the workday.
                  </p>
                </article>
                <article className="glass-card rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">
                    How is Pomodoro-based studying better than traditional studying?
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Pomodoro-based studying prevents burnout, improves retention, and helps track progress, whereas traditional methods often involve long, unstructured hours that lead to fatigue.
                  </p>
                </article>
                <article className="glass-card rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">
                    Can I customize session lengths in the timer?
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Yes, our online study timer allows you to adjust focus and break intervals based on your personal preference and task requirements.
                  </p>
                </article>
                <article className="glass-card rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">
                    Does using a Pomodoro timer improve time management for students?
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Yes, by tracking focused study sessions and breaks, students can prioritize tasks and develop a disciplined study routine.
                  </p>
                </article>
                <article className="glass-card rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">
                    Is the timer suitable for competitive exam preparation?
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Yes, the structured approach of the Pomodoro Technique is highly effective for long hours of exam preparation, helping aspirants stay consistent and motivated.
                  </p>
                </article>
              </div>
            </motion.div>
          </div>


          <div className="max-w-3xl mx-auto text-left mt-12">
            <h2 id="guide-heading" className="text-2xl md:text-2xl font-bold text-foreground mb-4">
              Final Thoughts: Start Your Focused Journey Today
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Our goal is to make deep focus, effective studying, and time management accessible to everyone. By combining science-backed methods with a simple, online study timer, we provide students and professionals a reliable way to achieve more in less time.
              Take control of your study sessions, develop productive habits, and experience the benefits of focused work. Try our Pomodoro timer today and make every minute count toward your goals.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  </>
);

export default AboutUs;