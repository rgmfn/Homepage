import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import YouTube from 'react-youtube';

import './Videos.css'

const Video = ({ videoCode }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <YouTube
            videoId={videoCode}
            opts={opts}
        />
    )
};

/**
 * TODO make this really small, should fit in less than a screen
 */
function Videos({ videosRef }) {
    gsap.registerPlugin(ScrollTrigger);

    const circleRef1 = useRef();
    const circleRef2 = useRef();
    const circleRef3 = useRef();
    const circleRef4 = useRef();
    const circleRef5 = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: circleRef1.current,
                start: 'top 60%',
                toggleActions: "play none pause reverse",
            }
        });

        gsap.set([
            circleRef1.current,
            circleRef2.current,
            circleRef3.current,
            circleRef4.current,
            circleRef5.current,
        ], { y: 0 })

        tl.from(circleRef1.current, {
            duration: 1, opacity: 0, y: 50, ease: "elastic",
        }).from(circleRef2.current, {
            duration: 1, opacity: 0, y: 50, ease: "elastic",
        }, "-=75%").from(circleRef3.current, {
            duration: 1, opacity: 0, y: 50, ease: "elastic",
        }, "-=75%").from(circleRef4.current, {
            duration: 1, opacity: 0, y: 50, ease: "elastic",
        }, "-=75%").from(circleRef5.current, {
            duration: 1, opacity: 0, y: 50, ease: "elastic",
        }, "-=75%");
    });

    return (
        <div className="videos-container" ref={videosRef}>
            <div className="seperator-container">
                <div className="circle" ref={circleRef1} />
                <div className="circle" ref={circleRef2} />
                <div className="circle" ref={circleRef3} />
                <div className="circle" ref={circleRef4} />
                <div className="circle" ref={circleRef5} />
            </div>
            <h1 className="title">Videos</h1>
            <Video videoCode="HFzpkD5JvJk" />
        </div>
    )
}

export default Videos;
