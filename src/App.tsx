import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./app/ProtectedRoute";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Home from "./pages/Home";
import DesignTokens from "./pages/DesignTokens";
import BannerDemo from "./pages/banner-demo";
import TableDemo from "./pages/table-demo";
import NotFound from "./pages/NotFound";
import SidebarDemo from "./pages/sidebar-demo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/design-tokens" element={<DesignTokens />} />
            <Route path="/banner-demo" element={<BannerDemo />} />
            <Route path="/table-demo" element={<TableDemo />} />
            <Route path="/sidebar-demo" element={<SidebarDemo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
