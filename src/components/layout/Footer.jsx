const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Echocraft
            </div>
            <p className="text-gray-400 mb-4">
              Building intelligent systems that scale with your vision
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={platform}
                >
                  <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                    {platform.charAt(0)}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['AI Solutions', 'Blockchain Development', 'DevOps Automation', 'Data Analytics'].map((service, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Case Studies', 'Technical Blog', 'Documentation', 'API Reference'].map((resource, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hello@echocraft.io</li>
              <li>+1 (888) 555-ECHO</li>
              <li className="pt-4">
                123 Innovation Blvd<br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Echocraft Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Security'].map((item, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
