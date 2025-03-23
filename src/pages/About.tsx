
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Clock, 
  Users, 
  BarChart,
  CheckCircle,
  HardHat
} from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero h-[40vh] relative">
        <img 
          src="/photo-1486718448742-163732cd1544.jpg" 
          alt="About Ambach Masonry" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            A legacy of exceptional masonry craftsmanship since 1995
          </p>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Florida's Future with <span className="text-masonry-brick">Excellence in Masonry</span>
              </h2>
              <div className="w-24 h-1 bg-masonry-brick mb-6"></div>
              <p className="text-gray-700 mb-6 text-lg">
                Founded in 1995, Ambach Masonry Construction has grown to become one of 
                Florida's premier masonry contractors, specializing in commercial and 
                institutional projects across the state.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Our reputation is built on a foundation of quality craftsmanship, attention to 
                detail, and a commitment to excellence in every project we undertake. From 
                educational facilities to corporate headquarters, our expert team brings skill 
                and precision to every brick and stone we lay.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                As a trusted partner to leading construction firms throughout Florida, 
                we pride ourselves on building lasting relationships with our clients 
                and delivering exceptional results that stand the test of time.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-masonry-brick mb-2">
                    <HardHat className="h-8 w-8 mx-auto" />
                  </div>
                  <div className="font-bold text-3xl mb-1">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-masonry-brick mb-2">
                    <BarChart className="h-8 w-8 mx-auto" />
                  </div>
                  <div className="font-bold text-3xl mb-1">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                
                <div className="text-center">
                  <div className="text-masonry-brick mb-2">
                    <Users className="h-8 w-8 mx-auto" />
                  </div>
                  <div className="font-bold text-3xl mb-1">85+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                
                <div className="text-center">
                  <div className="text-masonry-brick mb-2">
                    <Award className="h-8 w-8 mx-auto" />
                  </div>
                  <div className="font-bold text-3xl mb-1">15+</div>
                  <div className="text-gray-600">Industry Awards</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/photo-1527576539890-dfa815648363.jpg" 
                alt="Masonry Craftsmanship" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-6">
                <img 
                  src="/photo-1488972685288-c3fd157d7c7a.jpg" 
                  alt="Masonry Project" 
                  className="rounded-lg shadow-xl w-full h-48 object-cover"
                />
                <img 
                  src="/photo-1459767129954-1b1c1f9b9ace.jpg" 
                  alt="Masonry Work" 
                  className="rounded-lg shadow-xl w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Mission & Values
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
            <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-lg">
              At Ambach Masonry, our mission is to deliver exceptional masonry services 
              while upholding the highest standards of craftsmanship, integrity, and 
              client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="rounded-full bg-masonry-brick/10 w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="text-masonry-brick w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in every aspect of our work, from the materials 
                we select to the techniques we employ and the relationships we build.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="rounded-full bg-masonry-brick/10 w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="text-masonry-brick w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with uncompromising integrity and transparency, 
                building trust with clients, partners, and employees alike.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="rounded-full bg-masonry-brick/10 w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="text-masonry-brick w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                While honoring traditional masonry techniques, we embrace innovation 
                and advanced methods that enhance efficiency and results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="rounded-full bg-masonry-brick/10 w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="text-masonry-brick w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Teamwork</h3>
              <p className="text-gray-600">
                We foster a collaborative environment where every team member contributes 
                to our shared success and the satisfaction of our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="rounded-full bg-masonry-brick/10 w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="text-masonry-brick w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Safety</h3>
              <p className="text-gray-600">
                The safety of our team and everyone on our job sites is paramount, 
                informing every decision we make and process we implement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="rounded-full bg-masonry-brick/10 w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="text-masonry-brick w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                We are committed to giving back to the Florida communities where we live 
                and work through charitable initiatives and local partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Leadership Team
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
            <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-lg">
              Meet the experienced professionals who guide our company and uphold 
              our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/photo-1486718448742-163732cd1544.jpg" 
                  alt="John Ambach" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">John Ambach</h3>
                <p className="text-masonry-brick mb-4">Founder & President</p>
                <p className="text-gray-600 mb-4">
                  With over 35 years in the masonry industry, John founded Ambach Masonry
                  with a vision to deliver exceptional craftsmanship across Florida.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/photo-1527576539890-dfa815648363.jpg" 
                  alt="Sarah Reynolds" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Reynolds</h3>
                <p className="text-masonry-brick mb-4">Operations Director</p>
                <p className="text-gray-600 mb-4">
                  Sarah oversees all project operations, ensuring that work is completed
                  to the highest standards and within established timelines.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/photo-1488972685288-c3fd157d7c7a.jpg" 
                  alt="Michael Torres" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Torres</h3>
                <p className="text-masonry-brick mb-4">Chief Estimator</p>
                <p className="text-gray-600 mb-4">
                  Michael leads our estimating team, developing accurate and competitive
                  bids while ensuring projects remain financially viable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
            <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-lg">
              From our humble beginnings to becoming a leading masonry contractor in Florida
            </p>
          </div>
          
          <div className="relative border-l-4 border-masonry-brick ml-6 md:ml-0 md:mx-auto md:max-w-4xl pl-6 md:pl-0 space-y-12">
            <div className="md:flex items-center relative">
              <div className="absolute -left-9 md:static md:mr-8 w-14 h-14 rounded-full bg-masonry-brick text-white flex items-center justify-center font-bold text-xl shadow-lg">
                1995
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 md:w-96">
                <h3 className="text-xl font-bold mb-2">Company Founded</h3>
                <p className="text-gray-600">
                  Ambach Masonry Construction established in Jacksonville, Florida 
                  with a team of 5 skilled masons.
                </p>
              </div>
            </div>
            
            <div className="md:flex md:flex-row-reverse items-center relative">
              <div className="absolute -left-9 md:static md:ml-8 w-14 h-14 rounded-full bg-masonry-stone text-white flex items-center justify-center font-bold text-xl shadow-lg">
                2002
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 md:w-96">
                <h3 className="text-xl font-bold mb-2">First Major Project</h3>
                <p className="text-gray-600">
                  Completed first multi-million dollar project with the Jacksonville 
                  Public Library expansion.
                </p>
              </div>
            </div>
            
            <div className="md:flex items-center relative">
              <div className="absolute -left-9 md:static md:mr-8 w-14 h-14 rounded-full bg-masonry-brick text-white flex items-center justify-center font-bold text-xl shadow-lg">
                2008
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 md:w-96">
                <h3 className="text-xl font-bold mb-2">Expansion</h3>
                <p className="text-gray-600">
                  Expanded operations to central Florida, opening offices in Orlando 
                  and growing to 35 employees.
                </p>
              </div>
            </div>
            
            <div className="md:flex md:flex-row-reverse items-center relative">
              <div className="absolute -left-9 md:static md:ml-8 w-14 h-14 rounded-full bg-masonry-stone text-white flex items-center justify-center font-bold text-xl shadow-lg">
                2015
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 md:w-96">
                <h3 className="text-xl font-bold mb-2">Award Recognition</h3>
                <p className="text-gray-600">
                  Received first industry award for excellence in commercial masonry work 
                  at the Florida Construction Awards.
                </p>
              </div>
            </div>
            
            <div className="md:flex items-center relative">
              <div className="absolute -left-9 md:static md:mr-8 w-14 h-14 rounded-full bg-masonry-brick text-white flex items-center justify-center font-bold text-xl shadow-lg">
                2023
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 md:w-96">
                <h3 className="text-xl font-bold mb-2">Today</h3>
                <p className="text-gray-600">
                  Now employing over 85 professionals and completing projects throughout Florida, 
                  Ambach Masonry continues to build its legacy of excellence.
                </p>
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
                Become Part of Our Story
              </h2>
              <p className="text-white/90">
                Join our team or partner with us on your next project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-masonry-brick hover:bg-white/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
