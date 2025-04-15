import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import CustomCard from './components/CustomCard/CustomCard'

import HomePage from './pages/HomePage/HomePage'
import FilterPage from './pages/FilterPage/FilterPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'

const App = () => {

  return (
    <>
       <BrowserRouter>
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/filter/:genero' element={<FilterPage></FilterPage>}/>
        <Route path='/details/:id' element={<DetailsPage></DetailsPage>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
