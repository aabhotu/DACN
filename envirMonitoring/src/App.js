import './App.css';
import Chart from './components/chart/Chart.jsx';
import Table from './components/table/Table.jsx';

function App() {
  return (
    <div className="App">
      <h2>QUAN TRẮC MÔI TRƯỜNG</h2>
      <div className='body'>
        <Chart/>
        <Table/>
      </div>
    </div>
  );
}

export default App;
