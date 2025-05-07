
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Search, 
  Menu, 
  X, 
  Book, 
  LogIn,
  Grid3x3,
  Users,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-brand-600 p-1.5">
              <Book className="h-5 w-5 text-white" />
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">LearnSphere</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link 
              to="/courses" 
              className={`text-sm font-medium hover:text-brand-600 transition-colors flex items-center gap-1.5 ${
                isActive('/courses') ? 'text-brand-600' : ''
              }`}
            >
              <Book className="h-4 w-4" />
              Courses
            </Link>
            <Link 
              to="/categories" 
              className={`text-sm font-medium hover:text-brand-600 transition-colors flex items-center gap-1.5 ${
                isActive('/categories') ? 'text-brand-600' : ''
              }`}
            >
              <Grid3x3 className="h-4 w-4" />
              Categories
            </Link>
            <Link 
              to="/teachers" 
              className={`text-sm font-medium hover:text-brand-600 transition-colors flex items-center gap-1.5 ${
                isActive('/teachers') ? 'text-brand-600' : ''
              }`}
            >
              <Users className="h-4 w-4" />
              Teachers
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium hover:text-brand-600 transition-colors flex items-center gap-1.5 ${
                isActive('/pricing') ? 'text-brand-600' : ''
              }`}
            >
              <DollarSign className="h-4 w-4" />
              Pricing
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="w-64 pl-8 bg-background"
            />
          </div>
          <Button variant="ghost" asChild className={`hover-scale ${isActive('/login') ? 'bg-accent text-accent-foreground' : ''}`}>
            <Link to="/login" className="flex items-center gap-1.5">
              <LogIn className="h-4 w-4" />
              Log in
            </Link>
          </Button>
          <Button asChild className={`hover-scale ${isActive('/signup') ? 'bg-brand-700' : ''}`}>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2" onClick={toggleMenu}>
              <div className="rounded-full bg-brand-600 p-1.5">
                <Book className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">LearnSphere</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="container py-4">
            <div className="relative mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full pl-8 bg-background"
              />
            </div>
            <nav className="flex flex-col gap-4">
              <Link 
                to="/courses" 
                className={`flex items-center gap-2 px-2 py-2 text-lg hover:bg-muted rounded-md ${
                  isActive('/courses') ? 'bg-muted font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                <Book className="h-5 w-5" />
                Courses
              </Link>
              <Link 
                to="/categories" 
                className={`flex items-center gap-2 px-2 py-2 text-lg hover:bg-muted rounded-md ${
                  isActive('/categories') ? 'bg-muted font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                <Grid3x3 className="h-5 w-5" />
                Categories
              </Link>
              <Link 
                to="/teachers" 
                className={`flex items-center gap-2 px-2 py-2 text-lg hover:bg-muted rounded-md ${
                  isActive('/teachers') ? 'bg-muted font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                <Users className="h-5 w-5" />
                Teachers
              </Link>
              <Link 
                to="/pricing" 
                className={`flex items-center gap-2 px-2 py-2 text-lg hover:bg-muted rounded-md ${
                  isActive('/pricing') ? 'bg-muted font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                <DollarSign className="h-5 w-5" />
                Pricing
              </Link>
              <hr className="my-2" />
              <div className="flex flex-col gap-3 mt-2">
                <Button 
                  variant="outline" 
                  className={`justify-start ${isActive('/login') ? 'bg-accent text-accent-foreground' : ''}`} 
                  asChild
                >
                  <Link to="/login" onClick={toggleMenu}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Log in
                  </Link>
                </Button>
                <Button 
                  className={`justify-start ${isActive('/signup') ? 'bg-brand-700' : ''}`} 
                  asChild
                >
                  <Link to="/signup" onClick={toggleMenu}>
                    Sign up
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
