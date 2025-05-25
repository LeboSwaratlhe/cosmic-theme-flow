
import React, { useState, useEffect } from 'react';
import { Moon, Sun, ExternalLink, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Data Science Projects Data
  const projects = [
    {
      title: "Credit Risk Modeling",
      role: "Data Scientist and Project Manager",
      description: "Built a Credit Risk Model to predict the likelihood of a borrower defaulting on a loan.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Logistic Regression", "Decision Trees", "Random Forest"],
      github: "https://github.com/LeboSwaratlhe/Credit-risk-modeling-",
      deployedApp: null
    },
    {
      title: "News Article Classification",
      role: "Team Lead and Data Scientist",
      description: "Built a machine learning-based news classification system to categorize articles for a news outlet.",
      technologies: ["NLP", "SVM", "Naive Bayes", "Python", "NLTK", "Scikit-learn", "TensorFlow", "MLFlow"],
      github: "https://github.com/LeboSwaratlhe/Group_5_Classification_Project",
      deployedApp: null
    },
    {
      title: "Predicting CO2 Emissions from the Agri-food Sector",
      role: "Data Analyst",
      description: "Built predictive models to estimate CO₂ emissions from agricultural activities and pinpoint major emission sources.",
      technologies: ["Regression Analysis", "Feature Engineering", "Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/LeboSwaratlhe/RegressionExplorers24Team6",
      deployedApp: null
    },
    {
      title: "Anime Recommender System",
      role: "Team Lead and Machine Learning Engineer",
      description: "Built a collaborative and content-based recommender system for anime titles, predicting user ratings based on historical preferences.",
      technologies: ["Collaborative Filtering", "Content-Based Filtering", "Python", "Scikit-learn", "Pandas", "Streamlit"],
      github: "https://github.com/LeboSwaratlhe/Anime-Recommender-System-Project-2025",
      deployedApp: "https://group2-2407ftds.streamlit.app/"
    },
    {
      title: "Bank Customer Churn Predictive Project",
      role: "Data Scientist",
      description: "This project develops a predictive model to identify bank customers at risk of churning (discontinuing services).",
      technologies: ["Streamlit", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Plotly", "Seaborn", "Matplotlib"],
      github: "https://github.com/LeboSwaratlhe/Bank-Customer-Churn-Prediction",
      deployedApp: "https://leboswaratlhe-bank-customer--bankcustomerchurnprediction-sw8vcj.streamlit.app/"
    }
  ];

  // Technical Skills Data
  const skills = [
    "Python", "R", "SQL", "Pandas", "NumPy", 
    "Scikit-learn", "TensorFlow", "PyTorch"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-xl">Data Science Portfolio</div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</button>
          </nav>
          <Button variant="outline" size="icon" onClick={toggleTheme} className="border-gray-300 dark:border-gray-700">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Data Science Portfolio
          </h1>
          <Button onClick={() => scrollToSection('projects')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            View My Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">Hi, I am Lebogang 🌟</h3>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">Data Scientist | Aspiring AI and ML Engineer</p>
            </div>
            
            <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                I am a passionate and detail-oriented Mathematics and Statistics graduate with an Honours degree in Statistics. 
                My academic foundation, combined with my technical expertise in data science, equips me to transform complex 
                data into actionable insights that drive decision-making and innovation. I am eager to continue growing in the 
                field of data science and statistics, contributing to impactful projects, and making a meaningful difference through data.
              </p>
            </div>

            {/* Education Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg mb-2">Bachelor of Science (BSc) in Mathematical Statistics</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">University of Pretoria | Graduated in 2023</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Final year coursework: Multivariate Analysis, Stochastic Processes, Statistics, The Science of Data, 
                    Actuarial Statistics, and Financial Engineering.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg mb-2">Bachelor of Science (BSc) Honours Degree in Statistics</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">University of South Africa | Current</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Focused on Research Project in Statistics, Linear Models, Regression, Time Series, Inference, 
                    Generalized Linear Models, Multivariate Statistical Techniques, Nonparametric Regression.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 md:col-span-2">
                  <h4 className="font-semibold text-lg mb-2">Data Science Learnership</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Explore AI Academy, Sand Technologies | Current</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Focused on Microsoft Excel, Preparing Data, Data Visualization on Power BI, Exploratory Data Analysis, 
                    Python, Regression, Natural Language Processing (NLP), Classification, and Unsupervised Learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg mb-2">Standard Bank Corporate Investment Banking Job Simulation</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Forage, January 2023</p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Completed a job simulation assessing a hypothetical client, Sea Harvest, who required a lending solution as a Debt Solutions Analyst.</li>
                    <li>Prepared a 1-page company profile presented to the credit committee.</li>
                    <li>Completed research using the annual report and third-party sources to develop a balanced view of our client's business and future performance.</li>
                    <li>Created a financial model in Excel forecasting the client's expected future performance.</li>
                    <li>Presented to my manager about market current affairs and the implications of them.</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg mb-2">JPMorgan Chase & Co. Quantitative Research Job Simulation</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Forage, January 2024</p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Completed a simulation focused on quantitative research methods.</li>
                    <li>Analysed a book of loans to estimate a customer's probability of defaults.</li>
                    <li>Used dynamic programming to convert FICO scores into categorical data to predict defaults.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">{project.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                    {project.deployedApp && (
                      <a 
                        href={project.deployedApp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live App</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:hello@johndoe.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
              <span>hello@johndoe.com</span>
            </a>
            <a href="https://github.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
          </div>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            onClick={() => window.open('mailto:hello@johndoe.com')}
          >
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lebogang</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
