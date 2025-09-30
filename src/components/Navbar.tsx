const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center h-20">
          <div className="flex space-x-12">
            <button
              onClick={() => scrollToSection('about')}
              className="text-2xl font-bold transition-all duration-300 transform text-gray-400 hover:text-gray-600 hover:scale-105"
            >
              About
            </button>
            
            <button
              onClick={() => scrollToSection('skills')}
              className="text-2xl font-bold transition-all duration-300 transform text-gray-400 hover:text-gray-600 hover:scale-105"
            >
              Skills
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="text-2xl font-bold transition-all duration-300 transform text-gray-400 hover:text-gray-600 hover:scale-105"
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
