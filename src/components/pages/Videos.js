import { Typography } from '@mui/material';
import React, { useLayoutEffect } from 'react';

function Videos() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '60%',
                }}
            >
                <Typography
                    style={{
                        marginTop: 50,
                        marginBottom: 10,
                        textAlign: 'center',
                    }}
                    variant='h4'
                >
                    Advent of Code 2023 in Go
                </Typography>
                {
                    videos.map((video) => (
                        <div
                            className="video-responsive"
                            style={{
                                overflow: 'hidden',
                                paddingBottom: '56.25%',
                                position: 'relative',
                                left: 0,
                                top: 0,
                                height: '100%',
                                width: '100%',
                                margin: 20,
                            }}
                        >
                            <iframe
                                style={{
                                    left: 0,
                                    top: 0,
                                    height: '100%',
                                    width: '100%',
                                    position: 'absolute',
                                }}
                                width="853"
                                height="480"
                                src={`https://www.youtube.com/embed/${video}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const videos = [
    'HFzpkD5JvJk',
    'Xk6SK1OAn4c',
    '_HO6X_-dnio',
];

export default Videos
