import React from 'react'

import Empty from './Empty';

/**
 *
 */
function Footer({ footerRef }) {
    return (
        <div ref={footerRef}>
            <div>Footer</div>
            <Empty />
        </div>
    )
}

export default Footer;
