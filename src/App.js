import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settinqs/Settings";
function App() {
  return (
    <BrowserRouter>
      <div className="app-wripper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/Profile/*" element={<Profile />} />
            <Route path="/Dialogs/*" element={<Dialogs />} />
            <Route path="/News/*" element={<News />} />
            <Route path="/Music/*" element={<Music />} />
            <Route path="/Settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
