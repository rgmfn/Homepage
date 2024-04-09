import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import './Works.css'

const Work = ({ children, src }) => (
    <div
        className="work"
    >
        <img className="work-img" src={src} />
        {children}
    </div>
);

/**
 * TODO
 */
function Works({ worksRef }) {
    gsap.registerPlugin(ScrollTrigger);

    const diamondRef1 = useRef();
    const diamondRef2 = useRef();
    const diamondRef3 = useRef();
    const diamondRef4 = useRef();
    const diamondRef5 = useRef();


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: diamondRef1.current,
                start: 'bottom bottom',
            }
        });

        gsap.set([
            diamondRef1.current,
            diamondRef2.current,
            diamondRef3.current,
            diamondRef4.current,
            diamondRef5.current,
        ], { scale: 1 })

        tl.from(diamondRef1.current, {
            duration: 1, scale: 0, rotate: 0,
        }).from(diamondRef2.current, {
            duration: 1, scale: 0, rotate: 0,
        }, "-=75%").from(diamondRef3.current, {
            duration: 1, scale: 0, rotate: 0,
        }, "-=75%").from(diamondRef4.current, {
            duration: 1, scale: 0, rotate: 0,
        }, "-=75%").from(diamondRef5.current, {
            duration: 1, scale: 0, rotate: 0,
        }, "-=75%");
    });

    return (
        <div className="works-container" ref={worksRef}>
            <div className="seperator-container">
                <div className="diamond" ref={diamondRef1} />
                <div className="diamond" ref={diamondRef2} />
                <div className="diamond" ref={diamondRef3} />
                <div className="diamond" ref={diamondRef4} />
                <div className="diamond" ref={diamondRef5} />
            </div>
            <h1 className="title">Works</h1>
            <div className="works-grid">
                <Work
                    src="/images/habit forming prerelease.png"
                >
                    Habit Forming
                </Work>
                <Work
                    src="/images/drumcorpsdle.png"
                >
                    Drum Corpsdle
                </Work>
                <Work
                    src="/images/corg.png"
                >
                    Corg
                </Work>
                <Work
                    src="/images/spotifytags.png"
                >
                    Spotify Tags
                </Work>
            </div>
        </div>
    )
}

export default Works;
