
import React from 'react';
import { ArrowRight, BarChart3, Brain, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="p-6">
        <SidebarTrigger className="mb-6 text-purple-300 hover:text-white md:hidden" />
        
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center py-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
            
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Hi, I am Lebogang 🌟
              </h2>
              <p className="text-xl md:text-2xl text-purple-300 font-medium">
                Data Scientist | Aspiring AI and ML Engineer
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to my portfolio! Use the navigation menu on the left to explore more about me, 
                my projects, and how to get in touch with me and learn about my skills.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                <Link to="/about">
                  Learn About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-800/50 px-8 py-3 text-lg">
                <Link to="/projects">
                  View My Projects
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 py-16">
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-purple-800/50 text-center">
              <Database className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Data Analysis</h3>
              <p className="text-gray-300">Transforming raw data into meaningful insights</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-purple-800/50 text-center">
              <Brain className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Machine Learning</h3>
              <p className="text-gray-300">Building predictive models and AI solutions</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-purple-800/50 text-center">
              <BarChart3 className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Data Visualization</h3>
              <p className="text-gray-300">Creating compelling visual stories from data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
