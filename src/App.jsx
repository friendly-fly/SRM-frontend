import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing"
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
