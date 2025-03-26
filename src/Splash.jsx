import React, { useRef } from 'react';
import gsap, { Power2 } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './Splash.css'

/**
 * A link to an upcoming section of the webpage.
 *
 * @param {string} href - the link to the section (#section-name)
 * @param {array} children - the name of the section
 *
 * @return {object} JSX
 */
const Section = ({ href, children }) => (
    <a
        className="section"
        href={href}
    >
        {children}
    </a>
);

/**
 * Component representing the splash section of the webpage
 * (the first section).
 *
 * @param {boolean} isSmallScreen - if the width of the screen is considered small
 *                                  as defined in App.js
 *
 * @return {object} JSX
 */
function Splash({ isSmallScreen }) {
    // needed to have elements react to being scrolled past
    gsap.registerPlugin(ScrollTrigger);

    // set up references used to target elements for gsap animations
    const whiteRef = useRef();
    const topRef = useRef();
    const midRef = useRef();
    const botRef = useRef();
    const sectionsRef = useRef();
    const descriptionRef = useRef();
    const arrowRef = useRef();

    /**
     * Animates all the elements appearing in the splash animation.
     */
    useGSAP(() => {
        let tl = gsap.timeline()

        /*
         * There are 4 copies of the `HI, I'M RYAN.` text.
         * whiteRef (the white version),
         * topRef (the top/red version),
         * midRef (the middle/green version), and
         * botRef (the bottom/blue version).
         */

        // fade out the white text
        tl.from(whiteRef.current, { // animate whiteRef (the white `HI, I'M RYAN.`)
            duration: 0.8,
            opacity: 1,
            delay: 1,
            ease: Power2.easeInOut,
        })

            // fade in topRef
            .from(topRef.current, { // animate topRef (the top `HI, I'M RYAN.`)
                duration: 1.4,          // animation lasts 1.4 seconds
                opacity: 0.8,           // topRef starts at 0.8 opacity (goes to 1)
                ease: Power2.easeInOut, // ease transition in and out
            }, "<")

            // fade in midRef and move it out from behind topRef
            .from(midRef.current, {
                duration: 1.4,
                opacity: 0.8,
                y: "-99%",
                // y: "-11.78vw", // magic number that positions midRef behind topRef
                ease: Power2.easeInOut,
            }, "<")  // no delay, play with previous animation

            // fade in botRef and move it out from behind topRef
            .from(botRef.current, {
                duration: 1.4,
                opacity: 0.8,
                y: "-200%",
                // y: "-23.50vw", // magic number that positions botRef behind topRef
                ease: Power2.easeInOut,
            }, "<")

            // move top `HI, I'M RYAN.` over
            .to(topRef.current, {
                duration: 1.4,
                marginRight: 100, // grow the right margin (moving the text left)
                ease: Power2.easeInOut,
            }) // no position argument (ie "<"), wait for previous animations to finish

            // move bottom `HI, I'M RYAN.` over
            .to(botRef.current, {
                duration: 1.4,
                marginLeft: 100, // grow the left margin (moving the text right)
                ease: Power2.easeInOut,
            }, "<")

            // fade in + move sections
            .from(sectionsRef.current, {
                duration: 1.4,
                x: 50, // start at x position 50 (goes to 0)
                opacity: 0,
                ease: Power2.easeInOut,
            }, "<")

            // fade in and move in description (`Software developer ...`)
            .from(descriptionRef.current, {
                duration: 1.4,
                x: -50, // start at x position -50 (goes to 0)
                opacity: 0,
                ease: Power2.easeInOut,
            }, "<")

            // grow arrow body
            .from(arrowRef.current, {
                duration: 1,
                height: 0,
                ease: Power2.easeInOut,
            })

            // fade out arrow when scrolling away
            .to(arrowRef.current, {
                scrollTrigger: {
                    trigger: arrowRef.current,
                    scrub: true,
                },
                opacity: 0,
            })
            ;
    });

    return (
        <div className="splash-container">
            <div className="splash-top">
                <div className="title-container">
                    <div
                        className="white"
                        ref={whiteRef} // example of connecting up reference to element
                    >
                        HI, I'M RYAN.
                    </div>
                    <div className="top" ref={topRef}>HI, I'M RYAN.</div>
                    <div className="middle" ref={midRef}>HI, I'M RYAN.</div>
                    <div className="bottom" ref={botRef}>HI, I'M RYAN.</div>
                </div>
                {
                    // only renders the sections-container if the screen is
                    // not small (< 900px)
                    !isSmallScreen && (
                        <div className="sections-container" ref={sectionsRef}>
                            <Section href="#works">Works</Section>
                            <Section href="#about">About</Section>
                            <Section href="#videos">Videos</Section>
                            {/* <Section center={true} href="#music">Music</Section> */}
                            {/* <Section sectionRef={footerRef}>Contact</Section> */}
                        </div>
                    )
                }
            </div>
            <div className="description" ref={descriptionRef}>
                Software developer always looking to learn, explore, and grow.<br /><br />
            </div>
            <div className="arrow" ref={arrowRef}>
                <div className="body" />
                <div className="tip" />
            </div>
        </div>
    )
}

export default Splash;
