import React from 'react';
import Placeholder from '../../img/placeholder.jpg'

const Bio = () => {
    return (
        <div className='bio'>
            <h1>About Me</h1>
            <div className='bio__image-text'>
                <img src={Placeholder} alt="placeholder image" />
                <div className='bio__about-me'>
                    <p>My name is Sam and I'm a full-stack web developer. I love everything to do with web development and am always interested in learning new trends and challenging myself.</p>
                    <p>I'm always looking to work with people as passionate about the web as me.</p>
                    <p>When I'm not developing you can find me making electronic music and modding video games.</p>
                </div>
            </div>
        </div>
    )
}

export default Bio
