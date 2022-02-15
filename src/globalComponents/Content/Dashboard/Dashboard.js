import RightSidebar from "../../RightSidebar/RightSidebar";

function Dashboard(props) {
  return (
    <div className="bg-green-100">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <h2 className="font-bold text-xl m-2 bg-none">Dashboard</h2>
          <div className="dashboard-content h-screen grid grid-cols-5">
            <div className="deadline-column col-span-2 bg-white">
              <div className="deadline-box max-h-[300px] m-4 border rounded-xl p-2 overflow-y-scroll">
                <h5 className="font-semibold">Deadlines</h5>
                {props.store.getDeadlines().map((deadline)=>{
                  return <div key={deadline.id} className="single-deadline border-b-1 flex items-center border-b-[1px] mb-2 p-2">
                      <div className="deadline-status rounded-full p-2 bg-red-500"></div>
                      <div className="deadline-name w-3/5 text-sm ml-3">
                        <p className="text-[10px] border rounded-xl w-fit px-2">
                          {deadline.predmet}
                        </p>
                        <p className="truncate w-4/5">
                          {deadline.title}
                        </p>
                      </div>
                      <div className="time">
                        <p className="text-gray-500 text-sm ">23:59</p>
                        <p className="text-gray-500 text-sm ">17.01.2022</p>
                      </div>
                    </div>
                  })
                }
                

              </div>
              <div className="courses-box m-4 border rounded-xl p-2">
                  <h5 className="font-semibold">Current courses</h5>
                  <div className="mt-5">
                    <div className="course-hearder grid grid-cols-4 text-center">
                      <h5 className="text-xs col-span-1 font-semibold">fan nomi</h5>
                      <h5 className="text-xs col-span-1 font-semibold">qoldirilgan darslar</h5>
                      <h5 className="text-xs col-span-1 font-semibold">joriy ball</h5>
                      <h5 className="text-xs col-span-1 font-semibold">umumiy ball</h5>
                    </div>
                    <div className="course-content grid grid-cols-4 text-center">
                        <p className="text-xs col-span-1 ">Math</p>
                        <p className="text-xs col-span-1 ">1</p>
                        <p className="text-xs col-span-1 ">44%</p>
                        <p className="text-xs col-span-1 ">80%</p>
                    </div>
                  </div>

              </div>
            </div>
            <div className="col-span-3 bg-white">
              <div className="activity m-4 p-2">
                <div className="activity-box mx-auto">
                  <h5 className="font-semibold">Last activities</h5>
                  <div className="following-tags  border-b-[1px] p-2 mx-auto w-fit">
                    {props.store.getRelatedTags().map((item)=>{
                      return (
                        <p 
                          key={props.store.getRelatedTags().indexOf(item)} 
                          className="single-tag inline-block text-[9px] ml-1 border px-2 w-fit text-gray-400 rounded-xl"
                        >
                          {item}
                        </p>);                      
                    })}
                 
                    
                  </div>
                </div>
                {/* news-box */}
                <div className="news-box">
                  {props.store.getActivities().map((item)=>{
                    return(
                      <div key={item.id} className="single-news px-5 py-2 border rounded-xl mt-5">
                        <div className="news-header flex">
                            <div className="related-tags mb-2 w-3/5">
                              {item.related_tags.map((i)=>{
                                return(
                                  <p 
                                    key={item.related_tags.indexOf(i)} 
                                    className="single-tag inline-block text-[10px] border px-2 w-fit text-gray-400 rounded-xl mr-2"
                                  >
                                    {i}
                                  </p>
                                );
                              })}
                            </div>
                        </div>
                        <div className="news-content flex items-center">
                            <img
                              src={item.img}
                              alt="activityImage"
                              className="image w-12 h-16"
                            />
                            <div className="news-header ml-3">
                                <h5 className="font-semibold text-lg">
                                  {item.title}
                                </h5>
                                <p className="w-44 h-auto text-[10px]">
                                  {item.body}
                                </p>
                            </div>
                        </div>
                        <div className="news-footer flex p-1">
                            <div className="news-emotions flex items-center">
                                <div className="text-[10px] mr-2 flex">
                                  {item.like} like
                                </div>
                                <div className="text-[10px] flex">
                                  {item.unlike} dislike
                                </div>
                            </div>
                            <div className="sender-name grid place-items-end w-full">
                                <div className="flex items-center">
                                    <div className="name-of-news-maker text-[10px]">
                                      {item.send_by}
                                    </div>
                                    <div className="image p-2 ml-3 rounded-full bg-green-200"></div>
                                </div>
                            </div>
                        </div>
                        
                      </div>
                    );
                  })}
                  
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
