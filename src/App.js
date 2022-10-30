import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Aws from "./pages/Aws";

import Contact from "./pages/Contact";
import FullStack from "./pages/FullStack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paths from "./pages/Paths";
import People from "./pages/People";
import PersonDetails from "./pages/PersonDetails";
import PrivateRouter from "./pages/PrivateRouter";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetails />} />
        <Route path="paths" element={<Paths />}>
          <Route index element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>

        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
