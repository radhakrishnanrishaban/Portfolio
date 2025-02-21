import { motion } from "framer-motion";

export default function EnergyForecasting() {
  const notebookUrl =
    "https://nbviewer.org/github/yourusername/repo/blob/main/notebook.ipynb";

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Energy Consumption Forecasting
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                Python
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                MLOps
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                Machine Learning
              </span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Project content sections */}
            <section className="mb-12">
              <h2>Overview</h2>
              <p>Detailed project description...</p>
            </section>

            <section className="mb-12">
              <h2>Technical Architecture</h2>
              <p>MLOps pipeline details...</p>
            </section>

            <section className="mb-12">
              <h2>Results & Visualization</h2>
              <div className="my-8">
                <iframe
                  src={notebookUrl}
                  className="w-full aspect-[4/3] rounded-lg border border-gray-200 dark:border-gray-700"
                  allowFullScreen
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
