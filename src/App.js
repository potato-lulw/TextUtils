
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';



function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About" homePage= "Home"/>

      <div className="container my-3">
        <TextForm heading = "Enter your text below:" />
      </div>
    </>
  );
}

export default App;
