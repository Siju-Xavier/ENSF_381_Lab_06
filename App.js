import logo from './logo.svg';
import './App.css';
import About from './About.js';
import Home from './Home.js';
import Contact from './Contact.js';
import EngineeringTopics from './EngineeringTopics.js';

function getDate(){
  let date= new Date()
  let currentYear = date.getFullYear()
  return currentYear
}
function MyComponent(isLoggedIn) {
  return isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in.</p>;
}

function App() {
  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development”</h1>
      <p>React Components.</p>
      <p>{getDate()}</p>
      <p>{MyComponent}</p>
      <Home title="Home Page" description="Welcome to our Website"></Home>
      <About title="About Us" description="We are passionate about delivering quality experiences"></About>
      <Contact title="Contact Us" description="Feel free to reach out to us via email or phone"></Contact>
      <EngineeringTopics></EngineeringTopics>
    </div>
  );
}

export default App;
