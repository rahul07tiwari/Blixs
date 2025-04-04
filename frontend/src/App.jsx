import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
<<<<<<< HEAD
import Signup from "./routes/Signup";
import User_page from "./routes/User-page";
import Navbar from "./routes/Navbar";
import Footer from "./routes/Footer";
=======
import Signup from "./routes/SignUp";
import Chats from "./routes/Chats";
import UserPage from "./routes/UserPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
>>>>>>> 0c6ceee91f6b4b4b60c1c2afb015b53bc6ab3a10


const App = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserPage />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
          <Route path="/user" element={<User_page />} />
=======
>>>>>>> 0c6ceee91f6b4b4b60c1c2afb015b53bc6ab3a10
        </Routes>
    </Router>
    </>
  );
};

export default App;
