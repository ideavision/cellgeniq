import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import AIAnalysis from "./pages/AIAnalysis";
import Manufacturing from "./pages/Manufacturing";
import QualityControl from "./pages/QualityControl";
import Research from "./pages/Research";
import API from "./pages/API";
import Compliance from "./pages/Compliance";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/patients"} component={Patients} />
      <Route path={"/ai-analysis"} component={AIAnalysis} />
      <Route path={"/manufacturing"} component={Manufacturing} />
      <Route path={"/quality-control"} component={QualityControl} />
      <Route path={"/research"} component={Research} />
      <Route path={"/api"} component={API} />
      <Route path={"/compliance"} component={Compliance} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
