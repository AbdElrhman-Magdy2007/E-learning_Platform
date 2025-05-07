
import { Button } from "@/components/ui/button";

interface NoCoursesFoundProps {
  resetFilters: () => void;
}

const NoCoursesFound = ({ resetFilters }: NoCoursesFoundProps) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold mb-2">No courses found</h3>
      <p className="text-muted-foreground">Try adjusting your filters</p>
      <Button 
        variant="outline" 
        className="mt-4"
        onClick={resetFilters}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default NoCoursesFound;
