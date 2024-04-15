import React, { useRef, useState, useEffect } from 'react'

import Splash from './Splash'
import Works from './Works'
import About from './About'
import Videos from './Videos'
// import Music from './Music'
import Footer from './Footer'

import './App.css'

const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return width;
};

function App() {
    const SMALL_SCREEN_SIZE = 900;
    // Getting the window width as state
    const [isSmallScreen, setIsSmallScreen] = useState(getWindowWidth() <= SMALL_SCREEN_SIZE);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(getWindowWidth() <= SMALL_SCREEN_SIZE);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // website section references
    const worksRef = useRef();
    const aboutRef = useRef();
    const videosRef = useRef();
    // const musicRef = useRef();
    const footerRef = useRef();

    return (
        <div>
            <Splash
                worksRef={worksRef}
                aboutRef={aboutRef}
                videosRef={videosRef}
                // musicRef={musicRef}
                footerRef={footerRef}
                isSmallScreen={isSmallScreen}
            />
            <Works worksRef={worksRef} isSmallScreen={isSmallScreen} />
            <About aboutRef={aboutRef} />
            <Videos videosRef={videosRef} />
            {/* <Music musicRef={musicRef} /> */}
            <Footer footerRef={footerRef} />
        </div>
    );
}

export default App;
