
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  summary?: string; // 1-2 sentence problem + solution
  role?: string; // "Full stack developer", "Founding engineer", or "Lead developer"
  impact?: string[]; // bullet list of metrics/outcomes
  tech: string[];
  image?: string;
  url?: string;
  github?: string;
  featured?: boolean;
}

export function ProjectCard({ slug, title, description, summary, role, impact, tech, image, url, github, featured }: ProjectCardProps) {
  return (
    <Card className={cn("h-full card-hover overflow-hidden", featured && "ring-2 ring-primary/20")}>
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className={cn("p-4", !image && "pt-6")}>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          {role && (
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {role}
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        {summary && (
          <div className="bg-muted/50 rounded-lg p-3 mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Overview</h4>
            <p className="text-muted-foreground text-sm">{summary}</p>
          </div>
        )}
        {impact && impact.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
            <div className="grid gap-2">
              {impact.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-start gap-2 bg-muted/30 rounded p-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-muted-foreground">Technologies:</span>
          {tech.slice(0, 4).map((t) => (
            <Badge key={t} variant="outline" className="text-xs">
              {t}
            </Badge>
          ))}
          {tech.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{tech.length - 4}
            </Badge>
          )}
        </div>
        <div className="flex gap-2 pt-2">
          <Link
            to={`/projects/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-2 rounded-md hover:bg-primary/20 transition-colors"
          >
            View Details
          </Link>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary border border-border px-3 py-2 rounded-md hover:border-primary transition-colors"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary border border-border px-3 py-2 rounded-md hover:border-primary transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
