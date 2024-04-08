import React from 'react';

import './Works.css'

const Work = () => (
    <div>

    </div>
);

/**
 * TODO
 */
function Works({ worksRef }) {
    return (
        <div className="works-container" ref={worksRef}>
            <h1 className="title">Works</h1>
        </div>
    )
}

export default Works;
