import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './globalComponents/Header/Header';
import Footer from './globalComponents/Footer/Footer';
import Dashboard from './globalComponents/Content/Dashboard/Dashboard';
import LeftSidebar from './globalComponents/LeftSidebar/LeftSidebar';
import Deadlines from './globalComponents/Content/Deadlines/Deadlines';
import LessonsTable from './globalComponents/Content/LessonsTable/LessonsTable';
import Grades from './globalComponents/Content/Grades/Grades';
import Sharing from './globalComponents/Content/Sharing/Sharing';
import Messenger from './globalComponents/Content/MessageContent/Messenger';

const App = (props) => {
  const isAuth = false;
  return (
    <Fragment>
      <div className="container-2xl h-screen">
        <div className='grid grid-cols-12'>
          <div className='col-span-12 p-3 bg-green-300'>
            <Header isAuth={isAuth} />
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className='col-span-2 bg-blue-500 '>  
            <LeftSidebar />
          </div>
            <div className='col-span-10'>
              <Routes>
                <Route path = '/' element={<Dashboard store={props.store}/>}/>
                <Route path = '/deadline' element={<Deadlines />}/>
                <Route path = '/grades' element={<Grades />}/>
                <Route path = '/lesson-table' element={<LessonsTable />}/>
                <Route path = '/sharing' element={<Sharing />}/>
                <Route path = '/messenger' element={<Messenger />}/>
              </Routes>
            </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
