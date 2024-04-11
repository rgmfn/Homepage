import { useGSAP } from '@gsap/react';
import gsap, { Power2 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import './About.css'

import Empty from './Empty'

function About({ aboutRef }) {
    gsap.registerPlugin(ScrollTrigger);

    const triangleRef1 = useRef();
    const triangleRef2 = useRef();
    const triangleRef3 = useRef();
    const triangleRef4 = useRef();
    const triangleRef5 = useRef();


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triangleRef1.current,
                start: 'top 60%',
                toggleActions: "play none pause reverse",
            }
        });

        gsap.set([
            triangleRef1.current,
            triangleRef2.current,
            triangleRef3.current,
            triangleRef4.current,
            triangleRef5.current,
        ], { x: 0, y: 0, opacity: 1 })

        tl.from(triangleRef3.current, {
            duration: 1, y: -50, opacity: 0, ease: Power2.easeOut,
        }, "-=60%").from(triangleRef2.current, {
            duration: 1, y: 50, opacity: 0, ease: Power2.easeOut,
        }, "-=60%").from(triangleRef4.current, {
            duration: 1, y: 50, opacity: 0, ease: Power2.easeOut,
        }, "-=60%").from(triangleRef1.current, {
            duration: 1, x: -50, opacity: 0, ease: Power2.easeOut,
        }, "-=60%").from(triangleRef5.current, {
            duration: 1, x: 50, opacity: 0, ease: Power2.easeOut,
        }, "-=60%");
    });

    return (
        <div className="about-container" ref={aboutRef}>
            <div className="seperator-container">
                <div className="triangle" ref={triangleRef1} />
                <div className="triangle" ref={triangleRef2} />
                <div className="triangle" ref={triangleRef3} />
                <div className="triangle" ref={triangleRef4} />
                <div className="triangle" ref={triangleRef5} />
            </div>
            <h1 className="title">About</h1>
            <Empty />
        </div>
    )
}

export default About;
