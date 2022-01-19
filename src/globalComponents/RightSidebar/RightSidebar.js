// import stl from './RightSidebar.module.css';

function RightSidebar() {
    return(
        <div className='mt-8'>
            <div className="">
                <img 
                    className="rounded-full w-16 h-16 mx-auto"
                    src="https://images.techhive.com/images/article/2017/05/3_legal_law_books-100722136-large.jpg"/>
                <h3 className="username font-bold text-center">Username Usernamov</h3>
                <p className="text-md my-2 ml-4">Details:</p>
                <div className="text-md my-2 ml-10">
                    <p>Edit profile</p>
                    <p>Change photo</p>
                    <p>Dealines</p>
                    <p>Privacy and Security</p>
                    <p>Write administration</p>
                </div>

            </div>
        </div>
    );
}

export default RightSidebar;