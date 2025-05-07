
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Code, BarChart3, Palette, Video, Lightbulb } from "lucide-react";

interface Category {
  id: string;
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

const categories: Category[] = [
  {
    id: "technology",
    title: "Technology",
    count: 425,
    icon: <Code />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "business",
    title: "Business",
    count: 320,
    icon: <BarChart3 />,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "design",
    title: "Design",
    count: 215,
    icon: <Palette />,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "marketing",
    title: "Marketing",
    count: 180,
    icon: <Lightbulb />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "arts",
    title: "Arts & Media",
    count: 120,
    icon: <Video />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "academics",
    title: "Academics",
    count: 150,
    icon: <Book />,
    color: "bg-red-100 text-red-600",
  },
];

const CategorySection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Top Categories</h2>
            <p className="text-muted-foreground">Explore our most popular course categories</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/categories">View All Categories</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link to={`/categories/${category.id}`} key={category.id}>
              <Card className="transition-all hover:shadow-md">
                <CardContent className="flex items-center p-6">
                  <div className={`rounded-md p-2.5 mr-4 ${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} courses
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
