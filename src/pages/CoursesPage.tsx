
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { CourseProps } from "@/components/courses/CourseCard";
import CourseFilters from "@/components/courses/CourseFilters";
import SearchBar from "@/components/courses/SearchBar";
import CourseResults from "@/components/courses/CourseResults";
import { allCourses, categories, levels } from "@/data/courseData";

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState<CourseProps[]>(allCourses);
  
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
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            showFilters={showFilters} 
            setShowFilters={setShowFilters} 
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter sidebar */}
          <CourseFilters 
            categories={categories}
            levels={levels}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            applyFilters={applyFilters}
            resetFilters={resetFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          {/* Course list */}
          <div className="flex-1">
            <CourseResults 
              filteredCourses={filteredCourses} 
              resetFilters={resetFilters} 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;
