
import { CourseProps } from "@/components/courses/CourseCard";
import CourseList from "@/components/courses/CourseList";
import CourseSort from "@/components/courses/CourseSort";
import NoCoursesFound from "@/components/courses/NoCoursesFound";

interface CourseResultsProps {
  filteredCourses: CourseProps[];
  resetFilters: () => void;
}

const CourseResults = ({ 
  filteredCourses, 
  resetFilters 
}: CourseResultsProps) => {
  if (filteredCourses.length === 0) {
    return <NoCoursesFound resetFilters={resetFilters} />;
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
        </p>
        <CourseSort />
      </div>
      <CourseList courses={filteredCourses} />
    </>
  );
};

export default CourseResults;
