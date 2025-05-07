
import { Button } from "@/components/ui/button";
import { BookX } from "lucide-react";

interface NoCoursesFoundProps {
  resetFilters: () => void;
}

const NoCoursesFound = ({ resetFilters }: NoCoursesFoundProps) => {
  return (
    <div className="text-center py-20 px-4 animate-fade-in">
      <div className="bg-muted/50 mx-auto rounded-full w-20 h-20 flex items-center justify-center mb-6">
        <BookX className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">No courses found</h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-6">
        We couldn't find any courses matching your current filters. Try adjusting your search criteria or explore our catalog differently.
      </p>
      <Button 
        variant="default" 
        className="mt-2 transition-all hover:scale-105"
        onClick={resetFilters}
      >
        Reset All Filters
      </Button>
    </div>
  );
};

export default NoCoursesFound;
