/**
 * About Me Component
 * Comprehensive about section with professional details
 */

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, Calendar, Languages, GraduationCap, Heart } from 'lucide-react';

export function AboutMe() {
  return (
    <div className="space-y-8">
      {/* Main Bio Section */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Photo and Quick Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              {/* Professional Photo Placeholder */}
              <div className="relative mb-6">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-sm text-muted-foreground">
                      Professional Photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Relocating to Berlin, Germany</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-muted-foreground">Immediate Start</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-muted-foreground">5 Years Coding</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Languages className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Languages</p>
                    <p className="text-muted-foreground">Swedish (Native), English (Fluent)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-muted-foreground">Full Stack Development Diploma (2024)</p>
                  </div>
                </div>
              </div>

              {/* Work Authorization */}
              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-center">
                  ✅ EU Citizen - No Visa Required
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Bio */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Hello! I'm <strong>Yoseph Berhane</strong>, a passionate Full Stack Developer with 5 years of 
                  hands-on coding experience and a recent diploma in Full Stack Development completed in 
                  August 2024. I specialize in building modern, scalable web applications using cutting-edge 
                  technologies like React, TypeScript, and Node.js.
                </p>

                <p className="text-base leading-relaxed mb-4">
                  My journey in software development has been driven by a deep curiosity for problem-solving 
                  and a commitment to writing clean, maintainable code. I thrive in collaborative environments 
                  where I can contribute to meaningful projects and continuously learn from talented teams.
                </p>

                <p className="text-base leading-relaxed mb-4">
                  With a strong foundation in both frontend and backend development, I bring a holistic 
                  approach to building web applications. From crafting intuitive user interfaces with React 
                  and Tailwind CSS to architecting robust APIs with Node.js and Express, I enjoy working 
                  across the entire technology stack.
                </p>

                <p className="text-base leading-relaxed">
                  Currently, I'm seeking full-stack developer positions in Berlin, Germany, where I can 
                  contribute to innovative projects while growing as a professional. I'm particularly interested 
                  in roles that emphasize modern web technologies, agile methodologies, and opportunities to 
                  work with AI-powered solutions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Career Goals & Interests */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Passion & Career Goals
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What Drives Me</h4>
                  <p className="text-muted-foreground">
                    I'm passionate about creating web experiences that make a difference. Whether it's 
                    building an e-commerce platform for local artisans or developing tools that streamline 
                    business operations, I find fulfillment in projects that have real-world impact.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Web Development</Badge>
                    <Badge variant="secondary">AI Integration</Badge>
                    <Badge variant="secondary">Performance Optimization</Badge>
                    <Badge variant="secondary">UX/UI Design</Badge>
                    <Badge variant="secondary">E-Commerce Solutions</Badge>
                    <Badge variant="secondary">Clean Architecture</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Career Aspirations</h4>
                  <p className="text-muted-foreground">
                    My goal is to join a forward-thinking team in Berlin where I can contribute to building 
                    innovative products while continuing to expand my expertise in modern web technologies 
                    and AI. I'm eager to take on challenges that push me to grow as both a developer and 
                    a team member.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Berlin */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Why Berlin?</h3>
              <p className="text-muted-foreground mb-3">
                Berlin's thriving tech ecosystem, diverse international community, and reputation for 
                innovation make it the ideal place for my next career chapter. I'm excited about the 
                opportunity to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Work with cutting-edge technologies in a city known for tech innovation</li>
                <li>Collaborate with talented professionals from around the world</li>
                <li>Contribute to Berlin's vibrant startup and tech culture</li>
                <li>Be part of a community that values creativity and technical excellence</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Personal Interests (Optional) */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4">Beyond Coding</h3>
          <p className="text-muted-foreground mb-4">
            When I'm not coding, you'll find me exploring the latest web technologies, contributing to 
            open-source projects, or learning about advancements in AI and machine learning. I believe 
            in continuous learning and staying curious about new developments in the tech world.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Open Source Contributor</Badge>
            <Badge variant="outline">Tech Blogger</Badge>
            <Badge variant="outline">Continuous Learner</Badge>
            <Badge variant="outline">Problem Solver</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
