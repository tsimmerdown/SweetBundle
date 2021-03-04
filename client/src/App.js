import React from "react";
import { AnimatePresence } from "framer-motion";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
