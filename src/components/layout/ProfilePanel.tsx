import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ProfilePanel() {
  return (
    <div className="p-12">
      {/* Profile Image */}
      <div className="mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src="src/assets/profile_img.JPG"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="mb-8">
        <h1 className="font-mono text-2xl mb-3">RISHABAN RADHAKRISHNAN</h1>
        <p className="text-sm text-gray-600 uppercase tracking-wide">
          DATA SCIENTIST & ML ENGINEER
        </p>
      </div>

      {/* Email */}
      <div className="mb-8">
        <a
          href="mailto:radha.rishaban@gmail.com"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          RADHA.RISHABAN@GMAIL.COM
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
          href="https://github.com/rishaban360"
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
          href="mailto:radha.rishaban@gmail.com"
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
