import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import AIAnalysis from "./pages/AIAnalysis";
import Leukapheresis from "./pages/Leukapheresis";
import Manufacturing from "./pages/Manufacturing";
import QualityControl from "./pages/QualityControl";
import QualityAssurance from "./pages/QualityAssurance";
import Workflow from "./pages/Workflow";
import Research from "./pages/Research";
import API from "./pages/API";
import Compliance from "./pages/Compliance";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Workflow} />
      <Route path={"/home"} component={Home} />
      <Route path={"/patients"} component={Patients} />
      <Route path={"/leukapheresis"} component={Leukapheresis} />
      <Route path={"/ai-analysis"} component={AIAnalysis} />
      <Route path={"/manufacturing"} component={Manufacturing} />
      <Route path={"/quality-control"} component={QualityControl} />
      <Route path={"/quality-assurance"} component={QualityAssurance} />
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
