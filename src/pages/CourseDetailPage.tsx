
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, Award, PlayCircle, FileText, Download } from "lucide-react";

// Sample course data - in a real app, this would come from an API
const courses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2023",
    instructor: {
      name: "Dr. Angela Williams",
      bio: "Angela is a lead instructor with over 10 years of experience teaching web development. She holds a PhD in Computer Science and has worked with major tech companies.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    description: "Learn web development from scratch with this comprehensive bootcamp. You'll master HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. By the end of this course, you'll be able to build complete, professional websites and web applications.",
    longDescription: "This course is designed for beginners and will take you from zero to mastery in web development. You'll learn by building real-world projects that you can add to your portfolio. The course covers front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end technologies like Node.js, Express, and MongoDB.\n\nYou'll start by learning the basics of web development, including HTML and CSS, and then progress to more advanced topics like responsive design, JavaScript programming, and front-end frameworks. From there, you'll dive into back-end development, learning how to build APIs, connect to databases, and deploy your applications.\n\nBy the end of the course, you'll have built several complete web applications and will have the skills needed to build your own applications from scratch. The course is constantly updated to ensure you're learning the latest technologies and best practices.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 94.99,
    rating: 4.8,
    totalRatings: 24815,
    studentsCount: 145892,
    duration: "63 hours",
    level: "All Levels",
    lastUpdated: "May 2023",
    language: "English",
    objectives: [
      "Build responsive websites using HTML, CSS, and JavaScript",
      "Create dynamic web applications with React",
      "Develop back-end applications with Node.js and Express",
      "Work with databases like MongoDB and SQL",
      "Deploy applications to the web",
      "Understand web security fundamentals",
    ],
    requirements: [
      "No prior knowledge required - we'll teach you everything you need to know",
      "A computer (Windows, macOS, or Linux) with an internet connection",
      "Enthusiasm and determination to learn",
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: [
          { title: "Course Overview", duration: "10 min", type: "video" },
          { title: "Setting Up Your Development Environment", duration: "15 min", type: "video" },
          { title: "How the Internet Works", duration: "20 min", type: "video" },
          { title: "Understanding Clients and Servers", duration: "18 min", type: "video" },
        ]
      },
      {
        title: "HTML Fundamentals",
        lessons: [
          { title: "Introduction to HTML", duration: "25 min", type: "video" },
          { title: "HTML Structure and Tags", duration: "30 min", type: "video" },
          { title: "Creating Your First Web Page", duration: "45 min", type: "video" },
          { title: "HTML Project: Personal Website", duration: "1 hour", type: "project" },
          { title: "HTML Resources", duration: "5 min", type: "document" },
        ]
      },
      {
        title: "CSS Styling",
        lessons: [
          { title: "Introduction to CSS", duration: "20 min", type: "video" },
          { title: "Selectors and Properties", duration: "35 min", type: "video" },
          { title: "Layout and Positioning", duration: "40 min", type: "video" },
          { title: "Responsive Design", duration: "50 min", type: "video" },
          { title: "CSS Project: Styling Your Website", duration: "1.5 hours", type: "project" },
          { title: "CSS Resources", duration: "5 min", type: "document" },
        ]
      },
      {
        title: "JavaScript Basics",
        lessons: [
          { title: "Introduction to JavaScript", duration: "30 min", type: "video" },
          { title: "Variables and Data Types", duration: "25 min", type: "video" },
          { title: "Control Flow and Loops", duration: "40 min", type: "video" },
          { title: "Functions and Scope", duration: "45 min", type: "video" },
          { title: "DOM Manipulation", duration: "55 min", type: "video" },
          { title: "JavaScript Project: Interactive Website", duration: "2 hours", type: "project" },
          { title: "JavaScript Resources", duration: "5 min", type: "document" },
        ]
      },
    ],
    includes: [
      "63 hours of on-demand video",
      "15 articles and resources",
      "50 coding exercises",
      "20 downloadable resources",
      "Full lifetime access",
      "Access on mobile and TV",
      "Certificate of completion",
    ]
  }
];

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <p className="text-muted-foreground">The course you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted py-10 border-b">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Badge className="mb-3">{course.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-4">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center text-sm">
                  <span className="text-amber-500 font-semibold mr-1">{course.rating}</span>
                  <span className="text-amber-500">{"★".repeat(Math.round(course.rating))}</span>
                  <span className="text-muted-foreground">{"☆".repeat(5 - Math.round(course.rating))}</span>
                  <span className="ml-1 text-muted-foreground">({course.totalRatings.toLocaleString()} ratings)</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {course.studentsCount.toLocaleString()} students
                </div>
              </div>
              
              <div className="flex items-center text-sm mb-6">
                <span>Created by <a href="#" className="text-primary font-medium">{course.instructor.name}</a></span>
                <span className="mx-2">•</span>
                <span>Last updated {course.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{course.language}</span>
              </div>
              
              {/* Mobile only purchase card */}
              <div className="md:hidden bg-card rounded-lg border p-4 mb-6">
                <div className="mb-4 aspect-video rounded-md overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-3xl font-bold">${course.price}</span>
                </div>
                <Button className="w-full mb-3">Enroll Now</Button>
                <p className="text-center text-sm text-muted-foreground mb-4">30-Day Money-Back Guarantee</p>
                <div className="text-sm space-y-2">
                  <p className="font-semibold">This course includes:</p>
                  <ul className="space-y-2">
                    {course.includes.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Desktop purchase card */}
            <div className="hidden md:block">
              <div className="bg-card rounded-lg border p-6 sticky top-20">
                <div className="mb-4 aspect-video rounded-md overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-3xl font-bold">${course.price}</span>
                </div>
                <Button className="w-full mb-4">Enroll Now</Button>
                <p className="text-center text-sm text-muted-foreground mb-6">30-Day Money-Back Guarantee</p>
                <div className="text-sm space-y-3">
                  <p className="font-semibold">This course includes:</p>
                  <ul className="space-y-3">
                    {course.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Course content</h2>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                    <div>{course.curriculum.length} sections</div>
                    <div>
                      {course.curriculum.reduce((total, section) => total + section.lessons.length, 0)} lectures
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.slice(0, 3).map((section, index) => (
                      <AccordionItem value={`section-${index}`} key={index}>
                        <AccordionTrigger>
                          <div className="flex flex-1 justify-between pr-4">
                            <span>{section.title}</span>
                            <span className="text-sm text-muted-foreground">
                              {section.lessons.length} lectures
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="py-2 px-1">
                                <div className="flex items-start">
                                  {lesson.type === "video" && <PlayCircle className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />}
                                  {lesson.type === "document" && <FileText className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />}
                                  {lesson.type === "project" && <Download className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />}
                                  <div>
                                    <p className="font-medium">{lesson.title}</p>
                                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  
                  {course.curriculum.length > 3 && (
                    <Button variant="outline" className="mt-4">Show all sections</Button>
                  )}
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {course.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <div className="prose max-w-none">
                    {course.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </section>
              </TabsContent>
              
              <TabsContent value="curriculum" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                  <div>{course.curriculum.length} sections</div>
                  <div>
                    {course.curriculum.reduce((total, section) => total + section.lessons.length, 0)} lectures
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                </div>
                
                <Accordion type="multiple" className="w-full">
                  {course.curriculum.map((section, index) => (
                    <AccordionItem value={`section-${index}`} key={index}>
                      <AccordionTrigger>
                        <div className="flex flex-1 justify-between pr-4">
                          <span>{section.title}</span>
                          <span className="text-sm text-muted-foreground">
                            {section.lessons.length} lectures
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="py-2 px-1">
                              <div className="flex items-start">
                                {lesson.type === "video" && <PlayCircle className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />}
                                {lesson.type === "document" && <FileText className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />}
                                {lesson.type === "project" && <Download className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />}
                                <div>
                                  <p className="font-medium">{lesson.title}</p>
                                  <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="instructor" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Meet Your Instructor</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                      <img 
                        src={course.instructor.avatar} 
                        alt={course.instructor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{course.instructor.name}</h3>
                    <p className="text-muted-foreground mb-4">Web Development Instructor</p>
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-amber-500" />
                        <span>4.8 Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>145,892 Students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-5 w-5 text-primary" />
                        <span>12 Courses</span>
                      </div>
                    </div>
                    <p className="text-base">{course.instructor.bio}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-64">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-amber-500 mb-2">{course.rating}</div>
                      <div className="flex justify-center text-amber-500 mb-1">
                        {"★".repeat(Math.round(course.rating))}
                        {"☆".repeat(5 - Math.round(course.rating))}
                      </div>
                      <p className="text-sm text-muted-foreground">Course Rating</p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="mb-6">Reviews are currently being fetched.</p>
                    <Button className="mb-4">Write a Review</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetailPage;
