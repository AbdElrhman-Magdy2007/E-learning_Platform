
import { Link } from "react-router-dom";
import { Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-full bg-brand-600 p-1.5">
                <Book className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">LearnSphere</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              LearnSphere is your gateway to high-quality online education. 
              Discover courses taught by expert instructors in various fields.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/teach" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Teach on LearnSphere
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="mailto:support@learnsphere.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    support@learnsphere.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="text-sm text-muted-foreground">
                  123 Education Street<br />
                  Learning City, LC 12345
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} LearnSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
