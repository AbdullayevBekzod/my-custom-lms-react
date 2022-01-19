import { Link } from 'react-router-dom';
// import stl from './Header.module.css';
function Header(isAuth) {
    const auth = isAuth;
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3'>
                <p className="text-sm"><Link to='/'>LearManageSys</Link></p>
            </div>
            <div className='col-span-8 grid grid-cols-12'>
                <input className='col-span-9 border' placeholder="search locally or global..." />
                <a className='col-span-2'>search</a>
            </div>
            <div className='col-span-1'>
                <a>Logout</a>
            </div>
        </div>
    );
}

export default Header;