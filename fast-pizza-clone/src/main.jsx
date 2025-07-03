import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Home from './Home/Home';
import AppContextProvider from './context/AppContextProvider'
import Layout from './Layout'
import Menu from './Menu/Menu'
import Cart,{CartData} from './Cart/Cart'
import NewOrder from './Order/NewOrder'
import OrderPlaced from './Order/OrderPlaced'
import OrderNotFound from './Order/OrderNotFound';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={ <Home />}  />
       <Route path='menu' element={ <><Menu /> < Cart /> </>}  />
       <Route path='/cart' element={ <> <CartData/> <Cart /> </>}  />
       <Route path='/order/new' element={ <> <NewOrder/> <Cart /> </>}  />
       <Route path='/order/:orderId' element={ <> <OrderPlaced/> </>}  />
       <Route path="/order-not-found/:orderId" element={<OrderNotFound />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <AppContextProvider>

  <RouterProvider router={router}>
   
  </RouterProvider>
  </AppContextProvider>
)
