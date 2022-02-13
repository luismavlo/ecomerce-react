import { Route, Routes } from 'react-router-dom';
import { Cart, Login, Shop, ShopDetail, Home, Orders } from './pages'
import { ProtectedRoutes, CustomRouter } from "./components";
import { useSelector } from 'react-redux';
import { MainLayout } from './layout';
import LoadingScreen from './components/LoadingScreen';
import { history } from './helpers';


function App() {

  const isLoading = useSelector(state => state.app.isLoading)

  return (
    <div className='app'>
        <CustomRouter history={history}>

          { isLoading && <LoadingScreen />}

          <Routes>     
            <Route path='/' element={<Home />} />       
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route element={<MainLayout />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop/:id" element={<ShopDetail />} />
                <Route path="/shop" element={<Shop />} />
                <Route path='/orders' element={<Orders />}/>
              </Route>
            </Route>
          </Routes>
        </CustomRouter>
    </div>
  );
}

export default App;
