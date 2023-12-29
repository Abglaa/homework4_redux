import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import FormPage from './pages/FormPage'
import DataPage from './pages/DataPage'

function App() {

  return (
    <BrowserRouter>
    <ul className='page'>
      <li>
        <Link to="/" >Form page</Link>
      </li>
      <li>
        <Link to="data" >Data page</Link>
      </li>
    </ul>
      <Routes>
        <Route path='/' element={<FormPage/>} />
        <Route path="data" element={<DataPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
