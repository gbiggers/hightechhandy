import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-avila-beach.jpg";
import { Smartphone, Monitor, Wifi, Tv, Printer, AppWindow, Speaker, MessagesSquare } from "lucide-react";
const services = [{
  name: "iPhone",
  icon: Smartphone
}, {
  name: "Android",
  icon: Smartphone
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
  name: "Wi-Fi",
  icon: Wifi
}, {
  name: "Smart TVs",
  icon: Tv
}, {
  name: "Speakers",
  icon: Speaker
}, {
  name: "Printers",
  icon: Printer
}];
const Home = () => {
  return <div className="min-h-screen bg-background safe-area-x">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">Technology got you down?<br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  I can help.
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-foreground font-ovo leading-relaxed">Hi 👋 I'm Greg, your friendly high tech handyman. I solve technology challenges. With phones, computers, TVs, speakers, or Wi-Fi, I know it can be so frustrating. Let's make tech work for you and your family, not against you.
              <br /><br />
Whether setting up something new or solving existing problems, I can help!
              <br /><br />
In your home or at your office, I'll take you from HISS 🚫 to BLISS ❤️.
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

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="sms:+18053160088?body=I%20need%20some%20tech%20help.%20My%20issue%20is:%20" aria-label="Text Greg for help">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 py-4 h-auto shadow-[0_4px_14px_0_rgba(0,118,255,0.39),0_10px_32px_0_rgba(0,118,255,0.2)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.5),0_15px_40px_rgba(0,118,255,0.3)] bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 font-semibold flex items-center gap-3">
                    <MessagesSquare className="h-5 w-5 flex-shrink-0" />
                    <div className="flex flex-wrap justify-center leading-normal gap-1">
                      <span className="whitespace-nowrap">Message Greg directly:</span>
                      <span className="whitespace-nowrap">I need help!</span>
                    </div>
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]">
                <img src={heroImage} alt="Professional tech support assistance" className="w-full h-full object-cover object-center" />
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                Serving homes and small businesses on the Central Coast— from Lompoc to San Luis Obispo, to Cambria and northern Santa Barbara county
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              I solve technology challenges for you     
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
      <section className="py-12">
        <div className="container mx-auto">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to solve your tech issues?
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
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Greg the High Tech Handyman. Making technology work for you.</p>
          <p className="mt-2">
            <a href="tel:+18053160088" className="hover:text-primary transition-colors">
              (805) 316-0088
            </a>
          </p>
        </div>
      </footer>
    </div>;
};
export default Home;