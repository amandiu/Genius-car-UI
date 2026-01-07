import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Wrench,
  ClipboardList,
  Package,
  Truck,
  Star,
  MapPin,
  User,
  LogIn,
  UserPlus,
  LayoutDashboard,
} from "lucide-react";

/* Demo user */
const demoUser = {
  isLoggedIn: true, // false = Guest
  role: "mechanic", // "guest" | "user" | "mechanic" | "admin"
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  const { isLoggedIn, role } = demoUser;

  // Dynamically enable/disable scroll if content fits drawer
  useEffect(() => {
    if (drawerRef.current) {
      const drawer = drawerRef.current;
      if (drawer.scrollHeight <= drawer.clientHeight) {
        drawer.style.overflowY = "hidden";
      } else {
        drawer.style.overflowY = "auto";
      }
    }
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition
     ${isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition">
            <Wrench className="text-white" size={18} />
          </div>
          <span className="text-xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Genius Car
          </span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-2">
          {!isLoggedIn && (
            <>
              <NavLink to="/" className={linkClass}>
                <Home size={16} /> Home
              </NavLink>
              <NavLink to="/services" className={linkClass}>
                <Wrench size={16} /> Services
              </NavLink>
              <NavLink to="/mechanics" className={linkClass}>
                <User size={16} /> Mechanics
              </NavLink>
            </>
          )}

          {isLoggedIn && role === "user" && (
            <>
              <NavLink to="/" className={linkClass}>
                <Home size={16} /> Home
              </NavLink>
              <NavLink to="/services" className={linkClass}>
                <Wrench size={16} /> Services
              </NavLink>
              <NavLink to="/mechanics" className={linkClass}>
                <User size={16} /> Mechanics
              </NavLink>
              <NavLink to="/bookings" className={linkClass}>
                <ClipboardList size={16} /> My Bookings
              </NavLink>
              <NavLink to="/parts" className={linkClass}>
                <Package size={16} /> Parts Shop
              </NavLink>
            </>
          )}

          {isLoggedIn && role === "mechanic" && (
            <>
              <NavLink to="/mechanics-dashboard" className={linkClass}>
                Dashboard
              </NavLink>
              <NavLink to="/jobs" className={linkClass}>
                Assigned Jobs
              </NavLink>
              <NavLink to="/tracking" className={linkClass}>
                Live Tracking
              </NavLink>
              <NavLink to="/earnings" className={linkClass}>
                Earnings
              </NavLink>
              <NavLink to="/reviews" className={linkClass}>
                Reviews
              </NavLink>
            </>
          )}

          {isLoggedIn && role === "admin" && (
            <>
              <NavLink to="/dashboard" className={linkClass}>
                <LayoutDashboard size={16} /> Dashboard
              </NavLink>
              <NavLink to="/orders" className={linkClass}>
                <ClipboardList size={16} /> Orders
              </NavLink>
              <NavLink to="/inventory" className={linkClass}>
                <Package size={16} /> Inventory
              </NavLink>
              <NavLink to="/mechanics" className={linkClass}>
                <User size={16} /> Mechanics
              </NavLink>
            </>
          )}
        </div>

        {/* AUTH BUTTONS */}
        <div className="hidden md:flex items-center gap-2">
          {!isLoggedIn ? (
            <>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 border rounded-lg"
              >
                <LogIn size={16} /> Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow"
              >
                <UserPlus size={16} /> Get Started
              </motion.button>
            </>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-1.5 rounded-lg border backdrop-blur-md"
            >
              <User size={16} /> {role}
            </motion.button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 w-[50vw] h-[30vh] bg-white/60 backdrop-blur-xl p-5 space-y-4 shadow-2xl rounded-bl-2xl overflow-y-auto"
            >
              <button onClick={() => setOpen(false)} className="mb-4">
                <X />
              </button>

              {/* Links */}
              {!isLoggedIn && (
                <>
                  <NavLink to="/" className={linkClass}>
                    <Home size={16} /> Home
                  </NavLink>
                  <NavLink to="/services" className={linkClass}>
                    <Wrench size={16} /> Services
                  </NavLink>
                  <NavLink to="/mechanics" className={linkClass}>
                    <User size={16} /> Mechanics
                  </NavLink>
                  <button className="w-full bg-orange-500 text-white py-2 rounded mt-2 flex items-center justify-center gap-2">
                    <LogIn size={16} /> Login
                  </button>
                </>
              )}

              {isLoggedIn && role === "user" && (
                <>
                  <NavLink to="/" className={linkClass}>
                    <Home size={16} /> Home
                  </NavLink>
                  <NavLink to="/services" className={linkClass}>
                    <Wrench size={16} /> Services
                  </NavLink>
                  <NavLink to="/mechanics" className={linkClass}>
                    <User size={16} /> Mechanics
                  </NavLink>
                  <NavLink to="/bookings" className={linkClass}>
                    <ClipboardList size={16} /> My Bookings
                  </NavLink>
                  <NavLink to="/parts" className={linkClass}>
                    <Package size={16} /> Parts Shop
                  </NavLink>
                </>
              )}

              {isLoggedIn && role === "mechanic" && (
                <>
                  <NavLink to="/mechanics-dashboard" className={linkClass}>
                    Dashboard
                  </NavLink>
                  <NavLink to="/jobs" className={linkClass}>
                    Assigned Jobs
                  </NavLink>
                  <NavLink to="/tracking" className={linkClass}>
                    Live Tracking
                  </NavLink>
                  <NavLink to="/earnings" className={linkClass}>
                    Earnings
                  </NavLink>
                  <NavLink to="/reviews" className={linkClass}>
                    Reviews
                  </NavLink>
                </>
              )}

              {isLoggedIn && role === "admin" && (
                <>
                  <NavLink to="/dashboard" className={linkClass}>
                    <LayoutDashboard size={16} /> Dashboard
                  </NavLink>
                  <NavLink to="/orders" className={linkClass}>
                    <ClipboardList size={16} /> Orders
                  </NavLink>
                  <NavLink to="/inventory" className={linkClass}>
                    <Package size={16} /> Inventory
                  </NavLink>
                  <NavLink to="/mechanics" className={linkClass}>
                    <User size={16} /> Mechanics
                  </NavLink>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Home,
//   Wrench,
//   ClipboardList,
//   ShoppingCart,
//   LayoutDashboard,
//   Package,
//   Truck,
//   Star,
//   MapPin,
//   User,
//   LogIn,
//   UserPlus,
// } from "lucide-react";

// /* 🔴 Fake user for demo - change role here */
// const demoUser = {
//   isLoggedIn: true,      // false = Guest
//   role: "user",          // "guest" | "user" | "mechanic" | "admin"
// };

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const isLoggedIn = demoUser.isLoggedIn;
//   const role = demoUser.role;

//   const linkClass =
//     "flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500";

//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4">

//         {/* LOGO */}
//         <NavLink to="/" className="flex items-center gap-2">
//           <div className="h-9 w-9 bg-orange-500 rounded-lg flex items-center justify-center">
//             <Wrench className="text-white" size={18} />
//           </div>
//           <span className="text-xl font-bold text-orange-500">
//             Genius Car
//           </span>
//         </NavLink>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center gap-4">

//           {/* Guest */}
//           {!isLoggedIn && (
//             <>
//               <NavLink className={linkClass}><Home size={16} /> Home</NavLink>
//               <NavLink className={linkClass}><Wrench size={16} /> Services</NavLink>
//               <NavLink className={linkClass}><User size={16} /> Mechanics</NavLink>
//             </>
//           )}

//           {/* User */}
//           {isLoggedIn && role === "user" && (
//             <>
//               <NavLink className={linkClass}><Home size={16} /> Home</NavLink>
//               <NavLink className={linkClass}><Wrench size={16} /> Services</NavLink>
//               <NavLink className={linkClass}><User size={16} /> Mechanics</NavLink>
//               <NavLink className={linkClass}><ClipboardList size={16} /> My Bookings</NavLink>
//               <NavLink className={linkClass}><ShoppingCart size={16} /> Cart</NavLink>
//             </>
//           )}

//           {/* Mechanic */}
//           {isLoggedIn && role === "mechanic" && (
//             <>
//               <NavLink className={linkClass}><Truck size={16} /> Assigned Jobs</NavLink>
//               <NavLink className={linkClass}><MapPin size={16} /> Live Tracking</NavLink>
//               <NavLink className={linkClass}><Package size={16} /> Earnings</NavLink>
//               <NavLink className={linkClass}><Star size={16} /> Reviews</NavLink>
//             </>
//           )}

//           {/* Admin */}
//           {isLoggedIn && role === "admin" && (
//             <>
//               <NavLink className={linkClass}><LayoutDashboard size={16} /> Dashboard</NavLink>
//               <NavLink className={linkClass}><ClipboardList size={16} /> Orders</NavLink>
//               <NavLink className={linkClass}><Package size={16} /> Inventory</NavLink>
//               <NavLink className={linkClass}><User size={16} /> Mechanics</NavLink>
//             </>
//           )}
//         </div>

//         {/* AUTH BUTTONS */}
//         <div className="hidden md:flex items-center gap-2">
//           {!isLoggedIn ? (
//             <>
//               <button className="flex items-center gap-2 px-4 py-1.5 border rounded hover:bg-gray-100">
//                 <LogIn size={16} /> Login
//               </button>
//               <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded hover:bg-orange-600">
//                 <UserPlus size={16} /> Get Started
//               </button>
//             </>
//           ) : (
//             <button className="flex items-center gap-2 px-4 py-1.5 border rounded hover:bg-gray-100">
//               <User size={16} /> {role}
//             </button>
//           )}
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button className="md:hidden" onClick={() => setOpen(true)}>
//           <Menu />
//         </button>
//       </div>

//       {/* MOBILE DRAWER */}
//       {open && (
//         <div className="fixed inset-0 z-50 md:hidden">

//           {/* Dark overlay */}
//           <div
//             className="absolute inset-0 bg-black/40"
//             onClick={() => setOpen(false)}
//           />

//           {/* 50% WIDTH + 50% HEIGHT drawer */}
//           <div className="
//             absolute right-0 top-0
//             w-1/2 h-1/2
//             bg-white shadow-xl
//             rounded-bl-xl
//             p-4 space-y-3
//             overflow-y-auto
//           ">
//             <button onClick={() => setOpen(false)}>
//               <X />
//             </button>

//             {/* Guest menu */}
//             {!isLoggedIn && (
//               <>
//                 <NavLink className={linkClass}><Home size={16}/> Home</NavLink>
//                 <NavLink className={linkClass}><Wrench size={16}/> Services</NavLink>
//                 <NavLink className={linkClass}><User size={16}/> Mechanics</NavLink>
//                 <button className="w-full bg-orange-500 text-white py-2 rounded mt-2">
//                   Login
//                 </button>
//               </>
//             )}

//             {/* User menu */}
//             {isLoggedIn && role === "user" && (
//               <>
//                 <NavLink className={linkClass}><Home size={16}/> Home</NavLink>
//                 <NavLink className={linkClass}><ClipboardList size={16}/> My Bookings</NavLink>
//                 <NavLink className={linkClass}><ShoppingCart size={16}/> Cart</NavLink>
//               </>
//             )}

//             {/* Mechanic menu */}
//             {isLoggedIn && role === "mechanic" && (
//               <>
//                 <NavLink className={linkClass}><Truck size={16}/> Assigned Jobs</NavLink>
//                 <NavLink className={linkClass}><MapPin size={16}/> Live Tracking</NavLink>
//                 <NavLink className={linkClass}><Package size={16}/> Earnings</NavLink>
//                 <NavLink className={linkClass}><Star size={16}/> Reviews</NavLink>
//               </>
//             )}

//             {/* Admin menu */}
//             {isLoggedIn && role === "admin" && (
//               <>
//                 <NavLink className={linkClass}><LayoutDashboard size={16}/> Dashboard</NavLink>
//                 <NavLink className={linkClass}><ClipboardList size={16}/> Orders</NavLink>
//                 <NavLink className={linkClass}><Package size={16}/> Inventory</NavLink>
//                 <NavLink className={linkClass}><User size={16}/> Mechanics</NavLink>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
