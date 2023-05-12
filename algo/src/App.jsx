import './App.css'
import {Box} from "@mui/material";
import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import DeliveryPage from "./pages/DeliveryPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ForClientsPage from "./pages/ForClientsPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import StorageService from "./pages/StorageService.jsx";
import TransportationService from "./pages/TransportationService";
import RegistrationService from "./pages/RegistrationService.jsx";
import ShipmentService from "./pages/ShipmentService.jsx";
import CollectorsPage from "./pages/CollectorsPage.jsx";
import {createRef, useEffect} from "react";
import 'animate.css';
import WOW from 'wow.js';
const routes = [
    { path: '',  element: <MainPage />, nodeRef: createRef() },
    { path: 'about',  element: <AboutPage />, nodeRef: createRef() },
    { path: 'delivery',  element: <DeliveryPage />, nodeRef: createRef() },
    { path: 'services',  element: <ServicesPage />, nodeRef: createRef() },
    { path: 'services/storage',  element: <StorageService />, nodeRef: createRef() },
    { path: 'services/transportation',  element: <TransportationService />, nodeRef: createRef() },
    { path: 'services/registration',  element: <RegistrationService />, nodeRef: createRef() },
    { path: 'services/shipment',  element: <ShipmentService />, nodeRef: createRef() },
    { path: 'clients',  element: <ForClientsPage />, nodeRef: createRef() },
    { path: 'clients/collectors',  element: <CollectorsPage />, nodeRef: createRef() },
    { path: '*',  element: <NotFound />, nodeRef: createRef() },
]
function App() {
    const location = useLocation()
    const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
    useEffect(() => {
        const wow = new WOW({
            // Настройки по умолчанию
            offset: 100,
            mobile: false,
            live: true,
        });

        wow.init();
    }, []);
  return (
      <Box>
          {/*<Navbar/>*/}
          <Routes>
              <Route path={'/'} element={<Layout location={location} nodeRef={nodeRef}/>}>
                  {routes.map(route => (
                      <Route path={route.path} exact element={route.element}/>
                  ))}
                  {/*<Route path={''} exact element={<MainPage/>}/>*/}
                  {/*<Route path={'about'} exact element={<AboutPage/>}/>*/}
                  {/*<Route path={'delivery'} exact element={<DeliveryPage/>}/>*/}
                  {/*<Route path={'services'} exact element={<ServicesPage/>}/>*/}
                  {/*<Route path={'services/storage'} exact element={<StorageService/>}/>*/}
                  {/*<Route path={'services/transportation'} exact element={<TransportationService/>}/>*/}
                  {/*<Route path={'services/registration'} exact element={<RegistrationService/>}/>*/}
                  {/*<Route path={'services/shipment'} exact element={<ShipmentService/>}/>*/}
                  {/*<Route path={'clients'} exact element={<ForClientsPage/>}/>*/}
                  {/*<Route path={'clients/collectors'} exact element={<CollectorsPage/>}/>*/}
                  {/*<Route path={'*'} element={<NotFound/>}/>*/}
              </Route>
          </Routes>
      </Box>
  )
}

export default App
