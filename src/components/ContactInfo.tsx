/**
 * Contact Info Component
 * Display contact information and social media links
 */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
} from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@yoseph.dev",
      link: "mailto:contact@yoseph.dev",
      description: "Best way to reach me",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Yoseph Berhane",
      link: "https://linkedin.com/in/yoseph-berhane",
      description: "Professional network",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "@yosephdev",
      link: "https://github.com/yosephdev",
      description: "View my code",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Remote Worldwide",
      description: "Open to opportunities",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {contactDetails.map((detail, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {detail.icon}
                  </div>
                  <div>
                    <CardTitle className="text-base">{detail.label}</CardTitle>
                    <CardDescription className="text-xs">
                      {detail.description}
                    </CardDescription>
                  </div>
                </div>
                {detail.link && (
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${detail.label}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {detail.link ? (
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-sm font-medium">{detail.value}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Response Time Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24-48 hours during
                weekdays. For urgent inquiries, please mention it in your
                subject line.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Availability Note */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Availability for Opportunities</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Full-time positions</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Contract work</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Remote opportunities worldwide</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Open to relocation</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Links */}
      <Card>
        <CardHeader>
          <CardTitle>Connect With Me</CardTitle>
          <CardDescription>Let's connect on social media</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <a
                href="https://github.com/yosephdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href="https://linkedin.com/in/yoseph-berhane"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href="https://yoseph.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Website
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Compact version for footer or sidebar
export function ContactInfoCompact() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm">
        <Mail className="h-4 w-4 text-muted-foreground" />
        <a
          href="mailto:contact@yoseph.dev"
          className="text-primary hover:underline"
        >
          contact@yoseph.dev
        </a>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">Remote Worldwide</span>
      </div>
      <div className="flex gap-3 pt-2">
        <a
          href="https://github.com/yosephdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/yoseph-berhane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
