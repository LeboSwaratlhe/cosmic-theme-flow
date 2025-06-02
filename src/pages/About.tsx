
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="p-6">
        <SidebarTrigger className="mb-6 text-purple-300 hover:text-white md:hidden" />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h1>
          
          {/* Profile Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <Avatar className="w-40 h-40 border-4 border-purple-500 shadow-2xl">
                <AvatarImage 
                  src="/lovable-uploads/6e482abf-966e-4684-9573-cad249516c48.png" 
                  alt="Lebogang's profile photo"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl font-semibold bg-purple-600 text-white">
                  LS
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                I am a passionate and detail-oriented Mathematics and Statistics graduate with an Honours degree in Statistics. 
                My academic foundation, combined with my technical expertise in data science, equips me to transform complex 
                data into actionable insights that drive decision-making and innovation. I am eager to continue growing in the 
                field of data science and statistics, contributing to impactful projects, and making a meaningful difference through data.
              </p>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-purple-800/50">
                <h3 className="font-semibold text-xl mb-3 text-purple-300">Bachelor of Science (BSc) in Mathematical Statistics</h3>
                <p className="text-blue-400 font-medium mb-4">University of Pretoria | Graduated in 2023</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Final year coursework: Multivariate Analysis, Stochastic Processes, Statistics, The Science of Data, 
                  Actuarial Statistics, and Financial Engineering.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-purple-800/50">
                <h3 className="font-semibold text-xl mb-3 text-purple-300">Bachelor of Science (BSc) Honours Degree in Statistics</h3>
                <p className="text-blue-400 font-medium mb-4">University of South Africa | Current</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Focused on Research Project in Statistics, Linear Models, Regression, Time Series, Inference, 
                  Generalized Linear Models, Multivariate Statistical Techniques, Nonparametric Regression.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-purple-800/50 md:col-span-2">
                <h3 className="font-semibold text-xl mb-3 text-purple-300">Data Science Learnership</h3>
                <p className="text-blue-400 font-medium mb-4">Explore AI Academy, Sand Technologies | Current</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Focused on Microsoft Excel, Preparing Data, Data Visualization on Power BI, Exploratory Data Analysis, 
                  Python, Regression, Natural Language Processing (NLP), Classification, and Unsupervised Learning.
                </p>
              </div>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">Certifications</h2>
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-purple-800/50">
                <h3 className="font-semibold text-xl mb-3 text-purple-300">Standard Bank Corporate Investment Banking Job Simulation</h3>
                <p className="text-blue-400 font-medium mb-4">Forage, January 2023</p>
                <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
                  <li>Completed a job simulation assessing a hypothetical client, Sea Harvest, who required a lending solution as a Debt Solutions Analyst.</li>
                  <li>Prepared a 1-page company profile presented to the credit committee.</li>
                  <li>Completed research using the annual report and third-party sources to develop a balanced view of our client's business and future performance.</li>
                  <li>Created a financial model in Excel forecasting the client's expected future performance.</li>
                  <li>Presented to my manager about market current affairs and the implications of them.</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-purple-800/50">
                <h3 className="font-semibold text-xl mb-3 text-purple-300">JPMorgan Chase & Co. Quantitative Research Job Simulation</h3>
                <p className="text-blue-400 font-medium mb-4">Forage, January 2024</p>
                <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
                  <li>Completed a simulation focused on quantitative research methods.</li>
                  <li>Analysed a book of loans to estimate a customer's probability of defaults.</li>
                  <li>Used dynamic programming to convert FICO scores into categorical data to predict defaults.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
