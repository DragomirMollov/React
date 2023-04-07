import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route} from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { AdsProvider } from './contexts/AdsContext';


import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { LoginRegister } from "./components/LoginRegister/LoginRegister";
// import { Login } from "./components/LoginRegister/Login";
// import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { AddAds } from "./components/AddPost/AddPost";
import { Ads } from "./components/Ads/Ads";
import { AdsDetails } from "./components/AdsDetails/AdsDetails";
import { EditAds } from "./components/EditAds/EditAds";
import { RouteGuard } from "./components/common/RouteGuard";
import { AdsOwner } from "./components/common/AdsOwner";

function App() {
  return (
      <AuthProvider>
      <AdsProvider>
          <div id="box">
              <Header />

              <main id="main-content">
                  <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/login_register' element={<LoginRegister />} />
                      {/* <Route path='/login_register' element={<Login />} />
                      <Route path='/login_register' element={<Register />} /> */}
                      <Route path='/ads' element={<Ads />} />
                      <Route path='/ads/:adsId' element={<AdsDetails />} />

                      <Route element={<RouteGuard />}>
                          <Route path='/ads/:adsId/edit' element={
                              <AdsOwner>
                                  <EditAds />
                              </AdsOwner>
                          } />
                          <Route path='/create-ads' element={<AddAds />} />
                          <Route path='/logout' element={<Logout />} />
                      </Route>

                      {/* <Route path='/create-game' element={
                      <RouteGuard>
                          <CreateGame onCreateGameSubmit={onCreateGameSubmit} />
                      </RouteGuard>
                  } /> */}
                  </Routes>
              </main>

              <Footer />
          </div>
      </AdsProvider>
  </AuthProvider>
  );
}

export default App;
