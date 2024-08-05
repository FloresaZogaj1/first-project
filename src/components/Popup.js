import React, { useState } from 'react';
import './user.scss';

const Popup = () => {
    const [popup, setPopup] = useState(false);

    const showPopup = () => {
        setPopup(!popup);
    };

    const closePopup = () => {
        setPopup(false);
    };

    return (
        <div className='popup'>
            <button type='button' onClick={showPopup}>Show Popup</button>
            {popup && (
                <>
                   {popup ? <div className='backdrop' onClick={closePopup}></div> :null}
                    <div className='card'>
                        <h1>Popup</h1>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Popup;
