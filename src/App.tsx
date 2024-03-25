import {Routes, Route} from "react-router-dom"
import SigninForm from "./auth/forms/SigninForm"
import SignupForm from "./auth/forms/SignupForm"
import { Home } from "./_root/pages"
import AuthLayout from "./auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
import { Toaster } from "@/components/ui/toaster"

import './globals.css'

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes >
      <Route element={<AuthLayout/>}>

      <Route path="/sign-in" element={<SigninForm/>}/>

      <Route path="/sign-up" element={<SignupForm/>}/>
      </Route>

      <Route element={<RootLayout/>}>

      <Route index element={<Home/>}/>
      </Route>
    </Routes>

    <Toaster />
    </main>
    
  )
}

export default App