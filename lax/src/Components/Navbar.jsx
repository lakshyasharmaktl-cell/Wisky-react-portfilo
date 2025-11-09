import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wine, Crown, Search, ShoppingCart, User, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('luxury wines');

  const menuItems = [
    { name: 'luxury wines', icon: Wine },
    { name: 'premium spirits', icon: Crown },
    { name: 'limited editions', icon: Sparkles },
    { name: 'collections', icon: ShoppingCart }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300
      }
    })
  };

  const hoverEffect = {
    scale: 1.05,
    color: "#fbbf24",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  const tapEffect = {
    scale: 0.95
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white shadow-2xl sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-amber-400 to-amber-600 p-2 rounded-full"
            >
              <Wine className="h-6 w-6 text-white" />
            </motion.div>
            <motion.h1 
              className="text-3xl font-serif font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Whisky & Wines
            </motion.h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.name;
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-white/20 backdrop-blur-sm text-amber-300 shadow-lg'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                  whileHover={hoverEffect}
                  whileTap={tapEffect}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="capitalize font-semibold text-lg">{item.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className="p-3 text-white/90 hover:bg-white/10 rounded-xl backdrop-blur-sm"
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className="p-3 text-white/90 hover:bg-white/10 rounded-xl backdrop-blur-sm relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <motion.span 
                className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                3
              </motion.span>
            </motion.button>
            <motion.button
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className="p-3 text-white/90 hover:bg-white/10 rounded-xl backdrop-blur-sm"
            >
              <User className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-3 text-white/90 hover:bg-white/10 rounded-xl backdrop-blur-sm"
            whileHover={hoverEffect}
            whileTap={tapEffect}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-20 left-0 right-0 bg-gradient-to-b from-purple-900 to-indigo-800 shadow-2xl border-t border-white/20 backdrop-blur-lg"
          >
            <div className="px-6 py-8 space-y-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeItem === item.name;
                
                return (
                  <motion.button
                    key={item.name}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-4 w-full px-6 py-4 rounded-xl text-left backdrop-blur-sm ${
                      isActive
                        ? 'bg-white/20 text-amber-300 shadow-lg'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <IconComponent className="h-6 w-6" />
                    <span className="capitalize font-semibold text-xl">{item.name}</span>
                  </motion.button>
                );
              })}
              
              {/* Mobile Additional Icons */}
              <div className="flex space-x-4 pt-6 border-t border-white/20">
                <motion.button
                  variants={itemVariants}
                  custom={4}
                  className="flex-1 flex items-center justify-center space-x-3 px-6 py-4 bg-white/20 rounded-xl text-amber-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="h-5 w-5" />
                  <span className="font-semibold">Search</span>
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  custom={5}
                  className="flex-1 flex items-center justify-center space-x-3 px-6 py-4 bg-white/20 rounded-xl text-amber-300 backdrop-blur-sm relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="font-semibold">Cart</span>
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                    3
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}