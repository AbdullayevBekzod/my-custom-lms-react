import { Link } from 'react-router-dom';
import {useState} from 'react';
// import stl from './Header.module.css';
function Header(isAuth) {
    // const auth = isAuth;
    const [inputVal, setInputVal] = useState();
    console.log(inputVal);
    let changeInput = (val) =>{
        setInputVal(val);
    }
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3'>
                <p className="text-sm"><Link to='/'>LearManageSys</Link></p>
            </div>
            <div className='col-span-8 grid grid-cols-12'>
                <input 
                    className='col-span-9 border' 
                    placeholder="search locally or global..." 
                    value = {inputVal}
                    onChange = {(e)=>changeInput(e.target.value)}
                />
                
                <button 
                    className='col-span-2' 
                    type="submit"
                    onClick={()=>alert(inputVal)}
                >
                    search
                </button>
            </div>
            <div className='col-span-1'>
                <a>Logout</a>
            </div>
        </div>
    );
}

export default Header;