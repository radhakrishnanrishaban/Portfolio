import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "PROJECTS", href: "#projects" },
    { label: "RESUME", href: "#resume" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow duration-200
      ${isScrolled ? "shadow-md" : "border-gray-100"}`}
    >
      <div className="max-w-[1600px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/Portfolio"
          className="font-mono text-base tracking-widest hover:text-gray-600 transition-colors duration-200"
        >
          <span className="font-medium">RISHABAN</span>
          <span className="text-gray-500 ml-1">RADHAKRISHNAN</span>
        </a>

        {/* Navigation */}
        <nav className="flex items-center space-x-1">
          {navItems.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <a
                href={item.href}
                className="px-5 py-2 text-sm text-gray-600 hover:text-gray-900 tracking-wider"
              >
                {item.label}
              </a>
              {index < navItems.length - 1 && (
                <div className="h-4 w-px bg-gray-200" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
