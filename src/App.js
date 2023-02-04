import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './containers/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import MyAccount from './pages/MyAccount';
import CreateAccount from './pages/CreateAccount';
import MyOrder from './containers/MyOrder';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState'
import './styles/global.scss';
import ClothesList from './pages/ClothesList';
import ElectronicsList from './pages/ElectronicsList';
import FurnituresList from './pages/FurnituresList';
import ShoesList from './pages/ShoesList';
import OthersList from './pages/OthersList';
import ProductList from './containers/ProductList';
import Footer from './footer/Footer';




const App = () => {
    const initialState = useInitialState();
   
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                    <Layout>
                        <Header />
                        <Routes>
                            <Route  path='/' element={<Home />} />
                            <Route  path='/login' element={<Login />} />

                            <Route  path='/all' element={<ProductList/>} />
                            <Route  path='/clothes' element={<ClothesList />} />
                            <Route  path='/electronics' element={<ElectronicsList />} />
                            <Route  path='/furnitures' element={<FurnituresList />} />
                            <Route  path='/shoes' element={<ShoesList/>} />
                            <Route  path='/others' element={<OthersList/>} />

                            <Route  path='/new-password' element={<NewPassword />} />
                            <Route  path='/account' element={<MyAccount />} />
                            <Route  path='/signup' element={<CreateAccount />} />
                            <Route  path='/orders' element={<MyOrder />} />

                            <Route paht="*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;