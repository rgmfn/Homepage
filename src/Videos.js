import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import YouTube from 'react-youtube';

import './Videos.css'

/**
 * A YouTube video.
 *
 * @param {string} videoId - the video ID of the YouTube video, found
 *                           after watch?v= on YouTube videos
 *
 * @return {object} JSX
 */
const Video = ({ videoId }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <YouTube
            videoId={videoId}
            opts={opts}
        />
    )
};

/**
 * Component representing the videos section of the webpage.
 *
 * @return {object} JSX
 */
function Videos() {
    gsap.registerPlugin(ScrollTrigger);

    const circleRef1 = useRef();
    const circleRef2 = useRef();
    const circleRef3 = useRef();
    const circleRef4 = useRef();
    const circleRef5 = useRef();

    /**
     * Animates the bouncing circles that appear when you scroll to the videos section.
     */
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                // start the animation when the top of the circles are 60% down the screen
                trigger: circleRef1.current,
                start: 'top 60%',
                // reverse the animation when you scroll up the page past it
                toggleActions: "play none pause reverse",
            }
        });

        tl.from(circleRef1.current, {  // animate circle1
            duration: 1,      // animation lasts 1 second
            opacity: 0,       // opacity starts at 0 (goes to 1)
            y: 50,            // y position starts at 50 (goes to 0)
            ease: "elastic",  // bounces into place when it arrives
        })
            .from(circleRef2.current, {
                duration: 1,
                opacity: 0,
                y: 50,
                ease: "elastic",
            }, "-=75%") // start the animation 25% into the previous animation

            .from(circleRef3.current, {
                duration: 1,
                opacity: 0,
                y: 50,
                ease: "elastic",
            }, "-=75%")

            .from(circleRef4.current, {
                duration: 1,
                opacity: 0,
                y: 50,
                ease: "elastic",
            }, "-=75%")

            .from(circleRef5.current, {
                duration: 1,
                opacity: 0,
                y: 50,
                ease: "elastic",
            }, "-=75%");
    });

    return (
        <div
            id="videos" // example of connecting up reference to element
            className="videos-container"
        >
            <div className="seperator-container">
                <div className="circle" ref={circleRef1} />
                <div className="circle" ref={circleRef2} />
                <div className="circle" ref={circleRef3} />
                <div className="circle" ref={circleRef4} />
                <div className="circle" ref={circleRef5} />
            </div>
            <h1 className="title">Videos</h1>
            <div className="videos-box">
                <Video
                    videoCode="HFzpkD5JvJk" // Advent of 2023 Day 1
                />
                <Video
                    videoCode="Xk6SK1OAn4c" // Advent of 2023 Day 2
                />
            </div>
        </div>
    )
}

export default Videos;
