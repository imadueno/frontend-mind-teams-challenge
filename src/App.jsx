import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

import RequireAuth from "./router/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
