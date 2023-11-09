
import React, { Fragment } from 'react';

const CountWallets = (props) => {
    const { title, texte} = props; 
    return (
        
        <Fragment>
            <div className='flex flex-col text-center'>
               <h2>{title}</h2>
               <p>{texte}</p>

            </div>
        </Fragment>
    );
};

export default CountWallets;