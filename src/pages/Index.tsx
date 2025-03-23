
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero h-[80vh] relative">
        <img 
          src="/photo-1459767129954-1b1c1f9b9ace.jpg" 
          alt="Masonry Construction" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Crafting Excellence in 
              <span className="text-masonry-clay"> Masonry</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Ambach Masonry Construction brings over 25 years of expertise in commercial 
              and institutional masonry projects across Florida.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-masonry-brick hover:bg-masonry-brick/90">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 px-4 stone-texture">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Masonry Excellence for Every Project
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-t-4 border-masonry-brick shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-masonry-brick/10 w-16 h-16 flex items-center justify-center mb-6">
                  <Building className="text-masonry-brick w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Commercial Construction</h3>
                <p className="text-gray-600 mb-4">
                  Precision masonry work for commercial buildings, offices, and retail spaces with 
                  attention to detail and adherence to schedules.
                </p>
                <Link to="/services" className="text-masonry-brick font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-masonry-stone shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-masonry-stone/10 w-16 h-16 flex items-center justify-center mb-6">
                  <Building className="text-masonry-stone w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Institutional Projects</h3>
                <p className="text-gray-600 mb-4">
                  Specialized masonry solutions for educational facilities, government buildings, 
                  and other institutional structures.
                </p>
                <Link to="/services" className="text-masonry-stone font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-masonry-clay shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-masonry-clay/10 w-16 h-16 flex items-center justify-center mb-6">
                  <Building className="text-masonry-clay w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Material Expertise</h3>
                <p className="text-gray-600 mb-4">
                  Skilled craftsmanship with brick, stone, concrete, and specialty masonry materials 
                  for distinctive architectural elements.
                </p>
                <Link to="/services" className="text-masonry-clay font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Featured Projects
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Browse through some of our most notable masonry projects across Florida
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Beacon College" 
              location="Leesburg, FL"
              partner="Evergreen Construction Management"
              image="/photo-1486718448742-163732cd1544.jpg"
            />
            <ProjectCard 
              title="Bond Building" 
              location="Winter Garden, FL"
              partner="R.C. Stevens Construction Company"
              image="/photo-1488972685288-c3fd157d7c7a.jpg"
            />
            <ProjectCard 
              title="Campus Credit Union" 
              location="Summerfield, FL"
              partner="Scherer Construction of North Florida, LLC"
              image="/photo-1527576539890-dfa815648363.jpg"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-masonry-brick hover:bg-masonry-brick/90">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 brick-pattern px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Ambach Masonry
              </h2>
              <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-masonry-brick" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Unmatched Expertise</h3>
                  <p className="text-gray-600">
                    With decades of experience, our craftsmen bring exceptional skill and 
                    attention to detail to every project.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-masonry-brick" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Materials</h3>
                  <p className="text-gray-600">
                    We source only premium materials that ensure durability, 
                    aesthetics, and long-lasting performance.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-masonry-brick" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Trusted Partnerships</h3>
                  <p className="text-gray-600">
                    We've built strong relationships with leading construction firms 
                    throughout Florida.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-masonry-brick" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                  <p className="text-gray-600">
                    We pride ourselves on meeting deadlines and delivering projects 
                    on schedule without compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-masonry-dark text-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our Partners Say
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-6">
                  <blockquote className="text-xl md:text-2xl italic mb-6">
                    "Ambach Masonry's expertise and attention to detail on the Beacon College 
                    project was exceptional. Their team worked seamlessly with ours to deliver 
                    quality craftsmanship on schedule."
                  </blockquote>
                  <div className="font-bold">- Evergreen Construction Management</div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6">
                  <blockquote className="text-xl md:text-2xl italic mb-6">
                    "Working with Ambach Masonry on the Campus Credit Union project was a pleasure. 
                    Their professionalism and quality of work exceeded our expectations."
                  </blockquote>
                  <div className="font-bold">- Scherer Construction of North Florida, LLC</div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6">
                  <blockquote className="text-xl md:text-2xl italic mb-6">
                    "Ambach Masonry brings unparalleled expertise to complex masonry projects. 
                    Their work on the JEA Headquarters demonstrated their commitment to quality 
                    and craftsmanship."
                  </blockquote>
                  <div className="font-bold">- Ryan Companies US, Inc.</div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/10" />
            <CarouselNext className="right-0 bg-white/10" />
          </Carousel>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-masonry-brick text-white px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-white/90">
                Contact us today for a consultation and estimate.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-masonry-brick hover:bg-white/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
