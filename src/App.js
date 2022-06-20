import "./App.css";
import React, { useState, useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { ConnectModal } from "./Components/ConnectModal";

function App() {
  const [network, setNetwork] = useState(undefined);
  const { login, logout } = useAuth();

  return (
    <div className="App">
      <ConnectModal login={login} logout={logout} />
    </div>
  );
}

export default App;
