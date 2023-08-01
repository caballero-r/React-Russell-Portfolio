// Import Required
import React from 'react';
import About from './Pages/About';
import Project from './Pages/Project';

// Content component
function Content () {
    return (
        <div className='container-fluid text-center content'>
            <About />
            <Project />

        </div>
    )
}

export default Content;