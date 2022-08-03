import {Routes, Route} from 'react-router-dom'

import {New} from '../pages/New'
import {Home} from '../pages/Home'
import {Details} from '../pages/Details'
import {Edit} from '../pages/edit'
import {MyOrder} from '../pages/MyOrder'
import {OrderStatus} from '../pages/OrderStatus'

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/MyOrder" element={<MyOrder/>}/>
      <Route path="/OrderStatus" element={<OrderStatus/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  )
}