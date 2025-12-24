import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => (
  <>
    <Helmet>
      <title>Contact Us – Pomodoro Study Timer Support & Feedback</title>
      <meta name="description" content="Contact us to share feedback, report issues, or ask questions about our Pomodoro study timer.
We’re here to help students and productivity-focused learners." />
    </Helmet>
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
            Contact Us – Pomodoro Study Timer Support & Feedback
          </h1>
        </header>
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground/70 mb-8">
              We’d love to hear from you. If you have feedback, suggestions, or run into any issues, feel free to reach out. Your thoughts help us improve the study timer for everyone. Whether it’s a feature request or a small bug, we’re listening. You can contact us anytime via email. We aim to respond as quickly as possible. Thanks for using our Pomodoro study timer and trusting us with your focus.
            </p>

          </div>
        </section>
        <Footer />
      </div>
    </main>
  </>
);

export default Contact;