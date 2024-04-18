import { useGSAP } from '@gsap/react';
import gsap, { Power2 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import './About.css'

/**
 * Component representing the about section of the webpage.
 *
 * @return {object} JSX
 */
function About() {
    // needed to have elements react to being scrolled past
    gsap.registerPlugin(ScrollTrigger);

    // set up references used to target elements for gsap animations
    const triangleRef1 = useRef();
    const triangleRef2 = useRef();
    const triangleRef3 = useRef();
    const triangleRef4 = useRef();
    const triangleRef5 = useRef();

    /**
     * Animates all the elements appearing in the splash animation.
     */
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                // timeline triggered when the top of the triangles
                // are 60% down the screen
                trigger: triangleRef1.current,
                start: 'top 60%',
                // reverse the animation when you scroll up the page past it
                toggleActions: "play none pause reverse",
            }
        });

        tl.from(triangleRef3.current, { // animate triangle3
            duration: 1,          // animation lasts 1 second
            y: -50,               // y position starts at -50 (goes to 0)
            opacity: 0,           // opacity starts at 0 (goes to 1)
            ease: Power2.easeOut, // animation eases in and out
        })

            .from(triangleRef2.current, {
                duration: 1,
                y: 50, // y position starts at 50 (goes to 0)
                opacity: 0,
                ease: Power2.easeOut,
            }, "-=60%") // animation starts 40% into previous animation

            .from(triangleRef4.current, {
                duration: 1,
                y: 50, // y position starts at 50 (goes to 0)
                opacity: 0,
                ease: Power2.easeOut,
            }, "-=60%")

            .from(triangleRef1.current, {
                duration: 1,
                x: -50, // x position starts at -50 (goes to 0)
                opacity: 0,
                ease: Power2.easeOut,
            }, "-=60%")

            .from(triangleRef5.current, {
                duration: 1,
                x: 50, // x position starts at 50 (goes to 0)
                opacity: 0,
                ease: Power2.easeOut,
            }, "-=60%");
    });

    return (
        <div
            id="about" // example of connecting up reference to element
            className="about-container"
        >
            <div className="seperator-container">
                <div className="triangle" ref={triangleRef1} />
                <div className="triangle" ref={triangleRef2} />
                <div className="triangle" ref={triangleRef3} />
                <div className="triangle" ref={triangleRef4} />
                <div className="triangle" ref={triangleRef5} />
            </div>
            <h1 className="title">About</h1>
            <div className="about-name">Ryan Gragg</div>
            <div className="about">
                <div className="headshot-container">
                    <img src="/images/headshot.png" alt="headshot" />
                </div>
                <div className="bio">
                    <p>Software developer looking for simple and effective solutions to real world problems. Has leadership experience through his 10+ years involved with music and 8+ years programming.</p>
                    <p>Ryan is driven by a desire to create, whether that be music, programs, food, or videos. He always tries to take a smart approach, and produce the best version possible.</p>
                </div>
            </div>
            <div className="college">
                <em>University of California, Santa Cruz</em>
                <p>Computer Science B.S.</p>
                <p>3.96 GPA</p>
                <p>September 2019 - June 2023</p>
            </div>
        </div>
    )
}

export default About;
