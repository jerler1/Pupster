import{BrowserRouter as Router, Route} from "react-router-dom";
import About from "./containers/About/About";
import Discover from "./containers/Discover/Discover";
import Search from "./containers/Search/Search";
import NavBar from "./components/NavBar/NavBar"
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Router>
        <NavBar/>
        <Route exact path="/" component={About}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/discover" component={Discover}/>
        <Route exact path="/search" component={Search}/>
      </Router>
    </div>
  );
}
export default App;