
import React, { Fragment } from 'react';

const cardNft = (props) => {
    const { width, height, url, nameCard, author } = props; 
    console.log(nameCard);
    return (
        <Fragment>
            <div className='flex flex-col justify-center pl-48'>
                <img src={url} width={width} height={height} className='br-16'/>
                <div className='p-24-50'>
                <h2 className='fs-28'>{nameCard}</h2>
                <p className='pt-3 author-name'>{author}</p>
                </div>
            
            </div>
         
        </Fragment>
    );
};

export default cardNft;