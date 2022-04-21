import React from "react";

import { login, logout } from "./utils/near";

import "./App.css";

const App = () => {
  const account = window.walletConnection.account();

  return (
    <>
      {account.accountId ? (
        <main>
          <h1>hello</h1>
          <button onClick={logout}>logout </button>
        </main>
      ) : (
        <button onClick={login}>login </button>
      )}
    </>
  );
};

export default App;
