
import { Link } from "react-router-dom";
import { User, Code } from "lucide-react";

const Navbar = () => (
  <header className="w-full px-8 py-4 flex items-center justify-between bg-white border-b border-border shadow-sm">
    <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-blue-700 tracking-tight logo-font">
      <Code size={28} className="text-blue-600" />
      Landing<span className="text-blue-600">Page</span>Pro
    </Link>
    <nav className="flex gap-8 text-base font-medium items-center">
      <Link to="/dashboard" className="hover:text-blue-600 transition story-link">
        Dashboard
      </Link>
      <Link to="/pricing" className="hover:text-blue-600 transition story-link">
        Pricing
      </Link>
      {/* Simulated "avatar" dropdown — replace with user/auth logic when available */}
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-blue-700">
        <User size={20} />
        <span>Demo User</span>
      </div>
    </nav>
  </header>
);
export default Navbar;
