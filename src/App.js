import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index_page";
import LoginPage from "./pages/login_page";
import Layout from "./Layout";
import RegisterPage from "./pages/register_page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
