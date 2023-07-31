// Imports required
import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Navi';


// Header component
 function Header () {
    return (
        <div className='container-fluid text-center'>
            <h1>Russell Caballero</h1>
            <Navi />
        </div>
    );
};

export default Header;