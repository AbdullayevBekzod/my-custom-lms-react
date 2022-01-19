import React, {useState} from 'react';

function DefaultCard(item){
    const[count, setCount] = useState(0);
    
    return(
        <div key={item.id}  className="border col-span-1 m-2 p-2 rounded-2xl">
            <img src={item.image} className="rounded-3xl w-16 h-16" /> 
            <h4 className="font-bold">{item.title}</h4>
            <p className='text-sm'>{item.price}$</p>
            <p className="font-bold">Count: {count} </p>
            <button type="submit" onClick={()=>setCount(count+1)}>Add</button>
        </div>
    );
}

export default DefaultCard;