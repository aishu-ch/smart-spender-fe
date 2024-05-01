import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import Home from "../HomePage/Home";
import CreateExpense from "../CreateExpensePage/CreateExpensePage";
import History from "../HistoryPage/HistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/home" element={<Home />} />
            <Route path="/expenses/create" element={<CreateExpense />} />
            <Route path="/expenses/history" element={<History />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/signup" element={<AuthPage setUser={setUser} />} />
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
