import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../components/pages/Dashboard/Dashboard';

function Router () {
    return (
        <Routes>
            <Route path="/" element={Dashboard}/>
            {/* <Route path="/customers" component={Customers}/> */}
        </Routes>
    )

}
export default Router;
