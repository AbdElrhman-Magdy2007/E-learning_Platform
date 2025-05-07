
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
      <div className="bg-gradient-to-b from-brand-50/50 to-background">
        <CategorySection />
      </div>
      <div className="container section-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-brand-600 to-blue-600 bg-clip-text text-transparent">
            Featured Courses
          </span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Explore our handpicked selection of top-rated courses taught by industry experts to help you master new skills and advance your career.
        </p>
        <CourseList courses={featuredCourses} />
      </div>
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
