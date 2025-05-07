
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, Users } from "lucide-react";

export interface CourseProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  studentsCount: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
}

const CourseCard = ({
  id,
  title,
  instructor,
  description,
  category,
  image,
  price,
  rating,
  studentsCount,
  duration,
  level,
}: CourseProps) => {
  return (
    <Link to={`/courses/${id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{instructor}</p>
          <div className="flex items-center gap-1 text-amber-500 mb-2">
            {"★".repeat(Math.round(rating))}
            {"☆".repeat(5 - Math.round(rating))}
            <span className="text-muted-foreground text-xs ml-1">({rating.toFixed(1)})</span>
          </div>
          <p className="text-sm line-clamp-2 text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{studentsCount.toLocaleString()} students</span>
            </div>
            <Badge variant="outline">{level}</Badge>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <Badge variant="secondary">{level}</Badge>
          <p className="font-bold text-lg">
            ${price.toFixed(2)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
