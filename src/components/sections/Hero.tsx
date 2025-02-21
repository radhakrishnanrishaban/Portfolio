export default function Hero() {
  return (
    <div id="hero" className="flex flex-col">
      {/* Title - Large and bold */}
      <h1 className="text-[2.5rem] font-mono mb-12 tracking-tight text-gray-800">
        WELCOME!
      </h1>

      {/* Welcome Message - Clean and spacious */}
      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>
          Welcome to my website. Please feel free to{" "}
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-900 underline decoration-gray-300"
          >
            read more about me
          </a>
          , or you can check out my{" "}
          <a
            href="#resume"
            className="text-gray-600 hover:text-gray-900 underline decoration-gray-300"
          >
            resume
          </a>
          ,{" "}
          <a
            href="#projects"
            className="text-gray-600 hover:text-gray-900 underline decoration-gray-300"
          >
            projects
          </a>
          , or{" "}
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-900 underline decoration-gray-300"
          >
            contact me
          </a>
          .
        </p>

        <p className="text-sm text-gray-500">
          Source available{" "}
          <a
            href="https://github.com/radhakrishnanrishaban"
            className="text-gray-500 hover:text-gray-700 underline decoration-gray-300"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
