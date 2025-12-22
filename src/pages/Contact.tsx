import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => (
  <>
    <Helmet>
      <title>Contact Us - FocusFlow</title>
      <meta name="description" content="Get in touch with the FocusFlow team. We'd love to hear your questions, feedback, or suggestions to help us improve your productivity experience." />
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
            Contact Us
          </h1>
        </header>
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground/70 mb-8">
              Have questions, feedback, or suggestions? We'd love to hear from you!
            </p>
            <form className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded border border-foreground/20 bg-foreground text-background focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded border border-foreground/20 bg-foreground  text-background focus:outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded border border-foreground/20 bg-foreground text-background focus:outline-none"
                rows={5}
                required
              />
              <button
                type="submit"
                className="w-full py-2 rounded bg-primary text-grey-400 font-semibold hover:bg-primary/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  </>
);

export default Contact;