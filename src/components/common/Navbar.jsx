import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Car,
  ShoppingCart,
  User,
  Wrench,
  Home,
} from "lucide-react";

export default function Navbar({ user }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/", icon: Home },
    { label: "Services", to: "/booking", icon: Car },
    { label: "Cart", to: "/cart", icon: ShoppingCart },
    { label: "Dashboard", to: "/dashboard", icon: User },
    { label: "Mechanics", to: "/mechanics", icon: Wrench },
  ];

  if (user?.isLoggedIn) {
    navLinks.push({ label: "Admin", to: "/admin", icon: User });
  }

  const linkStyle = (path) =>
    `relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition ${
      location.pathname === path
        ? "text-orange-500"
        : "text-gray-700 hover:text-orange-500"
    }`;

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
            <Car className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-orange-500">
            Genius Car
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkStyle(link.to)}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-2">
          {user?.isLoggedIn ? (
            <button className="border border-orange-500 text-orange-500 px-4 py-1.5 rounded hover:bg-orange-50">
              Logout
            </button>
          ) : (
            <>
              <button className="px-4 py-1.5 rounded hover:bg-gray-100">
                Login
              </button>
              <button className="bg-orange-500 text-white px-4 py-1.5 rounded hover:bg-orange-600">
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-gray-700 hover:text-orange-500"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </NavLink>
          ))}

          <div className="pt-4 border-t flex flex-col gap-2">
            {user?.isLoggedIn ? (
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">
                Logout
              </button>
            ) : (
              <>
                <button className="border px-4 py-2 rounded">
                  Login
                </button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
