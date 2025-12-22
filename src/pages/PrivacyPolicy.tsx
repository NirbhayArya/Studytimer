import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy – Your Data Protection & Security</title>
      <meta name="description" content="Read our Privacy Policy to understand how we protect your data and ensure online security for students and productivity enthusiasts." />
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
            Privacy Policy
          </h1>
        </header>
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto text-left text-foreground/70 space-y-4">
            <p>
              <strong>FocusFlow</strong> respects your privacy. We do not collect, store, or share any personal information. All your data stays on your device and is never sent to our servers.
            </p>
            <p>
              <strong>Cookies:</strong> We do not use cookies or tracking technologies.
            </p>
            <p>
              <strong>Third-Party Services:</strong> FocusFlow does not use third-party analytics or advertising services.
            </p>
            <p>
              <strong>Contact:</strong> If you have any questions about this privacy policy, please <a href="/contact" className="underline text-primary">contact us</a>.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  </>
);

export default PrivacyPolicy;