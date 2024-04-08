import React from 'react';

import Empty from './Empty';

/**
 * TODO make this really small, should fit in less than a screen
 */
function Videos({ videosRef }) {
    return (
        <div ref={videosRef}>
            <div>Videos</div>
            <Empty />
        </div>
    )
}

export default Videos;
