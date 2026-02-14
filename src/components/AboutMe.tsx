/**
 * About Me Component
 * Professional, globally-remote focused profile section
 */

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Briefcase,
  Calendar,
  Languages,
  GraduationCap,
  Heart,
} from "lucide-react";

export function AboutMe() {
  return (
    <div className="space-y-8">
      {/* Main Bio Section */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Photo and Quick Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              {/* Professional Photo */}
              <div className="relative mb-6">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted/5 flex items-center justify-center">
                  <img
                    src="/images/professional-photo.png"
                    alt="Professional photo of Yoseph Berhane"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Work Model</p>
                    <p className="text-muted-foreground">Remote · Global</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-muted-foreground">Immediate</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-muted-foreground">
                      5+ Years (Production)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Languages className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Languages</p>
                    <p className="text-muted-foreground">
                      English (Fluent), Swedish (Professional)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-muted-foreground">
                      Full Stack Development Diploma (2025)
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Authorization */}
              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-center">
                  ✅ EU Citizen · No Visa Restrictions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Bio */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">About</h2>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  I'm a full stack developer with 5+ years of experience delivering e-commerce, marketplaces, and nonprofit platforms. I work across React, Next.js, TypeScript, and Django, and I'm comfortable owning features end-to-end – from discovery and UX to deployment and iteration.
                </p>

                <p className="text-base leading-relaxed mb-4">
                  I've built and maintained production systems for small businesses, NGOs, and startups, improving sales, visibility, and community impact. I enjoy working closely with founders and teams to turn ideas into shipped, measurable outcomes.
                </p>

                <p className="text-base leading-relaxed">
                  <strong>Now:</strong> Currently open to full-time and contract roles as a full stack or frontend-focused engineer (remote or relocation).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Focus & Motivation */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Focus & Motivation
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What I Care About</h4>
                  <p className="text-muted-foreground">
                    I’m driven by building software that’s useful, reliable, and
                    respectful of users’ time. That might mean enabling small
                    businesses to operate efficiently or creating tools that
                    support education and community initiatives.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Core Focus Areas</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Full Stack Web</Badge>
                    <Badge variant="secondary">System Design</Badge>
                    <Badge variant="secondary">AI Integration</Badge>
                    <Badge variant="secondary">Performance</Badge>
                    <Badge variant="secondary">E-Commerce</Badge>
                    <Badge variant="secondary">Clean Architecture</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Professional Direction</h4>
                  <p className="text-muted-foreground">
                    I’m focused on long-term growth as a full-stack engineer,
                    contributing to products that need stability, clear
                    thinking, and consistent delivery — whether as part of a
                    team or on high-impact projects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Personal Interests */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4">Beyond the Code</h3>
          <p className="text-muted-foreground mb-4">
            Outside of client and product work, I enjoy refining my technical
            skills, contributing to open-source projects, and staying current
            with advances in AI, web performance, and developer tooling.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Open Source</Badge>
            <Badge variant="outline">Systems Thinking</Badge>
            <Badge variant="outline">Continuous Learning</Badge>
            <Badge variant="outline">Problem Solving</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
