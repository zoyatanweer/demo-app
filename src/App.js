import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Join } from "./components/join/Join";
import { Side } from "./components/Side/Side";
import { Register } from "./pages/register/Register";
import { Profile } from "./pages/profile/Profile";
import { Verification } from "./pages/verification/Verification";

function App() {
  return (
    <div className="App">
      <div className="homepage">
        <Side />
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
        {/* <Side />
        <Join /> */}
      </div>
    </div>
  );
}

export default App;
