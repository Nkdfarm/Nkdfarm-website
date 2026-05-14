import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Article from "./pages/Article";
import Wellness from "./pages/Wellness";
import Creativity from "./pages/Creativity";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StyleGuide from "./pages/StyleGuide";
import Privacy from "./pages/Privacy";
import FarmBox from "./pages/FarmBox";
import FarmBoxAI from "./pages/FarmBoxAI";
import FarmBoxModules from "./pages/FarmBoxModules";
import FarmSimPage from "./pages/FarmSim";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/farmbox" element={<FarmBox />} />
          <Route path="/farmbox-ai" element={<FarmBoxAI />} />
          <Route path="/farmbox-modules" element={<FarmBoxModules />} />
          <Route path="/farmsim" element={<FarmSimPage />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/creativity" element={<Creativity />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
