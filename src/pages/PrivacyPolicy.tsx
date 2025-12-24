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
           Privacy Policy – Your Data Protection & Security
          </h1>
        </header>
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto text-left text-foreground/70 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Introduction: Your Privacy and Productivity Are Our Priority</h2>
              <p>
                Welcome to our Pomodoro timer platform, a safe and secure environment where students, professionals, and productivity enthusiasts can study effectively, maintain deep focus, and manage time efficiently. Our online study timer is designed to help you implement productivity techniques while safeguarding your personal information.
              </p>
              <p>
                We understand that building consistent study habits and maintaining concentration requires a distraction-free platform. That’s why your privacy is central to our approach. This Privacy Policy outlines how we collect, use, and protect your information, ensuring that your use of our focus timer remains safe and efficient. By providing transparency, we aim to build trust so that you can fully concentrate on time management for students, Pomodoro-based study sessions, and habit-building without worry.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Information We Collect to Enhance Your Study Experience</h2>
              <p>
                To provide a seamless Pomodoro timer experience and improve your online study sessions, we collect certain information. This ensures that our focus timer works optimally for you while remaining privacy-safe.
              </p>
              <h3 className="font-semibold">Personal Information</h3>
              <ul className="list-disc ml-6">
                <li>Name and email address (only if you register or subscribe)</li>
                <li>Preferences for study timer settings</li>
              </ul>
              <h3 className="font-semibold">Non-Personal Information</h3>
              <ul className="list-disc ml-6">
                <li>Device type, browser information, and operating system</li>
                <li>Session logs, such as Pomodoro intervals completed</li>
                <li>Performance metrics to refine productivity techniques</li>
              </ul>
              <h3 className="font-semibold">Usage Data</h3>
              <ul className="list-disc ml-6">
                <li>Timer start and stop times</li>
                <li>Frequency and duration of study sessions</li>
                <li>Engagement with features like study with me timers</li>
              </ul>
              <p>
                We never sell or trade your personal information to third parties. Your data is used solely to enhance your study effectively experience.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
              <ul className="list-disc ml-6">
                <li><strong>Personalization:</strong> Tailoring timer settings and notifications for your study routine.</li>
                <li><strong>Improvement:</strong> Analyzing session data to enhance online study timer features.</li>
                <li><strong>Security:</strong> Detecting unusual activity and preventing unauthorized access.</li>
                <li><strong>Communication:</strong> Sending optional tips and updates on productivity techniques and time management for students.</li>
              </ul>
              <p>
                Our goal is to ensure your study time remains efficient, safe, and focused, without intrusive advertising or data misuse.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Cookies and Tracking Technologies</h2>
              <p>Cookies help us provide a smooth focus timer experience. Here’s how we use them:</p>
              <ul className="list-disc ml-6">
                <li><strong>Session Cookies:</strong> Keep your Pomodoro timer session active across pages.</li>
                <li><strong>Preference Cookies:</strong> Save your customized timer intervals for consistent study routines.</li>
                <li><strong>Performance Cookies:</strong> Gather anonymous data to refine study with me timer features.</li>
              </ul>
              <p>
                You may adjust cookie settings in your browser, though some features may not function optimally without cookies.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Security Measures to Protect Your Data</h2>
              <ul className="list-disc ml-6">
                <li><strong>Encryption:</strong> All sensitive data is encrypted during transmission.</li>
                <li><strong>Secure Servers:</strong> Access to servers is strictly controlled.</li>
                <li><strong>Regular Security Audits:</strong> We monitor our platform to detect vulnerabilities.</li>
                <li><strong>Data Minimization:</strong> We only collect what’s necessary to support your Pomodoro-based study.</li>
              </ul>
              <p>
                These measures allow you to focus fully on deep focus sessions and exam preparation without worrying about privacy breaches.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">How We Share Information</h2>
              <p>Your privacy is paramount. We never share your personal information for marketing purposes. Sharing occurs only in limited scenarios:</p>
              <ul className="list-disc ml-6">
                <li>Legal obligations or law enforcement requests.</li>
                <li>Protecting our platform, users, or intellectual property.</li>
                <li>With trusted service providers who assist with essential functions like email notifications.</li>
              </ul>
              <p>
                By limiting data sharing, we maintain a privacy-safe environment for students and productivity enthusiasts.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Rights and Choices for Users</h2>
              <ul className="list-disc ml-6">
                <li><strong>Access and Update:</strong> Review and correct your personal details.</li>
                <li><strong>Data Deletion:</strong> Request removal of personal data from our systems.</li>
                <li><strong>Email Preferences:</strong> Opt out of non-essential communication.</li>
              </ul>
              <p>
                These rights empower you to use our Pomodoro timer safely while benefiting from time management strategies.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Benefits of Using a Privacy-Safe Pomodoro Timer</h2>
              <ul className="list-disc ml-6">
                <li><strong>Distraction-Free Focus:</strong> No intrusive ads or tracking interruptions during deep focus sessions.</li>
                <li><strong>Consistency:</strong> Build study habits safely with Pomodoro-based study routines.</li>
                <li><strong>Efficiency:</strong> Track your progress and optimize time management for students.</li>
                <li><strong>Flexibility:</strong> Customize timer intervals to suit exams, assignments, or professional work.</li>
              </ul>
              <p>
                A secure platform fosters habit-building, encouraging long-term productivity improvements.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Comparing Traditional Studying vs Pomodoro-Based Studying</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border text-sm mb-4">
                  <thead>
                    <tr className="bg-foreground/10">
                      <th className="px-2 py-1 border">Feature</th>
                      <th className="px-2 py-1 border">Traditional Studying</th>
                      <th className="px-2 py-1 border">Pomodoro-Based Studying</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-2 py-1">Focus Duration</td>
                      <td className="border px-2 py-1">Often irregular and interrupted</td>
                      <td className="border px-2 py-1">Structured 25–30 min deep focus sessions</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">Break Management</td>
                      <td className="border px-2 py-1">Inconsistent or skipped</td>
                      <td className="border px-2 py-1">Regular 5-min breaks boost memory retention</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">Productivity Tracking</td>
                      <td className="border px-2 py-1">Limited</td>
                      <td className="border px-2 py-1">Timer logs track session performance for time management</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">Habit Formation</td>
                      <td className="border px-2 py-1">Hard to sustain</td>
                      <td className="border px-2 py-1">Encourages consistent study habits</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">Motivation</td>
                      <td className="border px-2 py-1">Can fluctuate</td>
                      <td className="border px-2 py-1">Built-in timer accountability enhances engagement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                By using a Pomodoro timer, you combine science-backed productivity techniques with measurable outcomes in learning efficiency.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Examples of Productivity in Action</h2>
              <ul className="list-disc ml-6">
                <li><strong>Exam Preparation:</strong> Students preparing for competitive exams can schedule 25-minute focus timer sessions followed by 5-minute breaks, improving concentration.</li>
                <li><strong>Professional Learning:</strong> Professionals using a Pomodoro-based online study timer can complete training modules with habit-building consistency.</li>
                <li><strong>Daily Study Routine:</strong> High school or college students can structure homework sessions using the timer, achieving deep focus without burnout.</li>
              </ul>
              <p>
                These examples demonstrate how privacy-conscious tools enhance study effectiveness and time management skills.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Internal-Link Anchor Text Suggestions</h2>
              <ul className="list-disc ml-6">
                <li>Learn more about the Pomodoro Technique</li>
                <li>Tips for studying effectively</li>
                <li>How to maintain deep focus while studying</li>
                <li>Time management strategies for students</li>
                <li>Productivity techniques for professionals</li>
                <li>Study with me timer sessions</li>
              </ul>
              <p>
                These links help search engines understand your site structure while guiding users to relevant resources.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Frequently Asked Questions (FAQ)</h2>
              <ol className="list-decimal ml-6 space-y-2">
                <li><strong>Is my personal information safe while using the Pomodoro timer?</strong><br />Yes. We use encryption, secure servers, and strict data policies to protect all personal information.</li>
                <li><strong>Can I use the online study timer without registration?</strong><br />Absolutely. You can use the focus timer anonymously, keeping your sessions private and uninterrupted.</li>
                <li><strong>Does the timer track my study sessions?</strong><br />We collect anonymized session data only to improve features like deep focus sessions and study with me timers.</li>
                <li><strong>Will my data be shared with advertisers?</strong><br />No. We never sell or share your personal data with third parties for marketing purposes.</li>
                <li><strong>Can I opt out of receiving emails?</strong><br />Yes, you can unsubscribe or adjust preferences at any time.</li>
                <li><strong>How do cookies improve my experience?</strong><br />Cookies save your timer preferences, track session performance, and optimize time management for students without compromising privacy.</li>
                <li><strong>Is the Pomodoro timer free to use?</strong><br />Yes, it is completely free for all users to support productivity and study effectively.</li>
                <li><strong>How can I delete my personal data?</strong><br />You can request deletion through our support system. This ensures full compliance with privacy regulations.</li>
              </ol>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Advanced Security and Privacy Features</h2>
              <ul className="list-disc ml-6">
                <li><strong>Anonymous Mode:</strong> Study sessions can be used without storing personal identifiers.</li>
                <li><strong>Automatic Session Saving:</strong> Logs Pomodoro intervals without linking to personal accounts.</li>
                <li><strong>Encrypted Communication:</strong> All data transfers between your device and our servers are fully encrypted.</li>
                <li><strong>Limited Third-Party Integration:</strong> Only essential service providers have minimal access under strict agreements.</li>
              </ul>
              <p>
                These practices ensure that users can achieve deep focus and study effectively without risking personal data.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">How the Pomodoro Technique Supports Privacy-Conscious Productivity</h2>
              <ul className="list-disc ml-6">
                <li><strong>Short, Timed Sessions:</strong> Encourages high-intensity focus while maintaining mental freshness.</li>
                <li><strong>Regular Breaks:</strong> Prevents burnout and improves cognitive retention.</li>
                <li><strong>Trackable Intervals:</strong> Allows users to review progress without needing personal tracking data.</li>
              </ul>
              <p>
                Combined with a privacy-safe online study timer, these techniques help students, professionals, and productivity enthusiasts maintain a habit of consistent deep focus.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Conclusion: Your Privacy and Productivity Come First</h2>
              <p>
                Our privacy-first Pomodoro timer empowers you to study effectively, manage time efficiently, and maintain deep focus without compromising your personal data. Whether you are preparing for exams, developing professional skills, or building productive study habits, our platform supports time management for students in a secure, distraction-free environment.
              </p>
              <p>
                Start using our online study timer today to track Pomodoro intervals, achieve consistent focus, and enhance your productivity techniques. Protect your privacy, build strong study habits, and take control of your learning journey with confidence.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <p>
                If you have any questions about this privacy policy, please <a href="/contact" className="underline text-primary">contact us</a>.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  </>
);

export default PrivacyPolicy;