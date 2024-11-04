import { Facebook, Twitter, Instagram } from 'lucide-react'; // Importing some icons

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-white via-sky-100 to-blue-200 text-black py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div>
        <p className="font-bold text-lg">Walon &copy; {year}</p>
        </div>
        <div className="flex items-center space-x-4  md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
