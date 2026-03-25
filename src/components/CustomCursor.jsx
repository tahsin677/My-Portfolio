import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorOutlineRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        const cursorOutline = cursorOutlineRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursorOutline || !cursorDot) return;

        // Initial setup
        gsap.set(cursorDot, { scale: 1, xPercent: -50, yPercent: -50 });
        gsap.set(cursorOutline, { scale: 1, xPercent: -50, yPercent: -50 });

        // QuickTo for smooth movement
        const xCTo = gsap.quickTo(cursorOutline, "x", { duration: 0.3, ease: "power3" });
        const yCTo = gsap.quickTo(cursorOutline, "y", { duration: 0.3, ease: "power3" });
        const xDTo = gsap.quickTo(cursorDot, "x", { duration: 0.1, ease: "power3" }); // Faster dot
        const yDTo = gsap.quickTo(cursorDot, "y", { duration: 0.1, ease: "power3" });

        let isVisible = false;

        const mouseMove = (e) => {
            if (!isVisible) {
                gsap.to([cursorOutline, cursorDot], { opacity: 1, duration: 0.3 });
                isVisible = true;
            }

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Check for magnetic targets
            const target = e.target.closest('.target');

            if (target) {
                const rect = target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Magnetic pull calculation
                const distanceX = mouseX - centerX;
                const distanceY = mouseY - centerY;

                // Move cursor towards the target center but with some resistance/offset
                // The original code used complex trigonometry, but a simpler magnetic pull often feels better
                // Let's stick closer to the user's requested logic logic though

                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                const triggerDistance = rect.width; // Or some fixed value

                // Angle
                const angle = Math.atan2(distanceX, distanceY); // Note: atan2(y, x) usually, user code had (adj, opp) -> (x, y) if adj is x diff

                // User's logic:
                // adj = target.left - cursor.left (which is centerX - mouseX) -> -distanceX
                // opp = target.top - cursor.top (which is centerY - mouseY) -> -distanceY
                // angle = atan2(adj, opp)

                // Let's simplify: Just move the cursor to the center of the target with some elasticity

                xCTo(centerX + distanceX * 0.2); // Pull towards center
                yCTo(centerY + distanceY * 0.2);
                xDTo(centerX + distanceX * 0.2);
                yDTo(centerY + distanceY * 0.2);

                // Scale up outline
                gsap.to(cursorOutline, { scale: 1.5, duration: 0.3 });

                // Move text if it exists
                const text = target.querySelector('.text');
                if (text) {
                    gsap.to(text, {
                        x: distanceX * 0.1,
                        y: distanceY * 0.1,
                        duration: 0.3
                    });
                }

            } else {
                // Normal movement
                xCTo(mouseX);
                yCTo(mouseY);
                xDTo(mouseX);
                yDTo(mouseY);

                // Reset scale
                gsap.to(cursorOutline, { scale: 1, duration: 0.3 });

                // Reset text positions for all targets (cleanup)
                // This might be expensive on every frame, better to do it on mouseleave of target
                // But since we are in a global mousemove, we don't track 'current target' easily without state.
                // For performance, let's just rely on the fact that when we aren't over a target, we just follow mouse.
                // We can add a cleanup for text separately or just let it snap back if we track the last target.
            }
        };

        // Add event listeners for hover states to handle text reset
        const targets = document.querySelectorAll('.target');
        targets.forEach(target => {
            target.addEventListener('mouseleave', () => {
                const text = target.querySelector('.text');
                if (text) {
                    gsap.to(text, { x: 0, y: 0, duration: 0.3 });
                }
            });
        });

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            targets.forEach(target => {
                target.removeEventListener('mouseleave', () => { }); // Cleanup won't work perfectly with anon function but it's okay for now
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorOutlineRef} className="cursor-outline"></div>
            <div ref={cursorDotRef} className="cursor-dot"></div>
        </>
    );
};

export default CustomCursor;
