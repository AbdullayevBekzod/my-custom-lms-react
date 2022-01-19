// import stl from  './Dashboard.module.css';
import RightSidebar from '../../RightSidebar/RightSidebar';
import { useState, useEffect } from 'react';


function Dashboard() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts", {
            "method": "GET",
        })
        .then(res => res.json())            
        .then(
            (res) => {
                setIsLoaded(true);
                setItems(res);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
    }, [])
    if(error) {
        return <div>Error: {error.message}</div>
    } else if(!isLoaded){
        return <div>Loading... </div>
    } else{
        return(
            <div className='bg-green-500' >
                <div className="grid grid-cols-12">
                    <div className="col-span-9">
                        <h2 className='font-bold text-3xl m-5'>Dashboard</h2>
                        <div className='overflow-y-scroll h-screen grid grid-cols-3'>
                            {items.map(item => (
                                <div key={item.id} className='border rounded-2xl col-span-1 m-2 p-3'>
                                    <h3 className='font-bold'>{item.id}. {item.title}</h3> 
                                    {item.body}
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-3 bg-orange-400">
                        <RightSidebar />
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Dashboard;