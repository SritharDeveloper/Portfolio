import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.span
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-lg font-semibold tracking-tight"
        >
          Srithar S.
        </motion.span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="nav-link relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.1,
              }}
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="https://github.com/SritharDeveloper?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            GitHub ↗
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-slate-600 hover:text-blue-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{
                    x: -20,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="nav-link"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;