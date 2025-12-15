import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const AboutUs = () => (
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
          About Us
        </h1>
      </header>
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/70 mb-6">
            <strong>FocusFlow</strong> was created by a team of productivity enthusiasts who believe that everyone can achieve more with the right tools and mindset. Our mission is to help students, professionals, and lifelong learners stay focused, beat procrastination, and reach their goals using science-backed techniques.
          </p>
          <p className="text-foreground/70 mb-6">
            We are passionate about building simple, effective, and privacy-friendly tools. FocusFlow is free, ad-free, and designed for everyone who wants to make the most of their time.
          </p>
          <p className="text-foreground/70">
            Thank you for choosing FocusFlow as your productivity companion!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  </main>
);

export default AboutUs;