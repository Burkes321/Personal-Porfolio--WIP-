import React from 'react'

const Stages = () => {
    return (
        <div className='stages'>
            <div className='stages__card'>
                <h3>Discuss</h3>
                <p>Tell me about your project. We brainstorm and get an outline of what you need</p>
            </div>

            <div className='stages__card'>
                <h3>Design</h3>
                <p>We create a wireframe and decide the best way to present your brand online</p>
            </div>

            <div className='stages__card'>
                <h3>Develop</h3>
                <p>We build your website and collaborate together throughout the process</p>
            </div>

            <div className='stages__card'>
                <h3>Test</h3>
                <p>We run the website through use-cases and ensure it presents your brand exactly as you want</p>
            </div>

            <div className='stages__card'>
                <h3>Deploy</h3>
                <p>We make your website available for the world to see</p>
            </div>
        </div>
    )
}

export default Stages
