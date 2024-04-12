import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import './Works.css'

const Work = ({ name, stack, href, src, children }) => (
    <a
        className="work"
        href={href}
    >
        <img className="work-img" src={src} alt={`${name} img`} />
        <div className="work-info">
            {children}
        </div>
        <div className="work-footer">
            <div className="work-name">
                {name}
            </div>
            <div className="work-stack">
                {stack}
            </div>
        </div>
    </a>
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
                start: 'top 75%',
                toggleActions: "play none pause reverse",
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
                    name="Habit Forming"
                    src="/images/habit forming prerelease.png"
                    stack="Kotlin, Jetpack Compose"
                >
                    An Android app for tracking your habits.
                    <p>Initial release coming soon!</p>
                </Work>
                <Work
                    name="Drum Corpsdle"
                    src="/images/drumcorpsdle.png"
                    href="https://drumcorpsdle.netlify.app"
                    stack="React, MaterialUI"
                >
                    A wordle game for Drum Corps.
                    <p>Featuring DCI's top 12 groups from the years 2000-2018, 2021-2022.</p>
                </Work>
                <Work
                    name="Corg"
                    src="/images/corg.png"
                    href="https://github.com/rgmfn/corg"
                    stack="C, ncurses"
                >
                    An emacs org-file reader and writer written with ncurses in C.
                </Work>
                <Work
                    name="Spotify Tags"
                    src="/images/spotifytags.png"
                    href="https://github.com/rgmfn/spotify-tags"
                    stack="React, Material UI, Express.js, Node.js, PostgresQL"
                >
                    A browser music streaming platform that allows for dynamic playlist creating with a tag system through use of the Spotify Web API.
                    <p>Developed for a class on a team of 6 using Scrum.</p>
                </Work>
            </div>
        </div>
    )
}

export default Works;
