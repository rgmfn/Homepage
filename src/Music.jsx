import React, { useEffect } from 'react';

import './Music.css'

/**
 * A hyperlink element for a specified music service.
 *
 * @param {string} name - the name of the service linked to
 * @param {string} img - the image for the service linked to
 * @param {string} href - the address of the service linked to
 * @param {array} description - the description of the service linked to
 *
 * @return {object} JSX
 */
const MusicLink = ({ name, img, href, children: description }) => (
    <a
        className="music-link"
        href={href}
    >
        <img className="link-img" src={img} alt={`${name} link`} />
        <div className="link-text">
            <h2 className="link-name">{name}</h2>
            <p className="link-description">{description}</p>
        </div>
    </a>
);

/**
 * Component representing the music section of the webpage.
 *
 * @return {object} JSX
 */
function Music() {

    /*
     * Sets the volume of all of the audio elements to 60%.
     */
    useEffect(() => {
        document.getElementById("blta 1").volume = 0.6;  // be like this always 1
        document.getElementById("blta 2").volume = 0.6;  // be like this always 2
        document.getElementById("four 1").volume = 0.6;  // four 1
    });

    return (
        <div
            id="music" // example of connecting up reference to element
            className="music-container"
        >
            <h1 className="title">Music</h1>
            <div className="music-box">
                <MusicLink
                    name="SoundCloud"
                    href="https://soundcloud.com/user-439843206"
                    img="/images/soundcloud.jpg"
                >
                    Acapella and instrumental covers and original songs.
                </MusicLink>
                <MusicLink
                    name="YouTube"
                    href="https://www.youtube.com/@RagamuffinAround"
                    img="/images/youtube.jpg"
                >
                    French Horn multitracks and electronic music.
                </MusicLink>
                <div className="coming-soon">
                    <h2>Coming Soon</h2>
                    <audio controls id="blta 1">
                        <source src="/audio/be like this always wip 1.wav" type="audio/wav" />
                    </audio>
                    <audio controls id="blta 2">
                        <source src="/audio/be like this always wip 2.wav" type="audio/wav" />
                    </audio>
                    <audio controls id="four 1">
                        <source src="/audio/four wip 1.wav" type="audio/wav" />
                    </audio>
                </div>
            </div>
        </div>
    )
}

export default Music;
