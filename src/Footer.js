import React from 'react'

import './Footer.css'

const Link = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="link"
    >
        {children}
    </a>
);

/**
 *
 */
function Footer({ footerRef }) {
    return (
        <div className="footer-container" ref={footerRef}>
            <hr className="seperator" />
            <div className="contacts">
                <div className="email">
                    <Link href="mailto:rgmfn.dev@gmail.com">Email</Link>
                    {/*<div>rgmfn.dev@gmail.com</div>*/}
                </div>
                <Link href="https://www.linkedin.com/in/rgmfn/">LinkedIn</Link>
                <Link href="https://github.com/rgmfn">Github</Link>
                <Link href="https://www.youtube.com/@RagamuffinAround">Youtube</Link>
                <Link href="https://github.com/rgmfn/Homepage">Source Code</Link>
            </div>
            <div className="made-in">Made in React</div>
        </div>
    )
}

export default Footer;
