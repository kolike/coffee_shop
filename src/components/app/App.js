import './App.css';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import AppSearch from '../app-search/app-search';
import CoffeeListItem from '../coffee-list-item/coffee-list-item'
import CoffeeList from '../coffee-list/coffee-list'


function App() {
  return (
    <div className='app'> 

    <AppInfo />
    <div className='container'>
      <div className='row'>
        <div className='col'>
    <AppSearch/></div>
    <div className='col'>
    <AppFilter/>
    </div>
    </div>
    </div>

    <CoffeeListItem />
    <CoffeeList />
    </div>

  );
}

export default App;

