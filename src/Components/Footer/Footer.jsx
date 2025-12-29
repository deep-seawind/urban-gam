import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// React Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/logo/logo-1.png";
import BackgroundImage from "../../assets/footer/footer-bg-1.png";

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
      title: "About Us",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Mission & Vision", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Our Philosophy",
      links: [
        { name: "Balance in Life", href: "#" },
        { name: "Sustainable Living", href: "#" },
        { name: "Community First", href: "#" },
        { name: "Innovation", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "City Tours", href: "#" },
        { name: "Village Retreats", href: "#" },
        { name: "Corporate Events", href: "#" },
        { name: "Consultation", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
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
      className="relative bg-white pt-12 border-t border-slate-100 overflow-hidden"
    >
      {/* Background Image Layer with White Opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 -bottom-8 bg-contain bg-no-repeat bg-center opacity-40"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-white/50 " />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          <div className="lg:col-span-3 space-y-8">
            <div className="inline-block relative">
              <img
                src={Logo}
                alt="Urban Gam"
                className="w-24 lg:w-30 transition-transform duration-500 hover:scale-105"
              />
            </div>

            <p className="text-slate-500 leading-relaxed max-w-md text-sm">
              URBAN ગામ brings urban understanding and village calm together. A
              lifestyle philosophy rooted in balance, silence, and simplicity.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-slate-900 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group flex items-center text-slate-500 hover:text-[#5e6c36] transition-colors duration-300"
                      >
                        <span className="w-0 group-hover:w-4 h-px bg-[#5e6c36] transition-all duration-300 mr-0 group-hover:mr-2" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-slate-900 text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-[#5e6c36] border border-slate-100 flex items-center justify-center text-white hover:bg-white hover:text-[#5e6c36] hover:border-[#5e6c36] hover:-translate-y-2 transition-all duration-500"
                >
                  <social.icon className="w-5 h-5" />
                </a>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="p-8 rounded-4xl bg-[#fffdf4]/30 border hover:border-slate-300 border-[#5e6c36] transition-colors duration-500 group space-x-10 flex items-center">
            <div className="w-12 h-12 rounded-xl group-hover:bg-white shadow-sm flex items-center justify-center bg-[#5e6c36] transition-colors duration-500">
              <FiMail className="w-5 h-5 group-hover:text-[#5e6c36] text-white" />
            </div>

            <div className="">
              <p className=" font-bold tracking-widest text-slate-500 mb-1">
                Email us
              </p>
              <a
                href="mailto:hello@urbangam.com"
                className="text-slate-900 font-bold hover:text-[#5e6c36]"
              >
                hello@urbangam.com
              </a>
            </div>
          </div>

          <div className="p-8 rounded-4xl bg-[#fffdf4]/30 border hover:border-slate-300 border-[#5e6c36] transition-colors duration-500 group space-x-10 flex items-center">
            <div className="w-12 h-12 rounded-xl group-hover:bg-white shadow-sm flex items-center justify-center bg-[#5e6c36] transition-colors duration-500">
              <FiPhone className="w-5 h-5 group-hover:text-[#5e6c36] text-white" />
            </div>
            <div className="">
              <p className=" font-bold tracking-widest text-slate-500 mb-1">
                Call us
              </p>
              <p className="text-slate-900 font-bold">+91 98765 43210</p>
            </div>
          </div>

          <div className="p-8 rounded-4xl bg-[#fffdf4]/30 border hover:border-slate-300 border-[#5e6c36] transition-colors duration-500 group space-x-10 flex items-center">
            <div className="w-12 h-12 rounded-xl group-hover:bg-white shadow-sm flex items-center justify-center bg-[#5e6c36] transition-colors duration-500">
              <FiMapPin className="w-5 h-5 group-hover:text-[#5e6c36] text-white" />
            </div>
            <div className="">
              <p className=" font-bold tracking-widest text-slate-500 mb-1">
                Our Location
              </p>
              <p className="text-slate-900 font-bold">Ahmedabad, Gujarat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#5e6c36] py-3 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/80 text-sm font-medium">
              © {currentYear} URBAN ગામ
            </p>
            <div className="flex items-center gap-10">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/80 hover:text-white text-xs font-bold tracking-wider transition-colors"
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
