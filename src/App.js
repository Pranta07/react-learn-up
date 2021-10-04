import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./componenets/Home/Home";
import Courses from "./componenets/Courses/Courses";
import About from "./componenets/About/About";
import NotFound from "./componenets/NotFound/NotFound";
import Tutorials from "./componenets/Tutorials/Tutorials";
import Header from "./componenets/Header/Header";
import Footer from "./componenets/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/courses">
                        <Courses></Courses>
                    </Route>
                    <Route exact path="/tutorials">
                        <Tutorials></Tutorials>
                    </Route>
                    <Route exact path="/about">
                        <About></About>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
