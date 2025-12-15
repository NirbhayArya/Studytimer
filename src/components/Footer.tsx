import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-8 px-4 text-center border-t border-foreground/10 mt-16 ">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition">
            FocusFlow
          </Link>
          <p className="text-xs text-foreground/50 mt-2">
            Free Pomodoro Timer for students, developers, and professionals.
          </p>
        </div>
        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Timers</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-foreground/70 hover:text-foreground transition">Pomodoro Timer</Link></li>
              <li><Link to="/focus-timer" className="text-foreground/70 hover:text-foreground transition">Focus Timer</Link></li>
              <li><Link to="/study-timer-online" className="text-foreground/70 hover:text-foreground transition">Study Timer Online</Link></li>
              <li><Link to="/study-with-me-timer" className="text-foreground/70 hover:text-foreground transition">Study With Me Timer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Guides</h3>
            <ul className="space-y-1">
              <li><Link to="/pomodoro-technique" className="text-foreground/70 hover:text-foreground transition">Pomodoro Technique</Link></li>
              <li><Link to="/how-to-study-effectively" className="text-foreground/70 hover:text-foreground transition">How to Study Effectively</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Company</h3>
            <ul className="space-y-1">
              <li><Link to="/about-us" className="text-foreground/70 hover:text-foreground transition">About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-foreground/70 hover:text-foreground transition">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-xs text-foreground/40 mt-8">
        © {new Date().getFullYear()} FocusFlow. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;