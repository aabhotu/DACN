import './App.css';
import Chart from './components/chart/Chart.jsx';
import Table from './components/table/Table.jsx';
import Header from './components/header/Header.jsx';
import HourlyCard from './components/hourlyCard/HourlyCard.jsx';
import Content from './components/content/Content.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <div className='App_header'>
        <Header />
      </div>
      <HourlyCard/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
