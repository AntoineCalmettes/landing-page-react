
import React from 'react';
import Art01 from './images/Art01';

const Header = () => {
    return (
        <div className='flex justify-center pb-120' style={{
            padding: '231px 345px 220px 345px'
        }}>
            <div className='mt-6rem mr-6rem'>

                <h2>High Quality</h2>
                <h2>NFT Collection</h2>
                <p className='mt-3'>A 890 piece custom Nerko's collection is </p>
                <p>joining the NFT space on Opensea.</p>
                <div>
                    <button className='btn-primary mt-5 flex items-center justify-center' style={{
                        width: '164.75px',
                        height: '66px'
                    }}>
                        Mint
                        <img className='ml-3' src={'minivector.svg'} alt="Mini Vector" />
                    </button>

                </div>

                <h3 className='mt-10'>47K+</h3>
                <p className='header-community'>Community members</p>
            </div>
            <div>
                <Art01 className=""
                    width="615"  // Ajoutez la largeur comme prop
                />
            </div>

        </div>
    );
};

export default Header;