
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CourseFiltersProps {
  categories: string[];
  levels: string[];
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedLevel: string;
  setSelectedLevel: Dispatch<SetStateAction<string>>;
  priceRange: number[];
  setPriceRange: Dispatch<SetStateAction<number[]>>;
  applyFilters: () => void;
  resetFilters: () => void;
  setShowFilters: Dispatch<SetStateAction<boolean>>;
  showFilters: boolean;
}

const CourseFilters = ({
  categories,
  levels,
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  priceRange,
  setPriceRange,
  applyFilters,
  resetFilters,
  setShowFilters,
  showFilters,
}: CourseFiltersProps) => {
  return (
    <div 
      className={`${
        showFilters ? "block" : "hidden"
      } md:block w-full md:w-72 lg:w-80 flex-shrink-0`}
    >
      <div className="bg-card rounded-lg border p-4 sticky top-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Filters</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters}
            className="h-8 text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </div>

        <Accordion type="single" collapsible defaultValue="categories" className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox 
                      id={`category-${category}`} 
                      checked={selectedCategory === category}
                      onCheckedChange={() => setSelectedCategory(category)}
                    />
                    <label 
                      htmlFor={`category-${category}`}
                      className="ml-2 text-sm"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="level">
            <AccordionTrigger>Level</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {levels.map((level) => (
                  <div key={level} className="flex items-center">
                    <Checkbox 
                      id={`level-${level}`} 
                      checked={selectedLevel === level}
                      onCheckedChange={() => setSelectedLevel(level)}
                    />
                    <label 
                      htmlFor={`level-${level}`}
                      className="ml-2 text-sm"
                    >
                      {level}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider
                  defaultValue={priceRange}
                  max={100}
                  step={1}
                  onValueChange={(value) => setPriceRange(value)}
                  className="mt-6"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm">${priceRange[0]}</span>
                  <span className="text-sm">${priceRange[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6">
          <Button onClick={applyFilters} className="w-full">
            Apply Filters
          </Button>
        </div>
        
        <div className="mt-4 md:hidden">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => setShowFilters(false)}
          >
            Close Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;
