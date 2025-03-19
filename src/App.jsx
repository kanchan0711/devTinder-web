import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Navbar from './Navbar'
import Login from "./Login"
import { Provider } from 'react-redux'
import store from '../utils/appStore'
import Feed from './Feed'

function App() {

  return (
    <div>
      <Provider store={store}> 
     <BrowserRouter basename='/'>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path = '/feed' element= {<Feed/>}/>
        </Route>
     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  )
}

export default App



