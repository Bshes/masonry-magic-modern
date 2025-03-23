
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Building } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Beacon College",
    location: "Leesburg, FL",
    category: "educational",
    partner: "Evergreen Construction Management",
    description: "Extensive masonry work for the expansion of this educational facility, featuring intricate brick detailing and architectural elements that complement the existing campus aesthetic.",
    image: "/photo-1486718448742-163732cd1544.jpg"
  },
  {
    id: 2,
    title: "Bond Building",
    location: "Winter Garden, FL",
    category: "commercial",
    partner: "R.C. Stevens Construction Company",
    description: "Modern commercial office space with a sophisticated masonry façade, combining traditional brick with contemporary design elements for a distinctive appearance.",
    image: "/photo-1488972685288-c3fd157d7c7a.jpg"
  },
  {
    id: 3,
    title: "Campus Credit Union",
    location: "Summerfield, FL",
    category: "financial",
    partner: "Scherer Construction of North Florida, LLC",
    description: "Financial institution featuring elegant masonry work that provides both security and aesthetic appeal, with specialty stonework at entryways.",
    image: "/photo-1527576539890-dfa815648363.jpg"
  },
  {
    id: 4,
    title: "JEA Headquarters",
    location: "Jacksonville, FL",
    category: "commercial",
    partner: "Ryan Companies US, Inc.",
    description: "Large-scale utility headquarters showcasing extensive brick and concrete masonry, designed for durability while maintaining an impressive corporate presence.",
    image: "/photo-1433086966358-54859d0ed716.jpg"
  },
  {
    id: 5,
    title: "Lake County Office Complex",
    location: "Tavares, FL",
    category: "government",
    partner: "Ajax Building Corporation",
    description: "Government facility with detailed masonry features that balance functionality with visual appeal, including decorative stone elements at the main entrance.",
    image: "/photo-1459767129954-1b1c1f9b9ace.jpg"
  },
  {
    id: 6,
    title: "Riverside Medical Center",
    location: "Melbourne, FL",
    category: "healthcare",
    partner: "Robins & Morton",
    description: "Healthcare facility with specialized masonry work designed to create a healing environment, featuring sound-dampening masonry techniques in critical areas.",
    image: "/photo-1486718448742-163732cd1544.jpg"
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero h-[40vh] relative">
        <img 
          src="/photo-1488972685288-c3fd157d7c7a.jpg" 
          alt="Masonry Projects" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Explore our portfolio of commercial and institutional masonry work across Florida
          </p>
        </div>
      </section>
      
      {/* Project Filters */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              className={filter === "all" ? "bg-masonry-brick hover:bg-masonry-brick/90" : ""}
              onClick={() => setFilter("all")}
            >
              All Projects
            </Button>
            <Button 
              variant={filter === "commercial" ? "default" : "outline"}
              className={filter === "commercial" ? "bg-masonry-brick hover:bg-masonry-brick/90" : ""}
              onClick={() => setFilter("commercial")}
            >
              Commercial
            </Button>
            <Button 
              variant={filter === "educational" ? "default" : "outline"}
              className={filter === "educational" ? "bg-masonry-brick hover:bg-masonry-brick/90" : ""}
              onClick={() => setFilter("educational")}
            >
              Educational
            </Button>
            <Button 
              variant={filter === "financial" ? "default" : "outline"}
              className={filter === "financial" ? "bg-masonry-brick hover:bg-masonry-brick/90" : ""}
              onClick={() => setFilter("financial")}
            >
              Financial
            </Button>
            <Button 
              variant={filter === "government" ? "default" : "outline"}
              className={filter === "government" ? "bg-masonry-brick hover:bg-masonry-brick/90" : ""}
              onClick={() => setFilter("government")}
            >
              Government
            </Button>
            <Button 
              variant={filter === "healthcare" ? "default" : "outline"}
              className={filter === "healthcare" ? "bg-masonry-brick hover:bg-masonry-brick/90" : ""}
              onClick={() => setFilter("healthcare")}
            >
              Healthcare
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-masonry-stone/20 text-masonry-stone">
                      <Building className="mr-1 h-3 w-3" />
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    <span className="font-medium">Partner:</span> {project.partner}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-masonry-dark text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is ready to bring your vision to life with expert masonry craftsmanship
          </p>
          <Button asChild size="lg" className="bg-masonry-brick hover:bg-masonry-brick/90">
            <a href="/contact">Get a Free Consultation</a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
