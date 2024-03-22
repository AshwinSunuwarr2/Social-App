import AuthLayout from "./_auth/AuthLayout";
import SIgnupForm from "./_auth/forms/SIgnupForm";
import SigninForm from "./_auth/forms/SigninForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SIgnupForm />} />
        </Route>

        <Route element={<RootLayout />}>
          {/* private routes */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster/>
    </main>
  );
};

export default App;
