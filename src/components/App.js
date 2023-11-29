import "../css/App.css";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Body />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
