import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import './App.css'
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


interface AlertState {
  msg: string;
  type: string;
}

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState<AlertState | null>(null);

  const showAlert = (message: string, type: string) => {
    setAlert({
      msg: message,
      // type: type
      type //both work
      // or simply type works too
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2a3d52';
      showAlert('Dark Mode has been enabled.', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert('Light Mode has been enabled.', 'success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* Alert */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze." mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
