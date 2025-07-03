
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export function BlogCard({ slug, title, excerpt, date, readingTime, tags }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="block">
      <Card className="h-full card-hover">
        <CardHeader className="p-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
              <span>•</span>
              <span>{readingTime}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
