import "./App.css";
import MainMenu from "./MainMenu";
import "./SideBar";
import SideBar from "./SideBar";
import "./RightBar";
import RightBar from "./RightBar";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <SideBar />
      <MainMenu />
      <RightBar />
    </div>
  );
}

export default App;
