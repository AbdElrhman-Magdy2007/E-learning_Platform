
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CourseList from "@/components/courses/CourseList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CourseProps } from "@/components/courses/CourseCard";

// Sample course data - in a real app, this would come from an API
const allCourses: CourseProps[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2023",
    instructor: "Dr. Angela Williams",
    description: "Learn web development from scratch with HTML, CSS, JavaScript, React, Node and more!",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 94.99,
    rating: 4.8,
    studentsCount: 145892,
    duration: "63 hours",
    level: "All Levels",
  },
  {
    id: "2",
    title: "Data Science and Machine Learning Bootcamp",
    instructor: "Robert Chen, PhD",
    description: "Master Data Science, Machine Learning, Python, SQL, Tableau, and Power BI to become a data scientist.",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 89.99,
    rating: 4.7,
    studentsCount: 98562,
    duration: "48 hours",
    level: "Intermediate",
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Johnson",
    description: "Learn UI/UX design principles, wireframing, prototyping, and user research for creating exceptional user experiences.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 79.99,
    rating: 4.9,
    studentsCount: 54219,
    duration: "32 hours",
    level: "Beginner",
  },
  {
    id: "4",
    title: "Digital Marketing Mastery",
    instructor: "Michael Rodriguez",
    description: "Learn SEO, social media marketing, email marketing, content strategy, and PPC to grow your business online.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 84.99,
    rating: 4.6,
    studentsCount: 78452,
    duration: "40 hours",
    level: "All Levels",
  },
  {
    id: "5",
    title: "Advanced Python Programming",
    instructor: "James Miller",
    description: "Take your Python skills to the next level with advanced concepts, design patterns, and real-world projects.",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 79.99,
    rating: 4.7,
    studentsCount: 62158,
    duration: "45 hours",
    level: "Advanced",
  },
  {
    id: "6",
    title: "Financial Accounting Masterclass",
    instructor: "Emily Chen, CPA",
    description: "Learn financial accounting from scratch - journal entries, financial statements, and accounting principles.",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 69.99,
    rating: 4.5,
    studentsCount: 48756,
    duration: "38 hours",
    level: "Beginner",
  },
  {
    id: "7",
    title: "Mobile App Development with Flutter",
    instructor: "David Kim",
    description: "Build beautiful native apps for iOS and Android from a single codebase with Flutter and Dart.",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 89.99,
    rating: 4.8,
    studentsCount: 42189,
    duration: "52 hours",
    level: "Intermediate",
  },
  {
    id: "8",
    title: "Photography Masterclass",
    instructor: "Lisa Andrews",
    description: "Learn professional photography techniques, editing, composition, and how to build a photography business.",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 74.99,
    rating: 4.6,
    studentsCount: 36547,
    duration: "28 hours",
    level: "All Levels",
  }
];

const categories = ["All Categories", "Web Development", "Programming", "Data Science", "Design", "Marketing", "App Development", "Finance", "Photography"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  
  // Filter function
  const applyFilters = () => {
    const filtered = allCourses.filter(course => {
      // Filter by search query
      const matchesQuery = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by category
      const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
      
      // Filter by level
      const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
      
      // Filter by price range
      const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
      
      return matchesQuery && matchesCategory && matchesLevel && matchesPrice;
    });
    
    setFilteredCourses(filtered);
  };
  
  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedLevel("All Levels");
    setPriceRange([0, 100]);
    setFilteredCourses(allCourses);
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold">Explore Courses</h1>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-8 w-full md:w-72"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline"
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter sidebar - hidden on mobile unless toggled */}
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

          {/* Course list */}
          <div className="flex-1">
            {filteredCourses.length === 0 ? (
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
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
                  </p>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <CourseList courses={filteredCourses} />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;
