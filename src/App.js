import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import Footer from "./Components/Footer";
import Forms from "./Components/Forms";
import IntroComp from "./Components/IntroComp";
import Nav from "./Components/Nav";
import RevealAnimation from "./Components/RevealAnimation";
import Review from "./Components/Review";
import Engineers from "./Components/SoftwareEng/Engineers";
import EngIntro from "./Components/SoftwareEng/EngIntro";
import Description from "./Components/SoftwareEng/Description";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./Components/SoftwareEng/Counter";
import Info from "./Components/SoftwareEng/Info";
import Login from "./Components/Login";

function App() {
  const [scrollTarget, setScrollTarget] = useState(null)
 
  
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav scrollTarget={scrollTarget}/>
                <IntroComp/>
                <Forms setScrollTarget={setScrollTarget}/>
                <Display />
                <Review />
                <Info/>
                <Footer />
              </>
            }
          />
          {/* <Route path="/#ai-search" element={<Forms/>} /> */}
          <Route
          path="/sign-in"
          element={<Login/>}
          />
          <Route
            path="/for/engineers"
            element={
              <>
                <Nav scrollTarget={scrollTarget}/>
                <Engineers />
                <EngIntro />
                <Counter/>
                <Info/>
                <Description />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* <IntroComp />
          
           */
}
