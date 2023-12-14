import "../src/css/App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App container-fluid ">
          <Header />
          <Body />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
