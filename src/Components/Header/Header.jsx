import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.jpg";

const Header = () => {
  const navMenu = [
    { name: "Home", path: "/" },
    { name: "About Urban ગામ", path: "/about" },
    { name: "Homes & Layouts", path: "/homes-layouts" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-6 flex items-center justify-between py-2">
        {/* Logo */}

        <Link to={"/"}>
        <div className="font-bold text-xl tracking-wide">
          <img src={Logo} alt="" className="w-20 rounded-lg" />
        </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-10">
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
