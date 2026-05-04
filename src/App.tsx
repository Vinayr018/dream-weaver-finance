import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import WhatsAppFloat from "./components/WhatsAppFloat";

const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WhyUsPage = lazy(() => import("./pages/WhyUsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LoanDetailPage = lazy(() => import("./pages/LoanDetailPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/loans/:type" element={<LoanDetailPage />} />
          <Route path="/service/:type" element={<ServiceDetailPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
