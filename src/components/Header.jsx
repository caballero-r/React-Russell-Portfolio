// Imports required
import React from 'react';
import Navi from './Navi';


// Header component
 function Header () {
    return (
        <div className='container-fluid text-center header'>
            <div className='row'>
                <div className='col profile'>
                    <h1>Russell Caballero's Dev Portfolio</h1>
                </div>
                <div className='col'>
                    <Navi />
                </div>
            </div>
        </div>
    );
};

export default Header;