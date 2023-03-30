import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";

import { adsServiceFactory } from "./services/adsService";
import { AuthProvider } from "./contexts/AuthContext";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Ads } from "./components/Ads/Ads";
import { AddPost } from "./components/AddPost/AddPost";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { RouteGuard } from "./components/common/RouteGuard";

function App() {
  //   const navigate = useNavigate();
//   const navigate = useNavigate();
  const [ads, setAds] = useState([]);
  const adsService = adsServiceFactory(); //auth.accessToken

  useEffect(() => {
    adsService.getAll().then((result) => {
      setAds(result);
    });
  }, []);

//   const onCreateAdsSubmit = async (data) => {
//     const newAds = await adsService.create(data);

//     setAds((state) => [...state, newAds]);

//     navigate("/catalog");
//   };

//   const onAdsEditSubmit = async (values) => {
//     const result = await adsService.edit(values._id, values);

//     setAds((state) => state.map((x) => (x._id === values._id ? result : x)));

//     navigate(`/ads/${values._id}`);
//   };

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Header />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ads" element={<Ads ads={ads} />} />
              <Route path="/addPost" element={<AddPost />} />
              {/* <Route path='/addPost/:adsId' element={<AdsDetails />} /> */}

              {/* <Route element={<RouteGuard />}
                <Route path="/addPost/:adsId/edit" element={<AddPost />} />
              </Route>              */}

              {/* <Route path="/create-ads" element={
                  <RouteGuard>
                    <CreateAds onCreateAdsSubmit={onCreateAdsSubmit} />
                  </RouteGuard>
                } /> */}
              <Route path="/login" element={<Login />} />
              {/* <Route path="/register" element={<Register />} /> */}
              <Route path="/register" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
