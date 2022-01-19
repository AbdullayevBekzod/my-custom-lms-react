import { useState, useEffect} from 'react';
import DefaultCard from '../DefaultCard';
import ShareDetails from './ShareDatails';

function Sharing() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(
                (res)=>{
                    setIsLoaded(true);
                    setItems(res);
                },
                (error)=>{
                    setIsLoaded(true);
                    setError(error);
                })
            }, [])

    if(error){
        return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
        return <div>Loading ...</div>
    } else {
        
        function openModal(){
            setShowModal(true);
        }
     
        return(
            <div className="container grid grid-cols-3">
                {items.map(item => (    
                   <DefaultCard id={item.id} image={item.image} title={item.title} price={item.price}/>
                ))}
  
                <div className="modal hidden bg-white absolute border 1 rounded-3xl w-4/5 h-[500px]">
                    <ShareDetails  openModal={showModal} />
                </div>
      
            </div>
        );
    }
}

export default Sharing;