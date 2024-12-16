import {useState} from "react"
import './App.css';
import studentDetail from "./component/data.json"
import DisplayList from './component/DisplayList';
import StudentForm from "./component/StudentForm";
import {Provider} from "react-redux";
import store from "./store";

import {themeContext} from "./component/Account";
function App() {
  const [theme ,setTheme] = useState("dark");
  const [toggle,setToggle] = useState(true);
  return (
    <div className="App" >
      <h1>Welcome to DashBoard</h1>
      <themeContext.Provider value ={{theme ,setToggle,setTheme}} >
      <Provider store={store}>
      <StudentForm  />
      <DisplayList  />
      </Provider>
      </themeContext.Provider>
      
    </div>
  );
}

export default App;
