
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Projects = () => {
  const projects = [
    {
      title: "Credit Risk Modeling",
      role: "Data Scientist and Project Manager",
      description: "Built a Credit Risk Model to predict the likelihood of a borrower defaulting on a loan.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Logistic Regression", "Decision Trees", "Random Forest"],
      github: "https://github.com/LeboSwaratlhe/Credit-risk-modeling-",
      deployedApp: null,
      image: "/lovable-uploads/4794bbe9-10c3-41be-87ec-10ef5220c359.png"
    },
    {
      title: "News Article Classification",
      role: "Team Lead and Data Scientist",
      description: "Built a machine learning-based news classification system to categorize articles for a news outlet.",
      technologies: ["NLP", "SVM", "Naive Bayes", "Python", "NLTK", "Scikit-learn", "TensorFlow", "MLFlow"],
      github: "https://github.com/LeboSwaratlhe/Group_5_Classification_Project",
      deployedApp: null,
      image: "/lovable-uploads/d8bd42b7-a627-4c21-9f91-94b3474366bc.png"
    },
    {
      title: "Predicting CO2 Emissions from the Agri-food Sector",
      role: "Data Analyst",
      description: "Built predictive models to estimate CO₂ emissions from agricultural activities and pinpoint major emission sources.",
      technologies: ["Regression Analysis", "Feature Engineering", "Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/LeboSwaratlhe/RegressionExplorers24Team6",
      deployedApp: null,
      image: "/lovable-uploads/6fe629d6-c039-4937-b2b3-772e6b6e5aa4.png"
    },
    {
      title: "Anime Recommender System",
      role: "Team Lead and Machine Learning Engineer",
      description: "Built a collaborative and content-based recommender system for anime titles, predicting user ratings based on historical preferences.",
      technologies: ["Collaborative Filtering", "Content-Based Filtering", "Python", "Scikit-learn", "Pandas", "Streamlit"],
      github: "https://github.com/LeboSwaratlhe/Anime-Recommender-System-Project-2025",
      deployedApp: "https://group2-2407ftds.streamlit.app/",
      image: "/lovable-uploads/75a60d8e-df15-4547-8b97-01779370d3c3.png"
    },
    {
      title: "Bank Customer Churn Predictive Project",
      role: "Data Scientist",
      description: "This project develops a predictive model to identify bank customers at risk of churning (discontinuing services).",
      technologies: ["Streamlit", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Plotly", "Seaborn", "Matplotlib"],
      github: "https://github.com/LeboSwaratlhe/Bank-Customer-Churn-Prediction",
      deployedApp: "https://leboswaratlhe-bank-customer--bankcustomerchurnprediction-sw8vcj.streamlit.app/",
      image: "/lovable-uploads/194dfb6e-9d59-41c9-a724-b8b97e326a0d.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="p-6">
        <SidebarTrigger className="mb-6 text-purple-300 hover:text-white md:hidden" />
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-purple-800/50 hover:border-purple-600/70">
                <div className="h-48 relative overflow-hidden">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent group-hover:from-slate-900/60 transition-colors"></div>
                  </a>
                </div>
                <div className="p-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:text-purple-400 transition-colors"
                  >
                    <h3 className="font-semibold text-xl mb-2 text-white">{project.title}</h3>
                  </a>
                  <p className="text-purple-400 font-medium text-sm mb-2">{project.role}</p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs border border-purple-700/50">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs border border-purple-700/50">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-slate-700 text-white hover:bg-slate-600 transition-colors text-sm rounded-md border border-slate-600"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Code</span>
                    </a>
                    {project.deployedApp && (
                      <a 
                        href={project.deployedApp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm rounded-md"
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
      </div>
    </div>
  );
};

export default Projects;
