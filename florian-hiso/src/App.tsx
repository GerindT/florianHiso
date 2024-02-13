import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blogs/:id" element={<SinglePost />} />
          <Route path="/projects/:id" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
