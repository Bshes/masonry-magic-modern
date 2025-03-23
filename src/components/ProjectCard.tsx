
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  partner: string;
  image: string;
}

const ProjectCard = ({ title, location, partner, image }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src={`/assets${image}`} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center mb-2 text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <p className="text-gray-700 mb-4">
          <span className="font-medium">Partner:</span> {partner}
        </p>
        <Link 
          to="/projects" 
          className="text-masonry-brick font-medium inline-flex items-center hover:underline"
        >
          View Project <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
