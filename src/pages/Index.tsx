
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import CourseList from "@/components/courses/CourseList";
import { allCourses } from "@/data/courseData";

// Get first 4 courses for the featured section
const featuredCourses = allCourses.slice(0, 4);

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
