import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageSquare } from "lucide-react";

const RequestHelp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    contactMethod: "call",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.contact || !formData.issue) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send to a backend
    // console.log("Form submitted:", formData);
    
    toast({
      title: "Request received!",
      description: "Greg will reach out to you soon.",
    });

    // Reset form and navigate home
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request Help
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and I'll get back to you as soon as possible
            </p>
          </div>

          <Card className="p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>

              {/* Contact Field */}
              <div className="space-y-2">
                <Label htmlFor="contact">Phone Number or Email</Label>
                <Input
                  id="contact"
                  type="text"
                  placeholder="(805) 555-0123 or email@example.com"
                  value={formData.contact}
                  onChange={(e) => handleChange("contact", e.target.value)}
                  required
                />
              </div>

              {/* Contact Method */}
              <div className="space-y-3">
                <Label>Preferred Contact Method</Label>
                <RadioGroup
                  value={formData.contactMethod}
                  onValueChange={(value) => handleChange("contactMethod", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="call" id="call" />
                    <Label htmlFor="call" className="flex items-center gap-2 cursor-pointer font-normal">
                      <Phone className="h-4 w-4 text-primary" />
                      Phone Call
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="text" />
                    <Label htmlFor="text" className="flex items-center gap-2 cursor-pointer font-normal">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      Text Message
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email" />
                    <Label htmlFor="email" className="flex items-center gap-2 cursor-pointer font-normal">
                      <Mail className="h-4 w-4 text-primary" />
                      Email
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Issue Description */}
              <div className="space-y-2">
                <Label htmlFor="issue">What can I help you with?</Label>
                <Textarea
                  id="issue"
                  placeholder="Describe your tech issue or question..."
                  value={formData.issue}
                  onChange={(e) => handleChange("issue", e.target.value)}
                  rows={5}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                Send Request
              </Button>
            </form>
          </Card>

          {/* Contact Info Card */}
          <Card className="mt-6 p-6 bg-muted/50 text-center">
            <p className="text-muted-foreground mb-2">
              Need immediate assistance?
            </p>
            <a 
              href="tel:8053160088"
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              (805) 316-0088
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestHelp;
