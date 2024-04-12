import React, { useEffect } from 'react';

import './Music.css'

const MusicLink = ({ name, img, link, children }) => (
    <a
        className="music-link"
        href={link}
    >
        <img className="link-img" src={img} alt={`${name} link`} />
        <div className="link-text">
            <h2 className="link-name">{name}</h2>
            <p className="link-description">{children}</p>
        </div>
    </a>
);

/**
 * TODO make this really small, should fit in less than a screen
 */
function Music({ musicRef }) {

    useEffect(() => {
        document.getElementById("blta 1").volume = 0.6;
        document.getElementById("blta 2").volume = 0.6;
        document.getElementById("four 1").volume = 0.6;
    });

    return (
        <div className="music-container" ref={musicRef}>
            <h1 className="title">Music</h1>
            <div className="music-box">
                <MusicLink
                    name="SoundCloud"
                    link="https://soundcloud.com/user-439843206"
                    img="/images/soundcloud.jpg"
                >
                    Acapella and instrumental covers and original songs.
                </MusicLink>
                <MusicLink
                    name="YouTube"
                    link="https://www.youtube.com/@RagamuffinAround"
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
