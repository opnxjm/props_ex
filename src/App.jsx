// import logo from './logo.svg';
import './App.css';
import "./style/Card.css";
import Card from "./components/Card";
function App() {
  const users={
    name: "tn",
    job: "student",
    hobby: "sleeping"
  }
  return (
    <div className="App">
      <Card users = {users} />
    </div>
  );
}

export default App;
