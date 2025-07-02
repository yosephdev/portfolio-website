
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/OptimizedImage";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  url?: string;
  github?: string;
}

export function ProjectCard({ slug, title, description, tech, image, url, github }: ProjectCardProps) {
  return (
    <Card className="h-full card-hover overflow-hidden">
      {image && (
        <div className="aspect-video overflow-hidden">
          <OptimizedImage 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            lazy={true}
          />
        </div>
      )}
      <CardHeader className={cn("p-4", !image && "pt-6")}>
        <div className="space-y-1">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start gap-3">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="outline" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Link
            to={`/projects/${slug}`}
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            View Details
          </Link>
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
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary ml-2"
            >
              Live Demo
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
