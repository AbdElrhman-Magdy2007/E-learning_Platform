
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg hover-lift hover:bg-brand-100"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Layout;
