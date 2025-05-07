
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid3x3, Search, BookOpen, Code, LineChart, PenTool, Music, Video, Globe, Briefcase } from "lucide-react";

// Sample categories data
const categoriesData = [
  { 
    id: "web-dev", 
    name: "Web Development", 
    courseCount: 126, 
    icon: <Code className="h-12 w-12 text-brand-600" />,
    featured: true
  },
  { 
    id: "business", 
    name: "Business & Marketing", 
    courseCount: 98, 
    icon: <LineChart className="h-12 w-12 text-brand-600" />,
    featured: true
  },
  { 
    id: "design", 
    name: "Design & Creative", 
    courseCount: 84, 
    icon: <PenTool className="h-12 w-12 text-brand-600" />,
    featured: true
  },
  { 
    id: "music", 
    name: "Music", 
    courseCount: 65, 
    icon: <Music className="h-12 w-12 text-brand-600" />,
    featured: false
  },
  { 
    id: "video", 
    name: "Video Production", 
    courseCount: 47, 
    icon: <Video className="h-12 w-12 text-brand-600" />,
    featured: false
  },
  { 
    id: "language", 
    name: "Languages", 
    courseCount: 72, 
    icon: <Globe className="h-12 w-12 text-brand-600" />,
    featured: false
  },
  { 
    id: "career", 
    name: "Career Development", 
    courseCount: 54, 
    icon: <Briefcase className="h-12 w-12 text-brand-600" />,
    featured: true
  }
];

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFeatured, setShowFeatured] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState(categoriesData);
  
  useEffect(() => {
    let result = categoriesData;
    
    if (searchTerm) {
      result = result.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (showFeatured) {
      result = result.filter(category => category.featured);
    }
    
    setFilteredCategories(result);
  }, [searchTerm, showFeatured]);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-blue-600 py-16 px-4 text-white animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Courses by Category
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Find the perfect course from our diverse category selection
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search categories..."
              className="pl-10 bg-white text-gray-800 border-0 focus-visible:ring-2 focus-visible:ring-white h-12 transition-all duration-300 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Grid3x3 className="h-5 w-5 text-brand-600" />
            <h2 className="text-2xl font-bold">All Categories</h2>
          </div>
          <div className="flex gap-4">
            <Button
              variant={showFeatured ? "default" : "outline"}
              onClick={() => setShowFeatured(!showFeatured)}
              className="hover-scale"
            >
              {showFeatured ? "All Categories" : "Featured Only"}
            </Button>
            <select className="border border-input rounded-md h-10 px-3 bg-background">
              <option value="popularity">Sort: Popularity</option>
              <option value="name">Sort: Name</option>
              <option value="courses">Sort: Course Count</option>
            </select>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map((category) => (
            <Card key={category.id} className="hover-lift overflow-hidden border-2 border-border hover:border-brand-200 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-brand-50 rounded-full">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.courseCount} courses</p>
                <Button className="w-full hover-scale">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Courses
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Courses Section */}
        <div className="mt-16 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-brand-600 to-blue-600 bg-clip-text text-transparent">
              Popular Courses
            </span>
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-10">
            Discover our most-loved courses across all categories, chosen by thousands of students worldwide
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="hover-lift overflow-hidden">
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Course Thumbnail</span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold mb-2">Advanced Web Development</h3>
                  <p className="text-sm text-muted-foreground mb-3">John Smith</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-600">$49.99</span>
                    <span className="text-sm text-muted-foreground">4.8 ⭐</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-muted rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't find your perfect category?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            Our team is constantly adding new course categories based on demand and emerging skills
          </p>
          <Button size="lg" className="hover-scale pulse-animation">
            Request a Category
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
