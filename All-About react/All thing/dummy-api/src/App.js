
import './App.css';

import ConstructorLife from './Components/ConstructorLifeCycle/ConstructorLife';
import ControlCom from './Components/ControlComponents/ControlCom';
import Fetch from './Components/Fetchapi/Fetch';
import Formsubmit from './Components/Form-submit/Form-submit';
import Formvalidation from './Components/FormValidation/Formvalidation';
import GetApi from './Components/GetApi/GetApi';
import HooksUsestate from './Components/HOOKS/HooksUsestate';
import Hookuseeffect from './Components/HOOKS/Hookuseeffect';
import UseRef2exmp from './Components/HOOKS/UseRef2exmp';
import Usememohooks from './Components/HOOKS/Usememohooks';
import Userefhooks from './Components/HOOKS/Userefhooks';
import Hideshow from './Components/Hide-show-button/Hide-show';
import Liftingstate from './Components/LiftingState/Liftingstate';
import MapFunction from './Components/MapFunction/MapFunction';
import NestedArray from './Components/NestedArray/NestedArray';
import NestedRouting from './Components/NestedRouting/NestedRouting';
import PassFuntionProps from './Components/PassFuntionProps/PassFuntionProps';
import Protectedlog from './Components/ProtectedRouting/Protectedlog';
import ReUseComp from './Components/ReUseComponente/ReUseComp';
import Routing from './Components/Routing/Routing';
import Apple from './Components/Triying/Apple';
import Uncontrolcom from './Components/UncontrollComponenets/Uncontrolcom';
import Bgchanger from './Components/bg-changer/Bg-changer';
import Input1 from './Components/inputboxes/Input1';
import Local from './Components/local/Local';

function App() {

function  getData() 
{
  alert("hello from app")
}


  return (
    <div >
       <Fetch/>
<Input1/>
<Hideshow/>
<br/>
<br/>
<Formsubmit/>
<Formvalidation/>
<br/>
<PassFuntionProps  data={getData}/>
<br/>
<h1>start</h1>
<ConstructorLife/>
<h1>END</h1>
<br/>
<HooksUsestate/>

<Hookuseeffect/>

<MapFunction/>

<NestedArray/>
<br/>
<ReUseComp/>


{/* <Apple/> */}
<Liftingstate/>


<Usememohooks/>
<Userefhooks/>
<UseRef2exmp/>

<ControlCom/>
<Uncontrolcom/>
<Bgchanger/>

<Routing/>

<br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<Local/>
<h1> this is nested  routing</h1>
<p> routing  ka  ander  routing  ke  nested  routing  khta  ha </p>
<NestedRouting/> 


<Protectedlog/>

<GetApi/>
    </div> 
  );
}

export default App;
