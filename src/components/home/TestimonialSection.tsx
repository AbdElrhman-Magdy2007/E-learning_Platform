
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  course: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer",
    avatar: "https://i.postimg.cc/XvRkJFnW/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
    quote: "LearnSphere completely transformed my career. The structured curriculum and expert instructors helped me master web development in just 3 months. I've now landed my dream job at a tech startup!",
    course: "Full-Stack Web Development Bootcamp"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    avatar: "https://i.postimg.cc/XvRkJFnW/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
    quote: "As someone with a busy schedule, LearnSphere's flexible learning model allowed me to advance my marketing skills while working full-time. The content was practical, current, and immediately applicable to my job.",
    course: "Digital Marketing Mastery"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    avatar: "https://i.postimg.cc/XvRkJFnW/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
    quote: "The UX Design course on LearnSphere was exactly what I needed. The instructor provided invaluable feedback on my projects, and the community was incredibly supportive. I've grown so much as a designer.",
    course: "UX Design Fundamentals"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="section-padding bg-brand-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Student Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our students about how LearnSphere has helped them achieve their goals
          </p>
        </div>

        <Card className="border-0 shadow-md max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-200">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-600 rounded-full p-1.5">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-center">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{testimonial.role}</p>
                <p className="text-xs text-brand-600 font-medium mt-1 text-center">{testimonial.course}</p>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg md:text-xl italic text-muted-foreground">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-brand-600" : "bg-brand-200"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialSection;
