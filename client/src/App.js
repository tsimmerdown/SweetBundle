import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Cursor from "./components/Cursor/Cursor";
import FAQ from "./components/FAQ/FAQ";
import About from "./components/Main/About/About";
import Menu from "./components/Main/Menu/Menu";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
  const state = useSelector((state) => state.cursorState);
  const location = useLocation();

  const [show, setShow] = useState(false);

  const scrollHandler = () => {
    console.log("hi");
    if (window.pageYOffset > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location]);

  return (
    <div onScroll={scrollHandler}>
      <Cursor hover={state} />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/about" component={About} exact />
          <Route path="/menu" component={Menu} exact />
          <Route path="/faq" component={FAQ} exact />
          {/* <Route path="/order" exact /> */}
          <Route path="/">
            <Main onScroll={scrollHandler} />
          </Route>
        </Switch>
      </AnimatePresence>
      <ScrollUp show={show} />
      <Footer />
    </div>
  );
}

export default App;
