import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Spiritual from "./pages/Spiritual";
import Support from "./pages/Support";

function App() {
  return (
    // <div className="main">
    //   <Sidebar />
    //   <div className="container">
    //     <Home />
    //     {/* <h1 className="title">My React App</h1> */}
    //     {/* <p className="info">Hello</p> */}
    //     {/* <button className="btn">Explore now</button> */}
    //   </div>
    // </div>
    <>
      <Router>
        <div className="main">
          <Sidebar />
          <div className="container">
            <Switch>
              <Route path="/" Component={Home} />
              <Route path="/spiritual" Component={Spiritual} />
              <Route path="/support" Component={Support} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
