import Charts from './components/Charts';
import PieChart from './components/PieChart'
import StackedChart from './components/StackedCharts';
import DualAxis from './components/Dualaxis';
import { useState } from 'react';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  return (
    <div className='App'>
    <div className='button-container'>
      <button onClick={() => setActiveComponent('charts')}>Charts</button>
      <button onClick={() => setActiveComponent('pieChart')}>Pie Chart</button>
        <button onClick={() => setActiveComponent('stackedChart')}>Stacked Chart</button>
        <button onClick={() => setActiveComponent('DualAxis')}>Dual Axis</button>
    </div>
      <div className="component-container">
        {activeComponent === 'charts' && <Charts />}
        {activeComponent === 'pieChart' && <PieChart />}
        {activeComponent === 'stackedChart' && <StackedChart />}
        {activeComponent === 'DualAxis' && <DualAxis />}
      </div>
    </div>
  );
}

export default App;
