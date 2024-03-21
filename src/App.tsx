import AuthLayout from "./_auth/AuthLayout";
import SIgnupForm from "./_auth/forms/SIgnupForm";
import SigninForm from "./_auth/forms/SigninForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./global.css";
import { Routes, Route } from "react-router-dom";

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
    </main>
  );
};

export default App;
