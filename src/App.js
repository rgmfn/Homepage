import React, { useState, useEffect } from 'react'

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

    return (
        <div>
            <Splash
                isSmallScreen={isSmallScreen}
            />
            <Works isSmallScreen={isSmallScreen} />
            <About />
            <Videos />
            {/* <Music musicRef={musicRef} /> */}
            <Footer />
        </div>
    );
}

export default App;
