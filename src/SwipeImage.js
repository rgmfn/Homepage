import { gsap, Power2 } from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

import './SwipeImage.css'
import { useRef } from "react";

/**
 * TODO
 */
function SwipeImage({ src, alt }) {
    gsap.registerPlugin(ScrollTrigger)

    const imageRef = useRef();
    const coverRef = useRef();

    // initialize where animations start
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: coverRef.current,
            toggleActions: "play none pause reverse",
            start: "top center",
        }
    });

    useGSAP(() => {
        tl.to(coverRef.current, {
            duration: 1.4, width: "0%", ease: Power2.easeInOut,
        }).from(imageRef.current, {
            duration: 1.4, scale: 1.6, ease: Power2.easeInOut, delay: -1.6
        });
    });

    return (
        <div className="img-container">
            <img
                ref={imageRef}
                src={src}
                alt={alt}
            />
            <div className="cover" ref={coverRef} />
        </div>
    )
}

export default SwipeImage;
