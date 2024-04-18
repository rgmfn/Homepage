import React, { useState, useEffect } from 'react'

import Splash from './Splash'
import Works from './Works'
import About from './About'
import Videos from './Videos'
// import Music from './Music'
import Footer from './Footer'

import './App.css'

/**
 * Gets the width of the view window.
 *
 * @return {int} the width of the view window
 */
const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return width;
};

/**
 * Component representing the webpage.
 *
 * @return {object} JSX
 */
function App() {
    const SMALL_SCREEN_SIZE = 900;
    // state for if the window width is considered a small screen size
    const [isSmallScreen, setIsSmallScreen] = useState(getWindowWidth() <= SMALL_SCREEN_SIZE);

    useEffect(() => {
        // sets if the screen is considered small or not based on the window width
        const handleResize = () => {
            setIsSmallScreen(getWindowWidth() <= SMALL_SCREEN_SIZE);
        }

        // connects the handleResize function to the resizing of the screen
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
