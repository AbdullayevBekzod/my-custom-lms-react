import { useState } from 'react';

function ShareDetails(props){
    {if(props.showModal){
         return(
        <p>Share Details</p>
    );
    } else {
        return null;
    }}
   
}

export default ShareDetails;