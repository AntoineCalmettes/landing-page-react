
import React, { Fragment } from 'react';
import ElementCountWallet from './ElementCountWallet'
const CountWallets = () => {
    return (
        <Fragment>
            <div className='flex justify-center columns-4 gap-20'>
                <div className='border-r-2 pr-10'>
                    <ElementCountWallet title={'400k+'} texte={'Wallets Connected'} />
                </div>
                <div className='border-r-2 pr-10'>
                    <ElementCountWallet title={'20k+'} texte={'Wallets Connected'} />
                </div>
                <div className='border-r-2 pr-10'>
                    <ElementCountWallet title={'230+'} texte={'Creative artists'} />
                </div>
                <div>
                    <ElementCountWallet title={'2.5x'} texte={'Estimated value'} />
                </div>


            </div>
        </Fragment>
    );
};

export default CountWallets;