import { useGSAP } from '@gsap/react';
import gsap, { Power2 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

import './Videos.css'

const Video = ({ videoCode }) => (
    <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoCode}`}
        className="react-player"
    />
    // <div className="video-container">
    //   <iframe
    //     width="560"
    //     height="315"
    //     src={`https://www.youtube.com/embed/${videoCode}`}
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowFullScreen
    //   ></iframe>
    // </div>
);

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
            <div className="videos-box">
                <Video videoCode="HFzpkD5JvJk" />
                <Video videoCode="Xk6SK1OAn4c" />
            </div>
        </div>
    )
}

export default Videos;
