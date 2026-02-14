
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
        <div className="space-y-1">
          <h3 className="text-xl font-bold">{title}</h3>
          {role && (
            <p className="text-sm text-primary font-medium">{role}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {summary ? (
          <p className="text-muted-foreground text-sm mb-3">{summary}</p>
        ) : (
          <p className="text-muted-foreground">{description}</p>
        )}
        {impact && impact.length > 0 && (
          <div className="mt-3 space-y-1">
            <p className="text-sm font-semibold text-foreground">Key Outcomes:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              {impact.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start gap-3">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">Tech:</span>
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
        <div className="flex gap-2">
          <Link
            to={`/projects/${slug}`}
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            {summary ? "View project" : "View Details"}
          </Link>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary ml-2"
            >
              Live demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary ml-2"
            >
              GitHub
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
