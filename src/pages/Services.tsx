
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building, 
  Layers, 
  CheckCircle,
  ChevronRight
} from "lucide-react";

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero h-[40vh] relative">
        <img 
          src="/photo-1459767129954-1b1c1f9b9ace.jpg" 
          alt="Masonry Services" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Comprehensive masonry solutions for commercial and institutional projects
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 stone-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Comprehensive Masonry Solutions
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
            <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-lg">
              Ambach Masonry Construction provides expert masonry services for projects of all 
              sizes. Our skilled craftsmen bring decades of experience to deliver superior results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-t-4 border-masonry-brick shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="rounded-full bg-masonry-brick/10 w-16 h-16 flex items-center justify-center mb-6">
                  <Building className="text-masonry-brick w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Commercial Construction</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Expert masonry for commercial buildings, offices, and retail spaces. 
                  Our team collaborates seamlessly with contractors to deliver high-quality 
                  masonry that enhances the overall structure.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-masonry-brick shrink-0 mt-0.5" />
                    <span>Office buildings & corporate centers</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-masonry-brick shrink-0 mt-0.5" />
                    <span>Retail establishments & storefronts</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-masonry-brick shrink-0 mt-0.5" />
                    <span>Restaurants & hospitality venues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-masonry-stone shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="rounded-full bg-masonry-stone/10 w-16 h-16 flex items-center justify-center mb-6">
                  <Building className="text-masonry-stone w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Institutional Projects</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Specialized masonry solutions for educational facilities, government 
                  buildings, healthcare centers, and other institutional structures that require
                  particular attention to detail and durability.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-masonry-stone shrink-0 mt-0.5" />
                    <span>Schools & educational facilities</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-masonry-stone shrink-0 mt-0.5" />
                    <span>Government & municipal buildings</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-masonry-stone shrink-0 mt-0.5" />
                    <span>Healthcare centers & hospitals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-masonry-clay shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="rounded-full bg-masonry-clay/10 w-16 h-16 flex items-center justify-center mb-6">
                  <Layers className="text-masonry-clay w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Specialty Masonry</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Custom masonry solutions including decorative elements, restoration work, 
                  and specialized installations that require advanced techniques and artistic expertise.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-masonry-clay shrink-0 mt-0.5" />
                    <span>Decorative masonry & architectural features</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-masonry-clay shrink-0 mt-0.5" />
                    <span>Historic restoration & preservation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-masonry-clay shrink-0 mt-0.5" />
                    <span>Custom engraving & specialty finishes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Materials Section */}
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Materials Expertise
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
            <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-lg">
              We work with a wide range of masonry materials to meet the specific 
              needs and aesthetic requirements of each project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img 
                src="/photo-1527576539890-dfa815648363.jpg" 
                alt="Masonry Materials" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-full bg-masonry-brick h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brick Masonry</h3>
                    <p className="text-gray-600">
                      Classic and versatile brick work in various colors, textures, and patterns 
                      to create distinctive looks for any architectural style.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="rounded-full bg-masonry-stone h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Stone Masonry</h3>
                    <p className="text-gray-600">
                      Natural and manufactured stone applications that add elegance and durability to 
                      building exteriors and interiors.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="rounded-full bg-masonry-concrete h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-gray-700">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Concrete Masonry</h3>
                    <p className="text-gray-600">
                      Structural and decorative concrete block installations with options for 
                      various finishes, colors, and specialty blocks.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="rounded-full bg-masonry-sand h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-gray-700">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Specialty Materials</h3>
                    <p className="text-gray-600">
                      Glass block, terra cotta, cultured stone, and other specialty materials 
                      to achieve unique design goals and effects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
            <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-lg">
              From initial consultation to project completion, we follow a streamlined 
              process to ensure exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg relative h-full">
              <div className="absolute -top-4 -left-4 bg-masonry-brick rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <CardContent className="pt-10 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <p className="text-gray-600 flex-grow">
                  We begin with a thorough consultation to understand your project needs, 
                  timeline, and budget constraints to develop an appropriate approach.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg relative h-full">
              <div className="absolute -top-4 -left-4 bg-masonry-stone rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <CardContent className="pt-10 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3">Planning & Design</h3>
                <p className="text-gray-600 flex-grow">
                  Our team collaborates with architects and engineers to develop 
                  detailed plans and material specifications tailored to your project.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg relative h-full">
              <div className="absolute -top-4 -left-4 bg-masonry-clay rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <CardContent className="pt-10 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3">Construction</h3>
                <p className="text-gray-600 flex-grow">
                  Our skilled masons execute the work with precision, adhering to 
                  the highest standards of craftsmanship and attention to detail.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg relative h-full">
              <div className="absolute -top-4 -left-4 bg-masonry-dark rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                4
              </div>
              <CardContent className="pt-10 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-gray-600 flex-grow">
                  We conduct thorough inspections throughout the project to ensure 
                  the work meets our exacting standards and your expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 brick-pattern px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Ambach Masonry Difference
              </h2>
              <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-masonry-brick" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Experienced Craftsmen</h3>
                  <p className="text-gray-600">
                    Our team includes some of the most skilled and experienced masons in Florida, 
                    bringing decades of expertise to every project.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-masonry-brick" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
                  <p className="text-gray-600">
                    We source only the highest quality materials that ensure durability, 
                    aesthetics, and long-lasting performance.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-masonry-brick" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Safety Focus</h3>
                  <p className="text-gray-600">
                    Safety is our top priority on every job site, with comprehensive 
                    protocols that protect our team and everyone involved in the project.
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
                    We consistently meet deadlines and deliver projects on schedule 
                    without compromising on quality or attention to detail.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-masonry-brick" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Budget Adherence</h3>
                  <p className="text-gray-600">
                    We provide transparent pricing and work diligently to keep projects 
                    within budget while delivering exceptional results.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-masonry-brick" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Collaborative Approach</h3>
                  <p className="text-gray-600">
                    We work closely with architects, designers, and general contractors 
                    to ensure seamless integration of masonry elements within the overall project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-masonry-brick text-white px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/90">
                Contact us today for a consultation and detailed quote.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-masonry-brick hover:bg-white/90">
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
