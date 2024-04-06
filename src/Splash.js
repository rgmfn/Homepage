import React, { useRef } from 'react';
import gsap, { Power2 } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './Splash.css'

/**
 * TODO
 */
function Splash() {
    gsap.registerPlugin(ScrollTrigger)

    const whiteRef = useRef();
    const topRef = useRef();
    const midRef = useRef();
    const botRef = useRef();
    const sectionsRef = useRef();

    let tl = gsap.timeline({ delay: 0.4 })

    useGSAP(() => {
        gsap.set([topRef.current, midRef.current, botRef.current], { opacity: 1, y: 0 });

        tl.from(topRef.current, {
            duration: 1.4, opacity: 0.8, ease: Power2.easeInOut,
        }).from(midRef.current, {
            duration: 1.4, opacity: 0.8, y: -146, ease: Power2.easeInOut,
        }, 0).from(botRef.current, {
            duration: 1.4, opacity: 0.8, y: -294, ease: Power2.easeInOut,
        }, 0).from(whiteRef.current, {
            duration: 0.8, opacity: 1, ease: Power2.easeInOut,
        }, 0).to(topRef.current, {
            duration: 1.4, marginRight: 100, ease: Power2.easeInOut,
        }).to(botRef.current, {
            duration: 1.4, marginLeft: 100, ease: Power2.easeInOut,
        }, "<");
    });

    return (
        <div className="splash-container">
            <div className="splash-top">
                <div className="splash-left">
                    <img id="logo" src="/images/icon.png" />
                    <div className="title-container">
                        <div className="white name" ref={whiteRef}>HI, I'M RYAN.</div>
                        <div className="top name" ref={topRef}>HI, I'M RYAN.</div>
                        <div className="middle name" ref={midRef}>HI, I'M RYAN.</div>
                        <div className="bottom name" ref={botRef}>HI, I'M RYAN.</div>
                    </div>
                </div>
                <div className="sections-container" ref={sectionsRef}>
                    <div className="section">Works</div>
                    <div className="section">About</div>
                    <div className="section">Videos</div>
                    <div className="section">Music</div>
                    <div className="section">Contact</div>
                </div>
            </div>
            <div className="flavor-text">
                Software developer always looking to learn, explore, and grow.<br /><br />
                Looking for work!
            </div>
        </div>
    )
}

export default Splash;
