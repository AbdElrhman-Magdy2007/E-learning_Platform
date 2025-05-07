
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search, 
  Star, 
  BookOpen, 
  ChevronRight,
  Award,
  Calendar
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Sample teachers data
const teachersData = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Web Development Expert",
    bio: "Former Google engineer with 15+ years of experience teaching web technologies.",
    rating: 4.9,
    students: 15420,
    courses: 12,
    image: "https://i.postimg.cc/XvRkJFnW/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
    expertise: ["JavaScript", "React", "Node.js"],
    featured: true
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Business Strategy Consultant",
    bio: "Harvard MBA with experience at top consulting firms, specializing in business strategy and marketing.",
    rating: 4.8,
    students: 8750,
    courses: 8,
    image: "https://i.postimg.cc/XvRkJFnW/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
    expertise: ["Marketing", "Business Strategy", "Entrepreneurship"],
    featured: true
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    title: "UX/UI Design Specialist",
    bio: "Award-winning designer who has worked with Fortune 500 companies on product design.",
    rating: 4.9,
    students: 12300,
    courses: 10,
    image: "https://i.postimg.cc/XvRkJFnW/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
    expertise: ["UX Design", "UI Design", "Adobe Creative Suite"],
    featured: true
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    title: "Data Science Instructor",
    bio: "Ph.D. in Computer Science with specialization in machine learning and AI.",
    rating: 4.7,
    students: 9800,
    courses: 6,
    image: "https://i.postimg.cc/XvRkJFnW/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
    expertise: ["Python", "Machine Learning", "Data Analysis"],
    featured: false
  },
  {
    id: "5",
    name: "Sophia Kim",
    title: "Language Learning Expert",
    bio: "Multilingual educator with innovative methods for teaching languages.",
    rating: 4.8,
    students: 7500,
    courses: 9,
    image: "https://i.postimg.cc/XvRkJFnW/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
    expertise: ["Spanish", "Korean", "Language Pedagogy"],
    featured: false
  },
  {
    id: "6",
    name: "Robert Jackson",
    title: "Photography Instructor",
    bio: "Professional photographer with 20+ years of experience in commercial and fine art photography.",
    rating: 4.9,
    students: 5600,
    courses: 7,
    image: "https://i.postimg.cc/XvRkJFnW/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
    expertise: ["Digital Photography", "Lighting", "Photo Editing"],
    featured: true
  }
];

const TeachersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const [showFeatured, setShowFeatured] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get all unique expertise areas
  const allExpertise = Array.from(
    new Set(
      teachersData.flatMap((teacher) => teacher.expertise)
    )
  );

  // Filter teachers based on search and filters
  const filteredTeachers = teachersData.filter((teacher) => {
    const matchesSearch = 
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      teacher.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesExpertise = 
      selectedExpertise === "" || 
      teacher.expertise.includes(selectedExpertise);
    
    const matchesFeatured = 
      !showFeatured || teacher.featured;
    
    return matchesSearch && matchesExpertise && matchesFeatured;
  });

  const openTeacherModal = (teacher: any) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div 
        className="py-16 px-4 text-center bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meet Our Expert Instructors
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/80">
            Learn from industry professionals with real-world experience
          </p>
          <Button size="lg" className="hover-scale">
            <BookOpen className="mr-2 h-5 w-5" />
            Browse Courses
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Search and Filters */}
        <div className="mb-10 bg-muted rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search instructors..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select 
              className="border border-input rounded-md h-10 px-3 bg-background"
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
            >
              <option value="">All Expertise Areas</option>
              {allExpertise.map((area) => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
            
            <Button
              variant={showFeatured ? "default" : "outline"}
              onClick={() => setShowFeatured(!showFeatured)}
              className="hover-scale"
            >
              {showFeatured ? "All Instructors" : "Featured Instructors"}
            </Button>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-6 w-6 text-brand-600" />
          <h2 className="text-2xl font-bold">
            {filteredTeachers.length} Instructor{filteredTeachers.length !== 1 ? 's' : ''}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <Card 
              key={teacher.id} 
              className="hover-lift overflow-hidden border-2 border-border hover:border-brand-200 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 hover:scale-105 transition-transform duration-300">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{teacher.name}</h3>
                  <p className="text-brand-600 text-sm mb-2">{teacher.title}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="font-medium">{teacher.rating}</span>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-foreground">{teacher.students.toLocaleString()}</span>
                    <span>Students</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-foreground">{teacher.courses}</span>
                    <span>Courses</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-foreground">{teacher.expertise.length}</span>
                    <span>Subjects</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {teacher.expertise.map((skill: string) => (
                    <span 
                      key={skill}
                      className="bg-brand-100 text-brand-800 text-xs px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full hover-scale"
                  onClick={() => openTeacherModal(teacher)}
                >
                  View Profile
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to become an instructor?
          </h2>
          <p className="max-w-lg mx-auto mb-6">
            Join our team of expert instructors and share your knowledge with students around the world
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="hover-scale bg-white text-brand-600 hover:bg-white/90"
          >
            Apply to Teach
          </Button>
        </div>
      </div>

      {/* Teacher Profile Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl">
          {selectedTeacher && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedTeacher.name}
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src={selectedTeacher.image} 
                      alt={selectedTeacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <span className="font-bold text-lg">{selectedTeacher.rating}</span>
                  </div>
                  <p className="text-brand-600 font-medium mb-4">{selectedTeacher.title}</p>
                  
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span>{selectedTeacher.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-muted-foreground" />
                      <span>{selectedTeacher.courses} courses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-muted-foreground" />
                      <span>Top instructor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span>Teaching since 2018</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-3">About</h3>
                  <p className="mb-6 text-muted-foreground">
                    {selectedTeacher.bio}
                    {" This is additional biography information that would be displayed in the full profile modal. The instructor has extensive experience in their field and has helped thousands of students achieve their learning goals through practical, hands-on instruction."}
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-3">Expertise</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedTeacher.expertise.map((skill: string) => (
                      <span 
                        key={skill}
                        className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">Popular Courses</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2].map((item) => (
                      <Card key={item} className="hover-scale">
                        <div className="p-4">
                          <h4 className="font-bold mb-1">Advanced Web Development</h4>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                            <span>{selectedTeacher.rating}</span>
                            <span className="text-muted-foreground text-sm">(2,500 reviews)</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Master modern web technologies with hands-on projects and real-world examples.
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button>View All Courses</Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default TeachersPage;
