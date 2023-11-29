import "../css/App.css";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="App container-fluid ">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
