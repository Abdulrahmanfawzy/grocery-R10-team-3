import Autho from '../src/components/autho/Autho'
import Account from '../src/components/account/Account'
import {BrowserRouter,Routes,Route} from'react-router-dom'
import Choose from '../src/components/choose/Choose'
import Recovery from '../src/components/recovery/Recovery'
const App = () => {
  return(
  <BrowserRouter>


   
    <Routes>
      <Route path='/' element={<Autho/>}/>
      <Route path='/account' element={<Account/>}/>

     <Route path='/Choose' element={<Choose/>}/>
 

<Route path='/Recovery' element={<Recovery/>}/>

      </Routes>
   

</BrowserRouter>

  )
};

export default App;
