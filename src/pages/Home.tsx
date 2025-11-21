import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-tech-support.jpg";
import { Smartphone, Tablet, Monitor, Wifi, Tv, Printer, AppWindow, Globe, MessagesSquare } from "lucide-react";
const services = [{
  name: "iPhone",
  icon: Smartphone
}, {
  name: "Android",
  icon: Smartphone
}, {
  name: "Tablets",
  icon: Tablet
}, {
  name: "Apps",
  icon: AppWindow
}, {
  name: "Mac",
  icon: Monitor
}, {
  name: "Windows",
  icon: Monitor
}, {
  name: "Internet",
  icon: Globe
}, {
  name: "Wi-Fi",
  icon: Wifi
}, {
  name: "Smart TVs",
  icon: Tv
}, {
  name: "Printers",
  icon: Printer
}];
const Home = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Got technology needs?
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  I can help.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Hi. I'm Greg— your friendly high tech handyman. I solve technology challenges with phones, computers, TVs, and Wi-Fi— making tech work for you, not against you. Whether setting up something new or existing problems, I can help you.      
              </p>
              
              {/* Older version (kept for reference):
               <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="sms:8053160088&body=I need High Tech Handyman Help">
                  <Button size="lg" className="w-full sm:w-auto text-lg">
                    I need help
                  </Button>
                </a>
               </div>
               */}

              <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start">
                <a href="sms:+18053160088?body=I%20need%20some%20tech%20help.%20My%20issue%20is:%20" aria-label="Text Greg for help">
                  <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 py-4 shadow-xl bg-gradient-to-br from-primary via-primary/90 to-accent hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 text-primary-foreground font-semibold animate-pulse">
                    <MessagesSquare className="mr-2 h-5 w-5" />
                    Text Greg for Help
                  </Button>
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground pt-2">
                Serving the Central Coast from Lompoc to San Luis Obispo to Cambria and northern Santa Barbara counties
              </p>
            </div>
            
            <div className="relative">
              <img src={heroImage} alt="Professional tech support assistance" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              I Solve Technology Challenges   
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From smartphones to smart homes, I help with all your tech needs:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map(service => {
            const Icon = service.icon;
            return <Card key={service.name} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
                  <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-card-foreground">{service.name}</h3>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to solve your tech challenges?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized, friendly help that actually makes sense.
No jargon, just solutions.
Use the button below to text Greg:








            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-help">
                <Button size="lg" className="text-lg">
                  Text Greg for Help
                </Button>
              </Link>
              {/* <a href="tel:8053160088">
                <Button size="lg" variant="outline" className="text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Text or call now
                </Button>
               </a> */}
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Greg the High Tech Handyman. Making technology work for you.</p>
          <p className="mt-2">
            <a href="tel:8053160088" className="hover:text-primary transition-colors">
              (805) 316-0088
            </a>
          </p>
        </div>
      </footer>
    </div>;
};
export default Home;