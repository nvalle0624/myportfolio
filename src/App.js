import "./App.css";
import Home from "./components/home/Home";
import AboutMe from "./components/about_page/AboutMe";
import ContactForm from "./components/contact_page/Contact";
import Work from "./components/work/Work";
import Resume from "./components/resume/Resume";
import Navigation from "./components/navigation/Navigation";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={ContactForm} />
      <Route path="/projects" component={Work} />
      <Route path="/resume" component={Resume} />
    </div>
  );
}

export default App;
