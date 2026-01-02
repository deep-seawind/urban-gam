import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// React Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/logo/logo-1.png";
import BackgroundImage from "../../assets/footer/footer-bg-1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const hasAnimated = useRef(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const footerSections = [
    {
      title: "Urban Gam",
      links: [
        { name: "About Urban ગામ", href: "/about" },
        { name: "The Living Experience", href: "/living-experience" },
        { name: "Wellness", href: "/wellness" },
        { name: "Location", href: "/location" },
      ],
    },
    {
      title: "Living & Community",
      links: [
        { name: "Homes & Layouts", href: "/homes-layouts" },
        { name: "Managed Living & Rentals", href: "/managed-living" },
        { name: "Events & Celebrations", href: "/events" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    {
      title: "Explore More",
      links: [
        { name: "Investment Opportunities", href: "/investment" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contactus" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/urbangam.india",
      label: "Facebook",
    },
    { icon: FaXTwitter, href: "https://x.com/urbangamindia", label: "X" },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/urbangam.india/",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/urban-gam/",
      label: "LinkedIn",
    },
    {
      icon: FaPinterestP,
      href: "https://in.pinterest.com/urbangamindia/",
      label: "Pinterest",
    },
  ];

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const ctx = gsap.context(() => {
              gsap.fromTo(
                ".footer-animate",
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.08,
                  ease: "power3.out",
                }
              );
            }, footerRef);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      ref={footerRef}
      className="relative bg-zinc-100 pt-16 border-t border-slate-100 overflow-hidden"
    >
      {/* Background Image Layer with White Opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 -bottom-8 bg-cover bg-no-repeat bg-center opacity-70"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-white/60 " />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-16 lg:gap-8 mb-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="inline-block relative">
              <img
                src={Logo}
                alt="Urban Gam"
                className="w-24 lg:w-30 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* <p className="text-slate-500 leading-relaxed text-sm">
              URBAN ગામ brings urban understanding and village calm together. A
              lifestyle philosophy rooted in balance, silence, and simplicity.
            </p> */}
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-slate-900 font-semibold mb-5 text-lg">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="group flex items-center text-slate-700 hover:text-[#5e6c36] text-lg transition-colors duration-300"
                      >
                        <span className="w-0 group-hover:w-4 h-px bg-[#5e6c36] transition-all duration-300 mr-0 group-hover:mr-2" />
                        <span className=" font-medium">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold mb-8 text-lg">Follow Us</h4>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  to={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-color border border-slate-100 flex items-center justify-center text-white hover:bg-white hover:text-[#5e6c36] hover:border-[#5e6c36] hover:-translate-y-2 transition-all duration-500"
                >
                  <social.icon className="w-20 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="relative group mb-12">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-slate-100 to-transparent h-px" />
          <button
            onClick={scrollToTop}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm hover:shadow-xl hover:border-[#5e6c36] transition-all duration-500 group"
          >
            <FiArrowUp className="w-5 h-5 text-slate-400 group-hover:text-[#5e6c36] group-hover:-translate-y-1 transition-all" />
          </button>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 mt-16">
          <div className="p-8 rounded-4xl text-lg bg-[#fffdf4]/30 border hover:border-[#c09745] border-[#5e6c36] transition-colors duration-500 group space-x-10 flex items-center">
            <div className="w-12 h-12 rounded-xl group-hover:bg-[#c09745] shadow-sm flex items-center justify-center bg-[#5e6c36] transition-colors duration-500">
              <FiMail className="w-5 h-5 text-white" />
            </div>

            <div className="">
              <p className=" font-bold text-slate-700 mb-1">Email us</p>
              <a
                href="mailto:info@urbangam.com"
                className="text-slate-900 hover:text-[#5e6c36] "
                target="_blank"
              >
                info@urbangam.com
              </a>
            </div>
          </div>

          <div className="p-8 rounded-4xl text-lg bg-[#fffdf4]/30 border hover:border-[#c09745] border-[#5e6c36] transition-colors duration-500 group space-x-10 flex items-center">
            <div className="w-12 h-12 rounded-xl group-hover:bg-[#c09745] shadow-sm flex items-center justify-center bg-[#5e6c36] transition-colors duration-500">
              <FiPhone className="w-5 h-5   text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-700 mb-1">Call us</p>
              <a
                href="tel:+919876543210"
                className="text-slate-900 hover:text-[#5e6c36]  transition-colors font-medium"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="p-8 rounded-4xl text-lg bg-[#fffdf4]/40 border hover:border-[#c09745] border-[#5e6c36] transition-colors duration-500 group space-x-10 flex items-center">
            <div className="w-12 h-12 rounded-xl group-hover:bg-[#c09745] shadow-sm flex items-center justify-center bg-[#5e6c36] transition-colors duration-500">
              <FiMapPin className="w-5 h-5  text-white" />
            </div>
            <div className="">
              <p className=" font-bold text-slate-700 mb-1">Our Location</p>
              <p className="text-slate-900 ">Ahmedabad, Gujarat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#5e6c36] py-3 relative  ">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/80 text-sm font-medium">
              © {currentYear} URBAN ગામ
            </p>
            <div className="flex items-center gap-5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/80 hover:text-white text-xs tracking-wider transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
