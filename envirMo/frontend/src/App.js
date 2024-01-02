import './App.css';
import Chart from './components/chart/Chart.jsx';
import Table from './components/table/Table.jsx';
import Header from './components/header/Header.jsx';
import HourlyCard from './components/hourlyCard/HourlyCard.jsx';
// import Content from './components/content/Content.jsx';
import Footer from './components/footer/Footer.jsx';
import ParentContent from './components/parent_content/ParentContent.jsx'

function App() {
  return (
    <div className="App">
      <div className='App_header'>
        <Header />
      </div>
      <ParentContent/>
      <Footer/>
    </div>
  );
}

export default App;
