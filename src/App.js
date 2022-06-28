import Info from "./Components/Info";
import About from "./Components/About";
import Interest from "./Components/Interest";
import Footer from "./Components/Footer";
import "./App.css";
function App() {
  return (
    <div className="namecard">
      <div className="container">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
export default App;
