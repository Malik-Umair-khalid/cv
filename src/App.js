import logo from './logo.svg';
import './App.css';
import object from './functions/func';
import {experience , education , personalInfo} from './functions/allfunc'
function App() {
  return (
  <>
  <div className= "main">
    <h1 className = "text-centre">CV</h1>
    {object()}
    {personalInfo()}
    {education()}
    {experience()}
  </div>
  </>
  );
}

export default App;
