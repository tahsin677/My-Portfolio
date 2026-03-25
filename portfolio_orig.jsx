import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X, ArrowRight, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

// --- Assets & Placeholders ---
// Updated URLs to be more reliable. 
// Ideally, replace HERO_IMAGE_URL with your local file path for the exact "Red/Blue" look.
const HERO_IMAGE_URL = "me.png";

const PORTFOLIO_IMAGES = {
  heroProduct: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000", // Dark sleek device
  heroCollection: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000", // Nike shoe (classic product example)
  essentials: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=1000", // Abstract 3D shapes
  topPicks: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000"   // Yellow texture chair
};

const NAV_LINKS = ["HOME", "ABOUT", "WORK", "SERVICES", "CONTACT"];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- Lenis Scroll Implementation ---
  useEffect(() => {
    // Dynamically load Lenis from CDN since we can't npm install in this environment
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js";
    script.async = true;

    script.onload = () => {
      // Initialize Lenis once script is loaded
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Clean up if necessary, though simpler to just let it unmount here
    };
  }, []);

  // --- Header Scroll Effect ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-purple-600 selection:text-white bg-black">

      {/* ================= HEADER ================= */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-bold tracking-tighter relative z-50">
            ellion
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide">
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white relative z-50 p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white text-2xl font-medium tracking-tighter" onClick={() => setIsMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* ================= HERO SECTION (DARK) ================= */}
      <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center py-20 lg:py-0">

        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />

        {/* Grid Lines Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">

          {/* Top Small Labels - Absolute on desktop, stacked on mobile */}
          <div className="w-full flex justify-between items-center text-[10px] md:text-xs tracking-[0.2em] text-gray-500 mb-8 lg:mb-0 lg:absolute lg:top-32 lg:left-0 lg:w-full lg:px-6">
            <span>| WHERE BEYOND |</span>
            <span className="hidden md:inline">PRODUCT DESIGN</span>
            <span>| BREAK THE NORM |</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-10 lg:mt-0">

            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col z-20">
              {/* Adjusted Typography Sizes to prevent overlap */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter uppercase mb-8 lg:mb-12">
                <span className="block text-white">Innovate</span>
                <span className="block text-purple-600">For Design</span>
                <span className="block text-white">Deliver</span>
              </h1>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-2xl">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm lg:max-w-md">
                  Our mission is to elevate your vision through groundbreaking design combining artistic flair with strategic insight.
                </p>

                <button className="group bg-white text-black px-6 py-3 md:px-8 md:py-4 font-bold text-xs md:text-sm tracking-wider flex items-center gap-3 hover:bg-purple-600 hover:text-white transition-all duration-300 whitespace-nowrap">
                  LET'S CONTACT
                  <span className="bg-black text-white p-1 group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5 flex items-center justify-end lg:justify-end mt-12 lg:mt-0">
              <img
                src={HERO_IMAGE_URL}
                alt="Portrait"
                className="w-full max-w-md lg:max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION (LIGHT THEME) ================= */}
      <section id="about" className="bg-gray-50 text-black py-24 md:py-32 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">

            {/* Left Column */}
            <div className="md:w-1/3 flex flex-col justify-between items-start">
              <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">(About Me)</span>

              <button className="w-fit group border border-black px-6 py-3 font-bold text-xs tracking-wider flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300">
                LET'S CONTACT
                <span className="bg-purple-600 text-white p-1 group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </div>

            {/* Right Column */}
            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-gray-900">
                Innovative product designer with a passion for aesthetics and usability. I design purposeful, user-friendly products that blend form and function, creating memorable experiences that align with both practical needs and visual appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED WORK (LIGHT THEME) ================= */}
      <section id="work" className="bg-gray-50 py-24 md:py-32 relative z-20">
        <div className="container mx-auto px-6">

          <div className="mb-16">
            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">(Featured Work)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <ProjectCard
              image={PORTFOLIO_IMAGES.heroProduct}
              category="HERO PRODUCTS"
              title="E-commerce website"
              year="2022"
              darkOverlay={true}
            />

            {/* Card 2 */}
            <ProjectCard
              image={PORTFOLIO_IMAGES.heroCollection}
              category="HERO COLLECTION"
              title="Marking website"
              year="2023"
              textColor="text-black"
            />

            {/* Card 3 - Wide */}
            <div className="md:col-span-2">
              <ProjectCard
                image={PORTFOLIO_IMAGES.essentials}
                category="ESSENTIALS COLLECTION"
                title="Marking website"
                year="2023"
                wide={true}
              />
            </div>

            {/* Card 4 - Wide */}
            <div className="md:col-span-2">
              <ProjectCard
                image={PORTFOLIO_IMAGES.topPicks}
                category="TOP PICKS"
                title="E-commerce website"
                year="2024"
                wide={true}
                textColor="text-black"
              />
            </div>

          </div>

          <div className="flex justify-center mt-20">
            <button className="group bg-black text-white px-8 py-4 font-bold text-sm tracking-wider flex items-center gap-4 hover:bg-purple-600 transition-all duration-300">
              SEE ALL WORKS
              <span className="bg-purple-600 text-white p-1 group-hover:bg-white group-hover:text-black transition-colors rounded-sm">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-16 relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter">ellion</div>

          <div className="flex gap-6">
            <SocialLink icon={<Instagram size={20} />} />
            <SocialLink icon={<Twitter size={20} />} />
            <SocialLink icon={<Linkedin size={20} />} />
            <SocialLink icon={<Globe size={20} />} />
          </div>

          <p className="text-gray-500 text-sm">© 2025 Vector3 Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// --- Subcomponents ---

const ProjectCard = ({ image, category, title, year, darkOverlay = false, textColor = "text-white", wide = false }) => (
  <div className={`group relative overflow-hidden rounded-2xl ${wide ? 'h-[400px] md:h-[500px]' : 'h-[400px]'} bg-gray-200 cursor-pointer`}>
    {/* Added fallback background color if image fails */}
    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
    <img
      src={image}
      alt={category}
      className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
      onLoad={(e) => e.target.previousSibling.style.display = 'none'}
      onError={(e) => {
        e.target.style.opacity = 0;
        e.target.previousSibling.classList.remove('animate-pulse');
        e.target.previousSibling.classList.add('flex', 'items-center', 'justify-center', 'text-gray-500', 'text-sm');
        e.target.previousSibling.innerText = "Image Unavailable";
      }}
    />

    {/* Overlay */}
    <div className={`absolute inset-0 z-20 flex flex-col justify-between p-8 transition-opacity duration-300 ${darkOverlay ? 'bg-black/40' : 'bg-gradient-to-b from-black/5 to-transparent'}`}>

      <div className={textColor}>
        <h3 className="text-lg font-bold uppercase tracking-wide mb-1 drop-shadow-sm">{category}</h3>
        <p className="text-sm opacity-90 font-medium">{title}</p>
      </div>

      <div className={`flex justify-end items-center gap-2 ${textColor}`}>
        <div className="w-2 h-2 rounded-full bg-current"></div>
        <span className="text-sm font-mono font-bold">{year}</span>
      </div>

    </div>

    {/* Hover Reveal Button */}
    <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
      <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-wider hover:bg-purple-600 hover:text-white transition-colors shadow-lg">
        VIEW PROJECT
      </button>
    </div>
  </div>
);

const SocialLink = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
    {icon}
  </a>
);

export default App;