import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Employees from '../components/features/Employees/Employees'
import Orders from '../components/features/Orders/Orders';
import Customers from '../components/features/Customers/Customers'
import Kanban from '../components/features/Kanban/Kanban'
import Dashboard from '../components/pages/Dashboard'
import Charts from '../components/charts/Charts/Charts';



function Router () {
    return (
        <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/kanban" element={<Kanban/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/charts" element={<Charts/>}/>
      </Routes>
    )

}
export default Router;
