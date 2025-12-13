/**
 * Testimonials Component
 * Carousel displaying client/colleague testimonials and recommendations
 */

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  relationship: string; // e.g., "Client", "Colleague", "Mentor"
  date?: string;
}

// Sample testimonials - you can populate these with real data
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sibar Al-ani",
    role: "Instructor",
    company: "Changemaker Educations",
    quote:
      "Yoseph was a persistent student that wont give up or avoid a challenge when things gets difficult. He has a good work ethic and a constant drive to evolve as a developer. You can count on a driven and a constant improving employer, which is one of the most important attributes a developer can have, when hiring Yoseph.",
    relationship: "Colleague",
    date: "2023",
  },
  {
    id: "2",
    name: "Betty Mengesha",
    role: "Owner",
    company: "Cascadia Transport Services",
    quote:
      "Working with Yoseph on our booking platform was an excellent experience. He delivered a professional, user-friendly system that has significantly improved our operations. His technical expertise and dedication to quality are outstanding.",
    relationship: "Client",
    date: "2023",
  },
  {
    id: "3",
    name: "Merhawi Tesfamariam",
    role: "Owner",
    company: "Super Merra Frisör",
    quote:
      "Yoseph created a modern website for our salon that perfectly represents our brand. His attention to detail and understanding of our business needs resulted in a platform that our customers love. Highly professional and reliable!",
    relationship: "Client",
    date: "2024",
  },
  {
    id: "4",
    name: "Bahlebi Gidey",
    role: "Owner",
    company: "MT Skrädderi och Butik",
    quote:
      "Yoseph built our tailoring and barbershop website with great skill and professionalism. The site beautifully showcases our services and has helped us reach more customers. His work ethic and technical abilities are impressive.",
    relationship: "Client",
    date: "2025",
  },
  {
    id: "5",
    name: "David Young",
    role: "Instructor",
    company: "Altcademy",
    quote:
      "Showed determinism and strong work ethic in the full-stack program. Always willing to improve and learn. Yoseph is a valuable asset to any team.",
    relationship: "Colleague",
    date: "2023",
  },
];

export function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-muted-foreground py-8">
            <Quote className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p>Testimonials coming soon!</p>
            <p className="text-sm mt-2">
              Check back later for client and colleague recommendations.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          {/* Quote Icon */}
          <Quote className="h-8 w-8 text-primary opacity-20" />

          {/* Quote Text */}
          <blockquote className="text-sm leading-relaxed italic min-h-[120px]">
            "{testimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-3 pt-4 border-t">
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="flex items-center justify-between pt-2">
            <Badge variant="secondary" className="text-xs">
              {testimonial.relationship}
            </Badge>
            {testimonial.date && (
              <span className="text-xs text-muted-foreground">
                {testimonial.date}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Compact version for homepage
export function TestimonialsCompact({ limit = 3 }: { limit?: number }) {
  const featuredTestimonials = testimonials.slice(0, limit);

  if (featuredTestimonials.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredTestimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
