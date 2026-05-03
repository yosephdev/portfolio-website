/**
 * Testimonials Component
 * Carousel displaying client/colleague testimonials and recommendations
 */

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  relationship: "Client" | "Nonprofit" | "Instructor";
  date?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sibar Al-ani",
    role: "Instructor",
    company: "Changemaker Educations",
    quote:
      "Yoseph was a persistent student that won't give up or avoid a challenge when things get difficult. He has a good work ethic and a constant drive to evolve as a developer. You can count on a driven and constantly improving employee — which is one of the most important attributes a developer can have.",
    relationship: "Instructor",
    date: "2023",
  },
  {
    id: "2",
    name: "Betty Mengesha",
    role: "Owner",
    company: "Cascadia Transport Services",
    quote:
      "Working with Yoseph on our booking platform was a seamless experience. He asked the right questions up front, kept us informed throughout, and delivered a professional system that genuinely improved how we manage operations day to day. Technical skill you can rely on.",
    relationship: "Client",
    date: "2024",
  },
  {
    id: "3",
    name: "Merhawi Tesfamariam",
    role: "Owner",
    company: "Super Merra Frisör",
    quote:
      "Our clients now find us online and book directly through the website — something we couldn't do before. Yoseph understood exactly what a salon needs: a clean look, fast load times, and a booking flow that actually works on a phone. Couldn't be happier.",
    relationship: "Client",
    date: "2024",
  },
  {
    id: "4",
    name: "Bahlebi Gidey",
    role: "Owner",
    company: "MT Skrädderi och Butik",
    quote:
      "Yoseph built our tailoring website with real attention to detail. He took time to understand our business, suggested improvements we hadn't thought of, and delivered on time. The site looks great and new customers tell us they found us through it.",
    relationship: "Client",
    date: "2025",
  },
  {
    id: "5",
    name: "David Young",
    role: "Instructor",
    company: "Altcademy",
    quote:
      "Yoseph showed real determination throughout the full-stack programme. He tackled difficult concepts head-on and always looked for ways to go deeper. The kind of learner who turns challenges into skills — that mindset carries directly into strong engineering work.",
    relationship: "Instructor",
    date: "2023",
  },
  {
    id: "6",
    name: "Tigist Haile",
    role: "Co-founder",
    company: "TernaFit",
    quote:
      "Building three interconnected platforms for our nonprofit was no small task, but Yoseph handled the complexity well. He understood our mission from the start and made technical decisions that kept the community's needs front and centre. The platforms are live and reaching people around the world.",
    relationship: "Nonprofit",
    date: "2025",
  },
  {
    id: "7",
    name: "Asmaa Al-Rawi",
    role: "Owner",
    company: "Enjera Restaurant",
    quote:
      "We needed a website that looked as good as our food tastes. Yoseph delivered exactly that — clean design, easy-to-update menu, and a reservation flow that our customers find intuitive. Bookings through the site have noticeably increased since launch.",
    relationship: "Client",
    date: "2024",
  },
  {
    id: "8",
    name: "Liya Tesfaye",
    role: "Founder",
    company: "Selam's Handmade",
    quote:
      "After the redesign and SEO improvements Yoseph made, our sales went up noticeably within the first month. He also integrated our Etsy shop so customers can find everything in one place. Very communicative throughout — I always knew what was happening.",
    relationship: "Client",
    date: "2024",
  },
  {
    id: "9",
    name: "Dawit Gebremichael",
    role: "Founder",
    company: "Dungo Energy Solutions",
    quote:
      "Yoseph built our web presence for our solar energy initiative with real care for our cause. The site clearly communicates what we do to both local communities and international partners. His work has directly helped us open conversations we couldn't have had before.",
    relationship: "Nonprofit",
    date: "2025",
  },
];

export function Testimonials() {
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

const relationshipColors: Record<Testimonial["relationship"], string> = {
  Client: "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
  Nonprofit: "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
  Instructor: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
};

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
          {/* Top row: stars + tag */}
          <div className="flex items-center justify-between">
            <span className="text-yellow-400 tracking-widest text-sm">★★★★★</span>
            <Badge
              variant="outline"
              className={`text-xs ${relationshipColors[testimonial.relationship]}`}
            >
              {testimonial.relationship}
            </Badge>
          </div>

          {/* Quote Icon */}
          <Quote className="h-7 w-7 text-primary opacity-20" />

          {/* Quote Text */}
          <blockquote className="text-sm leading-relaxed italic min-h-[120px]">
            "{testimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-3 pt-4 border-t">
            <Avatar>
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
            {testimonial.date && (
              <span className="text-xs text-muted-foreground">{testimonial.date}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Compact version for homepage
export function TestimonialsCompact({ limit = 3 }: { limit?: number }) {
  const featured = testimonials.slice(0, limit);
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featured.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
