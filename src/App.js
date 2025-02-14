import { useState } from "react";
import Charts from "./components/Charts";
import PieChart from "./components/PieChart";
import StackedChart from "./components/StackedCharts";
import DualAxis from "./components/Dualaxis";
import MarimekkoChart from "./components/MarimekkoChart";
import NegativeValue from "./components/NagativeValue";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("charts");

  const handleHomeClick = () => {
    setCurrentView("charts");
  };

  return (
    <div className="App">
      {/* Label Fusion Charts at the top */}
      <div>
        Fusion Charts
      </div>

      <div className="sidebar">
        <h3 className="sidebar-heading">MENU</h3>
        <ul>
          <li onClick={handleHomeClick}>Home</li>
        </ul>
      </div>

      <div className="content">
        {currentView === "charts" && (
          <div className="grid-container">
            <div className="grid-item">
              <Charts />
            </div>

            <div className="grid-item">
              <PieChart />
            </div>

            <div className="grid-item">
              <StackedChart />
            </div>

            <div className="grid-item">
              <DualAxis />
            </div>

            <div className="grid-item">
              <MarimekkoChart />
            </div>

            <div className="grid-item">
              <NegativeValue />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
