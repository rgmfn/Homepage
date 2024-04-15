import React, { useRef } from 'react';
import gsap, { Power2 } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './Splash.css'

/**
 * TODO
 */
const Section = ({ sectionRef, children }) => (
    <div
        className="section"
        onClick={() => sectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
    >
        {children}
    </div>
);

/**
 * TODO
 */
function Splash({
    worksRef, aboutRef, videosRef, musicRef, footerRef, isSmallScreen
}) {
    // setting up element references for gsap
    gsap.registerPlugin(ScrollTrigger);

    const whiteRef = useRef();
    const topRef = useRef();
    const midRef = useRef();
    const botRef = useRef();
    const sectionsRef = useRef();
    const descriptionRef = useRef();
    const scrollRef = useRef();

    useGSAP(() => {
        let tl = gsap.timeline({ delay: 0.4 })

        gsap.set([
            topRef.current, midRef.current, botRef.current, scrollRef.current,
        ], { opacity: 1, y: 0 });

        // seperate three lines
        tl.from(topRef.current, {
            duration: 1.4, opacity: 0.8, ease: Power2.easeInOut,
        }).from(midRef.current, {
            duration: 1.4, opacity: 0.8, y: "-11.78vw", ease: Power2.easeInOut,
        }, 0).from(botRef.current, {
            duration: 1.4, opacity: 0.8, y: "-23.50vw", ease: Power2.easeInOut,
            // fade out white overlay text
        }, 0).from(whiteRef.current, {
            duration: 0.8, opacity: 1, ease: Power2.easeInOut,
            // slide top and bottom lines
        }, 0).to(topRef.current, {
            duration: 1.4, marginRight: 100, ease: Power2.easeInOut,
        }).to(botRef.current, {
            duration: 1.4, marginLeft: 100, ease: Power2.easeInOut,
            // fade in + move sections
        }, "<").from(sectionsRef.current, {
            duration: 1.4, x: 50, opacity: 0, ease: Power2.easeInOut,
            // });
            // fade in + move description
        }, "<").from(descriptionRef.current, {
            duration: 1.4, x: -50, opacity: 0, ease: Power2.easeInOut,
        }, "<").from(scrollRef.current, {
            duration: 1.4, y: -50, opacity: 0, ease: Power2.easeInOut,
        });
    });

    return (
        <div className="splash-container">
            <div className="splash-top">
                <div className="title-container">
                    <div className="white" ref={whiteRef}>HI, I'M RYAN.</div>
                    <div className="top" ref={topRef}>HI, I'M RYAN.</div>
                    <div className="middle" ref={midRef}>HI, I'M RYAN.</div>
                    <div className="bottom" ref={botRef}>HI, I'M RYAN.</div>
                </div>
                {
                    !isSmallScreen && (
                        <div className="sections-container" ref={sectionsRef}>
                            <Section sectionRef={worksRef}>Works</Section>
                            <Section sectionRef={aboutRef}>About</Section>
                            <Section sectionRef={videosRef}>Videos</Section>
                            {/* <Section center={true} sectionRef={musicRef}>Music</Section> */}
                            {/* <Section sectionRef={footerRef}>Contact</Section> */}
                        </div>
                    )
                }
            </div>
            <div className="description" ref={descriptionRef}>
                Software developer always looking to learn, explore, and grow.<br /><br />
                Looking for work!
            </div>
            <div
                className="scroll"
                ref={scrollRef}
            >
                scroll...
            </div>
        </div>
    )
}

export default Splash;
