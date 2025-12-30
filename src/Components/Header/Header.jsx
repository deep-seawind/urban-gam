import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.jpg";

const Header = () => {
  const navMenu = [
    { name: "Home", path: "/" },
    { name: "About Urban ગામ", path: "/about" },
    { name: "Homes & Layouts", path: "/homes-layouts" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contactus" },
  ];
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-6 flex items-center justify-between py-2">
        {/* Logo */}

        <Link to={"/"}>
          <div className="absolute top-5 font-bold text-xl tracking-wide">
            <div className="p-0.5 rounded-xl bg-linear-to-br from-[#4d633c]/90 via-[#6b8e4e]/80 to-[#c09745]/80 shadow-lg">
              <img
                src={Logo}
                alt="Urban Gam Logo"
                className="w-34 rounded-xl border-2 border-white/40 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-10 justify-center py-6">
          {navMenu.map((item) => (
            <Link
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
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex px-4 py-3 text-sm font-medium rounded-4xl bg-color text-white hover:bg-emerald-700 transition"
        >
          Enquire Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
