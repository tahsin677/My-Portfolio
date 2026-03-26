import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Instagram, Linkedin, Twitter, Globe, ArrowRight, ChevronDown } from 'lucide-react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import heroImage from './assets/PHOTO.TAHSIN DRUBO.webp';
import telemedImage from './assets/TELEMED.avif';
import buedfImage from './assets/BUEDF - P2.avif';
import homelenderImage from './assets/Homelender.avif';
import slashCoffeeImage from './assets/Slash Coffee.avif';
import traveloImage from './assets/Travelo.avif';
import chatOSImage from './assets/ChatOS.avif';
import macgreenImage from './assets/MacGreen.avif';
import clairlunaImage from './assets/Clairluna.avif';
import facultyReviewImage from './assets/Faculty Review.avif';


const EXPERTISE_ITEMS = [
    { title: "Product Design", superscript: "UI/UX", subtitle: "Crafting intuitive and engaging user experiences." },
    { title: "Branding", subtitle: "Building memorable identities that stand out." },
    { title: "SaaS Videos", subtitle: "Explaining complex products with visual clarity." },
    { title: "Mobile/Web App", subtitle: "Developing robust and scalable applications." },
    { title: "Web Development", superscript: "AI Powered", subtitle: "Building modern web experiences powered by artificial intelligence." }
];

const EXPERIENCES = [
    {
        company: "Vector3 LLC",
        role: "COO & Co-Founder",
        type: "Full-time",
        date: "Nov 2025 - Present",
        duration: "5 mos",
        location: "Bangladesh · Hybrid",
        description: "We help businesses turn ideas into high-performing digital products. Websites • SaaS • Mobile Apps • UI/UX",
        skills: "User Experience (UX), User Interface Design"
    },
    {
        company: <>BRAC University<br />Esports Club</>,
        type: "Full-time",
        totalDuration: "1 yr 9 mos",
        location: "Dhaka, Bangladesh · Hybrid",
        roles: [
            {
                role: "President",
                date: "Feb 2026 - Present",
                duration: "2 mos",
                description: "Lead the overall vision, strategy and execution of the club, aligning teams across communications, marketing, events, and operations.",
                skills: "Communication, Leadership"
            },
            {
                role: "Director",
                date: "May 2025 - Present",
                duration: "11 mos",
                description: "I guide the entire communication & marketing department to manage the club's activities, organize events like workshops or tournaments, and work with multiple tech companies to grow our e-sports community.",
                skills: "Strategic Communications, Marketing Strategy"
            },
            {
                role: "Assistant Director",
                date: "Jul 2024 - May 2025",
                duration: "11 mos",
                description: "I help to manage the club's activities, organize events like workshops or tournaments, and work with others to grow our e-sports community. I also handle collaborations with gaming companies and ensure...",
                skills: "Strategic Communications, Marketing Strategy"
            }
        ]
    },
    {
        company: "Unipuler Ltd. UK",
        role: "Marketing Executive",
        type: "Internship",
        date: "Jul 2024 - Oct 2024",
        duration: "4 mos",
        location: "Dhaka, Bangladesh · Remote",
        skills: "Sales Operations, Marketing Strategy"
    }
];

const PROJECTS = [
    { image: telemedImage, category: "MOBILE APP UI", title: "TeleMed", year: "2024", darkOverlay: true, wide: true, href: "https://dribbble.com/shots/27212807-TeleMed-Healthcare-Consultation-App-Home-Screen-UI" },
    { image: buedfImage, category: "WEB APPLICATION", title: "USC 2025", year: "2025", wide: true, href: "https://usc2025.netlify.app/" },
    { image: homelenderImage, category: "WEB APPLICATION", title: "Home Lender", year: "2025", wide: true, href: "https://home-lender.netlify.app/" },
    { image: slashCoffeeImage, category: "WEB DESIGN", title: "Slash Coffee", year: "2025", wide: true },
    { image: traveloImage, category: "WEB DESIGN", title: "Travelo", year: "2025", wide: true },
    { image: chatOSImage, category: "WEB DESIGN", title: "ChatOS", year: "2025", wide: true },
    { image: macgreenImage, category: "WEB DESIGN", title: "MacGreen", year: "2025", wide: true },
    { image: clairlunaImage, category: "WEB APPLICATION", title: "Clairluna", year: "2025", wide: true },
    { image: facultyReviewImage, category: "WEB DESIGN", title: "Faculty Review", year: "2025", wide: true }
];

const ROW1 = PROJECTS.slice(0, 5);
const ROW2 = PROJECTS.slice(5, 9);

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
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 whitespace-nowrap">
                                        <a href="https://vector3.agency" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vector3 LLC</a>
                                    </p>
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
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-gray-900">
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
            <section id="work" className="bg-gray-50 py-10 md:py-12 relative z-20 overflow-hidden w-full">
                <div className="container mx-auto px-6">

                    <div className="w-full flex flex-col items-center text-center gap-4 mb-12 relative z-20">
                        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase block">(Featured Work)</span>
                        <h2 className="text-4xl md:text-6xl font-normal leading-tight">
                            Concepts I’ve Brought to <span className="text-purple-600 italic">Life.</span>
                        </h2>
                    </div>
                </div>

                {/* Infinite Carousel Matrix */}
                <div className="w-full flex flex-col gap-6 pause-on-hover py-2">
                        
                        {/* Row 2 - Right to Left (Starts at 0, translates leftward) */}
                        <div className="flex gap-8 group/row w-full">
                            <div className="flex gap-8 shrink-0 w-max animate-scroll-left">
                                {ROW2.map((project, idx) => (
                                    <div key={`r2-a-${idx}`} className="h-[25vh] md:h-[28vh] lg:h-[30vh] shrink-0">
                                        <ProjectCard {...project} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-8 shrink-0 w-max animate-scroll-left" aria-hidden="true">
                                {ROW2.map((project, idx) => (
                                    <div key={`r2-b-${idx}`} className="h-[25vh] md:h-[28vh] lg:h-[30vh] shrink-0">
                                        <ProjectCard {...project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 1 - Left to Right (Starts far left, rightward translation) */}
                        <div className="flex gap-8 group/row w-full">
                            <div className="flex gap-8 shrink-0 w-max animate-scroll-right">
                                {ROW1.map((project, idx) => (
                                    <div key={`r1-a-${idx}`} className="h-[25vh] md:h-[28vh] lg:h-[30vh] shrink-0">
                                        <ProjectCard {...project} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-8 shrink-0 w-max animate-scroll-right" aria-hidden="true">
                                {ROW1.map((project, idx) => (
                                    <div key={`r1-b-${idx}`} className="h-[25vh] md:h-[28vh] lg:h-[30vh] shrink-0">
                                        <ProjectCard {...project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    
                    <div className="container mx-auto px-6 mt-12">
                        <div className="flex justify-center">
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
                                <h2 className="text-4xl md:text-6xl font-normal leading-tight">
                                    Things I Can Get Done <span className="text-purple-600 italic">For You.</span>
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

            {/* ================= EXPERIENCE SECTION ================= */}
            <section id="experience" className="bg-gray-50 text-black py-24 md:py-32 relative z-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-16 md:gap-20 items-center w-full">
                        {/* Title */}
                        <div className="w-full flex flex-col items-center text-center gap-6">
                            <div>
                                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase block mb-4">(My Journey)</span>
                                <h2 className="text-4xl md:text-6xl font-normal leading-tight">
                                    Professional <span className="text-purple-600 italic">Experience.</span>
                                </h2>
                            </div>
                        </div>

                        {/* Experience List */}
                        <div className="w-full max-w-4xl flex flex-col gap-12 text-left">
                            {EXPERIENCES.map((exp, index) => (
                                <ExperienceCard key={index} exp={exp} />
                            ))}
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

                    <p className="text-gray-500 text-sm">
                        © 2025 <a href="https://vector3.agency" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vector3 LLC</a>. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

const ProjectCard = ({ image, category, title, year, darkOverlay = false, textColor = "text-white", wide = false, href }) => {
    // Determine the textColor (if background overlay is removed, you may need a dark text color, but we'll try to stick to what the user provided or make it black if it's too bright. Actually, let's keep it robust and use a dynamic drop shadow for text visibility)
    const CardContent = (
        <div className="w-full h-full relative isolate">
            {/* Added fallback background color if image fails */}
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <img
                src={image}
                alt={category}
                className="h-full w-auto object-cover block relative z-10 transition-transform duration-300 will-change-transform transform-gpu group-hover:scale-[1.02]"
                onLoad={(e) => e.target.previousSibling.style.display = 'none'}
                onError={(e) => {
                    e.target.style.opacity = 0;
                    e.target.previousSibling.classList.remove('animate-pulse');
                    e.target.previousSibling.classList.add('flex', 'items-center', 'justify-center', 'text-gray-500', 'text-sm');
                    e.target.previousSibling.innerText = "Image Unavailable";
                }}
            />

            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 md:h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none opacity-90 transform-gpu"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 md:p-6 pointer-events-none text-white drop-shadow-md transform-gpu opacity-100">
                <div className="flex justify-start items-end w-full">
                    <div>
                        <h3 className="text-sm md:text-base font-bold mb-0.5 whitespace-nowrap opacity-100">{title}</h3>
                        <p className="text-[10px] md:text-xs opacity-80 font-medium uppercase tracking-widest whitespace-nowrap">{category}</p>
                    </div>
                </div>
            </div>

            {/* Hover Reveal Button - Top Right */}
            <div className="absolute z-30 top-4 right-4 md:top-5 md:right-5 opacity-100 scale-100 md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-300 pointer-events-auto transform-gpu">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors duration-300 shadow-lg cursor-pointer">
                    <ArrowUpRight size={16} />
                </div>
            </div>
        </div>
    );

    const className = `group relative overflow-hidden rounded-2xl bg-gray-200 cursor-pointer block h-full w-max isolate transform-gpu`;

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {CardContent}
            </a>
        );
    }

    return (
        <div className={className}>
            {CardContent}
        </div>
    );
};

const SocialLink = ({ icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
        {icon}
    </a>
);

const ExperienceCard = ({ exp }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex flex-col md:flex-row gap-5 md:gap-12 border border-gray-100 md:border-0 md:border-b md:border-gray-200 bg-white md:bg-transparent rounded-2xl md:rounded-none p-6 md:p-0 pb-6 md:pb-12 shadow-[0_2px_10px_rgb(0,0,0,0.02)] md:shadow-none mb-6 last:mb-0 md:mb-0 md:last:pb-0 md:last:border-0 transition-all hover:border-purple-100 md:hover:border-b-gray-200 group/card">
            {/* Company Info */}
            <div className="md:w-1/3 flex flex-col gap-1 md:gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">{exp.company}</h3>
                <div className="text-sm text-gray-500 font-medium flex flex-wrap gap-2 md:gap-1 items-center md:items-start mt-1 md:mt-0">
                    <span className="bg-gray-50 md:bg-transparent text-gray-600 md:text-gray-500 border border-gray-100 md:border-0 px-2 py-0.5 md:p-0 rounded-md md:rounded-none text-[10px] md:text-sm font-bold md:font-medium tracking-wide uppercase md:normal-case md:tracking-normal">{exp.type}</span>
                    {exp.totalDuration && <span className="text-[10px] md:text-sm text-gray-400 md:text-gray-500 font-bold md:font-medium uppercase md:normal-case tracking-wide md:tracking-normal">· {exp.totalDuration}</span>}
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-medium mt-1 md:mt-0">{exp.location}</div>
            </div>

            {/* Roles or Single Role */}
            <div className="md:w-2/3 flex flex-col mt-4 md:mt-0">
                {exp.roles ? (
                    <div className="flex flex-col relative">
                        {/* Timeline line */}
                        <div className={`absolute left-[4px] top-2 ${expanded ? 'bottom-8 opacity-100' : 'bottom-0 opacity-0'} w-[2px] bg-gray-200 hidden md:block transition-all duration-300`}></div>
                        
                        {/* First Role / Most Recent */}
                        <div className={`relative mb-6 md:mb-8 last:mb-0 z-20 transition-all duration-300 ${expanded ? 'md:pl-8' : ''}`}>
                            {/* Timeline dot */}
                            <div className={`absolute left-[0px] top-2 w-[10px] h-[10px] rounded-full bg-gray-400 hidden md:block z-10 ring-4 ring-gray-50 transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`}></div>

                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{exp.roles[0].role}</h4>
                            <div className="text-xs md:text-sm text-purple-600 md:text-gray-500 font-semibold md:font-medium mb-2 md:mb-3">{exp.roles[0].date} <span className="text-gray-400 md:text-gray-500 font-medium md:font-medium ml-1 md:ml-0">· {exp.roles[0].duration}</span></div>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-3 leading-relaxed">{exp.roles[0].description}</p>
                            {exp.roles[0].skills && (
                                <div className="flex flex-wrap gap-2 md:block">
                                    <div className="inline-flex md:flex md:w-auto items-center gap-1.5 md:gap-2 text-[10px] md:text-sm text-gray-600 md:text-gray-700 font-medium font-sans bg-gray-50 md:bg-transparent border border-gray-100 md:border-0 px-2 md:px-0 py-1 md:py-0 rounded-md md:rounded-none">
                                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 md:bg-transparent md:border-[1.5px] md:border-gray-500 rounded-full md:rounded-none rotate-45 shrink-0"></span>
                                        {exp.roles[0].skills}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Collapsible Roles */}
                        {exp.roles.length > 1 && (
                            <>
                                <motion.div 
                                    initial={false} 
                                    animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }} 
                                    className="overflow-hidden flex flex-col origin-top z-10"
                                >
                                    {exp.roles.slice(1).map((role, rIndex) => (
                                        <div key={rIndex} className="relative md:pl-8 mb-6 md:mb-8 last:mb-6 md:last:mb-6">
                                            {/* Timeline dot */}
                                            <div className="absolute left-[0px] top-2 w-[10px] h-[10px] rounded-full bg-gray-300 hidden md:block z-10 ring-4 ring-gray-50"></div>
                                            
                                            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{role.role}</h4>
                                            <div className="text-xs md:text-sm text-gray-500 font-medium mb-2 md:mb-3">{role.date} <span className="text-gray-400 md:text-gray-500 md:ml-0 ml-1">· {role.duration}</span></div>
                                            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">{role.description}</p>
                                            {role.skills && (
                                                <div className="flex flex-wrap gap-2 md:block">
                                                    <div className="inline-flex md:flex items-center gap-1.5 md:gap-2 text-[10px] md:text-sm text-gray-600 md:text-gray-700 font-medium font-sans bg-gray-50 md:bg-transparent border border-gray-100 md:border-0 px-2 md:px-0 py-1 md:py-0 rounded-md md:rounded-none">
                                                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 md:bg-transparent md:border-[1.5px] md:border-gray-500 rounded-full md:rounded-none rotate-45 shrink-0"></span>
                                                        {role.skills}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                                
                                <div className={`relative z-20 transition-all duration-300 mt-1 md:mt-0 ${expanded ? 'md:pl-8' : ''}`}>
                                    <button 
                                        onClick={() => setExpanded(!expanded)}
                                        className="inline-flex items-center gap-2 text-[10px] md:text-sm font-bold text-gray-600 md:text-gray-400 hover:text-purple-600 md:hover:text-black transition-colors bg-white md:bg-gray-50 hover:bg-purple-50 md:hover:bg-gray-50 border border-gray-200 md:border-0 uppercase md:uppercase py-2 md:py-1 px-4 md:px-0 rounded-lg md:rounded-none group/btn shadow-sm md:shadow-none tracking-widest md:tracking-wider select-none md:select-none"
                                    >
                                        {expanded ? 'Show Less' : `Show ${exp.roles.length - 1} earlier roles`}
                                        <ChevronDown className={`w-3.5 h-3.5 md:w-[18px] md:h-[18px] transform transition-transform duration-300 ${expanded ? 'rotate-180 group-hover/btn:-translate-y-0.5' : 'group-hover/btn:translate-y-0.5'}`} />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col relative md:pl-0">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{exp.role}</h4>
                        <div className="text-xs md:text-sm text-purple-600 md:text-gray-500 font-semibold md:font-medium mb-2 md:mb-3">{exp.date} <span className="text-gray-400 md:text-gray-500 font-medium ml-1 md:ml-0">· {exp.duration}</span></div>
                        {exp.description && <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">{exp.description}</p>}
                        {exp.skills && (
                            <div className="flex flex-wrap gap-2 md:block mt-auto md:mt-2">
                                <div className="inline-flex md:flex items-center gap-1.5 md:gap-2 text-[10px] md:text-sm text-gray-600 md:text-gray-700 font-medium font-sans bg-gray-50 md:bg-transparent border border-gray-100 md:border-0 px-2 md:px-0 py-1 md:py-0 rounded-md md:rounded-none">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 md:bg-transparent md:border-[1.5px] md:border-gray-500 rounded-full md:rounded-none rotate-45 shrink-0"></span>
                                    {exp.skills}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
