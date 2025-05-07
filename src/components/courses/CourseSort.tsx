
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDown } from "lucide-react";

interface CourseSortProps {
  onSortChange?: (value: string) => void;
}

const CourseSort = ({ onSortChange }: CourseSortProps = {}) => {
  const [selectedSort, setSelectedSort] = useState("featured");
  
  useEffect(() => {
    if (onSortChange) {
      onSortChange(selectedSort);
    }
  }, [selectedSort, onSortChange]);

  return (
    <div className="flex items-center gap-2 animate-fade-in">
      <ArrowDown className="h-4 w-4 text-muted-foreground" />
      <Select 
        value={selectedSort} 
        onValueChange={(value) => setSelectedSort(value)}
      >
        <SelectTrigger className="w-[180px] transition-all hover:border-primary focus:border-primary">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="min-w-[180px]">
          <SelectItem value="featured" className="transition-colors hover:bg-secondary">Featured</SelectItem>
          <SelectItem value="price-low" className="transition-colors hover:bg-secondary">Price: Low to High</SelectItem>
          <SelectItem value="price-high" className="transition-colors hover:bg-secondary">Price: High to Low</SelectItem>
          <SelectItem value="rating" className="transition-colors hover:bg-secondary">Highest Rated</SelectItem>
          <SelectItem value="newest" className="transition-colors hover:bg-secondary">Newest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CourseSort;
