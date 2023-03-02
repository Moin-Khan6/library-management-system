import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages'
import NotFound from '../../pages/notFound/notFound'
import SignIn from '../../pages/signIn/signIn'
import SignUp from '../../pages/signUp/signUp'
import LoginPrivateRoutes from './privateRoutes'

export default function Routing() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<SignIn/>}  />
            <Route path="/sign-up" element={<SignUp/>}  />
              <Route path="*" element={<NotFound />}> </Route>


            <Route element={<LoginPrivateRoutes/>}>
              <Route path="/dash-board/*" element={<Dashboard />}></Route>
            </Route>
            {/* <Route path="/dash-board/*" element={<Dashboard/>}  /> */}
        </Routes>
    </Router>  
    </>
    )
}
