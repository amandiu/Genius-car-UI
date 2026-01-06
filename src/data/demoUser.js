// demoUser.js
// This is a temporary fake user for frontend testing
// Change isLoggedIn and role to test different views

export const demoUser = {
  isLoggedIn: true,       // false = Guest
  role: "user",           // "guest" | "user" | "mechanic" | "admin"
  name: "John Doe",       // optional: display in Navbar or profile
  email: "john@example.com", // optional
};
