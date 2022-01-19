
// import stl from './LeftSidebar.module.css';
import { Link } from 'react-router-dom'
function LeftSidebar(){
    return(
        <>
            <div className="p-5">
                <ul className=''>
                    <li>
                        <Link to='/'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/deadline'> 
                            Deadline
                        </Link>
                    </li>   <li>
                        <Link to='/lesson-table'> 
                            Lessons table
                        </Link>
                    </li>   <li>
                        <Link to='/grades'> 
                            Grades
                        </Link>
                    </li>   <li>
                        <Link to='/sharing'> 
                            Sharing
                        </Link>
                    </li>   <li>
                        <Link to='/messenger'> 
                            Messenger
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default LeftSidebar;