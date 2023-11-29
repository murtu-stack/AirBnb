import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index_page";
import LoginPage from "./pages/login_page";
import AccountPage from "./pages/account";
import Layout from "./Layout";
import RegisterPage from "./pages/register_page";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/account/:subpage/:action?" element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
