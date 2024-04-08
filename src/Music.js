import React from 'react';

import Empty from './Empty';

/**
 * TODO make this really small, should fit in less than a screen
 */
function Music({ musicRef }) {
    return (
        <div ref={musicRef}>
            <div>Music</div>
            <Empty />
        </div>
    )
}

export default Music;
