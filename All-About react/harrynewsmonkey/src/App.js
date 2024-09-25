// import { Route, Router } from "react-router-dom";
// import "./App.css";
// import Navbarbut from "./Components/Navbar";
// import News from "./Components/News";



// function App() {
//   return (
//     <div>
//      <Router>
//       <Navbarbut />
//       <News />
// <switch>
// <Route path="/">

// </Route>

// </switch>

//       </Router>
      
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Navbarbut from "./Components/Navbar";
import News from "./Components/News";

function App() {
  return (
    <Router>
      <div>
        <Navbarbut />
        <Routes>
          <Route path="/" exact component={News} />
          <Route path="/business" component={() => <News category="business" />} />
          <Route path="/entertainment" component={() => <News category="entertainment" />} />
          <Route path="/general" component={() => <News category="general" />} />
          <Route path="/health" component={() => <News category="health" />} />
          <Route path="/science" component={() => <News category="science" />} />
          <Route path="/sports" component={() => <News category="sports" />} />
          <Route path="/technology" component={() => <News category="technology" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

