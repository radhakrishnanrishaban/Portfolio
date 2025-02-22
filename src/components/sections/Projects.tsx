import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { images } from "../../assets";

export default function Projects() {
  const projects = [
    {
      id: "German-energy-forecast",
      title: "German Energy Forecast -- an end-to-end ML solution",
      description:
        "An end-to-end ML solution for predicting energy consumption patterns.",
      tags: ["Python", "MLOps", "Machine Learning"],
      image: "/Portfolio/assets/test_project1.png",
      slug: "/projects/energy-forecasting",
      status: "completed",
      timeline: "2024",
      featured: true,
    },
    {
      id: "homewatt-analytics",
      title: "Homewatt Analytics",
      description:
        "Homewatt Analytics is a platform for analyzing household energy consumption data.",
      tags: ["Data Analysis", "Visualization", "Python"],
      image: "/Portfolio/assets/test_project2.png",
      slug: "/projects/homewatt-analytics",
      status: "in-progress",
      timeline: "2024-Present",
      featured: true,
    },
    // Add more projects here
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "planned":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div id="projects" className="flex flex-col">
      {/* Section Header */}
      <div className="mb-10 pb-8 border-b border-gray-300">
        <h2 className="text-2xl font-mono mb-4 text-gray-800">PROJECTS</h2>
        <p className="text-lg text-gray-600">
          A selection of projects that I'm proud of
        </p>
      </div>
      {/* Reference to existing project grid */}
      <div className="grid grid-cols-1 gap-8 mx-auto">
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="w-full"
            >
              <Link
                to={project.slug}
                className="group flex flex-col bg-white dark:bg-primary-800/20 
                       border border-primary-200 dark:border-primary-700
                       hover:shadow-2xl transition-all duration-500"
              >
                {/* Status Bar */}
                {/*<div className="w-full h-1 relative">
                <div
                  className={`absolute left-0 top-0 h-full w-full ${getStatusColor(
                    project.status
                  )} opacity-75`}
                />
              </div>*/}

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-8">
                  {/* Timeline and Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-primary-500 dark:text-primary-400">
                      {project.timeline}
                    </span>
                    <span className="flex items-center space-x-2">
                      <span
                        className={`w-2 h-2 rounded-full ${getStatusColor(
                          project.status
                        )}`}
                      />
                      <span className="text-sm capitalize text-primary-600 dark:text-primary-300">
                        {project.status.replace("-", " ")}
                      </span>
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    className="text-xl font-mono mb-3 text-primary-900 dark:text-primary-50
                         group-hover:text-primary-700 dark:group-hover:text-primary-200 
                         transition-colors duration-300 border-gray-300 border-b-2 pb-4 "
                  >
                    {project.title}
                  </h3>

                  {/* Image Container - Now rectangular */}
                  <div className="overflow-hidden bg-primary-50 dark:bg-primary-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 
                         group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Project Description */}
                  <p
                    className="text-primary-600 dark:text-primary-300 mb-6 
                        text-sm leading-relaxed flex-grow"
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs tracking-wider
                             bg-primary-50 dark:bg-primary-800/30
                             text-primary-600 dark:text-primary-300
                             rounded-full border border-primary-100 dark:border-primary-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
