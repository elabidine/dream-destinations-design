import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThingsToDo from "./pages/ThingsToDo";
import ActivityDetail from "./pages/ActivityDetail";
import PlaceToStay from "./pages/PlaceToStay";
import HotelDetail from "./pages/HotelDetail";
import CityDetail from "./pages/CityDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
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
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/activity/:id" element={<ActivityDetail />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/city/:cityId" element={<CityDetail />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
