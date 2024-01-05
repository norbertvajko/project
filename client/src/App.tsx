import React, {useEffect, useState} from 'react';
import {NavBar} from "./components/NavBar/NavBar";
import {Home} from "./pages/Home/Home";
import {Post} from "./pages/Post/Post";
import {Login} from "./pages/Login/Login";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {APP_ROUTES} from "./routes";

export const App = () => {

  const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": "true",
                },
            }).then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error("auth has been failed");
            }).then(resObject => {
                setUser(resObject.user)
                console.log(resObject.user);
            }).catch(err => {
                console.log(err);
            });
        };
        getUser();
    }, []);

  return (
      <BrowserRouter>
          <div className="App">
              <NavBar user={user} />
              <Routes>
                  <Route path={APP_ROUTES.HOME} element={<Home />} />
                  <Route path={APP_ROUTES.LOGIN} element={user ? <Navigate to={APP_ROUTES.HOME} /> : <Login />} />
                  <Route path={`${APP_ROUTES.POST}/:id`} element={user ? <Post /> : <Navigate to={APP_ROUTES.LOGIN} />} />

                  {/* Catch all unmatched routes */}
                  <Route path="*" element={<div>404 - Not found</div>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}