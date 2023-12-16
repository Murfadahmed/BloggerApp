import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./AppWrite/auth";
import { login, logout } from "./Store/authSlice";
import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap bg-gray-400 content-between">
      <div className="w-full block">
        <Header />
        <main>
          {<Outlet/>}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
