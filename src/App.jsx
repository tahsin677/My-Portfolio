import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Instagram, Linkedin, Twitter, Globe, ArrowRight } from 'lucide-react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import heroImage from './assets/PHOTO.TAHSIN DRUBO.webp';

const PORTFOLIO_IMAGES = {
    heroProduct: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000",
    heroCollection: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
    essentials: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=1000",
    topPicks: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000"
};

const EXPERTISE_ITEMS = [
    { title: "Product Design", superscript: "UI/UX", subtitle: "Crafting intuitive and engaging user experiences." },
    { title: "Branding", subtitle: "Building memorable identities that stand out." },
    { title: "SaaS Videos", subtitle: "Explaining complex products with visual clarity." },
    { title: "Mobile/Web App", subtitle: "Developing robust and scalable applications." },
    { title: "Web Development", superscript: "AI Powered", subtitle: "Building modern web experiences powered by artificial intelligence." }
];

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [bioExpanded, setBioExpanded] = useState(false);

    useEffect(() => {
        // Initialize Lenis Smooth Scroll
        const lenis = new Lenis({
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

        // Handle Scroll State
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            lenis.destroy();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen font-sans selection:bg-purple-600 selection:text-white bg-black">
            <CustomCursor />

            {/* ================= HERO SECTION (DARK) ================= */}
            <section id="home" className="relative min-h-auto md:min-h-[80vh] bg-black text-white overflow-hidden flex flex-col justify-center py-24 md:py-0">

                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />

                {/* Grid Lines Overlay */}
                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                    style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
                </div>

                <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">



                    <div className="grid grid-cols-5 lg:grid-cols-12 gap-2 lg:gap-8 h-full items-center">

                        {/* Main Content */}
                        <div className="col-span-3 lg:col-span-7 flex flex-col justify-center z-20 h-full pl-0 lg:pl-32 relative">
                            {/* Vertical Text - Mathematically precision-aligned 1rem left of the title block (padding is 8rem) */}
                            <div className="absolute left-24 top-[60%] -translate-y-1/2 hidden lg:flex items-center gap-2 -rotate-90 origin-bottom-left">
                                <span className="w-8 h-[1px] bg-gray-600 inline-block shrink-0"></span>
                                <span className="text-xs tracking-[0.2em] text-gray-500 whitespace-nowrap uppercase">Product Designer</span>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-6 md:gap-12 mb-12 lg:justify-start">
                                <div>
                                    <h3 className="text-2xl font-light whitespace-nowrap">30+</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 md:whitespace-nowrap">Project completed</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-light whitespace-nowrap">Co-Founder</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 whitespace-nowrap">Vector3.Agency</p>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="mb-8 lg:text-left">
                                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-light leading-none tracking-tighter mb-4">
                                    Hello
                                </h1>
                                <p className="text-gray-400 text-sm md:text-base tracking-wide flex items-center gap-2 lg:justify-start">
                                    <span className="w-8 h-[1px] bg-gray-600 inline-block"></span>
                                    I'm Tahsin Drubo
                                </p>
                            </div>

                            {/* Bottom Elements */}
                            <div className="mt-10 flex justify-start">
                                <a href="https://calendly.com/officialvector3/30min?back=1&month=2026-03" target="_blank" rel="noopener noreferrer" className="group bg-white text-black pl-6 pr-5 py-2 md:pl-9 md:pr-8 md:py-4 font-bold text-xs md:text-sm tracking-wider flex items-center gap-4 hover:bg-purple-600 hover:text-white transition-all duration-300 target">
                                    <span className="text">Start a project</span>
                                    <span className="bg-purple-600 text-white p-1 group-hover:bg-white group-hover:text-black transition-colors rounded-sm">
                                        <ArrowRight size={16} />
                                    </span>
                                </a>
                            </div>

                        </div>

                        {/* Right Image Container - Grid Structured */}
                        <div className="col-span-2 lg:col-span-5 flex items-center justify-center lg:justify-start lg:pl-12 opacity-80 lg:opacity-100 mix-blend-lighten pointer-events-none mt-10 lg:mt-0 z-0">
                            <div className="relative inline-flex w-full sm:w-[85%] max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] -translate-y-4 lg:translate-y-0">
                                {/* Frame Lines extending outwards (Tic-Tac-Toe / Hashtag Style) */}
                                <div className="absolute top-0 -left-8 md:-left-16 -right-8 md:-right-16 h-[1px] bg-gray-600 z-20"></div>
                                <div className="absolute bottom-0 -left-8 md:-left-16 -right-8 md:-right-16 h-[1px] bg-gray-600 z-20"></div>
                                <div className="absolute left-0 -top-8 md:-top-16 -bottom-8 md:-bottom-16 w-[1px] bg-gray-600 z-20"></div>
                                <div className="absolute right-0 -top-8 md:-top-16 -bottom-8 md:-bottom-16 w-[1px] bg-gray-600 z-20"></div>

                                <img
                                    src={heroImage}
                                    alt="Tahsin Drubo Portrait"
                                    className="w-full h-auto object-contain object-bottom relative z-10"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= ABOUT SECTION (LIGHT THEME) ================= */}
            <section id="about" className="bg-gray-50 text-black py-12 md:py-20 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-12">

                        {/* Label (Mobile Only) */}
                        <span className="text-sm font-bold tracking-widest text-gray-400 uppercase md:hidden">(About Me)</span>

                        {/* Text Column */}
                        <div>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-gray-900">
                                I’m <span className="italic text-purple-600">Tahsin Drubo</span>, a product design enthusiast and developer who enjoys turning ideas into things that make sense to use.
                                {!bioExpanded && (
                                    <span className="md:hidden">
                                        ... <button onClick={() => setBioExpanded(true)} className="text-gray-400 text-lg font-bold underline hover:text-purple-600 transition-colors ml-1">See more</button>
                                    </span>
                                )}
                                <span className={`${bioExpanded ? 'inline' : 'hidden md:inline'}`}>
                                    {" "}I co-run <a href="https://www.vector3.agency" target="_blank" rel="noopener noreferrer" className="italic text-purple-600 hover:text-black transition-colors">Vector3 LLC</a> with two of my close friends, where we design and develop products for both international and local clients. I’m currently pursuing a Bachelor of Science in Computer Science and Engineering at BRAC University. I am also the current <span className="italic text-purple-600">President</span> of the BRAC University Esports Club (2026-27). Outside of work, I’m deeply into esports and gaming.
                                    {bioExpanded && (
                                        <button onClick={() => setBioExpanded(false)} className="text-gray-400 text-lg font-bold underline hover:text-purple-600 transition-colors ml-2 md:hidden">See less</button>
                                    )}
                                </span>
                            </p>
                        </div>

                        {/* Button Column */}
                        <div className="flex flex-col justify-between items-start">
                            <a href="https://calendly.com/officialvector3/30min?back=1&month=2026-03" target="_blank" rel="noopener noreferrer" className="w-fit group border border-black px-6 py-3 font-bold text-xs tracking-wider flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300 target">
                                <span className="text">Let's connect</span>
                                <span className="bg-purple-600 text-white p-1 group-hover:bg-white group-hover:text-black transition-colors">
                                    <ArrowUpRight size={14} />
                                </span>
                            </a>
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

                        {/* Card 1 - Slide from Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <ProjectCard
                                image={PORTFOLIO_IMAGES.heroProduct}
                                category="HERO PRODUCTS"
                                title="E-commerce website"
                                year="2022"
                                darkOverlay={true}
                            />
                        </motion.div>

                        {/* Card 2 - Slide from Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <ProjectCard
                                image={PORTFOLIO_IMAGES.heroCollection}
                                category="HERO COLLECTION"
                                title="Marking website"
                                year="2023"
                            />
                        </motion.div>

                        {/* Card 3 - Wide - Slide from Left */}
                        <motion.div
                            className="md:col-span-2"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <ProjectCard
                                image={PORTFOLIO_IMAGES.essentials}
                                category="ESSENTIALS COLLECTION"
                                title="Marking website"
                                year="2023"
                                wide={true}
                            />
                        </motion.div>

                        {/* Card 4 - Wide - Slide from Right */}
                        <motion.div
                            className="md:col-span-2"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <ProjectCard
                                image={PORTFOLIO_IMAGES.topPicks}
                                category="TOP PICKS"
                                title="E-commerce website"
                                year="2024"
                                wide={true}
                            />
                        </motion.div>

                    </div>
                    <div className="flex justify-center mt-20">
                        <button className="group bg-black text-white px-8 py-4 font-bold text-sm tracking-wider flex items-center gap-4 hover:bg-purple-600 transition-all duration-300 target">
                            <span className="text">SEE ALL WORKS</span>
                            <span className="bg-purple-600 text-white p-1 group-hover:bg-white group-hover:text-black transition-colors rounded-sm">
                                <ArrowUpRight size={16} />
                            </span>
                        </button>
                    </div>

                </div>
            </section>

            {/* ================= EXPERTISE SECTION (LIGHT THEME) ================= */}
            <section className="bg-white text-black py-24 md:py-32 relative z-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-16 md:gap-20 items-center w-full">
                        {/* Title */}
                        <div className="w-full flex flex-col items-center text-center gap-6">
                            <div>
                                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase block mb-4">(My Expertise)</span>
                                <h2 className="text-4xl md:text-6xl font-light leading-tight">
                                    What I do <span className="text-purple-600 italic">best.</span>
                                </h2>
                            </div>
                        </div>

                        {/* Expertise List */}
                        <div className="w-full flex flex-col gap-8">
                            {EXPERTISE_ITEMS.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8 border-b border-gray-200 pb-6">
                                    <h3 className="text-3xl md:text-5xl font-syne font-bold text-gray-900">
                                        {item.title}
                                        {item.superscript && (
                                            <sup className="text-xs md:text-sm font-sans font-semibold text-purple-600 ml-1 align-super whitespace-nowrap">{item.superscript}</sup>
                                        )}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 md:max-w-md md:text-right md:ml-auto">
                                        {item.subtitle}
                                    </p>
                                </div>
                            ))}
                            
                            {/* Button moved under the list */}
                            <div className="mt-8 md:mt-12 flex justify-center w-full">
                                <a href="https://calendly.com/officialvector3/30min?back=1&month=2026-03" target="_blank" rel="noopener noreferrer" className="group bg-black text-white px-10 py-5 font-bold text-sm tracking-wider flex items-center gap-4 hover:bg-purple-600 transition-all duration-300 target">
                                    <span className="text">Start a project</span>
                                    <span className="bg-purple-600 text-white p-1 group-hover:bg-white group-hover:text-black transition-colors rounded-sm">
                                        <ArrowRight size={16} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-black text-white py-16 relative z-20">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-2xl font-bold tracking-tighter">Tahsin Drubo</div>

                    <div className="flex gap-6">
                        <SocialLink href="https://www.instagram.com/hourly_f0rsaken/" icon={<Instagram size={20} />} />
                        <SocialLink href="https://x.com/tahsin679" icon={<Twitter size={20} />} />
                        <SocialLink href="https://www.linkedin.com/in/tahsin-pathan/" icon={<Linkedin size={20} />} />
                        <SocialLink href="https://vector3.agency" icon={<Globe size={20} />} />
                    </div>

                    <p className="text-gray-500 text-sm">© 2025 Vector3.Agency. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

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
        {/* Hover Reveal Button - Top Right */}
        <div className="absolute z-30 top-8 right-8 opacity-100 scale-100 md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-300">
            <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors shadow-lg">
                <ArrowUpRight size={20} />
            </button>
        </div>
    </div>
);

const SocialLink = ({ icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
        {icon}
    </a>
);

export default App;
