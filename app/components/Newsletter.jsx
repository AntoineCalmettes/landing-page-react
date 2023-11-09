
import React from 'react';
import Art01 from './images/Art01';

const Newsletter = () => {
    return (
        <div className='flex justify-center pb-5'>
            {/* <img className="moon-image" src={'newletter1.png'} alt="moon" /> */}
            <div className='newsletter-div flex-wrap justify-center text-center'>
                <h1 className='fs-64' style={{ display: 'inline-block' }}>Never </h1>
                <h1 className='ml-5 fs-64 gradient-text' style={{ display: 'inline-block' }}>miss a drop!</h1>
                <p className='pt-5'>Subscribe to our super-rare and exclusive drops & collectibles.</p>
                <div className='flex justify-center pt-5'>
                    <input type="text" className="newsletter-input" placeholder="Enter your email" />
                    <button className='newsletter-button ml-2'>Subscribe</button>
                </div>
            </div>
        </div >




    );
};

export default Newsletter;