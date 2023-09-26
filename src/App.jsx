import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing"
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element = {<Register/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
