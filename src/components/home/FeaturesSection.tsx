
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Video, 
  Award, 
  Users, 
  BookOpen, 
  DownloadCloud 
} from "lucide-react";

const features = [
  {
    icon: <Video className="h-6 w-6 text-brand-600" />,
    title: "HD Video Lectures",
    description: "Access high-quality video lessons that you can watch at your own pace, anytime and anywhere."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-brand-600" />,
    title: "Comprehensive Curriculum",
    description: "Our courses are designed by industry experts to provide you with complete and up-to-date knowledge."
  },
  {
    icon: <Clock className="h-6 w-6 text-brand-600" />,
    title: "Learn at Your Own Pace",
    description: "No deadlines or time constraints. Learn whenever it fits your schedule, from any device."
  },
  {
    icon: <DownloadCloud className="h-6 w-6 text-brand-600" />,
    title: "Downloadable Resources",
    description: "Get access to downloadable materials, exercises, and resources to enhance your learning experience."
  },
  {
    icon: <Users className="h-6 w-6 text-brand-600" />,
    title: "Community Support",
    description: "Join our community of learners and instructors to get help, share knowledge, and grow together."
  },
  {
    icon: <Award className="h-6 w-6 text-brand-600" />,
    title: "Certificates",
    description: "Earn certificates upon course completion to showcase your newly acquired skills to employers."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose LearnSphere</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to provide the best learning experience with features that help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-brand-100 p-3 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
