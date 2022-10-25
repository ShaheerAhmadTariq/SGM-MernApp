import Signin from './Signin';
import Dashboard from './Dashboard';
import Customer from './Customer';
import AddCutomer from './AddCutomer';
import Invoice from './Invoice';
import AddInvoice from './AddInvoice';
import Login from './Login'
import Items from './Items'
import AddItems from './AddItems'
import LandingPage  from './LandingPage'
const router = [
  {path: '/', element: <LandingPage/>},
 {path: '/dashboard', element: <Dashboard/>},
  {path: '/customer', element: <Customer/>},
  {path: '/addcustomer', element: <AddCutomer/>},
  {path: '/invoice', element: <Invoice/>},
  {path: '/addinvoice', element: <AddInvoice/>},
  {path: '/login', element: <Login/>},
  {path: '/signin', element: <Signin/>},
  {path: '/items' , element: <Items/>},
  {path: '/additems', element: <AddItems/>}
];

export default router;
