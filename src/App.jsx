import { Route, Routes } from 'react-router-dom'
import Home from './Container/Home'
import Card from './Container/Card'
import DataState from './Context/DataState'

const App = () => {
  return (
    <div className=''>
      <DataState>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/card/:id' element={<Card />} />
        </Routes>
      </DataState>
    </div>
  )
}

export default App