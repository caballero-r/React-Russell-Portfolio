// Import Required
import React from 'react';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';

// Content component
function Content () {
    return (
        <div className='container-fluid text-center content'>
            <About />
            <Project />
            <Contact /> 

        </div>
    )
}

export default Content;