import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Zarcillos from "./pages/Zarcillos";
import Anillos from "./pages/Anillos";
import Medallas from "./pages/Medallas";
import Regalos from "./pages/Regalos";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/zarcillos"} component={Zarcillos} />
      <Route path={"/anillos"} component={Anillos} />
      <Route path={"/medallas"} component={Medallas} />
      <Route path={"/regalos"} component={Regalos} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

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
