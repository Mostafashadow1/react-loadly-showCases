import { Github, Package } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Connected & Explore
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          React Loaders Kit is constantly evolving. Explore our repository,
          check out the npm package, or follow us on Twitter to stay updated
          with the latest features, improvements, and community feedback.
        </p>

        {/* Links with Icons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <a
            href="https://github.com/Mostafashadow1/react-loadly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
          >
            <Github className="w-5 h-5" /> GitHub Repository
          </a>
          <a
            href="https://www.npmjs.com/package/react-loadly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
          >
            <Package className="w-5 h-5" /> npm Package
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} React loadly All rights reserved.
            Crafted with ❤️ for developers seeking fast, beautiful, and
            accessible loaders.
          </p>
        </div>
      </div>
    </footer>
  );
}
