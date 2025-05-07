
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import CourseList from "@/components/courses/CourseList";
import { CourseProps } from "@/components/courses/CourseCard";

// Sample course data - in a real app, this would come from an API
const featuredCourses: CourseProps[] = [
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
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <div className="container section-padding">
        <CourseList courses={featuredCourses} title="Featured Courses" />
      </div>
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
