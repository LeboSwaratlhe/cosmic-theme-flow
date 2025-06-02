
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="p-6">
        <SidebarTrigger className="mb-6 text-purple-300 hover:text-white md:hidden" />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto text-center">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6 text-purple-300">Get in Touch</h2>
              <div className="space-y-4">
                <a href="mailto:lebogangswaratlhe@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Mail className="h-6 w-6" />
                  <span>lebogangswaratlhe@gmail.com</span>
                </a>
                <a href="https://github.com/LeboSwaratlhe" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Github className="h-6 w-6" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/lebogang-swaratlhe-b67415197/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border border-purple-800/50 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-center text-purple-300">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" required className="bg-slate-700/50 border-purple-700/50 text-white placeholder:text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" required className="bg-slate-700/50 border-purple-700/50 text-white placeholder:text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required className="bg-slate-700/50 border-purple-700/50 text-white placeholder:text-gray-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-gray-300">Project Type</Label>
                    <Input id="projectType" placeholder="e.g., Data Analysis, Machine Learning, etc." required className="bg-slate-700/50 border-purple-700/50 text-white placeholder:text-gray-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      className="min-h-[120px] bg-slate-700/50 border-purple-700/50 text-white placeholder:text-gray-400" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Footer */}
          <footer className="text-center text-gray-400 border-t border-purple-800/50 pt-8">
            <p>&copy; {new Date().getFullYear()} Lebogang Swaratlhe</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
