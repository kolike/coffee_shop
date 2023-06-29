import HeaderImg from '../../img/header_img.png';
import GirlCoffee from '../../img/girl_with_coffee.png';
import CoffeeBeans from '../../img/Group.svg';

import './app-info.css';

function AppInfo() {
  return (
    
    <div className="App">
      <div>
        <div  className="containered"><img src={HeaderImg} />
        <div className='centered super_title_text'>Our Coffee</div>
        </div>
        <div className="container-fluid">
            <div className='row'>
            <div className='col'></div>
                <div className='col'>
        <img src={GirlCoffee} className='girl'/>
        </div>
       <div className='col'>
        <div className='title_text'>About our beans</div>
        <div className='container'>
            <div className='row'>
            <div className='col'>
        <div className='create_line'></div>
        </div> 
        <div className='col'>
        <img src={CoffeeBeans} className='coffee_beans'/>
        </div> 
        <div className='col'>
        <div className='create_line'></div>
        </div>
        </div>
        </div>
        
<div className='text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
<p>
Afraid at highly months do things on at. Situation recommend objection do intention
so questions. </p>
<p>
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.</p></div>
</div>
<div className='col'></div>
</div>
</div>

      
    </div>
    <div className='create-bottom-line'></div>
    </div>

    

  );
}

export default AppInfo;

