
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  downloadUrl: string;
}

export function ResourceCard({ title, description, type, downloadUrl }: ResourceCardProps) {
  return (
    <Card className="h-full card-hover">
      <CardHeader className="p-4">
        <div className="space-y-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <Badge variant="outline" className="text-xs">
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <a href={downloadUrl} download>
            Download
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
