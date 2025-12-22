import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PomodoroTechnique from './pages/PomodoroTechnique';
import StudyTimerOnline from './pages/StudyTimerOnline';
import FocusTimer from './pages/FocusTimer';
import StudyWithMeTimer from './pages/StudyWithMeTimer';
import HowToStudyEffectively from './pages/HowToStudyEffectively';
// ...existing imports...
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';

// ...inside <Routes>...


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/pomodoro-technique" element={<PomodoroTechnique />} />
            <Route path="/study-timer-online" element={<StudyTimerOnline />} />
            <Route path="/focus-timer" element={<FocusTimer />} />
            <Route path="/study-with-me-timer" element={<StudyWithMeTimer />} />
            <Route path="/how-to-study-effectively" element={<HowToStudyEffectively />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
