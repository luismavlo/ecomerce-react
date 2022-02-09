import { HashRouter, Route, Routes } from 'react-router-dom';
import { Cart, Login, Shop, ShopDetail, Home } from './pages'
import { ProtectedRoutes } from "./components";
import { useSelector } from 'react-redux';
import { MainLayout } from './layout';
import LoadingScreen from './components/LoadingScreen';


function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <div className='app'>
        <HashRouter>

          { isLoading && <LoadingScreen />}

          <Routes>     
            <Route path='/' element={<Home />} />       
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route element={<MainLayout />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop/:id" element={<ShopDetail />} />
                <Route path="/shop" element={<Shop />} />
              </Route>
            </Route>
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
