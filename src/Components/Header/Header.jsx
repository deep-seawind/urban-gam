import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "../../assets/logo/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navMenu = [
    { name: "Home", path: "/" },
    { name: "About Urban ગામ", path: "/about" },
    { name: "Homes & Layouts", path: "/homes-layouts" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">


          {/* Logo */} 
          <Link to="/" className="relative z-50 lg:mt-20 mt-12">
            <div className="p-0.5 rounded-xl bg-linear-to-br from-[#4d633c]/90 via-[#6b8e4e]/80 to-[#c09745]/80 shadow-lg">
              <img
                src={Logo}
                alt="Urban Gam Logo"
                className="w-20 lg:w-34 rounded-xl border-2 border-white/40 bg-white/80"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-10">
            {navMenu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#4d633c]"
                      : "text-slate-700 hover:text-[#4d633c]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contactus"
            className="hidden lg:inline-flex px-5 py-3 text-sm font-semibold rounded-full bg-color text-white hover:bg-[#3e5231] transition"
          >
            Enquire Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-slate-800 z-50"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-transform duration-500  flex justify-end ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6 space-y-8 bg-white min-h-screen w-80">
          {navMenu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-semibold ${
                  isActive
                    ? "text-color"
                    : "text-slate-700 hover:text-[#4d633c]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contactus"
            onClick={() => setMenuOpen(false)}
            className="inline-flex mt-10 px-6 py-4 text-sm font-semibold rounded-full bg-color text-white"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
