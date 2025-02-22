import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { images } from "../../assets";

export default function ProfilePanel() {
  return (
    <div className="p-4 lg:p-12">
      {/* Profile Image */}
      <div className="mb-4 lg:mb-8 flex justify-center lg:justify-start">
        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden">
          <img
            src={images.profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="mb-4 lg:mb-8 text-center lg:text-left">
        <h1 className="font-mono text-xl lg:text-2xl mb-2 lg:mb-3">
          RISHABAN RADHAKRISHNAN
        </h1>
        <p className="text-xs lg:text-sm text-gray-600 uppercase tracking-wide">
          DATA SCIENTIST & ML ENGINEER
        </p>
      </div>

      {/* Email */}
      <div className="mb-8">
        <a
          href="mailto:radhadhakrishnanrishaban@gmail.com"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          RADHAKRISHNANRISHABAN@GMAIL.COM
        </a>
      </div>

      {/* Brief Bio */}
      <p className="text-sm text-gray-600 mb-8">
        Hi there, I'm Rishaban. I like building things, solving problems and
        laughing loudly.
      </p>

      {/* Social Links */}
      <div className="flex space-x-4 mb-8">
        <a
          href="https://github.com/radhadhakrishnanrishaban"
          className="text-gray-400 hover:text-gray-600"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="linkedin.com/in/rishaban-radhakrishnan-38047418b"
          className="text-gray-400 hover:text-gray-600"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:radhadhakrishnanrishaban@gmail.com"
          className="text-gray-400 hover:text-gray-600"
        >
          <FaEnvelope className="w-5 h-5" />
        </a>
      </div>

      {/* Learn More Button */}
      <a
        href="#about"
        className="inline-block border border-gray-300 px-6 py-2 text-sm text-gray-600 hover:border-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        LEARN MORE
      </a>
    </div>
  );
}
