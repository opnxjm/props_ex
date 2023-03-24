// import logo from './logo.svg';
import './App.css';
import "./style/Card.css";
// import Card from "./components/Card"; 
import List from './components/List';
import TypeMe from './components/TypeMe';
import Myform from './components/MyForm';
function App() {
  const users=[{name: "tn",job: "student",hobby: "sleeping"},{name: "kay",job: "student",hobby: "sleeping"},{name: "earn",job: "student",hobby: "sleeping"}];
  return (
    <div className="App">
      <List users = {users} />
      <TypeMe></TypeMe>
      <Myform/>
    </div>
  );
}

export default App;
