import RightSidebar from '../../RightSidebar/RightSidebar';



function Dashboard() {
    return(
        <div className='bg-green-500' >
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <h2 className='font-bold text-xl m-2 bg-none'>Dashboard</h2>
                    <div className='dashboard-content overflow-y-scroll h-screen grid grid-cols-5'>
                       <div className="deadline-column col-span-2 bg-gray-100">
                           <div className="deadline-box max-h-[300px] m-4  p-2 ">
                               <h5 className="font-semibold">Deadlines</h5>
                               <div className="single-deadline border-b-1 flex items-center border-b-[1px] mb-2 p-2">
                                   <div className="deadline-status rounded-full p-2 bg-red-500"></div>
                                   <div className="deadline-name w-3/5 text-sm ml-3">
                                       <p className="text-[10px] border rounded-xl w-fit px-2">Oliy matematika</p>  
                                       <p className="truncate w-4/5">#4 Integrallarni hisoblash asoslari</p>  
                                    </div>
                                    <div className="time">
                                        <p className="text-gray-500 text-sm ">23:59</p>
                                        <p className="text-gray-500 text-sm ">17.01.2022</p>
                                    </div>
                               </div>
                               <div className="single-deadline border-b-1 flex items-center border-b-[1px] mb-2 p-2">
                                   <div className="deadline-status rounded-full p-2 bg-red-500"></div>
                                   <div className="deadline-name w-3/5 text-sm ml-3">
                                       <p className="text-[10px] border rounded-xl w-fit px-2">Oliy matematika</p>  
                                       <p className="truncate w-4/5">#4 Integrallarni hisoblash asoslari</p>  
                                    </div>
                                    <div className="time">
                                        <p className="text-gray-500 text-sm ">23:59</p>
                                        <p className="text-gray-500 text-sm ">17.01.2022</p>
                                    </div>
                               </div>
                               <div className="single-deadline border-b-1 flex items-center p-2">
                                   <div className="deadline-status rounded-full p-2 "></div>
                                   <div className="deadline-name w-3/5 text-sm ml-3">
                                       <p className="text-[10px] border rounded-xl w-fit px-2">Oliy matematika</p>  
                                       <p className="truncate w-4/5">#4 Integrallarni hisoblash asoslari</p>  
                                    </div>
                                    <div className="time">
                                        <p className="text-gray-500 text-sm ">23:59</p>
                                        <p className="text-gray-500 text-sm ">17.01.2022</p>
                                    </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-span-3 bg-white">
                           <div className="activity">
                               <div className="activity-box m-4 p-2 rounded-xl">
                                    <div className="following-tags p-2 space-x-1 mx-auto w-fit rounded-3xl">
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">data science</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">machine learning</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">artificial intelligence</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">math</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">physics</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">data structure</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">algorithms</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">programming</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">self-development</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">java</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">c++</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">python</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">web development</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">devops</p>
                                        <p className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl">cisco</p>
                                    </div>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
                <div className="col-span-3 bg-orange-400">
                    <RightSidebar />
                </div>
            </div>
        
        </div>
    );
    }


export default Dashboard;