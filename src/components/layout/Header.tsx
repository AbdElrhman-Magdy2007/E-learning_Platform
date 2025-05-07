import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  X,
  Book,
  LogIn,
  Grid3x3,
  Users,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/courses", label: "Courses", icon: Book },
    { path: "/categories", label: "Categories", icon: Grid3x3 },
    { path: "/teachers", label: "Teachers", icon: Users },
    { path: "/pricing", label: "Pricing", icon: DollarSign },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background shadow-sm"
      dir="auto"
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              className="rounded-full bg-primary p-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Book className="h-6 w-6 text-white" />
            </motion.div>
            <span className="font-bold text-xl sm:text-2xl gradient-text">
              LearnSphere
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary hover-scale ${
                isActive(item.path)
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground"
              }`}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Search and Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-48 sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-10 bg-input rounded-lg focus:ring-2 focus:ring-primary transition-all duration-300 text-foreground"
              aria-label="Search courses"
            />
          </div>
          <Button
            variant="ghost"
            asChild
            className={`hover-scale hover-glow ${
              isActive("/login") ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <Link to="/login" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Log in
            </Link>
          </Button>
          <Button
            asChild
            className={`bg-primary hover:bg-primary/90 hover-scale pulse-animation ${
              isActive("/signup") ? "bg-secondary" : ""
            }`}
          >
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.div
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 right-0 top-0 z-50 bg-background md:hidden shadow-lg max-h-screen overflow-y-auto"
          >
            <div className="container flex h-16 items-center justify-between px-4 bg-background sticky top-0 shadow-sm">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={toggleMenu}
              >
                <div className="rounded-full bg-primary p-2">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl gradient-text">
                  LearnSphere
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="container py-6 px-4">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full pl-10 bg-input rounded-lg focus:ring-2 focus:ring-primary text-foreground"
                  aria-label="Search courses"
                />
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-lg hover:bg-muted hover-lift ${
                      isActive(item.path)
                        ? "bg-muted text-primary"
                        : "text-foreground"
                    }`}
                    onClick={toggleMenu}
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
                <hr className="my-4 border-border" />
                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    className={`justify-start hover-scale text-foreground ${
                      isActive("/login")
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }`}
                    asChild
                  >
                    <Link
                      to="/login"
                      onClick={toggleMenu}
                      className="flex items-center gap-3"
                    >
                      <LogIn className="h-5 w-5" />
                      Log in
                    </Link>
                  </Button>
                  <Button
                    className={`justify-start bg-primary hover:bg-primary/90 hover-scale ${
                      isActive("/signup") ? "bg-secondary" : ""
                    }`}
                    asChild
                  >
                    <Link to="/signup" onClick={toggleMenu}>
                      Sign up
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;