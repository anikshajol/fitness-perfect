import "./App.css";
import Blog from "./Components/Blogs/Blog";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Main></Main>
      <Blog></Blog>
    </div>
  );
}

export default App;
