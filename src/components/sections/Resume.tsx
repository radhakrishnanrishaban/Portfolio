// import React from "react";
import { Mail, Phone, MapPin, Github } from "lucide-react";

export default function Resume() {
  return (
    <div id="resume" className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Rishaban Radhakrishnan</h1>
        <h2 className="text-xl text-gray-600 mb-4">Data Scientist</h2>

        <div className="flex justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Mail size={16} />
            <span>radha.rishaban@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone size={16} />
            <span>9923312341</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>Telangana</span>
          </div>
          <div className="flex items-center gap-1">
            <Github size={16} />
            <span>github.com/</span>
          </div>
        </div>
      </header>

      {/* Profile */}
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-2 border-b pb-1">PROFILE</h3>
        <p className="text-gray-700">
          I have 4+ years of work experience in Data Science with a proven
          ability and history of developing full-stack data science projects.
          Hands-on experience leveraging machine learning, deep learning, and
          transfer learning models to solve challenging business problems.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-4 border-b pb-1">
          PROFESSIONAL EXPERIENCE
        </h3>

        {/* MU SIGMA */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <div>
              <h4 className="font-bold">Data Scientist, MU SIGMA</h4>
              <h5 className="font-bold mt-2">
                DATA QUALITY AND VALUE ASSESSMENT
              </h5>
            </div>
            <div className="text-right">
              <span className="text-gray-600">Jan 2022 – present</span>
              <div>Bangalore, India</div>
            </div>
          </div>
          <ul className="list-disc ml-4 text-gray-700">
            <li className="mb-2">
              Designed and developed a comprehensive and versatile Data quality
              and Value assessment module for a US based asset management
              company.
            </li>
            <li className="mb-2">
              The module developed on Jupyter notebook with a Python kernel
              brought down the time of data quality assessment of more than 500
              million rows of data from 60hours to 50mins.
            </li>
            <li>
              It allowed flexibility to the user to tailor the conditions and
              checks according to the business and assess the quality of data
            </li>
          </ul>
        </div>

        {/* THE ENERGY INSIGHTS APP */}
        <div className="mb-6">
          <h5 className="font-bold mb-2">THE ENERGY INSIGHTS APP</h5>
          <ul className="list-disc ml-4 text-gray-700">
            <li className="mb-2">
              Developed a one stop application hosted on Predix platform for a
              fortune 100 energy firm.
            </li>
            <li>Handled the entire backend of the application using python.</li>
          </ul>
        </div>

        {/* Previous roles with similar structure */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <div>
              <h4 className="font-bold">
                Software Engineer, iNeuron Intelligence
              </h4>
            </div>
            <div className="text-right">
              <span className="text-gray-600">Jul 2020 – May 2022</span>
              <div>Bangalore, India</div>
            </div>
          </div>
          <h5 className="font-bold mb-2">CUSTOMER SEGMENTS</h5>
          <p className="text-gray-700 ml-4">
            Analysed customer dataset using PCA and Gaussian Mixture Model
            clustering algorithm for internal structure optimization.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-4 border-b pb-1">EDUCATION</h3>
        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h4 className="font-bold">
                Bachelor Of Technology in Computer Science
              </h4>
              <div>Jaypee Institute Of Information Technology</div>
              <div>Cumulative GPA: 8.1/10.0</div>
            </div>
            <div className="text-right">
              <span>Jan 2013 – Aug 2017</span>
              <div>Noida, Uttar Pradesh</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-lg font-bold mb-4 border-b pb-1">SKILLS</h3>
        <div className="text-gray-700">
          <p className="mb-2">
            Apache Spark | Microservices | Kafka | Data Warehousing | Event
            Streaming | Machine Learning
          </p>
          <p className="mb-2">
            Deep Learning | Azure | Data Ingestion | Distributed Computing
          </p>
          <p>
            Data Science Pipeline (collection, cleansing, visualization,
            modeling, interpretation), Statistics, Hypothesis Testing, CI/CD
            Pipeline
          </p>
        </div>
      </section>
    </div>
  );
}
