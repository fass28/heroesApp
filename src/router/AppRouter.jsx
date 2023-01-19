import {  Route, Routes } from "react-router-dom"
import { PublicRoute } from "./PublicRoute"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes>

          <Route path="/login" element= {
           <PublicRoute>
              <LoginPage/>
           </PublicRoute>

          }/>

            <Route path="/*" element= {
              <PrivateRoute>
                  <HeroesRoutes/>
              </PrivateRoute>
            }/>

          {/*  <Route path="login" element={<LoginPage />} /> */}
          {/* <Route path="/*" element={<HeroesRoutes/>}/> */}


        </Routes>
    </>
  )
}
