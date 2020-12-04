import React from 'react';
import './Home.css';

function Home() {
    return (
        <div id="home">
            <h1>This site is still under development😕</h1>
            <h2>
                Check my resume{' '}
                <a
                    href="https://drive.google.com/file/d/106k85SZrdnckTypWfRPZUEMr5agtEyGC/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>here</button>
                </a>
                👈
            </h2>
        </div>
    )
}

export default Home;