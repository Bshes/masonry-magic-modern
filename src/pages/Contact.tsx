
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    projectType: "commercial"
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll respond to your inquiry as soon as possible.",
    });
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      projectType: "commercial"
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero h-[40vh] relative">
        <img 
          src="/photo-1433086966358-54859d0ed716.jpg" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Get in touch with our team to discuss your masonry project needs
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-masonry-brick mb-8"></div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-masonry-brick rounded-full p-3 text-white mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Office</h3>
                    <p className="text-gray-600">
                      123 Mason Way<br />
                      Jacksonville, FL 32256<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-masonry-brick rounded-full p-3 text-white mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:9041234567" className="hover:text-masonry-brick transition-colors">
                        (904) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-masonry-brick rounded-full p-3 text-white mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ambachmasonry.com" className="hover:text-masonry-brick transition-colors">
                        info@ambachmasonry.com
                      </a><br />
                      <a href="mailto:estimates@ambachmasonry.com" className="hover:text-masonry-brick transition-colors">
                        estimates@ambachmasonry.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-masonry-brick rounded-full p-3 text-white mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:00 AM - 5:00 PM<br />
                      Saturday: By appointment only<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We provide masonry services throughout Florida, with particular focus on:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  <li>• Jacksonville</li>
                  <li>• Orlando</li>
                  <li>• Tampa</li>
                  <li>• St. Augustine</li>
                  <li>• Gainesville</li>
                  <li>• Tallahassee</li>
                  <li>• Miami</li>
                  <li>• Ocala</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleChange} 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(904) 123-4567" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <Label htmlFor="projectType">Project Type</Label>
                  <select 
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="commercial">Commercial</option>
                    <option value="institutional">Institutional</option>
                    <option value="specialty">Specialty Masonry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2 mb-6">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..." 
                    required
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-masonry-brick hover:bg-masonry-brick/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Us
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
          </div>
          
          <div className="aspect-video bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Placeholder for map - in a real implementation, you'd include an actual map API */}
            <div className="h-full w-full flex items-center justify-center">
              <p className="text-gray-500 text-lg">
                Interactive Map Would Be Displayed Here
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-masonry-brick mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
              <p className="text-gray-600">
                We provide masonry services throughout Florida, with primary focus on Jacksonville, 
                Orlando, Tampa, and surrounding areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How do I get an estimate?</h3>
              <p className="text-gray-600">
                You can request an estimate by filling out our contact form, calling our office, 
                or sending us an email with details about your project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What types of projects do you handle?</h3>
              <p className="text-gray-600">
                We specialize in commercial and institutional masonry projects, including 
                educational facilities, office buildings, healthcare centers, and government buildings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How long has Ambach Masonry been in business?</h3>
              <p className="text-gray-600">
                Ambach Masonry Construction has been providing expert masonry services throughout 
                Florida since 1995, with over 25 years of industry experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
