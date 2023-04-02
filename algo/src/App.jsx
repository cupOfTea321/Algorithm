import './App.css'
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
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

function App() {
  return (
      <Box>
          {/*<Navbar/>*/}
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route path={''} exact element={<MainPage/>}/>
                  <Route path={'about'} exact element={<AboutPage/>}/>
                  <Route path={'delivery'} exact element={<DeliveryPage/>}/>
                  <Route path={'services'} exact element={<ServicesPage/>}/>
                  <Route path={'services/storage'} exact element={<StorageService/>}/>
                  <Route path={'services/transportation'} exact element={<TransportationService/>}/>
                  <Route path={'services/registration'} exact element={<RegistrationService/>}/>
                  <Route path={'services/shipment'} exact element={<ShipmentService/>}/>
                  <Route path={'clients'} exact element={<ForClientsPage/>}/>
                  <Route path={'*'} element={<NotFound/>}/>
              </Route>
          </Routes>
      </Box>
  )
}

export default App
