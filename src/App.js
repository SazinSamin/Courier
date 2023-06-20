import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./Components/LoginPage";
import { AuthProvider } from "./Context/AuthContext";
import Chats from "./Components/Chats";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
