import AppRouter from "./components/AppRouter";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="main">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
