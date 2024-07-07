import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import './Works.css'

/**
 * Component representing a work on a large screen.
 * When hovering over the image, the image fades and shows the description text (children).
 *
 * @param {string} name - the name of the work
 * @param {string} stack - the list of technologies used to make the work
 * @param {string} href - the link to the work (if applicable)
 * @param {string} src - the source of the image for the work
 * @param {array} description - the description of the work
 *
 * @return {object} JSX
 */
const BigWork = ({ name, stack, href, src, children: description }) => (
    <a
        className="work"
        href={href}
    >
        <div className="work-img-container">
            <div className="work-img-wrapper">
                <div className="work-description">
                    {description}
                </div>
                <img className="work-img" src={src} alt={`${name} img`} />
            </div>
        </div>
        <div className="work-info">
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
 * Component representing a work on a small screen.
 * A static element with an image and description below it. When clicked on goes to href.
 *
 * @param {string} name - the name of the work
 * @param {string} stack - the list of technologies used to make the work
 * @param {string} href - the link to the work (if applicable)
 * @param {string} src - the source of the image for the work
 * @param {array} children - the description of the work
 *
 * @return {object} JSX
 */
const SmallWork = ({ name, stack, href, src, children }) => (
    <a
        className="work"
        href={href}
        target="_blank"
        rel="noreferrer"
    >
        <div className="work-footer">
            <div className="work-name">
                {name}
            </div>
            <div className="work-stack">
                {stack}
            </div>
        </div>
        <img
            className="work-img"
            src={src}
            alt={`${name} img`}
        />
        <div className="work-info-dropdown">
            {children}
        </div>
    </a>
);

/**
 * Component representing the works section of the webpage.
 *
 * @param {boolean} isSmallScreen - if the width of the screen is considered small
 *                                  as defined in App.js
 *
 * @return {object} JSX
 */
function Works({ isSmallScreen }) {
    // needed to have elements react to being scrolled past
    gsap.registerPlugin(ScrollTrigger);

    // set up references used to target elements for gsap animations
    const diamondRef1 = useRef();
    const diamondRef2 = useRef();
    const diamondRef3 = useRef();
    const diamondRef4 = useRef();
    const diamondRef5 = useRef();

    // picks if the works are on a small or big screen
    const Work = isSmallScreen ? SmallWork : BigWork;

    /**
     * Animates all the elements appearing in the splash animation.
     */
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                // timeline triggered when the top of the diamonds
                // are 75% down the screen
                trigger: diamondRef1.current,
                start: 'top 75%',
                // reverse the animation when you scroll up the page past it
                toggleActions: "play none pause reverse",
            }
        });

        tl.from(diamondRef1.current, { // animate diamond1
            duration: 1, // animation lasts 1 second
            scale: 0,    // starts at scale 0 (moves to 1)
            rotate: 0,   // starts at rotation 0 (moves to 45deg, defined in Works.css .diamond)
        })

            .from(diamondRef2.current, {
                duration: 1,
                scale: 0,
                rotate: 0,
            }, "-=75%") // start the animation 25% into the previous animation

            .from(diamondRef3.current, {
                duration: 1,
                scale: 0,
                rotate: 0,
            }, "-=75%")

            .from(diamondRef4.current, {
                duration: 1,
                scale: 0,
                rotate: 0,
            }, "-=75%")

            .from(diamondRef5.current, {
                duration: 1,
                scale: 0,
                rotate: 0,
            }, "-=75%")
            ;

    });

    return (
        <div
            id="works" // allows section to be referenced at adrress /#works
            className="works-container"
        >
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
                    isScreenSmall={isSmallScreen}
                >
                    An Android app for tracking your habits.
                    <p>Initial release coming soon!</p>
                </Work>
                <Work
                    name="Drum Corpsdle"
                    src="/images/drumcorpsdle.png"
                    href="https://drumcorpsdle.netlify.app"
                    stack="React, MaterialUI"
                    isScreenSmall={isSmallScreen}
                >
                    A wordle game for Drum Corps.
                    <p>Featuring DCI's top 12 groups from the years 2000-2018, 2021-2022.</p>
                </Work>
                <Work
                    name="Corg"
                    src="/images/corg.png"
                    href="https://github.com/rgmfn/corg"
                    stack="C, ncurses"
                    isScreenSmall={isSmallScreen}
                >
                    <p>An emacs org-file reader and writer written with ncurses in C.</p>
                </Work>
                <Work
                    name="Spotify Tags"
                    src="/images/spotifytags.png"
                    href="https://github.com/rgmfn/spotify-tags"
                    stack="React, Material UI, Express.js, Node.js, PostgresQL"
                    isScreenSmall={isSmallScreen}
                >
                    A browser music streaming platform that allows for dynamic playlist creating with a tag system through use of the Spotify Web API.
                    <p>Developed for a class on a team of 6 using Scrum.</p>
                </Work>
            </div>
        </div>
    )
}

export default Works;
