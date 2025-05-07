
import CourseCard, { CourseProps } from "./CourseCard";

interface CourseListProps {
  courses: CourseProps[];
  title?: string;
}

const CourseList = ({ courses, title }: CourseListProps) => {
  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      )}
      <div className="course-container">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
