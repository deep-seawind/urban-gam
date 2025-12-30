import { Link } from "react-router-dom";
import { FiChevronRight, FiHome } from "react-icons/fi";

const Breadcrumb = ({ items = [] }) => {
  return (
    <div className="relative w-full pt-22">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-linear-to-r from-[#c09745]/20 via-transparent to-green-800/20 blur-xl" />

      <nav
        aria-label="Breadcrumb"
        className="relative container mx-auto px-6 lg:px-12 py-6"
      >
        <div className="flex justify-center">
          <ol className="flex items-center flex-wrap gap-2 text-sm backdrop-blur-md bg-white/70 border border-slate-200/60 rounded-full px-6 py-3 shadow-lg w-fit">
            {/* Home */}
            <li className="flex items-center gap-2">
              <Link
                to="/"
                className="flex items-center gap-1 text-slate-500 hover:text-[#c09745] transition-colors"
              >
                <FiHome className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>
            </li>

            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FiChevronRight className="text-slate-400" />

                {item.path ? (
                  <Link
                    to={item.path}
                    className="relative font-medium text-slate-600 hover:text-[#c09745] transition-colors group"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#c09745] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <span className="font-semibold text-[#c09745]">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumb;
