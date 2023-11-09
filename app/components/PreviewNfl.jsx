
import React, { Fragment } from 'react';
import CardNft from './CardNft';

const PreviewNfl = () => {
    return (
        <Fragment>
            <div className=' flex justify-center pb-85'>
                <h1 className='fs-64'>Your </h1><h1 className='ml-5 fs-64 gradient-text'>nft's</h1>
            </div>
            <div className='flex justify-center'>
            <CardNft url={'metaverse.jpeg'} width={'264'} height={'352'} nameCard={'#Metaverse'} author={'By TheSalvare'}/>
            <CardNft  url={'pollydoll.jpeg'} width={'264'} height={'352'} nameCard={'#Metaverse'} author={'By TheSalvare'}/>
            <CardNft url={'alecart.jpeg'} width={'264'} height={'352'} nameCard={'#Metaverse'} author={'By TheSalvare'}/>
            <CardNft url={'toxic.jpeg'} width={'264'} height={'352'} nameCard={'#Metaverse'} author={'By TheSalvare'}/>
            </div>
            <div className='flex justify-center'>
            <button className='btn-primary mt-5 text-button' style={{
                    width: '240.3px',
                    height: '64px'
                }}>View collection</button>
            </div>
        </Fragment>
    );
};

export default PreviewNfl;