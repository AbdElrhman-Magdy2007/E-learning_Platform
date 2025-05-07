
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-brand-50 to-background py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 animate-fade-in">
          Learn Without Limits
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
          Discover thousands of high-quality courses taught by expert instructors and transform your life through education.
        </p>
        
        <div className="w-full max-w-md relative mb-10 animate-fade-in">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            type="text"
            placeholder="What do you want to learn today?"
            className="pl-10 pr-24 h-12 w-full rounded-full shadow-sm"
          />
          <Button 
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10"
          >
            Search
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
          <Button variant="outline" size="lg" asChild>
            <Link to="/courses">Browse Courses</Link>
          </Button>
          <Button size="lg" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center animate-fade-in">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">10K+</h3>
            <p className="text-muted-foreground">Students</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">500+</h3>
            <p className="text-muted-foreground">Courses</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">150+</h3>
            <p className="text-muted-foreground">Instructors</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">95%</h3>
            <p className="text-muted-foreground">Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
