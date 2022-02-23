import { useState, useEffect } from 'react';
import UsersList from '../UsersList';
function Messenger (){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(
                (res)=>{
                    setIsLoaded(true);
                    setItems(res);
                },
                (error)=>{
                    setIsLoaded(true);
                    setError(error);
                }
                )
    },[])

    if(error) {
        return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
        return <div>Loading ... </div>
    } else {
        return(
            <div className="grid grid-cols-12">
                <div className="w-9/10 bg-gray-100 col-span-9">
                    <div className="overflow-y-scroll bg-white h-80">
                        {items.map(item=>(
                            <div className="border w-fit rounded-xl mt-2 text-sm ml-2">
                
                                <div className="text-[10px] border w-fit mt-3 px-1 ml-1 rounded-xl">{item.email}</div>
                                <div className="mx-3">{item.body}</div>
                            </div>
                        ))}  
                    </div>
                    <div className="my-3"> 
                        <input 
                            placeholder="type for writing a message ... "
                            className="w-4/5 ml-2 p-2 border  rounded-xl h-12"
                        />
                        <button className="border rounded-xl text-center p-3">Send</button>
                    </div>
                </div>
                <div className="col-span-3">
                    <UsersList />
                </div>
            </div>
        );
    }
}

export default Messenger;