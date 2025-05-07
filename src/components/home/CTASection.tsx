
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-brand-600 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg mb-8 text-white/80">
            Join thousands of students who are already learning and growing with LearnSphere. 
            Get unlimited access to our library of courses and start your journey today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button size="lg" className="bg-white text-brand-600 hover:bg-white/90" asChild>
              <Link to="/signup">Start Learning Now</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            No credit card required. Start with a free account.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
