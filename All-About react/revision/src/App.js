
import './App.css';
import Background from './Components/Background';
import Delete from './Components/Delete';
import Fetch from './Components/Fetch';
import Hideshow from './Components/Hideshow';
import IntroForm from './Components/IntroForm';
import IntroProps from './Components/IntroProps';
import IntrorUsestate from './Components/IntrorUsestate';
import Postmethod from './Components/Postmethod';
import Updata from './Components/Updata-edit';
// import Homecontainer from './REDUX_REVISION/Container/Homecontainer';

// // import User from './REDUX_REVISION/User';
// import Weather from "../src/Components/wheter/Weather"


function App() {
  return (
    <div >
      <p>use  of  useState</p>
      <IntrorUsestate/>
      <hr/>
      <IntroProps name="anjum"/>
      <hr/>
      <IntroForm/>
      <hr/>
      <Hideshow/>
      <hr/>
      <Fetch/>
      <hr/>
      <Postmethod/>
<hr/>
<Delete/>
<hr/>
<Updata/>
<hr/>
<hr/>
<Background/>
<hr/>
{/* <Weather/> */}
<hr/>
<hr/>
{/* <h1>Starting  of  react  redux</h1>
<Homecontainer/>

<h1>end  of  react  redux</h1> */}
    </div>
  );
}

export default App;
