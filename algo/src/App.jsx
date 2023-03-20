import './App.css'
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import DeliveryPage from "./pages/DeliveryPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ForClientsPage from "./pages/ForClientsPage.jsx";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";

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
                  <Route path={'clients'} exact element={<ForClientsPage/>}/>
                  <Route path={'*'} element={<NotFound/>}/>
              </Route>
          </Routes>
      </Box>
  )
}

export default App
