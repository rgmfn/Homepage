import React, { useRef } from 'react'

import Splash from './Splash'
import Works from './Works'
import About from './About'
import Videos from './Videos'
import Music from './Music'
import Footer from './Footer'

import './App.css'

function App() {
    const worksRef = useRef();
    const aboutRef = useRef();
    const videosRef = useRef();
    const musicRef = useRef();
    const footerRef = useRef();

    return (
        <div>
            <Splash
                worksRef={worksRef}
                aboutRef={aboutRef}
                videosRef={videosRef}
                musicRef={musicRef}
                footerRef={footerRef}
            />
            <Works worksRef={worksRef} />
            <About aboutRef={aboutRef} />
            <Videos videosRef={videosRef} />
            {/* <Music musicRef={musicRef} /> */}
            <Footer footerRef={footerRef} />
        </div>
    );
}

export default App;
