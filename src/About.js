import React from 'react'

import Empty from './Empty'

function About({ aboutRef }) {
    return (
        <div ref={aboutRef}>
            <div>About</div>
            <Empty />
        </div>
    )
}

export default About;
