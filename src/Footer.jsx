import React from 'react'

import './Footer.css'

/**
 * A link to an external site.
 *
 * @param {string} href - address the link goes to
 *
 * @return {object} JSX
 */
const Link = ({ href, children: name }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="link"
    >
        {name}
    </a>
);

/**
 * Component representing the works section of the webpage.
 *
 * @return {object} JSX
 */
function Footer() {
    return (
        <div
            className="footer-container"
        >
            <hr className="seperator" />
            <div className="contacts">
                <div className="email">
                    <Link href="mailto:rgmfn.dev@gmail.com">Email</Link>
                    {/*<div>rgmfn.dev@gmail.com</div>*/}
                </div>
                <div className="footer-div" />
                <Link href="https://www.linkedin.com/in/rgmfn/">LinkedIn</Link>
                <div className="footer-div" />
                <Link href="https://github.com/rgmfn">Github</Link>
                <div className="footer-div" />
                <Link href="https://www.youtube.com/@RagamuffinAround">Youtube</Link>
                <div className="footer-div" />
                <Link href="https://github.com/rgmfn/Homepage">Source Code</Link>
            </div>
            <div className="made-with">Made with React</div>
        </div>
    )
}

export default Footer;
